import { PortableTextReactComponents } from "@portabletext/react";

export const portableTextComponents = {
  types: {
    image: ({ value }: any) => {
      return (
        <img
          src={value.asset.url}
          alt={value.alt || "Image"}
          className="my-4 rounded-lg"
        />
      );
    },
  },
  marks: {
    link: ({ children, value }: any) => {
      return (
        <a
          href={value.href}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 hover:underline"
        >
          {children}
        </a>
      );
    },
  },
} satisfies Partial<PortableTextReactComponents>;
