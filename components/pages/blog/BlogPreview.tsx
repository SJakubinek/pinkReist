'use client';

import { type QueryResponseInitial } from '@sanity/react-loader';

import { blogBySlugQuery } from '@/sanity/lib/queries';
import { useQuery } from '@/sanity/loader/useQuery';
import { BlogPayload } from '@/types';

import BlogPage from './BlogPage';

type Props = {
  params: { slug: string };
  initial: QueryResponseInitial<BlogPayload | null>;
};

export default function BlogPreview(props: Props) {
  const { params, initial } = props;
  const { data, encodeDataAttribute } = useQuery<BlogPayload | null>(
    blogBySlugQuery,
    params,
    { initial }
  );

  return <BlogPage data={data!} encodeDataAttribute={encodeDataAttribute} />;
}
