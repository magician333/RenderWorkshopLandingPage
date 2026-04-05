import { GridPattern } from "@/components/ui/grid-pattern";
import Highlights from "./highlights";
import Intro from "./intro";
import { cn } from "@/lib/utils";
import VideoPlayer from "./videoplay";
import Footer from "./footer";
import Doc from "./doc/doc";
import Service from "./service";
import Changelog from "./changelog/changelog";
import Buy from "./buy";
import { Work } from "./work";
import FAQ from "./faq";


import TabSwitcher from "./tab-switcher";

import HowItWorks from "./how-it-works";

interface PageProps {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}

export default async function Home({ searchParams }: PageProps) {
  const params = await searchParams;
  const pageParam = params?.page;

  let defaultTab = "home";
  if (pageParam === "manual") {
    defaultTab = "document";
  } else if (pageParam === "changelog") {
    defaultTab = "changelog";
  }


  const homeTabContent = (
    <div className="pt-10 space-y-32">
      <Intro />
      <Highlights />

      <VideoPlayer />
      <HowItWorks />

      <Work />
      <Buy />
      <Service />
      <FAQ />
    </div>
  );

  return (
    <div className="flex flex-col w-full min-h-screen pt-10 p-4 sm:p-8 md:p-16 lg:px-32 xl:px-48 overflow-x-clip">

      <TabSwitcher
        defaultTab={defaultTab}
        homeContent={homeTabContent}
        docContent={<Doc />}
        changelogContent={<Changelog />}
      />

      <GridPattern
        width={80}
        height={80}
        x={-1}
        y={-1}
        strokeDasharray={"5 2"}
        className={cn(
          "[mask-image:radial-gradient(800px_circle_at_center,white,transparent)]"
        )}
      />
      <Footer />
    </div>
  );
}