import type { PortableTextBlock } from 'next-sanity'
import type { Image } from 'sanity'

export interface MenuItem {
  _type: string
  slug?: string
  title?: string
}

export interface MilestoneItem {
  description?: string
  duration?: {
    start?: string
    end?: string
  }
  image?: Image
  tags?: string[]
  title?: string
}

export interface ShowcaseProject {
  _type: string
  coverImage?: Image
  overview?: PortableTextBlock[]
  slug?: string
  tags?: string[]
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

export interface ProjectPayload {
  client?: string
  coverImage?: Image
  description?: PortableTextBlock[]
  duration?: {
    start?: string
    end?: string
  }
  overview?: PortableTextBlock[]
  site?: string
  slug: string
  tags?: string[]
  title?: string
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
