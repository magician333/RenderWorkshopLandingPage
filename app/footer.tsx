import Image from "next/image";
import Link from "next/link";

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
    },
    {
      name: "Facebook",
      url: "https://www.facebook.com/profile.php?id=100011297263138",
    },
    {
      name: "Github",
      url: "https://github.com/magician333",
    },
  ];

  return (
    <div className="bg-white w-screen pt-10 mt-10 h-96 grid grid-cols-3 pb-20">
      <div className="ml-28">
        <Image src="/logo/logo.svg" alt="logo" width={200} height={100} />
        <p className="font-medium text-xs opacity-75">
          Multi-Device, Distributed, Batch Rendering System
        </p>
      </div>

      <div className="space-y-1">
        <p className="font-semibold text-lg">Other Opus</p>
        {opus.map((item) => (
          <Link href={item.url} key={item.name}>
            <p className="font-medium text-sm opacity-30 hover:opacity-100">
              {item.name}
            </p>
          </Link>
        ))}
      </div>

      <div className="space-y-1">
        <p className="font-semibold text-lg">Follow Me</p>
        {media.map((item) => (
          <Link href={item.url} key={item.name}>
            <p className="font-medium text-sm opacity-30 hover:opacity-100">
              {item.name}
            </p>
          </Link>
        ))}
      </div>
    </div>
  );
}
