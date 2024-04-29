import type { PortableTextBlock } from 'next-sanity'

import { CustomPortableText } from '@/components/shared/CustomPortableText'
import ImageBox from '@/components/shared/ImageBox'
import type { ShowcaseBlog } from '@/types'
import Image from 'next/image'
import { urlForImage } from '@/sanity/lib/utils'

interface BlogProps {
  blog: ShowcaseBlog
  odd: number
}

export function BlogListItem(props: BlogProps) {
  const { blog, odd } = props
  const createdDate = new Date(blog.createdAt)
  const imageUrl =
    (blog.coverImage &&
      urlForImage(blog.coverImage)
        ?.height(blog.coverImageHeight)
        .width(blog.coverImageWidth)
        .url()) ||
    ''
  const alt = blog.coverImageAlt
    ? blog.coverImageAlt
    : blog.coverImageCaption ?? ''

  return (
    <div className="pb-6 flex flex-row">
      <div className="pr-2 basis-1/4">
        <Image
          src={imageUrl}
          alt={alt}
          width={100}
          height={100}
          objectFit="contain"
        />
      </div>
      <div className="pr-2">
        {createdDate.toLocaleDateString('de-DE')}{' '}
        {createdDate.toLocaleTimeString('de-DE')}
      </div>
      <div>
        <TextBox blog={blog} />
      </div>
    </div>
  )
}

function TextBox({ blog }: { blog: ShowcaseBlog }) {
  const text: string = blog.body[0].children[0].text
  const trimmedText = text.substring(0, 350) + '...'
  return (
    <div>
      <div>
        {/* Title */}
        <div className="mb-1 text-xl font-extrabold tracking-tight md:text-2xl font-rockkitt">
          {blog.title}
        </div>
        {/* Tags */}
        <div className="flex flex-row gap-x-2 font-rockkitt mb-4">
          {blog.tags?.map((tag, key) => (
            <div className="text-lg font-medium lowercase" key={key}>
              #{tag}
            </div>
          ))}
        </div>
        {/* Overview  */}
        <div className="font-rockkitt text-gray-600 text-lg">
          {trimmedText} <strong>[mehr]</strong>
        </div>
      </div>
    </div>
  )
}
