import { getAuthors } from "@/sanity/lib/queries";
import { AuthorCard } from "../components/AuthorCard";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";

export default async function AuthorsPage() {
  const authors = await getAuthors();

  return (
    <>
      <Header />
      <main className="bg-white min-h-screen">
        <div className="max-w-7xl mx-auto px-4 py-12">
          <h1 className="text-4xl font-bold mb-2 text-gray-700">Our Authors</h1>
          <p className="text-gray-800 mb-12">
            Meet the talented writers behind our stories
          </p>

          {authors.length === 0 ? (
            <p className="text-gray-800 text-center py-12">
              No authors found. Create some in Sanity Studio!
            </p>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {authors.map((author: any) => (
                <AuthorCard key={author._id} author={author} />
              ))}
            </div>
          )}
        </div>
      </main>
      <Footer />
    </>
  );
}
