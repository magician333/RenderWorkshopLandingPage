import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function FAQ() {
  const faqData = [
    {
      value: "item-1",
      question: "Does it support image or animation rendering?",
      answer: "Yes, we're all for it.",
    },
    {
      value: "item-2",
      question: "What does the rendering engine support?",
      answer:
        "We currently only support the built-in EEVEE Next and Cycles rendering engines. If you have other engine adaptations, feel free to ask us!",
    },
    {
      value: "item-3",
      question: "Does worker take up a lot of computer resources?",
      answer:
        "The worker is just a command line program that takes up less than 10MB of memory when not rendering and does not consume CPU/GPU resources. When it receives a render job, it will call Blender to consume the computer's performance.",
    },
    {
      value: "item-4",
      question: "How to make sure files are not lost during rendering?",
      answer:
        "Make sure you have a shared read/write folder with the blend files you need to render. After rendering is done, it will automatically check for missing tiles or frames and re-render until completed!",
    },
    {
      value: "item-5",
      question:
        "My files involve privacy and security, will RenderWorkshop have the ability to upload data or read the contents of other files?",
      answer:
        "Manager and worker need network access only for transferring data between each other, generally for LAN intranet, and will not upload any of your information to any other server. Neither manager nor worker has the ability to read irrelevant files.",
    },
    {
      value: "item-6",
      question:
        "My manager and worker can't connect to each other, what should I do?",
      answer:
        "Ensure the server IP address and port in config.json under the worker folder are filled in correctly, and that both manager and worker have network privileges. Check your firewall to ensure they are not blocked!",
    },
    {
      value: "item-7",
      question: "How should I find the rendered output?",
      answer:
        "You can see the rendered output in the folder where the blend file is stored. Be sure to give read and write permissions to this folder on all computers before rendering!",
    },
    {
      value: "item-8",
      question:
        "Why does the worker use TUI to run in the terminal instead of using GUI?",
      answer:
        "Running in the terminal saves computer resources. You can run workers on servers that may not have a graphical interface, making it suitable for distributed deployment. We will develop a built-in worker plug-in for Blender in the future.",
    },
    {
      value: "item-9",
      question:
        "What is UPnP? Why does it ask me for network permissions when I start Worker?",
      answer:
        "UPnP is a network automatic discovery protocol that can automatically discover and connect to the manager. If there is no automatic connection, it may be due to subnet issues or UPnP not being enabled on your router.",
    },
    {
      value: "item-10",
      question:
        "Why is online rendering of a single image sometimes not as fast as local rendering?",
      answer:
        "Online rendering involves slicing the image into segments for distribution among computers, which can slow down the process due to multiple starts and stops of Blender and network transmission time.",
    },
  ];
  return (
    <>
      <div>
        <div className="mt-10 w-3/4 mx-auto">
          <h1 className="text-4xl font-semibold mb-6">RenderWorkshop FAQ</h1>
          <Accordion type="single" collapsible className="w-full">
            {faqData.map((item) => (
              <AccordionItem key={item.value} value={item.value}>
                <AccordionTrigger className="font-semibold text-sm">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent>{item.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </>
  );
}
