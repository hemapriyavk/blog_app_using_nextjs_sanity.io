export const SITE_CONFIG = {
  siteName: "Medium Clone",
  description: "A modern blogging platform built with Next.js and Sanity",
  url: process.env.NEXT_PUBLIC_URL || "http://localhost:3000",
  author: "Medium Clone Team",
  email: "contact@mediumclone.com",
  social: {
    twitter: "@mediumclone",
    github: "mediumclone",
  },
};

export const CATEGORIES = {
  technology: "Technology",
  business: "Business",
  design: "Design",
  lifestyle: "Lifestyle",
  health: "Health",
  education: "Education",
};

export const PAGINATION = {
  postsPerPage: 12,
  authorsPerPage: 9,
  categoriesPerPage: 9,
};
