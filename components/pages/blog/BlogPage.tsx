import type { EncodeDataAttributeCallback } from '@sanity/react-loader'
import Link from 'next/link'

import { CustomPortableText } from '@/components/shared/CustomPortableText'
import { Header } from '@/components/shared/Header'
import ImageBox from '@/components/shared/ImageBox'
import type { BlogPayload } from '@/types'

export interface BlogPageProps {
  data: BlogPayload | null
  encodeDataAttribute?: EncodeDataAttributeCallback
}

export function BlogPage({ data, encodeDataAttribute }: BlogPageProps) {
  // Default to an empty object to allow previews on non-existent documents
  const { title, overview, coverImage, createdAt, tags, body } = data ?? {}

  return (
    <div>
      <div className="mb-20 space-y-6">
        {/* Header */}
        <Header title={title} description={overview} />

        <div className="rounded-md border">
          {/* Image  */}
          <ImageBox
            data-sanity={encodeDataAttribute?.('coverImage')}
            image={coverImage}
            // @TODO add alt field in schema
            alt=""
            width={100}
            height={100}
            classesWrapper="relative aspect-[16/9]"
          />

          <div className="divide-inherit grid grid-cols-1 divide-y lg:grid-cols-4 lg:divide-x lg:divide-y-0">
            {/* Tags */}
            <div className="p-3 lg:p-4">
              <div className="text-xs md:text-sm">Tags</div>
              <div className="text-md flex flex-row flex-wrap md:text-lg">
                {tags?.map((tag, key) => (
                  <div key={key} className="mr-1 break-words ">
                    #{tag}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Description */}
        {body && (
          <CustomPortableText
            paragraphClasses="font-serif max-w-3xl text-xl text-gray-600"
            value={body}
          />
        )}
      </div>
      <div className="absolute left-0 w-screen border-t" />
    </div>
  )
}

export default BlogPage
