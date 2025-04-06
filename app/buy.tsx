import { Button } from "@/components/ui/button";
import { TextAnimate } from "@/components/ui/text-animate";
import { BadgeCheck } from "lucide-react";
import Image from "next/image";

export default function Buy() {
  const market = [
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
  ];
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
            Where to Get it
          </TextAnimate>
        </div>
        {/* Changed flex layout: col on small, row on medium+, adjusted gap/alignment/margin */}
        <div className="flex flex-col md:flex-row w-full justify-center items-stretch md:items-start gap-8 md:gap-12 mt-8">
          {market.map((item) => (
            <div
              key={item.name}
              // Removed fixed w/h, whitespace-nowrap. Added responsive width, padding, justify-between
              className="shadow-[0_1px_1px_rgba(0,0,0,0.05),0_4px_6px_rgba(34,42,53,0.04),0_24px_68px_rgba(47,48,55,0.05),0_2px_3px_rgba(0,0,0,0.04)] rounded-2xl p-6 md:p-10 w-full md:w-96 flex flex-col justify-between items-center text-center"
            >
              {/* Top section for image, price, status */}
              <div>
                <Image
                  width={300}
                  height={200}
                  src={`/platform/${item.icon}`}
                  alt="logo"
                  className="mb-4 object-contain max-h-[60px] mx-auto" // Reduced margin, added max-h, centered image
                />
                <p className="font-semibold text-3xl md:text-4xl text-blender_orange mt-2">
                  {" "}
                  {/* Responsive price size */}
                  {item.price}
                </p>
                <p className="font-medium text-sm text-blender_blue">
                  {item.status}
                </p>
              </div>

              {/* Middle section for features */}
              {/* Reduced bottom margin, added text-sm */}
              <div className="flex flex-col justify-center my-6 text-sm space-y-1">
                {" "}
                {/* Changed mb/mt to my, added space-y */}
                <p className="font-semibold">Contains features: {item.func}</p>
                <p className="font-semibold">Service: {item.service}</p>
                <p className="font-semibold">Update fee: {item.update_fee}</p>
              </div>

              {/* Bottom section for button */}
              <Button
                className="font-semibold bg-blender_orange w-full mt-auto" // Added w-full and mt-auto to push button down
                disabled={item.url === "#" ? true : false}
              >
                <a
                  href={item.url}
                  className="flex items-center justify-center w-full"
                >
                  {" "}
                  {/* Ensure link fills button */}
                  Get it
                  <BadgeCheck className="size-5 ml-2" />{" "}
                  {/* Reduced size, adjusted margin */}
                </a>
              </Button>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
