import { TextAnimate } from "@/components/ui/text-animate";
import {
  CloudOffIcon,
  CpuIcon,
  FileScanIcon,
  HeartPulseIcon,
  ImagesIcon,
  LanguagesIcon,
  ListTodoIcon,
  NetworkIcon,
  SmileIcon,
} from "lucide-react";
import { JSX, SVGProps } from "react";

export default function Highlights() {
  const BlenderIcon = (
    props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>
  ) => {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={props.width || "24"}
        height={props.height || "24"}
        viewBox="0 0 24 24"
        fill={props.fill || "#404040"}
        {...props}
      >
        <path d="M12.51 13.214c.046-.8.438-1.506 1.03-2.006a3.42 3.42 0 0 1 2.212-.79c.85 0 1.631.3 2.211.79c.592.5.983 1.206 1.028 2.005c.045.823-.285 1.586-.865 2.153a3.4 3.4 0 0 1-2.374.938a3.4 3.4 0 0 1-2.376-.938c-.58-.567-.91-1.33-.865-2.152M7.35 14.831c.006.314.106.922.256 1.398a7.4 7.4 0 0 0 1.593 2.757a8.2 8.2 0 0 0 2.787 2.001a8.95 8.95 0 0 0 3.66.76a9 9 0 0 0 3.657-.772a8.3 8.3 0 0 0 2.785-2.01a7.4 7.4 0 0 0 1.592-2.762a7 7 0 0 0 .25-3.074a7.1 7.1 0 0 0-1.016-2.779a7.8 7.8 0 0 0-1.852-2.043h.002L13.566 2.55l-.02-.015c-.492-.378-1.319-.376-1.86.002c-.547.382-.609 1.015-.123 1.415l-.001.001l3.126 2.543l-9.53.01h-.013c-.788.001-1.545.518-1.695 1.172c-.154.665.38 1.217 1.2 1.22V8.9l4.83-.01l-8.62 6.617l-.034.025c-.813.622-1.075 1.658-.563 2.313c.52.667 1.625.668 2.447.004L7.414 14s-.069.52-.063.831zm12.09 1.741c-.97.988-2.326 1.548-3.795 1.55c-1.47.004-2.827-.552-3.797-1.538a4.5 4.5 0 0 1-1.036-1.622a4.28 4.28 0 0 1 .282-3.519a4.7 4.7 0 0 1 1.153-1.371c.942-.768 2.141-1.183 3.396-1.185c1.256-.002 2.455.41 3.398 1.175c.48.391.87.854 1.152 1.367a4.3 4.3 0 0 1 .522 1.706a4.2 4.2 0 0 1-.239 1.811a4.5 4.5 0 0 1-1.035 1.626" />
      </svg>
    );
  };

  const features = [
    {
      Icon: NetworkIcon,
      name: "Multi-Method Rendering",
      description:
        "Supports local, remote, and distributed batch rendering for flexibility.",
      href: "#",
      className: "col-span-5 lg:col-span-1",
      cta: "Learn More",
      background: "",
    },
    {
      Icon: ImagesIcon,
      name: "Image & Anim Support",
      description:
        "Image and animation rendering of all file formats supported by Blender",
      href: "#",
      className: "col-span-5 lg:col-span-1",
      cta: "Learn More",
      background: "",
    },
    {
      Icon: CloudOffIcon,
      name: "Local Render Farm",
      description:
        "Queue scenes for rendering without internet, enabling private render farms.",
      href: "#",
      className: "col-span-5 lg:col-span-1",
      cta: "Learn More",
      background: "",
    },
    {
      Icon: BlenderIcon,
      name: "Blender Deep Integration",
      description:
        "UI integration. Automatically read Blender rendering parameters without manual repeated settings.",
      href: "#",
      className: "col-span-5 lg:col-span-1",
      cta: "Learn More",
      background: "",
    },
    {
      Icon: ListTodoIcon,
      name: "Custom Scene",
      description:
        "Support custom scenes. Multiple frames of a single scene do not need to be rendered repeatedly.",
      href: "#",
      className: "col-span-5 lg:col-span-1",
      cta: "Learn More",
      background: "",
    },
    {
      Icon: SmileIcon,
      name: "Easy Deployment",
      description:
        "Complete deployment with a single configuration for user-friendliness.",
      href: "#",
      className: "col-span-5 lg:col-span-1",
      cta: "Learn More",
      background: "",
    },
    {
      Icon: HeartPulseIcon,
      name: "Heartbeat Detection",
      description:
        "Tasks can still be assigned to other online workers even after the worker goes offline or broken.",
      href: "#",
      className: "col-span-5 lg:col-span-1",
      cta: "Learn More",
      background: "",
    },

    {
      Icon: FileScanIcon,
      name: "File Security Detection",
      description:
        "Before rendering the MD5 file comparison. Check and re-render the miss after rendering.",
      href: "#",
      className: "col-span-5 lg:col-span-1",
      cta: "Learn More",
      background: "",
    },
    {
      Icon: CpuIcon,
      name: "Low Resources Usage",
      description:
        "Minimal resources consumption during standby, allowing workers to wake on demand.",
      href: "#",
      className: "col-span-5 lg:col-span-1",
      cta: "Learn More",
      background: "",
    },
    {
      Icon: LanguagesIcon,
      name: "Multi-Language Support",
      description:
        "Supports various languages with options for custom display settings.",
      href: "#",
      className: "col-span-5 lg:col-span-1",
      cta: "Learn More",
      background: "",
    },
  ];
  return (
    <>
      <div className="flex flex-col justify-center items-center">
        <div>
          <TextAnimate
            animation="blurIn"
            by="line"
            as="p"
            className="text-5xl font-bold mb-5 tracking-wider"
          >
            Highlights of RenderWorkshop
          </TextAnimate>
        </div>
        <div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
            {features.map((item) => (
              <div
                className="w-72 p-5 border shadow rounded-md flex flex-col justify-start hover:shadow-md"
                key={item.name}
              >
                <item.Icon className="mb-2 mt-6 size-10 " />
                <p className="font-bold text-lg">{item.name}</p>
                <p className="text-sm tracking-tight">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
