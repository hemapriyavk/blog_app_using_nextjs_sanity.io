import { defineField, defineType } from "sanity";

export const instrumentPage = defineType({
  name: "instrumentPage",
  title: "Instrument Page",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "title",
      },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "introHeading",
      title: "Intro Heading",
      type: "string",
    }),
    defineField({
      name: "introSubtitle",
      title: "Intro Subtitle",
      type: "string",
    }),
    defineField({
      name: "introDescription",
      title: "Intro Description",
      type: "text",
    }),
    defineField({
      name: "sections",
      title: "Sections",
      type: "array",
      of: [
        {
          type: "object",
          name: "instrumentSection",
          title: "Instrument Section",
          fields: [
            defineField({
              name: "title",
              title: "Title",
              type: "string",
              validation: (rule) => rule.required(),
            }),
            defineField({
              name: "subtitle",
              title: "Subtitle",
              type: "string",
            }),
            defineField({
              name: "description",
              title: "Description",
              type: "text",
            }),
            defineField({
              name: "image",
              title: "Image",
              type: "image",
              options: {
                hotspot: true,
              },
            }),
            defineField({
              name: "imageAlt",
              title: "Image Alt",
              type: "string",
            }),
          ],
        },
      ],
    }),
    defineField({
      name: "features",
      title: "Feature Cards",
      type: "array",
      of: [
        {
          type: "object",
          name: "featureCard",
          title: "Feature Card",
          fields: [
            defineField({
              name: "title",
              title: "Title",
              type: "string",
              validation: (rule) => rule.required(),
            }),
            defineField({
              name: "description",
              title: "Description",
              type: "text",
            }),
            defineField({
              name: "image",
              title: "Image",
              type: "image",
              options: {
                hotspot: true,
              },
            }),
            defineField({
              name: "imageAlt",
              title: "Image Alt",
              type: "string",
            }),
          ],
        },
      ],
    }),
    defineField({
      name: "ctaTitle",
      title: "CTA Title",
      type: "string",
    }),
    defineField({
      name: "ctaDescription",
      title: "CTA Description",
      type: "text",
    }),
    defineField({
      name: "ctaLink",
      title: "CTA Link",
      type: "url",
    }),
    defineField({
      name: "ctaLabel",
      title: "CTA Label",
      type: "string",
    }),
    defineField({
      name: "disclaimer",
      title: "Disclaimer",
      type: "text",
    }),
  ],
  preview: {
    select: {
      title: "title",
      subtitle: "slug.current",
    },
  },
});
