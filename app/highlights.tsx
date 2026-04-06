"use client";

import { TextAnimate } from "@/components/ui/text-animate";
import {BlurFade} from "@/components/ui/blur-fade";
import { cn } from "@/lib/utils";
import {
  CloudOffIcon,
  CpuIcon,
  FileScanIcon,
  FilmIcon,
  HeartPulseIcon,
  ImagesIcon,
  ListTodoIcon,
  NetworkIcon,
  SmileIcon,
} from "lucide-react";
import { SVGProps } from "react";

export default function Highlights() {
  
  const BlenderIcon = ({ className, width, height, fill, ...props }: SVGProps<SVGSVGElement>) => {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={width || "24"}
        height={height || "24"}
        viewBox="0 0 24 24"
        fill={fill || "currentColor"}
        className={className}
        {...props}
      >
        <path d="M12.51 13.214c.046-.8.438-1.506 1.03-2.006a3.42 3.42 0 0 1 2.212-.79c.85 0 1.631.3 2.211.79c.592.5.983 1.206 1.028 2.005c.045.823-.285 1.586-.865 2.153a3.4 3.4 0 0 1-2.374.938a3.4 3.4 0 0 1-2.376-.938c-.58-.567-.91-1.33-.865-2.152M7.35 14.831c.006.314.106.922.256 1.398a7.4 7.4 0 0 0 1.593 2.757a8.2 8.2 0 0 0 2.787 2.001a8.95 8.95 0 0 0 3.66.76a9 9 0 0 0 3.657-.772a8.3 8.3 0 0 0 2.785-2.01a7.4 7.4 0 0 0 1.592-2.762a7 7 0 0 0 .25-3.074a7.1 7.1 0 0 0-1.016-2.779a7.8 7.8 0 0 0-1.852-2.043h.002L13.566 2.55l-.02-.015c-.492-.378-1.319-.376-1.86.002c-.547.382-.609 1.015-.123 1.415l-.001.001l3.126 2.543l-9.53.01h-.013c-.788.001-1.545.518-1.695 1.172c-.154.665.38 1.217 1.2 1.22V8.9l4.83-.01l-8.62 6.617l-.034.025c-.813.622-1.075 1.658-.563 2.313c.52.667 1.625.668 2.447.004L7.414 14s-.069.52-.063.831zm12.09 1.741c-.97.988-2.326 1.548-3.795 1.55c-1.47.004-2.827-.552-3.797-1.538a4.5 4.5 0 0 1-1.036-1.622a4.28 4.28 0 0 1 .282-3.519a4.7 4.7 0 0 1 1.153-1.371c.942-.768 2.141-1.183 3.396-1.185c1.256-.002 2.455.41 3.398 1.175c.48.391.87.854 1.152 1.367a4.3 4.3 0 0 1 .522 1.706a4.2 4.2 0 0 1-.239 1.811a4.5 4.5 0 0 1-1.035 1.626" />
      </svg>
    );
  };

  
  const features = [
    {
      id: "blender",
      name: "Blender Deep Integration",
      description: "UI integration. Automatically read Blender rendering parameters without manual repeated settings.",
      Icon: BlenderIcon,
      
      className: "md:col-span-2 md:row-span-2 bg-gradient-to-br from-orange-500 to-orange-600 text-white shadow-lg shadow-orange-500/20",
      iconClass: "text-white group-hover:animate-[spin_4s_linear_infinite]",
      descClass: "text-orange-50",
      bgIconClass: "text-orange-950/20",
    },
    {
      id: "local-farm",
      name: "Local Render Farm",
      description: "Queue scenes for rendering without internet, enabling private render farms. Deploy for yourself.",
      Icon: CloudOffIcon,
      
      className: "md:col-span-2 bg-zinc-900 text-white dark:bg-black border border-zinc-800 shadow-xl",
      iconClass: "text-zinc-200 group-hover:-translate-y-1 transition-transform duration-300",
      descClass: "text-zinc-400",
      bgIconClass: "text-white/5",
    },
    {
      id: "render-queue",
      name: "Render Queue",
      description: "Add multiple scenes to the render queue and efficiently batch render all your content at once.",
      Icon: ListTodoIcon,
      
      className: "md:col-span-1 bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800",
      iconClass: "text-zinc-700 dark:text-zinc-300 group-hover:scale-110 transition-transform duration-300",
      descClass: "text-zinc-500 dark:text-zinc-400",
      bgIconClass: "text-zinc-900/5 dark:text-white/5",
    },
    {
      id: "multi-method",
      name: "Multi-Method Rendering",
      description: "Supports local, remote and distributed cluster rendering, which is flexible and efficient.",
      Icon: NetworkIcon,
      
      className: "md:col-span-1 bg-gradient-to-br from-blue-500 to-blue-600 text-white shadow-lg shadow-blue-500/20",
      iconClass: "text-white group-hover:animate-pulse",
      descClass: "text-blue-50",
      bgIconClass: "text-blue-950/20",
    },
    {
      id: "image-anim",
      name: "Image & Anim Support",
      description: "Supports still image (tiles & samples) and animation sequence rendering.",
      Icon: ImagesIcon,
      className: "md:col-span-1 bg-zinc-50 dark:bg-zinc-900/50 border border-zinc-200 dark:border-zinc-800",
      iconClass: "text-zinc-600 dark:text-zinc-400 group-hover:scale-110 transition-transform duration-300",
      descClass: "text-zinc-500 dark:text-zinc-400",
      bgIconClass: "text-zinc-900/5 dark:text-white/5",
    },
    {
      id: "aov",
      name: "AOV Support",
      description: "Supports batch rendering of multi-channel images and multi-layer images at one time.",
      Icon: FilmIcon,
      className: "md:col-span-1 bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800",
      iconClass: "text-zinc-600 dark:text-zinc-400 group-hover:-translate-y-1 transition-transform duration-300",
      descClass: "text-zinc-500 dark:text-zinc-400",
      bgIconClass: "text-zinc-900/5 dark:text-white/5",
    },
    {
      id: "heartbeat",
      name: "Heartbeat Detection",
      description: "Tasks can still be assigned to other online workers even after the worker goes offline or broken.",
      Icon: HeartPulseIcon,
      className: "md:col-span-2 bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800",
      iconClass: "text-red-500 group-hover:animate-bounce",
      descClass: "text-zinc-500 dark:text-zinc-400",
      bgIconClass: "text-red-500/5",
    },
    {
      id: "file-sec",
      name: "File Security",
      description: "Before rendering the MD5 file comparison. Check and re-render the miss after rendering.",
      Icon: FileScanIcon,
      className: "md:col-span-1 bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800",
      iconClass: "text-zinc-600 dark:text-zinc-400 group-hover:rotate-12 transition-transform duration-300",
      descClass: "text-zinc-500 dark:text-zinc-400",
      bgIconClass: "text-zinc-900/5 dark:text-white/5",
    },
    {
      id: "deploy",
      name: "Easy Deployment",
      description: "Deployment can be completed with one configuration, simple, convenient and powerful.",
      Icon: SmileIcon,
      className: "md:col-span-2 bg-zinc-50 dark:bg-zinc-900/50 border border-zinc-200 dark:border-zinc-800",
      iconClass: "text-green-500 group-hover:scale-110 transition-transform duration-300",
      descClass: "text-zinc-500 dark:text-zinc-400",
      bgIconClass: "text-green-500/5",
    },
    {
      id: "cpu",
      name: "Low Resources Usage",
      description: "Minimal resources consumption during standby, allowing workers to wake on demand.",
      Icon: CpuIcon,
      className: "md:col-span-1 bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800",
      iconClass: "text-zinc-600 dark:text-zinc-400 group-hover:-translate-y-1 transition-transform duration-300",
      descClass: "text-zinc-500 dark:text-zinc-400",
      bgIconClass: "text-zinc-900/5 dark:text-white/5",
    },
  ];

  return (
    <div className="flex flex-col justify-center items-center py-16 px-4 sm:px-6 w-full overflow-hidden">

      <BlurFade inView>
        <TextAnimate
          animation="blurInUp"
          by="word"
          as="h2"
          className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-10 tracking-tighter text-center"
        >
          RenderWorkshop Features
        </TextAnimate>
      </BlurFade>

      
      <div className="w-full max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 auto-rows-[minmax(180px,auto)] gap-4 sm:gap-6">

        {features.map((item, index) => (
          <BlurFade
            key={item.id}
            delay={index * 0.05} 
            className={cn(
              "group relative flex flex-col justify-between overflow-hidden rounded-[2.5rem] p-8 transition-all duration-500 hover:shadow-2xl hover:-translate-y-1",
              item.className
            )}
          >
            
            <item.Icon
              className={cn(
                "absolute -right-6 -bottom-6 w-48 h-48 transition-transform duration-500 group-hover:scale-110 group-hover:-rotate-12",
                item.bgIconClass
              )}
            />

            
            <div className="relative z-10 flex flex-col h-full gap-6">
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
                <div className="p-3 rounded-2xl bg-white/10 dark:bg-black/10 backdrop-blur-md shadow-inner border border-white/20 dark:border-white/5">
                  <item.Icon className={cn("w-7 h-7", item.iconClass)} />
                </div>
                <h3 className="font-bold text-xl sm:text-2xl tracking-tight leading-tight">
                  {item.name}
                </h3>
              </div>

              
              <p className={cn("text-base leading-relaxed mt-auto", item.descClass)}>
                {item.description}
              </p>
            </div>
          </BlurFade>
        ))}

      </div>
    </div>
  );
}