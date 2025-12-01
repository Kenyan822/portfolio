import React from "react";
import Image from "next/image";
import Link from "next/link";
import { GlassCard } from "../../ui/GlassCard";

interface WorkCardProps {
  id: string;
  title: string;
  description: string;
  tags: string[];
  imageUrl?: string;
}

export function WorkCard({ id, title, description, tags, imageUrl }: WorkCardProps) {
  return (
    <Link href={`/works/${id}`}>
      <GlassCard className="h-full overflow-hidden group" hoverEffect>
        <div className="relative aspect-video w-full overflow-hidden bg-gray-800">
          {imageUrl ? (
            <Image
              src={imageUrl}
              alt={title}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-110"
            />
          ) : (
            <div className="flex h-full w-full items-center justify-center text-gray-600">
              No Image
            </div>
          )}
        </div>
        <div className="p-6">
          <h3 className="mb-2 text-xl font-bold text-white group-hover:text-blue-400 transition-colors">
            {title}
          </h3>
          <p className="mb-4 text-sm text-gray-400 line-clamp-2">
            {description}
          </p>
          <div className="flex flex-wrap gap-2">
            {tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full bg-white/5 px-3 py-1 text-xs text-gray-300 backdrop-blur-sm"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </GlassCard>
    </Link>
  );
}
