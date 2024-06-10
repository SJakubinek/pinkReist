import type { EncodeDataAttributeCallback } from '@sanity/react-loader'
import Link from 'next/link'

import { BlogListItem } from '@/components/pages/home/BlogListItem'
import { Header } from '@/components/shared/Header'
import { resolveHref } from '@/sanity/lib/utils'
import type { HomePagePayload } from '@/types'

export interface HomePageProps {
  data: HomePagePayload | null
  encodeDataAttribute?: EncodeDataAttributeCallback
}

export function HomePage({ data, encodeDataAttribute }: HomePageProps) {
  // Default to an empty object to allow previews on non-existent documents
  const { overview = [], showcaseBlogs = [], title = '' } = data ?? {}

  return (
    <div className="space-y-20">
      {/* Header */}
      {title && <Header centered title={title} description={overview} />}
      {/* Showcase Blogs */}
      {showcaseBlogs && showcaseBlogs.length > 0 && (
        <div className="flex flex-col items-center">
          <div className="w-5/6 lg:w-3/5">
            {showcaseBlogs.map((blog, key) => {
              const href = resolveHref(blog?._type, blog?.slug)
              if (!href) {
                return null
              }
              return (
                <Link
                  key={key}
                  href={href}
                  data-sanity={encodeDataAttribute?.([
                    'showcaseBlogss',
                    key,
                    'slug',
                  ])}
                >
                  <BlogListItem blog={blog} odd={key % 2} />
                </Link>
              )
            })}
          </div>
        </div>
      )}
    </div>
  )
}

export default HomePage
