import { groq } from "next-sanity";
import { client } from "./client";

export async function getPosts() {
  return await client.fetch(
    groq`*[_type == "post"] | order(publishedAt desc) {
      _id,
      title,
      slug,
      author -> {
        name,
        image,
      },
      mainImage,
      categories[] -> {
        _id,
        title,
      },
      publishedAt,
      description,
    }`
  );
}

export async function getPost(slug: string) {
  return await client.fetch(
    groq`*[_type == "post" && slug.current == $slug][0] {
      _id,
      title,
      slug,
      author -> {
        name,
        image,
        bio,
      },
      mainImage,
      categories[] -> {
        _id,
        title,
      },
      publishedAt,
      body,
      description,
    }`,
    { slug }
  );
}

export async function getAuthors() {
  return await client.fetch(
    groq`*[_type == "author"] {
      _id,
      name,
      slug,
      image,
      bio,
    }`
  );
}

export async function getInstrumentPage(slug: string) {
  return await client.fetch(
    groq`*[_type == "instrumentPage" && slug.current == $slug][0] {
      _id,
      title,
      introHeading,
      introSubtitle,
      introDescription,
      sections[] {
        title,
        subtitle,
        description,
        image,
        imageAlt,
      },
      features[] {
        title,
        description,
        image,
        imageAlt,
      },
      ctaTitle,
      ctaDescription,
      ctaLink,
      ctaLabel,
      disclaimer,
    }`,
    { slug }
  );
}
