import { NextResponse } from 'next/server'
import { Resend } from 'resend'
import { createClient } from '@/lib/supabase/server'

export async function POST(request: Request) {
  try {
    const { name, email, subject, message } = await request.json()

    // 1. Validation
    if (!name || !email || !subject || !message) {
      return NextResponse.json({ error: 'All fields are required' }, { status: 400 })
    }

    // 2. Store in Supabase
    const supabase = createClient()
    let submissionId = null
    
    if (supabase) {
      try {
        const { data, error: dbError } = await supabase
          .from('contact_submissions')
          .insert([{ name, email, subject, message, status: 'pending' }])
          .select()
        
        if (dbError) {
          console.error('Database insertion error:', dbError.message)
        } else if (data && data.length > 0) {
          submissionId = data[0].id
        }
      } catch (dbCatch) {
        console.error('Supabase catch error:', dbCatch)
      }
    }

    // 3. Send Email via Resend
    const resendKey = process.env.RESEND_API_KEY
    if (resendKey) {
      try {
        const resend = new Resend(resendKey)
        const { error: emailError } = await resend.emails.send({
          from: 'Saffarlog Contact <onboarding@resend.dev>',
          to: 'saffarlog@gmail.com',
          subject: `Contact Form: ${subject}`,
          reply_to: email,
          html: `
            <div style="font-family: sans-serif; padding: 20px; color: #333;">
              <h2 style="color: #0ea5e9;">New Contact Form Submission</h2>
              <p><strong>From:</strong> ${name} (&lt;${email}&gt;)</p>
              <p><strong>Subject:</strong> ${subject}</p>
              <div style="margin-top: 20px; padding: 15px; background-color: #f8fafc; border-left: 4px solid #0ea5e9; border-radius: 4px;">
                <p style="white-space: pre-wrap;">${message}</p>
              </div>
              <hr style="margin-top: 30px; border: 0; border-top: 1px solid #e2e8f0;" />
              <p style="font-size: 12px; color: #64748b;">This message was sent from the Saffarlog Travel App contact form.</p>
            </div>
          `
        })

        if (!emailError && supabase && submissionId) {
           await supabase
            .from('contact_submissions')
            .update({ status: 'sent' })
            .eq('id', submissionId)
        } else if (emailError) {
          console.error('Resend specific error:', emailError)
        }

      } catch (emailError) {
        console.error('Email sending catch error:', emailError)
      }
    } else {
      console.warn('RESEND_API_KEY missing. Only database record attempted.')
    }

    return NextResponse.json({ success: true })

  } catch (error: any) {
    console.error('Contact API Internal Error:', error)
    return NextResponse.json({ 
      error: 'Message received but delivery configuration is incomplete.',
      details: error.message 
    }, { status: 500 })
  }
}
