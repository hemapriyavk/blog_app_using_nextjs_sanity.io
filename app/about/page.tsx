import { Header } from "../components/Header";
import { Footer } from "../components/Footer";

export default function AboutPage() {
  return (
    <>
      <Header />
      <main className="bg-white min-h-screen">
        <div className="max-w-2xl mx-auto px-4 py-12">
          <h1 className="text-4xl font-bold mb-8 text-gray-700">About Medium Clone</h1>

          <div className="prose prose-lg max-w-2xl">
            <p className="text-gray-700 mb-6">
              Medium Clone is a modern blogging platform built with Next.js 16, React 19, and Sanity.io CMS.
              It combines the best practices of modern web development with a beautiful, user-friendly interface.
            </p>

            <h2 className="text-2xl font-bold mt-8 mb-4">Features</h2>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>Fast, performant blog platform</li>
              <li>Headless CMS integration with Sanity</li>
              <li>Rich text editing capabilities</li>
              <li>Author profiles and management</li>
              <li>Category organization</li>
              <li>Featured articles section</li>
              <li>Responsive design for all devices</li>
              <li>SEO optimized</li>
            </ul>

            <h2 className="text-2xl font-bold mt-8 mb-4">Technology Stack</h2>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>Next.js 16 - React framework</li>
              <li>React 19 - UI library</li>
              <li>TypeScript - Type safety</li>
              <li>Tailwind CSS - Styling</li>
              <li>Sanity.io - Headless CMS</li>
              <li>Portable Text - Rich text content</li>
            </ul>

            <h2 className="text-2xl font-bold mt-8 mb-4">Getting Started</h2>
            <p className="text-gray-700 mb-4">
              To get started with Medium Clone:
            </p>
            <ol className="list-decimal list-inside text-gray-700 space-y-2">
              <li>Create an account on Sanity.io</li>
              <li>Update your environment variables</li>
              <li>Deploy Sanity Studio</li>
              <li>Start creating content</li>
            </ol>

            <h2 className="text-2xl font-bold mt-8 mb-4">Contact</h2>
            <p className="text-gray-700">
              Have questions or feedback? Feel free to reach out to us.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
