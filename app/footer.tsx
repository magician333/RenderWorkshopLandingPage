import Image from "next/image";
import Link from "next/link";
import { BrandFacebook, BrandGithub, BrandYoutube } from "@mynaui/icons-react";

export default function Footer() {
  const opus = [
    {
      name: "AxisGTD",
      url: "https://www.axisgtd.work",
    },
    {
      name: "Quick Toggle Visibility",
      url: "https://blendermarket.com/products/quick-toggle-visibility",
    },
  ];

  const media = [
    {
      name: "Youtube",
      url: "https://youtu.be/abgkecRtERs",
      icon: BrandYoutube,
    },
    {
      name: "Facebook",
      url: "https://www.facebook.com/profile.php?id=100011297263138",
      icon: BrandFacebook,
    },
    {
      name: "Github",
      url: "https://github.com/magician333",
      icon: BrandGithub,
    },
  ];

  return (
    <div className="bg-white w-full pt-10 mt-10 pb-20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center md:text-left">
            <div className="flex justify-center md:justify-start">
              <Image src="/logo/logo.svg" alt="logo" width={200} height={100} />
            </div>
            <p className="font-medium text-xs opacity-75 mt-2">
              Multi-Device, Distributed, Batch Rendering System
            </p>
          </div>

          <div className="text-center md:text-left">
            <p className="font-semibold text-lg">Other Opus</p>
            <div className="space-y-1">
              {opus.map((item) => (
                <Link href={item.url} key={item.name}>
                  <p className="font-medium text-sm hover:opacity-100">
                    {item.name}
                  </p>
                </Link>
              ))}
            </div>
          </div>

          <div className="text-center md:text-left">
            <p className="font-semibold text-lg">Follow Me</p>
            <div className="space-x-1 flex ">
              {media.map((item) => (
                <Link href={item.url} key={item.name}>
                  <item.icon />
                  {/* <p className="font-medium text-sm opacity-30 hover:opacity-100">
                    {item.name}
                  </p> */}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
