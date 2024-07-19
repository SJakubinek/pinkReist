import Image from 'next/image';

import { urlForImage } from '@/sanity/lib/utils';
import Link from 'next/link';

interface ImageBoxProps {
  image?: { asset?: any };
  alt?: string;
  width: number;
  height: number;
  size?: string;
  classesWrapper?: string;
  'data-sanity'?: string;
}

export default function ImageBox({
  image,
  alt = '',
  width,
  height,
  size = '100vw',
  classesWrapper,
  ...props
}: ImageBoxProps) {
  const imageUrl =
    image && urlForImage(image)?.height(height).width(width).fit('crop').url();

  const linkURL = (image && urlForImage(image)?.url()) || '';

  return (
    <div
      className={`overflow-hidden rounded-[3px] bg-gray-50 ${classesWrapper}`}
      data-sanity={props['data-sanity']}
    >
      {imageUrl && (
        <Link href={linkURL} target="_blank">
          <Image
            //className="h-full w-full"
            alt={alt}
            width={width}
            height={height}
            sizes={size}
            src={imageUrl}
          />
        </Link>
      )}
    </div>
  );
}
