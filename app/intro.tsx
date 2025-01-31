import { Button } from "@/components/ui/button";
import Link from "next/link";
import { TextAnimate } from "@/components/ui/text-animate";
import { BlurFade } from "@/components/ui/blur-fade";
import { ChevronRight } from "lucide-react";
import Image from "next/image";

export default function Intro() {
  return (
    <>
      <div className="flex flex-row max-h-full">
        <div className=" flex flex-col w-1/2 justify-center">
          <div className="mb-4">
            <TextAnimate
              animation="blurIn"
              by="line"
              as="p"
              className="font-black text-8xl -mb-8 z-10 text-blender_orange"
            >
              Render
            </TextAnimate>
            <TextAnimate
              animation="blurIn"
              by="line"
              as="p"
              className="font-black text-8xl  pl-11  text-blender_blue"
            >
              Workshop
            </TextAnimate>
          </div>

          <TextAnimate
            animation="blurIn"
            by="line"
            as="p"
            className="font-semibold mb-5"
          >
            A distributed rendering system meticulously designed specifically
            for Blender
          </TextAnimate>
          <TextAnimate
            animation="blurIn"
            by="line"
            as="p"
            className="w-4/5 tracking-wide"
          >
            A versatile rendering system designed for Blender, offering both
            distributed, remote, and local rendering capabilities. Powerful yet
            user-friendly, ensuring high rendering stability and employing
            various measures to safeguard your render files, providing reliable
            protection for your rendering tasks.
          </TextAnimate>
          <BlurFade delay={0.1} inView>
            <div className="flex space-x-10">
              <Link href={"https://blendermarket.com/products/renderworkshop"}>
                <Button
                  className="bg-blender_orange  font-semibold text-center mt-5 shadow-none leading-none tracking-wide whitespace-pre-wrap"
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
        <div className="  w-1/2 flex flex-col justify-center">
          <div className="grid grid-cols-2 gap-8">
            <BlurFade delay={0.25 * 2} inView>
              <div className="rounded-md aspect-square flex flex-col justify-center items-center">
                <Image
                  src="/img/manager-Rendering.png"
                  alt=""
                  className="rounded-md shadow-md"
                  width={300}
                  height={500}
                />
                <p className="font-light text-xs opacity-60 mt-2">
                  manager-Rendering
                </p>
              </div>
            </BlurFade>
            <BlurFade delay={0.25 * 3} inView>
              <div className="rounded-md aspect-square flex flex-col justify-center items-center">
                <Image
                  src="/img/manager-Idling.png"
                  alt=""
                  className="rounded-md shadow-md"
                  width={300}
                  height={500}
                />
                <p className="font-light text-xs opacity-60 mt-2">
                  manager-Idling
                </p>
              </div>
            </BlurFade>
            <BlurFade delay={0.25 * 4} inView>
              <div className="rounded-md  flex flex-col justify-center items-center">
                <Image
                  src="/img/worker_home.png"
                  alt=""
                  className="rounded-md shadow-md"
                  width={300}
                  height={500}
                />
                <p className="font-light text-xs opacity-60 mt-2">
                  worker-HomePage
                </p>
              </div>
            </BlurFade>
            <BlurFade delay={0.25 * 5} inView>
              <div className="rounded-md  flex flex-col justify-center items-center">
                <Image
                  src="/img/worker_setting.png"
                  alt=""
                  className="rounded-md shadow-md"
                  width={300}
                  height={500}
                />
                <p className="font-light text-xs opacity-60 mt-2">
                  worker-SettingPage
                </p>
              </div>
            </BlurFade>
          </div>
        </div>
      </div>
    </>
  );
}
