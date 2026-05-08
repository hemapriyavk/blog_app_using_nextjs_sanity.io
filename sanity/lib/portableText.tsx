import { PortableTextReactComponents } from "@portabletext/react";

const getAlignmentClass = (style: string) => {
  if (style.endsWith("Center")) return "text-center";
  if (style.endsWith("Right")) return "text-right";
  if (style.endsWith("Justify")) return "text-justify";
  return "text-left";
};

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
  block: {
    normal: ({ children }: any) => (
      <p className="text-left my-4 leading-8 text-gray-700">{children}</p>
    ),
    normalCenter: ({ children }: any) => (
      <p className="text-center my-4 leading-8 text-gray-700">{children}</p>
    ),
    normalRight: ({ children }: any) => (
      <p className="text-right my-4 leading-8 text-gray-700">{children}</p>
    ),
    normalJustify: ({ children }: any) => (
      <p className="text-justify my-4 leading-8 text-gray-700">{children}</p>
    ),
    h1: ({ children }: any) => (
      <h1 className="text-left mt-10 text-5xl font-bold">{children}</h1>
    ),
    h1Center: ({ children }: any) => (
      <h1 className="text-center mt-10 text-5xl font-bold">{children}</h1>
    ),
    h1Right: ({ children }: any) => (
      <h1 className="text-right mt-10 text-5xl font-bold">{children}</h1>
    ),
    h1Justify: ({ children }: any) => (
      <h1 className="text-justify mt-10 text-5xl font-bold">{children}</h1>
    ),
    h2: ({ children }: any) => (
      <h2 className="text-left mt-10 text-4xl font-semibold">{children}</h2>
    ),
    h2Center: ({ children }: any) => (
      <h2 className="text-center mt-10 text-4xl font-semibold">{children}</h2>
    ),
    h2Right: ({ children }: any) => (
      <h2 className="text-right mt-10 text-4xl font-semibold">{children}</h2>
    ),
    h2Justify: ({ children }: any) => (
      <h2 className="text-justify mt-10 text-4xl font-semibold">{children}</h2>
    ),
    h3: ({ children }: any) => (
      <h3 className="text-left mt-8 text-3xl font-semibold">{children}</h3>
    ),
    h3Center: ({ children }: any) => (
      <h3 className="text-center mt-8 text-3xl font-semibold">{children}</h3>
    ),
    h3Right: ({ children }: any) => (
      <h3 className="text-right mt-8 text-3xl font-semibold">{children}</h3>
    ),
    h3Justify: ({ children }: any) => (
      <h3 className="text-justify mt-8 text-3xl font-semibold">{children}</h3>
    ),
    h4: ({ children }: any) => (
      <h4 className="text-left mt-8 text-2xl font-semibold">{children}</h4>
    ),
    h4Center: ({ children }: any) => (
      <h4 className="text-center mt-8 text-2xl font-semibold">{children}</h4>
    ),
    h4Right: ({ children }: any) => (
      <h4 className="text-right mt-8 text-2xl font-semibold">{children}</h4>
    ),
    h4Justify: ({ children }: any) => (
      <h4 className="text-justify mt-8 text-2xl font-semibold">{children}</h4>
    ),
    h5: ({ children }: any) => (
      <h5 className="text-left mt-8 text-xl font-semibold">{children}</h5>
    ),
    h5Center: ({ children }: any) => (
      <h5 className="text-center mt-8 text-xl font-semibold">{children}</h5>
    ),
    h5Right: ({ children }: any) => (
      <h5 className="text-right mt-8 text-xl font-semibold">{children}</h5>
    ),
    h5Justify: ({ children }: any) => (
      <h5 className="text-justify mt-8 text-xl font-semibold">{children}</h5>
    ),
    h6: ({ children }: any) => (
      <h6 className="text-left mt-8 text-lg font-semibold">{children}</h6>
    ),
    h6Center: ({ children }: any) => (
      <h6 className="text-center mt-8 text-lg font-semibold">{children}</h6>
    ),
    h6Right: ({ children }: any) => (
      <h6 className="text-right mt-8 text-lg font-semibold">{children}</h6>
    ),
    h6Justify: ({ children }: any) => (
      <h6 className="text-justify mt-8 text-lg font-semibold">{children}</h6>
    ),
    blockquote: ({ children }: any) => (
      <blockquote className="text-left my-8 border-l-4 border-slate-300 pl-6 italic text-slate-700">
        {children}
      </blockquote>
    ),
    callout: ({ children }: any) => (
      <div className="text-left my-8 rounded-3xl border border-slate-200 bg-slate-50 p-6 text-slate-800 shadow-sm">
        {children}
      </div>
    ),
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
