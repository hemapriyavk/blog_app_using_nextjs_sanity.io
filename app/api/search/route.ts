import { client } from "@/sanity/lib/client";
import { groq } from "next-sanity";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  const query = request.nextUrl.searchParams.get("q");

  if (!query || query.trim().length === 0) {
    return NextResponse.json({ results: [] });
  }

  try {
    const results = await client.fetch(
      groq`
        {
          "posts": *[_type == "post" && (title match $searchTerm || description match $searchTerm)] {
            _id,
            title,
            slug,
            description,
            _type,
          },
          "authors": *[_type == "author" && name match $searchTerm] {
            _id,
            name,
            slug,
            _type,
          },
          "categories": *[_type == "category" && title match $searchTerm] {
            _id,
            title,
            slug,
            _type,
          }
        }
      `,
      { searchTerm: `*${query}*` }
    );

    const allResults = [
      ...results.posts,
      ...results.authors,
      ...results.categories,
    ];

    return NextResponse.json({ results: allResults });
  } catch (error) {
    console.error("Search error:", error);
    return NextResponse.json({ results: [], error: "Search failed" }, { status: 500 });
  }
}
