import { config, fields, collection, singleton } from "@keystatic/core";

export default config({
  storage: {
    kind: "local",
  },
  singletons: {
    home: singleton({
      label: "Home Page",
      path: "content/pages/home",
      format: { data: "json" },
      schema: {
        tagline: fields.text({
          label: "Tagline",
          multiline: true,
        }),
      },
    }),
    about: singleton({
      label: "About Page",
      path: "content/pages/about",
      format: { data: "json" },
      schema: {
        bio: fields.text({
          label: "Bio",
          multiline: true,
        }),
        bio2: fields.text({
          label: "Bio (continued)",
          multiline: true,
        }),
        email: fields.text({ label: "Email" }),
      },
    }),
  },
  collections: {
    projects: collection({
      label: "Projects",
      slugField: "title",
      path: "content/projects/*",
      format: { data: "json" },
      schema: {
        title: fields.slug({ name: { label: "Title" } }),
        subtitle: fields.text({ label: "Subtitle" }),
        discipline: fields.text({ label: "Discipline" }),
        thumbnail: fields.image({
          label: "Thumbnail",
          directory: "public/images/projects",
          publicPath: "/images/projects",
        }),
        protected: fields.checkbox({ label: "Password Protected" }),
        order: fields.integer({ label: "Display Order", defaultValue: 0 }),
        blocks: fields.blocks(
          {
            heading: {
              label: "Heading",
              schema: fields.object({
                content: fields.text({ label: "Heading Text" }),
                width: fields.select({
                  label: "Width",
                  options: [
                    { label: "Full", value: "full" },
                    { label: "Half", value: "1/2" },
                    { label: "Third", value: "1/3" },
                    { label: "Two Thirds", value: "2/3" },
                  ],
                  defaultValue: "full",
                }),
              }),
            },
            text: {
              label: "Text",
              schema: fields.object({
                content: fields.text({
                  label: "Text Content",
                  multiline: true,
                }),
                width: fields.select({
                  label: "Width",
                  options: [
                    { label: "Full", value: "full" },
                    { label: "Half", value: "1/2" },
                    { label: "Third", value: "1/3" },
                    { label: "Two Thirds", value: "2/3" },
                  ],
                  defaultValue: "full",
                }),
              }),
            },
            image: {
              label: "Image",
              schema: fields.object({
                src: fields.image({
                  label: "Image",
                  directory: "public/images/projects",
                  publicPath: "/images/projects",
                }),
                alt: fields.text({ label: "Alt Text" }),
                caption: fields.text({ label: "Caption" }),
                width: fields.select({
                  label: "Width",
                  options: [
                    { label: "Full", value: "full" },
                    { label: "Half", value: "1/2" },
                    { label: "Third", value: "1/3" },
                    { label: "Two Thirds", value: "2/3" },
                  ],
                  defaultValue: "full",
                }),
              }),
            },
            credits: {
              label: "Credits",
              schema: fields.object({
                items: fields.array(
                  fields.object({
                    role: fields.text({ label: "Role" }),
                    name: fields.text({ label: "Name" }),
                  }),
                  {
                    label: "Credit Items",
                    itemLabel: (props) =>
                      `${props.fields.role.value}: ${props.fields.name.value}`,
                  }
                ),
                width: fields.select({
                  label: "Width",
                  options: [
                    { label: "Full", value: "full" },
                    { label: "Half", value: "1/2" },
                  ],
                  defaultValue: "full",
                }),
              }),
            },
            spacer: {
              label: "Spacer",
              schema: fields.object({
                width: fields.select({
                  label: "Width",
                  options: [{ label: "Full", value: "full" }],
                  defaultValue: "full",
                }),
              }),
            },
          },
          { label: "Content Blocks" }
        ),
      },
    }),
    explorations: collection({
      label: "Explorations",
      slugField: "title",
      path: "content/explorations/*",
      format: { data: "json" },
      schema: {
        title: fields.slug({ name: { label: "Title" } }),
        date: fields.text({ label: "Date" }),
        description: fields.text({
          label: "Description",
          multiline: true,
        }),
        thumbnail: fields.image({
          label: "Thumbnail",
          directory: "public/images/explorations",
          publicPath: "/images/explorations",
        }),
        order: fields.integer({ label: "Display Order", defaultValue: 0 }),
      },
    }),
  },
});
