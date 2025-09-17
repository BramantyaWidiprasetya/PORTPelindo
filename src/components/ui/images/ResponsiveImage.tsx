import Image from "next/image";

export default function ResponsiveImage() {
  return (
    <div className="relative">
      <div className="overflow-hidden">
        <Image
          src="/images/grid-image/image-01.png"
          alt="Cover"
          width={800}
          height={600}
          className="w-full rounded-xl border border-gray-200 dark:border-gray-800"
        />
      </div>
    </div>
  );
}
