import Link from 'next/link';

interface ActionCardProps {
  imageUrl: string;
  buttonLabel: string;
  buttonHref: string;
  description: string;
}

export default function ActionCard({ imageUrl, buttonLabel, buttonHref, description }: ActionCardProps) {
  return (
    <div className="bg-black/60 rounded-lg overflow-hidden shadow-lg flex flex-col h-full">
      {/* Image*/}
      <div className="relative pb-8 w-full h-full">
        <img
          src={imageUrl}
          alt={buttonLabel}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Button */}
      <div className="pb-8">
        <Link
          href={buttonHref}
          className="bg-black text-white px-6 py-3 rounded-md hover:bg-gray-800 text-center"
        >
          {buttonLabel}
        </Link>
      </div>
    </div>
    
  );
}
