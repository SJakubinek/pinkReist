import { groq } from 'next-sanity';

export const homePageQuery = groq`
  *[_type == "home"][0]{
    _id,
    overview,
    title,
    showcaseBlogs[]->{
      _type,
      body,
      coverImage,
      coverImageCaption,
      coverImageAlt,
      coverImageWidth,
      coverImageHeight,
      createdAt,
      overview,
      "slug": slug.current,
      tags,
      title,
    }
  }
`;

export const pagesBySlugQuery = groq`
  *[_type == "page" && slug.current == $slug][0] {
    _id,
    body,
    overview,
    title,
    "slug": slug.current,
  }
`;

export const blogBySlugQuery = groq`
  *[_type == "blog" && slug.current == $slug][0] {
    _id,
    body,
    coverImage,
    coverImageAlt,
    coverImageCaption,
    coverImageHeight,
    coverImageWidth,
    createdAt,
    overview,
    slug,
    tags,
    title,
  }
`;

export const settingsQuery = groq`
  *[_type == "settings"][0]{
    footer,
    menuItems[]->{
      _type,
      "slug": slug.current,
      title
    },
    ogImage,
  }
`;

export const allBlogEntriesQuery = groq`
  *[_type == "blog"] | order(_createdAt desc){
    _type,
    body,
    coverImage,
    coverImageCaption,
    coverImageAlt,
    coverImageWidth,
    coverImageHeight,
    createdAt,
    overview,
    "slug": slug.current,
    tags,
    title,
  }
`;
