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
            className="text-5xl font-bold mb-5 tracking-wider"
          >
            Introducing Video
          </TextAnimate>
        </div>
        <HeroVideoDialog
          className="dark:hidden block"
          animationStyle="from-center"
          videoSrc="https://www.youtube.com/embed/abgkecRtERs?si=CXyOeG6L3LhJl4cW"
          thumbnailSrc="/img/video_thum.jpg"
          thumbnailAlt="Introducing RenderWorkshop"
        />
      </div>
    </>
  );
}
