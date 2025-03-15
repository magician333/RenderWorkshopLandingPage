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
      <div>
        <div className="flex flex-col w-screen h-screen pt-10 pl-48 pr-48 ">
          <Tabs defaultValue="home" className="z-10">
            <TabsList>
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
        </div>
      </div>
    </>
  );
}
