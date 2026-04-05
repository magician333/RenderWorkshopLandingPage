"use client";
import { useState, useEffect } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "@/components/ui/carousel";
import { TextAnimate } from "@/components/ui/text-animate";
import { BlurFade } from "@/components/ui/blur-fade";


const intro_list = [
  {
    name: "Image Render Process",
    description:
      "RenderWorkshop splits images into several tiles, with each tile acting as a task. These tasks are sent to various worker computers for rendering. Once a worker finishes rendering a tile, it saves the result to a temporary folder in shared storage. Workers that complete their tasks early are automatically assigned new ones. After all tiles are rendered, the manager combines them into a single, complete image.",
    src: "/work/image.gif",
  },
  {
    name: "Sample Subset Rendering",
    description:
      "Divide the image into several blocks for rendering (e.g., 4 means dividing into 4x4=16 blocks). It is recommended to set a larger value for high resolutions. Only available in Blender version 4.4 or higher and the rendering engine is Cycles.",
    src: "/work/imagesamples.gif",
  },
  {
    name: "Animation Render Process",
    description:
      "RenderWorkshop divides animation sequences into segments, assigning each as a task to different worker computers for rendering. Once a worker completes a segment, it's saved to shared storage. Workers that finish first are automatically assigned the next task.",
    src: "/work/animation.gif",
  },
];


function CarouselSection() {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!api) {
      return;
    }

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap());

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap());
    });
  }, [api]);

  return (
    <div className="w-full flex flex-col items-center">
      <Carousel setApi={setApi} className="w-full" opts={{ loop: true }}>
        <CarouselContent className="items-stretch">
          {intro_list.map((item) => (
            <CarouselItem key={item.name} className="pb-6">
              
              <div className="flex flex-col lg:flex-row h-full bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-[2rem] overflow-hidden shadow-[0_8px_30px_rgb(0,0,0,0.06)] mx-1 mt-4">

                
                <div className="w-full lg:w-3/5 bg-zinc-50 dark:bg-zinc-950 p-6 sm:p-10 flex items-center justify-center border-b lg:border-b-0 lg:border-r border-zinc-100 dark:border-zinc-800">
                  <div className="relative w-full rounded-2xl overflow-hidden shadow-md border border-zinc-200/50 dark:border-zinc-700/50">
                    <img
                      src={item.src}
                      alt={item.name}
                      className="w-full object-cover"
                    />
                  </div>
                </div>

                
                <div className="w-full lg:w-2/5 p-8 sm:p-12 flex flex-col justify-center flex-grow space-y-6">
                  <div className="space-y-4">
                    <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold border-transparent bg-secondary text-secondary-foreground">
                      Process Overview
                    </div>
                    <h3 className="text-2xl sm:text-3xl font-bold tracking-tight">
                      {item.name}
                    </h3>
                  </div>
                  <p className="text-muted-foreground leading-relaxed md:text-lg">
                    {item.description}
                  </p>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>

      
      <div className="flex justify-center gap-2 mt-4 mb-4">
        {Array.from({ length: count }).map((_, index) => (
          <button
            key={index}
            onClick={() => api?.scrollTo(index)}
            className={`h-1.5 rounded-full transition-all duration-300 ease-in-out ${current === index
              ? "w-8 bg-zinc-800 dark:bg-zinc-200"
              : "w-4 bg-zinc-300 dark:bg-zinc-700 hover:bg-zinc-400 dark:hover:bg-zinc-600"
              }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}


export function Work() {
  return (
    <div className="flex flex-col justify-center items-center py-16 space-y-12">
      <BlurFade inView>
        <div className="text-center space-y-4">
          <TextAnimate
            animation="blurInUp"
            by="word"
            as="h2"
            className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tighter text-center"
          >
            Workflow in Action
          </TextAnimate>
          <p className="text-muted-foreground max-w-2xl mx-auto md:text-lg px-4">
            See how RenderWorkshop intelligently divides and conquers different types of rendering tasks.
          </p>
        </div>
      </BlurFade>

      <BlurFade inView delay={0.2} className="w-full max-w-6xl px-4 sm:px-6">
        
        <CarouselSection />
      </BlurFade>
    </div>
  );
}