import Image from "next/image";

interface PhotoFrameProps {
  src: string;
  alt: string;
  className?: string;
}

export default function PhotoFrame({
  src,
  alt,
  className = "",
}: PhotoFrameProps) {
  return (
    <div className={`relative ${className}`}>
      {/* Offset frame */}
      <div className="absolute inset-0 translate-x-2 translate-y-2 sm:translate-x-3 sm:translate-y-3 border border-black/20" />

      {/* Main frame */}
      <div className="relative border border-black/70 bg-white p-1.5 sm:p-2">
        <div className="relative aspect-[4/5] overflow-hidden">
          <Image
            src={src}
            alt={alt}
            fill
            priority
            className="object-cover"
            sizes="(max-width: 640px) 285px, (max-width: 1024px) 340px, 380px"
          />
        </div>
      </div>
    </div>
  );
}