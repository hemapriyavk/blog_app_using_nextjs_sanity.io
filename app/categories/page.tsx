import { client } from "@/sanity/lib/client";
import { groq } from "next-sanity";
import { CategoryBadge } from "../components/CategoryBadge";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";

async function getCategories() {
  return await client.fetch(
    groq`*[_type == "category"] {
      _id,
      title,
      description,
      slug,
    }`
  );
}

export default async function CategoriesPage() {
  const categories = await getCategories();

  return (
    <>
      <Header />
      <main className="bg-white min-h-screen">
        <div className="max-w-7xl mx-auto px-4 py-12">
          <h1 className="text-4xl font-bold mb-2 text-gray-700">Categories</h1>
          <p className="text-gray-800 mb-12">
            Browse articles by category
          </p>

          {categories.length === 0 ? (
            <p className="text-gray-800 text-center py-12">
              No categories found. Create some in Sanity Studio!
            </p>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {categories.map((category: any) => (
                <div key={category._id} className="bg-white rounded-lg shadow-md p-6 hover:shadow-xl transition-shadow">
                  <CategoryBadge category={category} variant="large" />
                  {category.description && (
                    <p className="text-gray-800 text-sm mt-4">{category.description}</p>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>
      </main>
      <Footer />
    </>
  );
}
