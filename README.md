# Saffarlog - Travel Management Platform

A comprehensive travel management platform built with Next.js, TypeScript, Prisma, and PostgreSQL. The platform helps users discover destinations, plan trips, and manage travel-related content.

## Features

### User Features
- **User Authentication**
  - Secure login and registration
  - Profile management with customizable settings
  - Role-based access control (User/Admin)

- **Trip Planning**
  - Create and manage trips
  - Set trip dates and destinations
  - Add notes and preferences
  - Track trip history

- **Travel Discovery**
  - Browse destinations with detailed information
  - Explore attractions and activities
  - Find accommodations with amenities
  - View transportation options
  - Get climate and best time to visit information

- **Interactive Chat**
  - AI-powered travel assistant
  - Trip expense calculations
  - Travel recommendations

### Admin Features
- **Content Management**
  - Manage static page content (Home, Destinations, Contact)
  - Upload and manage background images
  - Create and edit content sections

- **Location Management**
  - Add and edit destinations
  - Set region and country information
  - Upload location images
  - Manage climate and visit timing details

- **Attraction Management**
  - Create and edit attractions
  - Set pricing and duration
  - Categorize attractions
  - Manage opening hours
  - Upload attraction images

- **Accommodation Management**
  - Add and edit accommodations
  - Set room types and pricing
  - List amenities
  - Manage contact information
  - Upload property images

- **Transportation Management**
  - Add transportation options
  - Set pricing and schedules
  - Define routes and availability
  - Manage service frequency

## Tech Stack

- **Frontend**
  - Next.js 14 (App Router)
  - TypeScript
  - Tailwind CSS
  - Framer Motion
  - Heroicons

- **Backend**
  - Next.js API Routes
  - Prisma ORM
  - PostgreSQL
  - JWT Authentication
  - Sharp (Image Processing)

- **Development**
  - ESLint
  - Prettier
  - TypeScript
  - Git

## Getting Started

### Prerequisites
- Node.js 18 or later
- PostgreSQL 12 or later
- npm or yarn

### Environment Setup
1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/saffarlog.git
   cd saffarlog
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Create a `.env` file in the root directory:
   ```env
   DATABASE_URL="postgresql://username:password@localhost:5432/saffarlog"
   JWT_SECRET="your-jwt-secret-key"
   ```

4. Set up the database:
   ```bash
   npx prisma migrate dev
   ```

5. Start the development server:
   ```bash
   npm run dev
   ```

### Initial Admin Setup
1. Register a new user account
2. Run the admin creation script:
   ```bash
   npx ts-node scripts/make-admin.ts
   ```

## Project Structure

```
saffarlog/
├── src/
│   ├── app/                 # Next.js app router pages
│   ├── components/          # React components
│   │   ├── admin/          # Admin panel components
│   │   └── ui/             # Reusable UI components
│   ├── lib/                # Utility functions and configurations
│   └── types/              # TypeScript type definitions
├── prisma/
│   ├── schema.prisma       # Database schema
│   └── migrations/         # Database migrations
├── public/                 # Static files
│   └── uploads/           # Uploaded images
└── scripts/               # Utility scripts
```

## Database Schema

### Core Models
- **User**: User accounts and profiles
- **Location**: Travel destinations
- **Attraction**: Tourist attractions and activities
- **Accommodation**: Hotels and lodging options
- **Transportation**: Travel methods and schedules
- **Trip**: User trip plans
- **ChatHistory**: User interactions with AI assistant
- **PageContent**: Static page content

## API Routes

### Public Routes
- `POST /api/auth/login`
- `POST /api/auth/register`
- `GET /api/locations`
- `GET /api/attractions`
- `GET /api/accommodations`
- `GET /api/transportations`

### Protected Routes
- `GET /api/user/profile`
- `PATCH /api/user/profile`
- `GET /api/trips`
- `POST /api/trips`

### Admin Routes
- `GET/POST/PUT /api/admin/locations`
- `GET/POST/PUT /api/admin/attractions`
- `GET/POST/PUT /api/admin/accommodations`
- `GET/POST/PUT /api/admin/transportations`
- `GET/POST/PUT /api/admin/pages`
- `POST /api/admin/upload-image`

## Contributing

1. Fork the repository
2. Create a feature branch
3. Commit your changes
4. Push to the branch
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Support

For support, email support@saffarlog.com or create an issue in the repository.

## Acknowledgments

- Next.js team for the amazing framework
- Prisma team for the excellent ORM
- Tailwind CSS team for the utility-first CSS framework
- All contributors and users of the platform 