import Link from 'next/link';

interface ActionCardProps {
  imageUrl: string;
  buttonLabel: string;
  buttonHref: string;
  description: string;
}

export default function ActionCard({ imageUrl, buttonLabel, buttonHref, description }: ActionCardProps) {
  return (
    <div className="relative w-full overflow-hidden rounded-lg shadow-lg">
    {/* Full image */}
    <img
      src={imageUrl}
      alt={buttonLabel}
      className="w-full h-full object-cover"
    />

    {/* Overlay on bottom third */}
    <div className="absolute bottom-0 left-0 w-full h-1/4 bg-[var(--theme-color-3)]/80 flex items-center justify-center">
      <Link
        href={buttonHref}
        className="bg-black text-white px-6 py-2 md:py-3 rounded-md hover:bg-gray-800 z-10"
      >
        {buttonLabel}
      </Link>

      {/* Description in bottom-left */}
      <div className="absolute bottom-2 left-4 text-xs text-white">
        {description}
      </div>
    </div>
  </div>
  );
}
