# LearnHub - Modern Learning Platform

A full-stack learning platform built with Next.js and NestJS, featuring course management, real-time chat, progress tracking, and more.

## Features

- 📚 Course Management
- 💬 Real-time Chat
- 📝 Notes System
- 📊 Progress Tracking
- 🎓 Certification System
- 👥 User Profiles
- 📱 Responsive Design

## Tech Stack

### Frontend
- Next.js
- TypeScript
- Tailwind CSS
- Headless UI
- Heroicons

### Backend
- NestJS
- MongoDB
- JWT Authentication
- WebSockets

## Getting Started

### Prerequisites
- Node.js 16+
- MongoDB
- npm or yarn

### Installation

1. Clone the repository
```bash
git clone https://github.com/your-username/learnhub.git
cd learnhub
```

2. Install backend dependencies
```bash
npm install
```

3. Install frontend dependencies
```bash
cd frontend
npm install
```

4. Create a .env file in the root directory
```env
DATABASE_URL=your_mongodb_url
JWT_SECRET=your_jwt_secret
```

5. Start the development servers

Backend:
```bash
npm run start:dev
```

Frontend:
```bash
cd frontend
npm run dev
```

## Project Structure

```
├── frontend/               # Next.js frontend
│   ├── src/
│   │   ├── components/    # Reusable components
│   │   ├── pages/        # Next.js pages
│   │   ├── services/     # API services
│   │   └── types/        # TypeScript types
│   └── public/           # Static files
│
└── src/                   # NestJS backend
    ├── auth/             # Authentication
    ├── courses/          # Course management
    ├── chat/             # Chat system
    ├── users/            # User management
    └── shared/           # Shared utilities
```

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details

## Path Configuration

This project uses path aliases for cleaner imports. The configuration is already set up in the tsconfig.json files, but if you're getting module resolution errors, make sure:

1. Your IDE/editor recognizes the path aliases
2. The TypeScript configuration is properly loaded
3. For VS Code users, you might need to:
   - Use the workspace version of TypeScript
   - Reload the TypeScript server
   - Restart VS Code

Common solutions for path resolution issues:
```bash
# Clear TypeScript cache
rm -rf node_modules/.cache

# Reinstall dependencies
rm -rf node_modules
npm install

# For the frontend
cd frontend
rm -rf node_modules
npm install
```
