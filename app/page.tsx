import { getPosts } from "@/sanity/lib/queries";
import { FeaturedPost } from "./components/FeaturedPost";
import { PostCard } from "./components/PostCard";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import Link from "next/link";

export default async function HomePage() {
  const posts = await getPosts();
  const featured = posts[0];
  const recent = posts.slice(1, 4);
  const allPosts = posts.slice(4);

  return (
    <>
      <Header />
      <main className="bg-white">
        {/* Hero Section */}
        <section className="max-w-7xl mx-auto px-4 py-16">
          <div className="text-center mb-12">
            <h1 className="text-5xl md:text-6xl font-bold mb-4 text-gray-700">
              Welcome to Medium Clone
            </h1>
            <p className="text-xl text-gray-800 mb-8">
              Discover great stories, ideas, and perspectives from writers around the world
            </p>
            <Link href="/posts">
              <button className="px-8 py-3 bg-black text-white rounded-lg hover:bg-gray-800 transition-colors">
                Start Reading
              </button>
            </Link>
          </div>
        </section>

        {/* Featured Post */}
        {featured && (
          <section className="max-w-7xl mx-auto px-4 mb-16">
            <div className="mb-4">
              <h2 className="text-3xl font-bold text-gray-700">Featured</h2>
            </div>
            <FeaturedPost post={featured} />
          </section>
        )}

        {/* Recent Posts */}
        {recent.length > 0 && (
          <section className="max-w-7xl mx-auto px-4 mb-16">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-3xl font-bold text-gray-700">Recent Posts</h2>
              <Link href="/posts" className="text-blue-500 hover:text-blue-600">
                View all →
              </Link>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {recent.map((post: any) => (
                <PostCard key={post._id} post={post} />
              ))}
            </div>
          </section>
        )}

        {/* All Posts */}
        {allPosts.length > 0 && (
          <section className="max-w-7xl mx-auto px-4 mb-16">
            <h2 className="text-3xl font-bold mb-8 text-gray-700">More Stories</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {allPosts.map((post: any) => (
                <PostCard key={post._id} post={post} />
              ))}
            </div>
          </section>
        )}

        {/* Empty State */}
        {posts.length === 0 && (
          <section className="max-w-7xl mx-auto px-4 py-16 text-center">
            <p className="text-gray-800 text-lg">
              No posts yet. Start creating content in Sanity Studio!
            </p>
          </section>
        )}
      </main>
      <Footer />
    </>
  );
}
