import { BlurFade } from "@/components/ui/blur-fade";
import { TextAnimate } from "@/components/ui/text-animate";

export default function Service() {
  return (
    <>
      <div className="flex flex-col justify-center items-center">
        <TextAnimate
          animation="blurIn"
          by="line"
          as="p"
          className="text-5xl font-bold mb-5 tracking-wider"
        >
          Service Statement
        </TextAnimate>
        <BlurFade delay={0.1} inView>
          <p>
            Your privacy is our priority. When using RenderWorkshop, please be
            assured that we do not collect any personal information. The
            software operates entirely offline and does not engage in any data
            uploading or network connections. All activities are conducted in
            compliance with regulations. RenderWorkshop is a one-time purchase
            with a perpetual license, and there are no additional services or
            fees. Updates are provided free of charge. Should you encounter any
            issues while using RenderWorkshop, please feel free to contact us at{" "}
            <a href="mailto:magician33333@gmail.com" className=" underline">
              magician33333@gmail.com
            </a>
            . We are committed to assisting you with any problems that may arise
            during your use of RenderWorkshop.
          </p>
        </BlurFade>
      </div>
    </>
  );
}
