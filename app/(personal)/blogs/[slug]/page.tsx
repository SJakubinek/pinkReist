import type { Metadata, ResolvingMetadata } from 'next'
import dynamic from 'next/dynamic'
import { draftMode } from 'next/headers'
import { notFound } from 'next/navigation'
import { toPlainText } from 'next-sanity'

import { BlogPage } from '@/components/pages/blog/BlogPage'
import { urlForOpenGraphImage } from '@/sanity/lib/utils'
import { generateStaticSlugs } from '@/sanity/loader/generateStaticSlugs'
import { loadBlog } from '@/sanity/loader/loadQuery'
const ProjectPreview = dynamic(
  () => import('@/components/pages/blog/BlogPreview'),
)

type Props = {
  params: { slug: string }
}

export async function generateMetadata(
  { params }: Props,
  parent: ResolvingMetadata,
): Promise<Metadata> {
  const { data: blog } = await loadBlog(params.slug)
  console.log('DATA: ' + JSON.stringify(blog))
  const ogImage = urlForOpenGraphImage(blog?.coverImage)

  return {
    title: blog?.title,
    description: blog?.overview
      ? toPlainText(blog.overview)
      : (await parent).description,
    openGraph: ogImage
      ? {
          images: [ogImage, ...((await parent).openGraph?.images || [])],
        }
      : {},
  }
}

export function generateStaticParams() {
  return generateStaticSlugs('project')
}

export default async function BlogSlugRoute({ params }: Props) {
  const initial = await loadBlog(params.slug)

  if (draftMode().isEnabled) {
    return <ProjectPreview params={params} initial={initial} />
  }

  if (!initial.data) {
    notFound()
  }

  return <BlogPage data={initial.data} />
}
