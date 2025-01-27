import Image from "next/image";
import Link from "next/link";
export default function Footer() {
  return (
    <>
      <div
        className="bg-white w-screen pt-10 mt-10 h-96 grid grid-cols-3 pb-20
      28"
      >
        <div className="ml-28">
          <Image
            src={"/logo.svg"}
            alt={"logo"}
            width={300}
            height={100}
          ></Image>
          <p className="font-semibold text-xs opacity-75">
            Multi-Device, Distributed, Batch Rendering System
          </p>
        </div>
        <div className="space-y-1">
          <p className="font-semibold text-lg">Other Opus</p>
          <Link href={"https://www.axisgtd.work"}>
            <p className="font-medium text-sm opacity-30 hover:opacity-100">
              AxisGTD
            </p>
          </Link>
          <Link
            href={"https://blendermarket.com/products/quick-toggle-visibility"}
          >
            <p className="font-medium text-sm opacity-30 hover:opacity-100">
              Quick Toggle Visibility
            </p>
          </Link>
        </div>
        <div className="space-y-1">
          <p className="font-semibold text-lg">Follow Me</p>
          <Link href={"https://youtu.be/abgkecRtERs"}>
            <p className="font-medium text-sm opacity-30 hover:opacity-100">
              Youtube
            </p>
          </Link>
          <Link
            href={"https://www.facebook.com/profile.php?id=100011297263138"}
          >
            <p className="font-medium text-sm opacity-30 hover:opacity-100">
              Facebook
            </p>
          </Link>
          <Link href={"https://github.com/magician333"}>
            <p className="font-medium text-sm opacity-30 hover:opacity-100">
              Github
            </p>
          </Link>
        </div>
      </div>
    </>
  );
}
