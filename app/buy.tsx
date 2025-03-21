import { Button } from "@/components/ui/button";
import { TextAnimate } from "@/components/ui/text-animate";
import { BadgeCheck } from "lucide-react";
import Image from "next/image";

export default function Buy() {
  const market = [
    {
      name: "BlenderMarket",
      url: "https://blendermarket.com/products/renderworkshop",
      price: "$49.99",
      service: "Long-term support",
      update_fee: "Free",
      func: "All features",
      status: "In sale",
      icon: "blendermarket.png",
      recommend: true,
    },
    {
      name: "Gumroad",
      url: "https://spellbinder6.gumroad.com/l/renderworkshop",
      price: "$49.99",
      service: "Long-term support",
      update_fee: "Free",
      func: "All features",
      status: "In sale",
      icon: "gumroad.png",
      recommend: false,
    },
  ];
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
            Where to Get it
          </TextAnimate>
        </div>
        <div className="flex  w-full justify-center items-center space-x-12">
          {market.map((item) => (
            <div
              key={item.name}
              className="shadow-[0_1px_1px_rgba(0,0,0,0.05),0_4px_6px_rgba(34,42,53,0.04),0_24px_68px_rgba(47,48,55,0.05),0_2px_3px_rgba(0,0,0,0.04)] rounded-2xl whitespace-nowrap pt-10 pb-10 w-96 h-96 flex flex-col justify-center items-center text-center"
            >
              <Image
                width={300}
                height={200}
                src={`/platform/${item.icon}`}
                alt="logo"
                className="mb-10 object-contain"
              />
              <p className="font-semibold text-4xl text-blender_orange">
                {item.price}
              </p>
              <p className="font-medium text-sm text-blender_blue">
                {item.status}
              </p>

              <div className="flex flex-col justify-center mb-16 mt-3">
                <p className="font-semibold">Contains features: {item.func}</p>
                <p className="font-semibold">Service: {item.service}</p>
                <p className="font-semibold">Update fee: {item.update_fee}</p>
              </div>

              <Button
                className="font-semibold bg-blender_orange"
                disabled={item.url === "#" ? true : false}
              >
                <a href={item.url}>Get it</a>
                <BadgeCheck className="size-10" />
              </Button>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
