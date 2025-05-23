import { CustomPortableText } from '@/components/shared/CustomPortableText';

interface HeaderProps {
  centered?: boolean;
  description?: any[];
  title?: string;
}
export function Header(props: HeaderProps) {
  const { title, description, centered = false } = props;
  if (!description && !title) {
    return null;
  }
  return (
    <div
      className={`${centered ? 'flex flex-col items-center' : 'w-5/6 lg:w-3/5'}`}
    >
      <div className="w-5/6 lg:w-3/5">
        {/* Title */}
        {title && (
          <div
            className="text-3xl font-alex md:text-5xl text-[#EE4286]"
            data-testid="title"
          >
            {title}
          </div>
        )}
        {/* Description */}
        {description && (
          <div className="mt-4 font-rockkitt text-xl text-gray-600 md:text-2xl">
            <CustomPortableText value={description} />
          </div>
        )}
      </div>
    </div>
  );
}
