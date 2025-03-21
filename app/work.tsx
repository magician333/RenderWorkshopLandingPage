"use client";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { TextAnimate } from "@/components/ui/text-animate";

export function Work() {
  const intro_list = [
    {
      name: "Image Render Process",
      description:
        "RenderWorkshop splits images into several tiles, with each tile acting as a task. These tasks are sent to various worker computers for rendering. Once a worker finishes rendering a tile, it saves the result to a temporary folder in shared storage. Workers that complete their tasks early are automatically assigned new ones. After all tiles are rendered, the manager combines them into a single, complete image.",
      src: "/work/image.gif",
    },
    {
      name: "Image Render Process (Sample subset)",
      description:
        "RenderWorkshop Divide the image into several blocks for rendering (e.g., 4 means dividing into 4x4=16 blocks). It is recommended to set a larger value for high resolutions.Only available in Blender version 4.4 or higher and the rendering engine is Cycles.",
      src: "/work/imagesamples.gif",
    },
    {
      name: "Animtion Render Process",
      description:
        "RenderWorkshop divides animation sequences into segments, assigning each as a task to different worker computers for rendering. Once a worker completes a segment, it's saved to shared storage. Workers that finish first are automatically assigned the next task.",
      src: "/work/animation.gif",
    },
  ];
  return (
    <div className="flex flex-col justify-center items-center">
      <TextAnimate
        animation="blurIn"
        by="line"
        as="p"
        className="text-5xl font-bold mb-5 tracking-wider text-center"
      >
        How It Works
      </TextAnimate>
      <Carousel className="w-full ">
        <CarouselContent>
          {intro_list.map((item) => (
            <CarouselItem key={item.name}>
              <div>
                <img src={item.src} alt={item.name} className="rounded-2xl " />
                <p className="mt-10 font-semibold opacity-60">{item.name}</p>
                <p className=" text-left text-wrap opacity-60">
                  {item.description}
                </p>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
}
