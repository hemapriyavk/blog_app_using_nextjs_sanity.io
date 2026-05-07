"use client";

import { PortableText } from "@portabletext/react";
import { portableTextComponents } from "@/sanity/lib/portableText";

export function PostBody({ content }: { content: any }) {
  return (
    <div className="prose prose-lg max-w-2xl mx-auto text-gray-800">
      <PortableText value={content} components={portableTextComponents} />
    </div>
  );
}
