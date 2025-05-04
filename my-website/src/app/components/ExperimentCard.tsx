import { ExternalLink } from 'lucide-react';

interface ExperimentCardProps {
  title: string;
  description: string;
  date: string;
  imageUrl: string;
  link: string;
}

export default function ExperimentCard({ title, description, date, imageUrl, link }: ExperimentCardProps) {
    return (
        <div className="bg-black/60 rounded-lg overflow-hidden shadow-lg relative group">
            {/* Thumbnail + overlay icon */}
            <a
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                className="relative block cursor-pointer"
            >
            <img
                src={imageUrl}
                alt={title}
                className="w-full h-full object-cover scale-100"
            />
            <div className="absolute top-2 right-2 text-white hover:text-[var(--theme-color-1)]">
                <ExternalLink className="w-6 h-6" />
            </div>
            </a>

            {/* Content */}
            <div className="text-base p-4 space-y-2">
                <div className="flex justify-between font-semibold">
                    <span>{title}</span>
                    <span className="text-sm text-[var(--theme-color-3)]">{date}</span>
                </div>
                <p className="text-left">{description}</p>
            </div>
        </div>
    );
}
