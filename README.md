# Blog Post Website

This is a full-featured blog post website built with Next.js, Prisma, and SQLite. The application allows users to sign up using their GitHub accounts, create blog posts, comment on posts, and reply to comments.

## Features

- **GitHub Authentication**: Users can sign up and log in using their GitHub accounts.
- **Create Posts**: Authenticated users can create, edit, and delete their own blog posts.
- **Comment System**: Users can comment on blog posts.
- **Comment Replies**: Users can reply to comments, facilitating discussions.
- **Responsive Design**: The website is fully responsive and optimized for mobile devices.

## Tech Stack

- **Next.js**: A React framework for building fast and user-friendly web applications.
- **Prisma**: An ORM (Object-Relational Mapping) tool for working with databases.
- **SQLite**: A lightweight, file-based SQL database.
- **NextAuth.js**: Authentication for Next.js applications.
- **Tailwind CSS**: A utility-first CSS framework for styling.

## Getting Started

### Prerequisites

Ensure you have the following installed:

- Node.js (v16 or later)
- npm or yarn
- A GitHub account

### Installation

1. **Clone the repository**:

   ```bash
   git clone https://github.com/UzairKhan313/next-js-discuss.git
   cd next-js-discuss
   ```

2. **Provied the Following Environment Vairable in .evn file**:

   ```bash
   DATABASE_URL="file:./dev.db"
   GITHUB_CLIENT_ID="your_github_client_id"
   GITHUB_CLIENT_SECRET="your_github_client_secret"
   AUTH_SECRET="some secret value"
   ```

3. **Install All The Dependencies**:

   ```bash
   npm install
   ```

4. **Setup data base**:

   ```bash
   npx prisma init --datasource-provide sqlite
   npx prisma  migrate dev

   name the migrate just "init"
   ```

5. **Run The Development Server**:
   ```bash
   npm run dev
   ```

### Project Structure

/pages: Contains all the Next.js pages.
/prisma: Prisma schema and migration files.
/components: Reusable UI components.
/styles: Global and component-specific styles.
