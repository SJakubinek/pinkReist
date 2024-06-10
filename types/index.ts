import type { PortableTextBlock } from 'next-sanity'
import type { Image } from 'sanity'

export interface MenuItem {
  _type: string
  slug?: string
  title?: string
}

export interface ShowcaseBlog {
  _type: string
  title: string
  slug: string
  overview?: PortableTextBlock[]
  coverImage: Image
  coverImageCaption?: string
  coverImageAlt?: string
  coverImageWidth: number
  coverImageHeight: number
  createdAt: string
  tags?: string[]
  body: PortableTextBlock[]
}

// Page payloads

export interface HomePagePayload {
  footer?: PortableTextBlock[]
  overview?: PortableTextBlock[]
  showcaseBlogs?: ShowcaseBlog[]
  title?: string
}

export interface PagePayload {
  body?: PortableTextBlock[]
  name?: string
  overview?: PortableTextBlock[]
  title?: string
  slug?: string
}

export interface BlogPayload {
  title: string
  slug: string
  overview?: PortableTextBlock[]
  coverImage: Image
  coverImageCaption?: string
  coverImageAlt?: string
  coverImageWidth: number
  coverImageHeight: number
  createdAt: string
  tags?: string[]
  body: PortableTextBlock[]
}

export interface SettingsPayload {
  footer?: PortableTextBlock[]
  menuItems?: MenuItem[]
  ogImage?: Image
}
