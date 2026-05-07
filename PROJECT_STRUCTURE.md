# Medium Clone - Complete Setup

A modern, fully-featured blogging platform built with Next.js 16, React 19, and Sanity.io.

## 🚀 Features

- **Fast & Performant** - Built with Next.js 16 for optimal speed
- **Headless CMS** - Powered by Sanity.io for flexible content management
- **Rich Text Editing** - Full rich text content with images and formatting
- **Author Profiles** - Dedicated pages for each author
- **Category Organization** - Browse posts by category
- **Featured Articles** - Highlight top stories on the homepage
- **Responsive Design** - Mobile-friendly interface
- **SEO Optimized** - Metadata and structured data support
- **Search Functionality** - Find posts by title or keywords
- **Beautiful UI** - Modern design with Tailwind CSS

## 📁 Project Structure

```
├── app/
│   ├── api/               # API routes (search, etc)
│   ├── components/        # Reusable UI components
│   │   ├── Header.tsx
│   │   ├── Footer.tsx
│   │   ├── PostCard.tsx
│   │   ├── AuthorCard.tsx
│   │   ├── CategoryBadge.tsx
│   │   ├── FeaturedPost.tsx
│   │   ├── PostBody.tsx
│   │   └── SearchBar.tsx
│   ├── hooks/            # Custom React hooks
│   │   ├── useScrollToTop.ts
│   │   └── useSearch.ts
│   ├── lib/              # Utility functions
│   │   ├── constants.ts
│   │   └── utils.ts
│   ├── posts/            # Post pages
│   │   ├── page.tsx      # All posts
│   │   └── [slug]/       # Individual post
│   ├── authors/          # Author pages
│   │   ├── page.tsx      # All authors
│   │   └── [slug]/       # Author profile
│   ├── categories/       # Category pages
│   │   ├── page.tsx      # All categories
│   │   └── [slug]/       # Category posts
│   ├── about/            # About page
│   ├── contact/          # Contact page
│   ├── page.tsx          # Homepage
│   ├── layout.tsx        # Root layout
│   └── globals.css       # Global styles
├── sanity/
│   ├── lib/
│   │   ├── client.ts     # Sanity client
│   │   ├── queries.ts    # GROQ queries
│   │   ├── image.ts      # Image utilities
│   │   └── portableText.ts # Rich text renderer
│   ├── schemaTypes/      # Content schemas
│   │   ├── post.ts
│   │   ├── author.ts
│   │   ├── category.ts
│   │   └── blockContent.ts
│   ├── types.ts          # TypeScript interfaces
│   └── config.ts         # Sanity config
├── .env.local            # Environment variables
├── sanity.config.ts      # Sanity Studio config
├── next.config.ts        # Next.js config
├── tailwind.config.ts    # Tailwind config
├── tsconfig.json         # TypeScript config
└── package.json          # Dependencies

```

## 🛠 Tech Stack

- **Frontend**
  - Next.js 16
  - React 19
  - TypeScript 5
  - Tailwind CSS 4
  - @tailwindcss/typography

- **CMS & Data**
  - Sanity.io
  - next-sanity
  - @portabletext/react
  - GROQ queries

- **Image Handling**
  - Next.js Image component
  - @sanity/image-url

## 📦 Installation & Setup

### 1. Prerequisites
- Node.js 18+ installed
- npm or yarn package manager
- Sanity.io account

### 2. Clone & Install
```bash
# Install dependencies
npm install
```

### 3. Environment Setup
Create a `.env.local` file with:
```env
NEXT_PUBLIC_SANITY_PROJECT_ID=your_project_id
NEXT_PUBLIC_SANITY_DATASET=production
```

### 4. Sanity Configuration
```bash
# Deploy Sanity Studio
npm run sanity:deploy

# Or run locally
npm run sanity:dev
```

### 5. Start Development
```bash
npm run dev
```

The app will be available at `http://localhost:3000`

## 📝 Pages & Routes

| Page | Route | Description |
|------|-------|-------------|
| Home | `/` | Homepage with featured posts |
| All Posts | `/posts` | Browse all published posts |
| Single Post | `/posts/[slug]` | Individual post view |
| Authors | `/authors` | All authors directory |
| Author Profile | `/authors/[slug]` | Author bio and articles |
| Categories | `/categories` | All post categories |
| Category Posts | `/categories/[slug]` | Posts in a category |
| About | `/about` | About the platform |
| Contact | `/contact` | Contact form |
| Search | `/api/search` | Search API |

## 🎨 Components

### Header
Navigation bar with links to main sections and subscribe button.

### Footer
Multi-column footer with navigation, resources, and legal links.

### PostCard
Displays post preview with image, title, author, and category badges.

### FeaturedPost
Large featured post component with overlay gradient and metadata.

### AuthorCard
Displays author profile with image, bio, and view posts button.

### PostBody
Rich text renderer for post content with images and formatted text.

## 🔍 Search API

Search across posts, authors, and categories:
```
GET /api/search?q=query_term
```

Returns JSON with matching posts, authors, and categories.

## 🚀 Deployment

### Deploy to Vercel
```bash
npm run build
vercel deploy
```

### Deploy Sanity Studio
```bash
npm run sanity:deploy
```

## 📚 Useful Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [Sanity.io Documentation](https://www.sanity.io/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [React Documentation](https://react.dev)

## 🤝 Contributing

Contributions are welcome! Feel free to submit issues and pull requests.

## 📄 License

This project is open source and available under the MIT License.

---

Built with ❤️ using Next.js, React, and Sanity
