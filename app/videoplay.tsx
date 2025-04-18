import HeroVideoDialog from "@/components/ui/hero-video-dialog";
import { TextAnimate } from "@/components/ui/text-animate";

export default function VideoPlayer() {
  return (
    <>
      <div className="flex flex-col justify-center items-center">
        <div>
          <TextAnimate
            animation="blurIn"
            by="line"
            as="p"
            // Responsive title size
            className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-5 tracking-wider text-center" // Added text-center
          >
            Introducing RenderWorkshop
          </TextAnimate>
        </div>
        <HeroVideoDialog
          className="dark:hidden block rounded-2xl"
          animationStyle="from-center"
          videoSrc="https://www.youtube.com/embed/abgkecRtERs?si=CXyOeG6L3LhJl4cW"
          thumbnailSrc="/img/video_thum.jpg"
          thumbnailAlt="Introducing RenderWorkshop"
        />
      </div>
    </>
  );
}
