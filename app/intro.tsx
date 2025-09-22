import React from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { TextAnimate } from "@/components/ui/text-animate";
import { BlurFade } from "@/components/ui/blur-fade";
import { ChevronRight } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export default function Intro() {
  const imageList = [
    {
      name: "manager animation idling",
      src: "/screenshot/manager-animation-idling.png",
    },
    {
      name: "manager image idling",
      src: "/screenshot/manager-image-idling.png",
    },
    {
      name: "manager animation rendering",
      src: "/screenshot/manager-animation-rendering.png",
    },
    {
      name: "manager image rendering",
      src: "/screenshot/manager-image-rendering.png",
    },
    {
      name: "manager extra settings",
      src: "/screenshot/manager-extrasetting.png",
    },
    {
      name: "worker home page",
      src: "/screenshot/worker-home.png",
    },
    {
      name: "worker setting page",
      src: "/screenshot/worker-setting.png",
    },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col md:flex-row md:space-x-8 lg:space-x-32 space-y-8 md:space-y-0 sm:space-x-0 sm:space-y-8">
        <div className="flex flex-col w-full md:w-1/2 justify-center">
          <div className="mb-4 md:mb-6">
            <TextAnimate
              animation="blurIn"
              by="line"
              as="p"
              className="font-black text-6xl sm:text-5xl md:text-6xl lg:text-8xl -mb-5 sm:-mb-6 md:-mb-8 z-10 text-blender_orange"
            >
              Render
            </TextAnimate>
            <TextAnimate
              animation="blurIn"
              by="line"
              as="p"
              className="font-black text-6xl sm:text-5xl md:text-6xl lg:text-8xl pl-4 sm:pl-4 lg:pl-11 text-blender_blue"
            >
              Workshop
            </TextAnimate>
          </div>
          <TextAnimate
            animation="blurIn"
            by="line"
            as="p"
            className="font-semibold text-sm sm:text-base md:text-lg mb-3 md:mb-5"
          >
            A distributed rendering system meticulously designed specifically
            for Blender
          </TextAnimate>
          <TextAnimate
            animation="blurIn"
            by="line"
            as="p"
            className="text-xs sm:text-sm md:text-base tracking-wide"
          >
            A versatile rendering system designed for Blender, offering both
            distributed, remote, and local rendering capabilities. Powerful yet
            user-friendly, ensuring high rendering stability and employing
            various measures to safeguard your render files, providing reliable
            protection for your rendering tasks.
          </TextAnimate>
          <BlurFade delay={0.1} inView>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-6 mt-6">
              <Link
                href="https://spellbinder6.gumroad.com/l/renderworkshop"
                className="w-full sm:w-auto"
              >
                <Button
                  className="bg-blender_orange font-semibold w-full sm:w-auto shadow-none leading-none tracking-wide"
                  size="lg"
                >
                  Get it at Gumroad
                  <ChevronRight className="h-4 w-4 ml-1" />
                </Button>
              </Link>
              <Link
                href="https://superhivemarket.com/products/renderworkshop"
                className="w-full sm:w-auto"
              >
                <Button
                  className="font-semibold w-full sm:w-auto shadow-none border-blender_blue tracking-wide hover:bg-blender_blue hover:text-white"
                  variant="outline"
                  size="lg"
                >
                  Get it at BlenderMarket
                </Button>
              </Link>
            </div>{" "}
            {/* Closing div for button container */}
          </BlurFade>{" "}
          {/* Closing BlurFade for button section */}
        </div>{" "}
        {/* Closing div for left column */}
        <div className="w-full md:w-1/2 flex items-center justify-center">
          {/* Adjusted max-width for larger screens */}
          <BlurFade
            className="w-full sm:w-3/4 md:max-w-md lg:max-w-lg"
            delay={0.12}
            inView
          >
            <Carousel className="w-full">
              <CarouselContent>
                {imageList.map((item, index) => (
                  <CarouselItem key={index}>
                    <div className="flex flex-col items-center space-y-2">
                      <img
                        src={item.src}
                        alt={item.name}
                        className="rounded-md w-full object-cover"
                      />
                      <p className="opacity-60 text-xs sm:text-sm">
                        {item.name}
                      </p>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <div className="hidden sm:block">
                <CarouselPrevious />
                <CarouselNext />
              </div>
            </Carousel>
          </BlurFade>
        </div>
      </div>
    </div>
  );
}
