import { defineType, defineField } from "sanity";

export const blockContent = defineType({
  name: "blockContent",
  title: "Block Content",
  type: "array",
  of: [
    {
      title: "Block",
      type: "block",
      styles: [
        { title: "Normal", value: "normal" },
        { title: "Normal Center", value: "normalCenter" },
        { title: "Normal Right", value: "normalRight" },
        { title: "Normal Justify", value: "normalJustify" },
        { title: "H1", value: "h1" },
        { title: "H1 Center", value: "h1Center" },
        { title: "H1 Right", value: "h1Right" },
        { title: "H1 Justify", value: "h1Justify" },
        { title: "H2", value: "h2" },
        { title: "H2 Center", value: "h2Center" },
        { title: "H2 Right", value: "h2Right" },
        { title: "H2 Justify", value: "h2Justify" },
        { title: "H3", value: "h3" },
        { title: "H3 Center", value: "h3Center" },
        { title: "H3 Right", value: "h3Right" },
        { title: "H3 Justify", value: "h3Justify" },
        { title: "H4", value: "h4" },
        { title: "H4 Center", value: "h4Center" },
        { title: "H4 Right", value: "h4Right" },
        { title: "H4 Justify", value: "h4Justify" },
        { title: "H5", value: "h5" },
        { title: "H5 Center", value: "h5Center" },
        { title: "H5 Right", value: "h5Right" },
        { title: "H5 Justify", value: "h5Justify" },
        { title: "H6", value: "h6" },
        { title: "H6 Center", value: "h6Center" },
        { title: "H6 Right", value: "h6Right" },
        { title: "H6 Justify", value: "h6Justify" },
        { title: "Quote", value: "blockquote" },
        { title: "Callout", value: "callout" },
      ],
      lists: [
        { title: "Bullet", value: "bullet" },
        { title: "Number", value: "number" },
        { title: "Checklist", value: "check" },
      ],
      marks: {
        decorators: [
          { title: "Strong", value: "strong" },
          { title: "Emphasis", value: "em" },
          { title: "Underline", value: "underline" },
          { title: "Strike-through", value: "strike-through" },
          { title: "Code", value: "code" },
        ],
        annotations: [
          {
            title: "URL",
            name: "link",
            type: "object",
            fields: [
              {
                title: "URL",
                name: "href",
                type: "url",
              },
            ],
          },
          {
            title: "Internal Link",
            name: "internalLink",
            type: "object",
            fields: [
              {
                title: "Reference",
                name: "reference",
                type: "reference",
                to: [{ type: "post" }, { type: "author" }],
              },
            ],
          },
        ],
      },
    },
    {
      title: "Image",
      type: "image",
      options: {
        hotspot: true,
      },
      fields: [
        defineField({
          name: "caption",
          title: "Caption",
          type: "string",
        }),
        defineField({
          name: "alt",
          title: "Alt Text",
          type: "string",
        }),
      ],
    },
  ],
});
