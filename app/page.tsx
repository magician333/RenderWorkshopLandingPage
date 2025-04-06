import { GridPattern } from "@/components/ui/grid-pattern";
import Highlights from "./highlights";
import Intro from "./intro";
import { cn } from "@/lib/utils";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import VideoPlayer from "./videoplay";
import Footer from "./footer";
import Doc from "./doc/doc";
import Service from "./service";
import Changelog from "./changelog/changelog";
import Buy from "./buy";
import { Work } from "./work";
import FAQ from "./faq";

export default function Home() {
  return (
    <>
      {/* Removed h-screen to allow content to determine height */}
      {/* Adjusted padding for responsiveness: p-4 on small screens, increasing up to pl-48 pr-48 on large screens */}
      <div className="flex flex-col w-screen min-h-screen pt-10 p-4 sm:p-8 md:p-16 lg:px-32 xl:px-48">
        <Tabs defaultValue="home" className="z-10 w-full"> {/* Added w-full to Tabs */}
          <TabsList className="overflow-x-auto"> {/* Allow scrolling on small screens if needed */}
            <TabsTrigger value="home" className=" tracking-wide">
                Home
              </TabsTrigger>
              <TabsTrigger value="document" className=" tracking-wide">
                Document
              </TabsTrigger>
              <TabsTrigger value="changelog" className=" tracking-wide">
                Changelog
              </TabsTrigger>
            </TabsList>
            <TabsContent value="home">
              <div className="pt-10 space-y-32">
                <Intro />
                <Highlights />
                <VideoPlayer />
                <Work />
                <Buy />
                <Service />
                <FAQ />
    
              </div>
            </TabsContent>
            <TabsContent value="document">
              <Doc />
            </TabsContent>
            <TabsContent value="changelog">
              <Changelog />
            </TabsContent>
          </Tabs>

          <GridPattern
            width={80}
            height={80}
            x={-1}
            y={-1}
            strokeDasharray={"5 2"}
            className={cn(
              "[mask-image:radial-gradient(800px_circle_at_center,white,transparent)]"
              // "inset-x-0 inset-y-[-30%] h-[200%] skew-y-12"
            )}
          />
          <Footer />
        </div> {/* This closes the main content div */}
      {/* Removed the extra closing div here */}
    </>
  );
}
