import { CustomPortableText } from '@/components/shared/CustomPortableText';
import { Header } from '@/components/shared/Header';
import type { PagePayload } from '@/types';

export interface PageProps {
  data: PagePayload | null;
}

export function Page({ data }: PageProps) {
  // Default to an empty object to allow previews on non-existent documents
  const { body, overview, title } = data ?? {};

  return (
    <div className="flex flex-col items-center">
      <div className="w-5/6 lg:w-3/5">
        {/* Header */}
        <Header title={title} description={overview} />

        {/* Body */}
        {body && (
          <CustomPortableText
            paragraphClasses="font-rockkitt text-gray-600 text-xl"
            value={body}
          />
        )}
      </div>
    </div>
  );
}

export default Page;
