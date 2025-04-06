import Image from "next/image";
import Link from "next/link";
import { SVGProps } from "react";

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
  function BrandYoutube(props: SVGProps<SVGSVGElement>) {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="1.43em"
        height="1em"
        viewBox="0 0 256 180"
        {...props}
      >
        <path
          fill="red"
          d="M250.346 28.075A32.18 32.18 0 0 0 227.69 5.418C207.824 0 127.87 0 127.87 0S47.912.164 28.046 5.582A32.18 32.18 0 0 0 5.39 28.24c-6.009 35.298-8.34 89.084.165 122.97a32.18 32.18 0 0 0 22.656 22.657c19.866 5.418 99.822 5.418 99.822 5.418s79.955 0 99.82-5.418a32.18 32.18 0 0 0 22.657-22.657c6.338-35.348 8.291-89.1-.164-123.134"
        />
        <path fill="#FFF" d="m102.421 128.06l66.328-38.418l-66.328-38.418z" />
      </svg>
    );
  }
  function BrandFacebook(props: SVGProps<SVGSVGElement>) {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="1em"
        height="1em"
        viewBox="0 0 256 256"
        {...props}
      >
        <path
          fill="#1877F2"
          d="M256 128C256 57.308 198.692 0 128 0S0 57.308 0 128c0 63.888 46.808 116.843 108 126.445V165H75.5v-37H108V99.8c0-32.08 19.11-49.8 48.348-49.8C170.352 50 185 52.5 185 52.5V84h-16.14C152.959 84 148 93.867 148 103.99V128h35.5l-5.675 37H148v89.445c61.192-9.602 108-62.556 108-126.445"
        />
        <path
          fill="#FFF"
          d="m177.825 165l5.675-37H148v-24.01C148 93.866 152.959 84 168.86 84H185V52.5S170.352 50 156.347 50C127.11 50 108 67.72 108 99.8V128H75.5v37H108v89.445A129 129 0 0 0 128 256a129 129 0 0 0 20-1.555V165z"
        />
      </svg>
    );
  }
  function BrandGithub(props: SVGProps<SVGSVGElement>) {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="1.03em"
        height="1em"
        viewBox="0 0 256 250"
        {...props}
      >
        <path
          fill="#161614"
          d="M128.001 0C57.317 0 0 57.307 0 128.001c0 56.554 36.676 104.535 87.535 121.46c6.397 1.185 8.746-2.777 8.746-6.158c0-3.052-.12-13.135-.174-23.83c-35.61 7.742-43.124-15.103-43.124-15.103c-5.823-14.795-14.213-18.73-14.213-18.73c-11.613-7.944.876-7.78.876-7.78c12.853.902 19.621 13.19 19.621 13.19c11.417 19.568 29.945 13.911 37.249 10.64c1.149-8.272 4.466-13.92 8.127-17.116c-28.431-3.236-58.318-14.212-58.318-63.258c0-13.975 5-25.394 13.188-34.358c-1.329-3.224-5.71-16.242 1.24-33.874c0 0 10.749-3.44 35.21 13.121c10.21-2.836 21.16-4.258 32.038-4.307c10.878.049 21.837 1.47 32.066 4.307c24.431-16.56 35.165-13.12 35.165-13.12c6.967 17.63 2.584 30.65 1.255 33.873c8.207 8.964 13.173 20.383 13.173 34.358c0 49.163-29.944 59.988-58.447 63.157c4.591 3.972 8.682 11.762 8.682 23.704c0 17.126-.148 30.91-.148 35.126c0 3.407 2.304 7.398 8.792 6.14C219.37 232.5 256 184.537 256 128.002C256 57.307 198.691 0 128.001 0m-80.06 182.34c-.282.636-1.283.827-2.194.39c-.929-.417-1.45-1.284-1.15-1.922c.276-.655 1.279-.838 2.205-.399c.93.418 1.46 1.293 1.139 1.931m6.296 5.618c-.61.566-1.804.303-2.614-.591c-.837-.892-.994-2.086-.375-2.66c.63-.566 1.787-.301 2.626.591c.838.903 1 2.088.363 2.66m4.32 7.188c-.785.545-2.067.034-2.86-1.104c-.784-1.138-.784-2.503.017-3.05c.795-.547 2.058-.055 2.861 1.075c.782 1.157.782 2.522-.019 3.08m7.304 8.325c-.701.774-2.196.566-3.29-.49c-1.119-1.032-1.43-2.496-.726-3.27c.71-.776 2.213-.558 3.315.49c1.11 1.03 1.45 2.505.701 3.27m9.442 2.81c-.31 1.003-1.75 1.459-3.199 1.033c-1.448-.439-2.395-1.613-2.103-2.626c.301-1.01 1.747-1.484 3.207-1.028c1.446.436 2.396 1.602 2.095 2.622m10.744 1.193c.036 1.055-1.193 1.93-2.715 1.95c-1.53.034-2.769-.82-2.786-1.86c0-1.065 1.202-1.932 2.733-1.958c1.522-.03 2.768.818 2.768 1.868m10.555-.405c.182 1.03-.875 2.088-2.387 2.37c-1.485.271-2.861-.365-3.05-1.386c-.184-1.056.893-2.114 2.376-2.387c1.514-.263 2.868.356 3.061 1.403"
        />
      </svg>
    );
  }

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
    <div className="bg-white w-full pt-16 mt-32 pb-32 border-t border-opacity-60">
      <div className="container mx-auto px-4">
        {/* Increased gap between columns */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-16"> {/* Increased gap-8 to gap-12 md:gap-16 */}
          <div className="text-center md:text-left">
            <div className="flex justify-center md:justify-start">
              <Image src="/logo/logo.svg" alt="logo" width={200} height={100} />
            </div>
            <p className="font-medium text-xs opacity-75 mt-2">
              Multi-Device, Distributed, Batch Rendering System
            </p>
          </div>

          <div className="text-center md:text-left">
            {/* Added bottom margin to title */}
            <p className="font-semibold text-lg mb-3">Other Opus</p>
            <div className="space-y-1 mt-2"> {/* Added mt-2 for spacing */}
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
            {/* Added bottom margin to title */}
            <p className="font-semibold text-lg mb-3">Follow Me</p>
            {/* Adjusted spacing for social icons */}
            <div className="space-x-3 md:space-x-4 flex justify-center md:justify-start mt-2">
              {" "}
              {/* Added justify-center/start and mt-2 */}
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
