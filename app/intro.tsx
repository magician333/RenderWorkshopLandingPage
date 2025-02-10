import { Button } from "@/components/ui/button";
import Link from "next/link";
import { TextAnimate } from "@/components/ui/text-animate";
import { BlurFade } from "@/components/ui/blur-fade";
import { ChevronRight } from "lucide-react";
import Image from "next/image";

export default function Intro() {
  return (
    <>
      <div className="flex flex-col md:flex-row max-h-full">
        <div className="flex flex-col w-full md:w-1/2 justify-center p-4">
          <div className="mb-4">
            <TextAnimate
              animation="blurIn"
              by="line"
              as="p"
              className="font-black text-5xl md:text-6xl lg:text-8xl -mb-8 z-10 text-blender_orange"
            >
              Render
            </TextAnimate>
            <TextAnimate
              animation="blurIn"
              by="line"
              as="p"
              className="font-black text-5xl md:text-6xl lg:text-8xl pl-0 md:pl-4 lg:pl-11 text-blender_blue"
            >
              Workshop
            </TextAnimate>
          </div>

          <TextAnimate
            animation="blurIn"
            by="line"
            as="p"
            className="font-semibold text-base md:text-lg mb-5 text-nowrap"
          >
            A distributed rendering system meticulously designed specifically
            for Blender
          </TextAnimate>
          <TextAnimate
            animation="blurIn"
            by="line"
            as="p"
            className="w-full tracking-wide text-sm md:text-base"
          >
            A versatile rendering system designed for Blender, offering both
            distributed, remote, and local rendering capabilities. Powerful yet
            user-friendly, ensuring high rendering stability and employing
            various measures to safeguard your render files, providing reliable
            protection for your rendering tasks.
          </TextAnimate>
          <BlurFade delay={0.1} inView>
            <div className="flex flex-col sm:flex-row space-x-0 sm:space-x-10 space-y-4 sm:space-y-0">
              <Link href={"https://blendermarket.com/products/renderworkshop"}>
                <Button
                  className="bg-blender_orange font-semibold text-center mt-5 shadow-none leading-none tracking-wide whitespace-pre-wrap"
                  size={"lg"}
                >
                  Get it
                  <ChevronRight />
                </Button>
              </Link>
              <Link href={"https://blendermarket.com/creators/purplefire"}>
                <Button
                  className="font-semibold mt-5 shadow-none border-blender_blue tracking-wide hover:bg-blender_blue hover:text-white"
                  variant="outline"
                  size={"lg"}
                >
                  Creator Page
                </Button>
              </Link>
            </div>
          </BlurFade>
        </div>
        <div className="w-full md:w-1/2 flex flex-col justify-center p-4">
          <div className="grid grid-cols-2 gap-4">
            {[
              "manager-Rendering",
              "manager-Idling",
              "worker-homepage",
              "worker-settingpage",
            ].map((item, index) => (
              <BlurFade key={index} delay={0.25 * (index + 2)} inView>
                <div className="rounded-md aspect-square flex flex-col justify-center items-center">
                  <Image
                    src={`/img/${item}.png`}
                    alt={item}
                    className="rounded-md shadow-md"
                    width={300}
                    height={300}
                  />
                  <p className="font-light text-xs opacity-60 mt-2">{item}</p>
                </div>
              </BlurFade>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
