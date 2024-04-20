import type { PortableTextBlock } from 'next-sanity'

import { CustomPortableText } from '@/components/shared/CustomPortableText'
import ImageBox from '@/components/shared/ImageBox'
import type { ShowcaseBlog } from '@/types'

interface BlogProps {
  blog: ShowcaseBlog
  odd: number
}

export function BlogListItem(props: BlogProps) {
  const { blog, odd } = props

  return (
    <div
      className={`flex flex-col gap-x-5 p-2 transition hover:bg-gray-50/50 xl:flex-row ${
        odd && 'border-b border-t xl:flex-row-reverse'
      }`}
    >
      <div className="w-full xl:w-9/12">
        <ImageBox
          image={blog.coverImage}
          alt={blog.coverImageAlt}
          classesWrapper="relative aspect-auto"
          width={blog.coverImageWidth}
          height={blog.coverImageHeight}
        />
      </div>
      <div className="flex xl:w-1/4">
        <TextBox blog={blog} />
      </div>
    </div>
  )
}

function TextBox({ blog }: { blog: ShowcaseBlog }) {
  return (
    <div className="relative mt-2 flex w-full flex-col justify-between p-3 xl:mt-0">
      <div>
        {/* Title */}
        <div className="mb-2 text-xl font-extrabold tracking-tight md:text-2xl">
          {blog.title}
        </div>
        {/* Overview  */}
        <div className="font-serif text-gray-500">
          <CustomPortableText value={blog.overview as PortableTextBlock[]} />
        </div>
      </div>
      {/* Tags */}
      <div className="mt-4 flex flex-row gap-x-2">
        {blog.tags?.map((tag, key) => (
          <div className="text-sm font-medium lowercase md:text-lg" key={key}>
            #{tag}
          </div>
        ))}
      </div>
    </div>
  )
}
