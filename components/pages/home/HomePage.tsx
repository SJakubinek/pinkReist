'use client';

import type { EncodeDataAttributeCallback } from '@sanity/react-loader';
import Link from 'next/link';

import { BlogListItem } from '@/components/pages/home/BlogListItem';
import { Header } from '@/components/shared/Header';
import { resolveHref } from '@/sanity/lib/utils';
import type { HomePagePayload } from '@/types';
import { useState } from 'react';

export interface HomePageProps {
  data: HomePagePayload | null;
  encodeDataAttribute?: EncodeDataAttributeCallback;
}

function usePagination(items, startPage, perPage) {
  const [activePage, setActivePage] = useState(startPage);
  const totalPages = Math.ceil(items.length / perPage);
  const offset = perPage * (activePage - 1);
  const paginatedItems = items.slice(offset, perPage * activePage);

  return {
    activePage,
    nextPage: () => setActivePage(p => (p < totalPages ? p + 1 : p)),
    previousPage: () => setActivePage(p => (p > 1 ? p - 1 : p)),
    totalPages,
    totalItems: items.length,
    items: paginatedItems,
  };
}

export function HomePage({ data, encodeDataAttribute }: HomePageProps) {
  // Default to an empty object to allow previews on non-existent documents
  const { overview = [], showcaseBlogs = [], title = '' } = data ?? {};

  const { activePage, nextPage, previousPage, totalPages, totalItems, items } =
    usePagination(showcaseBlogs, 1, 15);

  return (
    <div className="space-y-20">
      {/* Header */}
      {title && <Header centered title={title} description={overview} />}
      {/* Showcase Blogs */}
      {items && items.length > 0 && (
        <div className="flex flex-col items-center">
          <div className="w-5/6 lg:w-3/5">
            {items.map((blog, key) => {
              const href = resolveHref(blog?._type, blog?.slug);
              if (!href) {
                return null;
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
              );
            })}
          </div>
          {/* Control bar for the page data */}
          <div>
            (Seite {activePage} von {totalPages})
          </div>
          <div className="grid grid-cols-2 space-x-6">
            <div>
              <button
                onClick={previousPage}
                disabled={activePage <= 1}
                className="disabled:hidden"
              >
                Neuere Einträge
              </button>
            </div>
            <div>
              <button
                onClick={nextPage}
                disabled={activePage >= totalPages}
                className="disabled:hidden"
              >
                Ältere Einträge
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default HomePage;
