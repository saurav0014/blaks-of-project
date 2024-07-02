import Image from "next/image";
import { NextImageSrc } from "@/types/common";

interface PlatformData {
  data: {
    id: number;
    imageSrc: NextImageSrc;
    altText: string;
    textContent: string;
  }[];
}

interface GridItemProps {
  imageSrc: NextImageSrc;
  altText: string;
  textContent: string;
  className: string;
}

const gridStyles = [
  "basis-full shadow-lg lg:shadow-none p-5 lg:p-0 lg:border-r-2 lg:border-b-2 lg:pr-[10%] lg:pb-5 lg:basis-[50%]",
  "basis-full shadow-lg lg:shadow-none p-5 lg:p-0 lg:border-b-2 lg:pl-[20%] lg:basis-[50%]",
  "basis-full shadow-lg lg:shadow-none p-5 lg:p-0 lg:border-r-2 lg:border-b-2 lg:pt-28 lg:basis-[30%]",
  "basis-full shadow-lg lg:shadow-none p-5 lg:p-0 lg:border-b-2 lg:pl-[20%] lg:basis-[70%] lg:pt-20",
  "basis-full shadow-lg lg:shadow-none p-5 lg:p-0 lg:border-r-2 lg:border-b-2 lg:basis-[50%] lg:pr-[10%] lg:pt-20",
  "basis-full shadow-lg lg:shadow-none p-5 lg:p-0 lg:border-b-2 lg:basis-[50%] lg:h-[500px] lg:pt-20 lg:pl-[10%]",
];

const GridItem = ({ imageSrc, altText, textContent, className }: GridItemProps) => (
  <div className={className}>
    <div className="w-[84px] h-[84px]">
      <Image src={imageSrc} alt={altText} width={84} height={84} className="size-full" />
    </div>
    <p className="text-xl xl:text-3xl mt-5">{textContent}</p>
  </div>
);


const Platform = ({ data }: PlatformData) => (
  <section className="px-[10%] lg:px-[14%] mb-16 xl:mb-24">
    <p className="mx-auto text-2xl lg:text-4xl xl:text-5xl xl:max-w-[840px] text-center font-medium">
      The platform assists city managers on multiple fronts
    </p>

    <div className="flex flex-wrap gap-y-5 mt-12 xl:mt-20 bg-gradient-to-b from-[#ffffff] to-[#f7f8fa] px-2">
      {data.map((item, index) => (
        <GridItem
          key={item.id}
          imageSrc={item.imageSrc}
          altText={item.altText}
          textContent={item.textContent}
          className={gridStyles[index]}
        />
      ))}
    </div>
  </section>
);

export default Platform;
