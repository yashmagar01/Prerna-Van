import Image from "next/image";

interface ImageFigureProps {
  src: string;
  alt: string;
  width: number;
  height: number;
  caption: string;
  priority?: boolean;
}

export default function ImageFigure({
  src,
  alt,
  width,
  height,
  caption,
  priority,
}: ImageFigureProps) {
  return (
    <figure>
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        priority={priority}
        sizes="(max-width: 860px) 100vw, 50vw"
        className="aspect-[4/4.6] w-full object-cover rounded-card"
      />
      <figcaption>{caption}</figcaption>
    </figure>
  );
}
