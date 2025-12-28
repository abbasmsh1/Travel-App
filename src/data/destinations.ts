export interface Destination {
  name: string
  description: string
  fullDescription: string
  image: string
  location: string
  category: string
  bestTimeToVisit: string
  duration: string
  highlights: string[]
  gallery: string[]
  sceneType?: 'mountains' | 'snow' | 'valley' | 'historical'
  sketchfabUrl?: string
}

export const destinationsData: Record<string, Destination> = {
  'hunza-valley': {
    name: 'Hunza Valley',
    description: 'Experience the majestic Karakoram mountains and ancient watchtowers.',
    fullDescription: `
      Nestled in the heart of the Karakoram Range, Hunza Valley is a paradise on Earth. Known for its 
      stunning natural beauty, ancient watchtowers, and rich cultural heritage, this region offers 
      visitors an unforgettable experience.

      The valley is home to several historical sites, including the ancient Baltit Fort and Altit Fort, 
      which offer panoramic views of the surrounding mountains. During spring, the valley is covered in 
      pink and white apple blossoms, creating a magical atmosphere.
    `,
    image: 'https://images.unsplash.com/photo-1646514323421-094bb563cd37?q=80&w=1200',
    location: 'Gilgit-Baltistan',
    category: 'Mountains',
    bestTimeToVisit: 'March to October',
    duration: '5-7 days recommended',
    highlights: [
      'Visit the historic Baltit Fort',
      "Trek to Eagle's Nest for panoramic views",
      'Experience local Hunza culture and cuisine',
      'See the confluence of three mighty mountain ranges',
      'Visit ancient rock carvings along the Silk Road'
    ],
    gallery: [
      'https://images.unsplash.com/photo-1646514323421-094bb563cd37?q=80&w=800',
      'https://images.unsplash.com/photo-1632133915653-8ded5c72e329?q=80&w=800'
    ],
    sceneType: 'mountains'
  },
  'fairy-meadows': {
    name: 'Fairy Meadows',
    description: 'A magical grassland with breathtaking views of Nanga Parbat.',
    fullDescription: `
      Fairy Meadows, named by German climbers, is a legendary grassland located at the base of Nanga Parbat. 
      It is considered one of the most beautiful camping sites in the world, offering an unparalleled view of 
      the "Killer Mountain".

      Accessible via a thrilling jeep ride and a short hike, it is a haven for nature lovers and photographers.
      The reflection of Nanga Parbat in the calm waters of the reflection lake is a sight to behold.
    `,
    image: 'https://images.unsplash.com/photo-1691077015817-64ee69ec020c?auto=format&fit=crop&w=1200',
    location: 'Gilgit-Baltistan',
    category: 'Nature',
    bestTimeToVisit: 'June to September',
    duration: '3-4 days recommended',
    highlights: [
      'Camping under the stars with Nanga Parbat view',
      'Hike to Nanga Parbat Base Camp',
      'Jeep safari on one of the most dangerous roads',
      'Photography at Reflection Lake'
    ],
    gallery: [
      'https://images.unsplash.com/photo-1691077015817-64ee69ec020c?auto=format&fit=crop&w=800',
      'https://images.unsplash.com/photo-1657122067013-4c44bbed9861?auto=format&fit=crop&w=800',
      'https://images.unsplash.com/photo-1664872772950-548bc7bfdf32?auto=format&fit=crop&w=800'
    ],
    sketchfabUrl: 'https://sketchfab.com/models/ec4cef3149c94d1393f6e13e0e1145c9/embed'
  },
  'badshahi-mosque': {
    name: 'Badshahi Mosque',
    description: 'Visit the iconic Mughal-era mosque in the heart of Lahore.',
    fullDescription: `
      The Badshahi Mosque, built in 1671, is one of the most iconic landmarks of Pakistan. This 
      masterpiece of Mughal architecture represents the grandeur and beauty of Islamic architecture 
      during the Mughal period.

      The mosque's massive courtyard can accommodate up to 100,000 worshippers.
    `,
    image: 'https://images.unsplash.com/photo-1704604975545-2e1858348bc4?q=80&w=1200',
    location: 'Lahore',
    category: 'Historical',
    bestTimeToVisit: 'October to March',
    duration: '2-3 hours',
    highlights: [
      'Explore the massive courtyard',
      'Admire the intricate marble work',
      'Visit the mosque museum'
    ],
    gallery: [
      'https://images.unsplash.com/photo-1704604975545-2e1858348bc4?q=80&w=800',
      'https://images.unsplash.com/photo-1622546682708-30d819934274?q=80&w=800'
    ],
    sceneType: 'historical'
  },
  'swat-valley': {
    name: 'Swat Valley',
    description: 'Known as the Switzerland of the East, famous for its lush green valleys.',
    fullDescription: `
      Swat Valley is renowned for its outstanding natural beauty, snow-capped mountains, and lush green Alpine meadows.
      It has a rich history as a major center of early Buddhist thought and art.
    `,
    image: 'https://images.unsplash.com/photo-1696271581695-af909696da4f?auto=format&fit=crop&w=1200',
    location: 'Khyber Pakhtunkhwa',
    category: 'Valley',
    bestTimeToVisit: 'April to October',
    duration: '4-5 days',
    highlights: [
      'Malam Jabba Ski Resort',
      'Kalam Valley',
      'Mahodand Lake',
      'Buddhist Stupas'
    ],
    gallery: [
       'https://images.unsplash.com/photo-1696271581695-af909696da4f?auto=format&fit=crop&w=800',
       'https://images.unsplash.com/photo-1597350340158-6b2c2ff93a3e?auto=format&fit=crop&w=800',
       'https://images.unsplash.com/photo-1680020009117-911d3d3b4927?auto=format&fit=crop&w=800'
    ],
    sceneType: 'valley'
  },
  'kumrat-valley': {
    name: 'Kumrat Valley',
    description: 'A hidden gem known for its dense forests and crystal clear river.',
    fullDescription: `
      Kumrat Valley is located in the Upper Dir district. It is famous for its lush green pastures, snowy mountains, 
      the river Panjkora, foggy mounds, and forests.
    `,
    image: 'https://images.unsplash.com/photo-1628192803886-2580556e87f8?q=80&w=1200',
    location: 'Khyber Pakhtunkhwa',
    category: 'Valley',
    bestTimeToVisit: 'May to September',
    duration: '3-4 days',
    highlights: [
      'Panjkora River',
      'Wooden Canals',
      'Do Kala Chashma',
      'Jahaz Banda'
    ],
    gallery: [
      'https://images.unsplash.com/photo-1628192803886-2580556e87f8?q=80&w=800',
      'https://images.unsplash.com/photo-1596409849501-c0a0c441c9b6?auto=format&fit=crop&w=800'
    ],
    sceneType: 'valley'
  },
  'naran-kaghan': {
    name: 'Naran & Kaghan',
    description: 'One of the most popular tourist destinations, home to Saif-ul-Malook lake.',
    fullDescription: `
      The Naran and Kaghan valleys in the Mansehra District are famous for their scenic beauty. 
      Naran is the main center of tourism in the valley.
    `,
    image: 'https://images.unsplash.com/photo-1674488588884-24582f3c750b?q=80&w=1200',
    location: 'Khyber Pakhtunkhwa',
    category: 'Nature',
    bestTimeToVisit: 'May to September',
    duration: '3-4 days',
    highlights: [
      'Saif-ul-Malook Lake',
      'Lulusar Lake',
      'Babusar Top',
      'Rafting in Kunhar River'
    ],
    gallery: [
      'https://images.unsplash.com/photo-1674488588884-24582f3c750b?q=80&w=800',
      'https://images.unsplash.com/photo-1627896434440-c75c5q3683f1?auto=format&fit=crop&w=800'
    ],
    sceneType: 'mountains'
  },
  'malam-jabba': {
    name: 'Malam Jabba',
    description: 'The premier ski resort of Pakistan with stunning views.',
    fullDescription: `
      Malam Jabba is a Hill Station and ski resort in the Hindu Kush mountain range. 
      It offers skiing facilities and chairlifts with breathtaking views.
    `,
    image: 'https://images.unsplash.com/photo-1609675123793-9098950bf76e?auto=format&fit=crop&w=1200',
    location: 'Swat',
    category: 'Activity',
    bestTimeToVisit: 'December to March (for skiing)',
    duration: '2 days',
    highlights: [
      'Skiing',
      'Chairlift ride',
      'Zipline',
      'Green valley views'
    ],
    gallery: [
      'https://images.unsplash.com/photo-1609675123793-9098950bf76e?auto=format&fit=crop&w=800',
      'https://images.unsplash.com/photo-1609502800664-b092de52c7bb?auto=format&fit=crop&w=800',
      'https://images.unsplash.com/photo-1602046853144-314eb7bddd7b?auto=format&fit=crop&w=800'
    ],
    sceneType: 'snow'
  },
  'naltar-valley': {
    name: 'Naltar Valley',
    description: 'Famous for its colorful lakes and skiing facilities.',
    fullDescription: `
      Naltar is famous for its colorful lakes, it is situated at a drive of 2.5 hours from Gilgit. 
      The world's tastiest potatoes are cultivated here.
    `,
    image: 'https://images.unsplash.com/photo-1654115380392-318a2409c244?w=1200',
    location: 'Gilgit-Baltistan',
    category: 'Nature',
    bestTimeToVisit: 'June to September',
    duration: '2-3 days',
    highlights: [
      'Bashkiri Lakes',
      'Ski Slope',
      'Dense Forests'
    ],
    gallery: [
      'https://images.unsplash.com/photo-1654115380392-318a2409c244?w=800',
      'https://unsplash.com/photos/a-person-standing-on-a-mountain-Z9_nNbNyTxs',
      'https://images.unsplash.com/photo-1653163500778-9b8c368c9c2d?w=800'
    ],
    sceneType: 'valley'
  },
  'neelum-valley': {
    name: 'Neelum Valley (Kashmir)',
    description: 'The blue gem of Kashmir offering paradise-like scenery.',
    fullDescription: `
      Neelum Valley is a 144 km long bow-shaped thickly wooded region in Azad Kashmir. 
      It is excellent for its scenic beauty, panoramic views, towering hills on both sides of the noisy Neelum River.
    `,
    image: 'https://images.unsplash.com/photo-1596005553554-22b9a7c3664d?auto=format&fit=crop&w=1200',
    location: 'Azad Kashmir',
    category: 'Nature',
    bestTimeToVisit: 'April to October',
    duration: '4-5 days',
    highlights: [
      'Ratti Gali Lake',
      'Arang Kel',
      'Sharda Peeth',
      'Keran'
    ],
    gallery: [],
    sceneType: 'valley'
  }
}
