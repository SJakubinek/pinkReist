import type { EncodeDataAttributeCallback } from '@sanity/react-loader'

import { CustomPortableText } from '@/components/shared/CustomPortableText'
import { Header } from '@/components/shared/Header'
import ImageBox from '@/components/shared/ImageBox'
import type { BlogPayload } from '@/types'

export interface BlogPageProps {
  data: BlogPayload
  encodeDataAttribute?: EncodeDataAttributeCallback
}

export function BlogPage({ data, encodeDataAttribute }: BlogPageProps) {
  // Default to an empty object to allow previews on non-existent documents
  const { title, coverImage, coverImageAlt, createdAt, tags, body } = data ?? {}

  const createdDate = new Date(createdAt)
  return (
    <div className="flex flex-col items-center">
      <div className="w-5/6 lg:w-3/5">
        <div>
          <div className="flex flex-row">
            <div>
              {/* Image  */}
              <ImageBox
                data-sanity={encodeDataAttribute?.('coverImage')}
                image={coverImage}
                // @TODO add alt field in schema
                alt={coverImageAlt}
                width={100}
                height={100}
                classesWrapper="relative aspect-auto"
              />
            </div>
            <div className="place-content-center ml-4 flex flex-col w-full">
              {/* Header */}
              <Header title={title} />
              <div className="font-rockkitt text-lg">
                {createdDate.toLocaleDateString('de-DE')}{' '}
                {createdDate.toLocaleTimeString('de-DE')}
              </div>
            </div>
          </div>
          <div>
            {/* Tags */}
            <div className="py-3 lg:py-4 font-rockkitt">
              <div className="text-xs md:text-sm">Tags</div>
              <div className="text-md flex flex-row flex-wrap md:text-lg">
                {tags?.map((tag, key) => (
                  <div key={key} className="mr-1 break-words">
                    #{tag}
                  </div>
                ))}
              </div>
            </div>
          </div>
          {/* Description */}
          {body && (
            <CustomPortableText
              paragraphClasses="font-rockkitt max-w-3xl text-xl text-gray-600"
              value={body}
            />
          )}
        </div>
      </div>
    </div>
  )
}

export default BlogPage
