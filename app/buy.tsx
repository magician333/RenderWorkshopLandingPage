"use client";

import { Button } from "@/components/ui/button";
import { TextAnimate } from "@/components/ui/text-animate";
import { BlurFade } from "@/components/ui/blur-fade";
import { CheckCircle2, ShieldCheck, Zap, Sparkles } from "lucide-react";
import Image from "next/image";
import { cn } from "@/lib/utils";

export default function Buy() {

  const market = [
    {
      name: "Gumroad",
      url: "https://spellbinder6.gumroad.com/l/renderworkshop",
      price: "$49.99",
      status: "One-time payment",
      icon: "gumroad.png",
      recommend: true,
      features: [
        "Lifetime license & updates",
        "Access to all advanced features",
        "Secure payment via Gumroad",
      ],
      buttonText: "Buy on Gumroad",
    },
    {
      name: "BlenderMarket",
      url: "https://blendermarket.com/products/renderworkshop",
      price: "$49.99",
      status: "One-time payment",
      icon: "blendermarket.png",
      recommend: true,
      features: [
        "Lifetime license & updates",
        "Access to all advanced features",
        "Contributes to Blender Dev Fund",
        "BlenderMarket Guarantee",
      ],
      buttonText: "Buy on BlenderMarket",
    },
    {
      name: "BiliBili工房",
      url: "https://mall.bilibili.com/neul-next/detailuniversal/detail.html?isMerchant=1&page=detailuniversal_detail&saleType=10&itemsId=12438818&loadingShow=1&noTitleBar=1&msource=merchant_shar",
      price: "￥300",
      status: "买断制",
      icon: "bilibili.png",
      recommend: false,
      features: [
        "永久授权 & 免费版本更新",
        "包含所有高级功能",
        "B站工坊官方交易担保",
      ],
      buttonText: "前往B站工坊购买",
    },
  ];

  return (
    <div id="buy-section" className="flex flex-col justify-center items-center py-20 px-4 sm:px-6 overflow-hidden w-full">


      <BlurFade inView>
        <div className="text-center space-y-4 mb-16">
          <TextAnimate
            animation="blurInUp"
            by="word"
            as="h2"
            className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tighter"
          >
            Ready to Supercharge Your Rendering?
          </TextAnimate>
          <p className="text-muted-foreground max-w-2xl mx-auto md:text-lg">
            Choose your preferred platform to get RenderWorkshop. One-time purchase, lifetime updates, zero hidden fees.
          </p>
        </div>
      </BlurFade>


      <div className="flex flex-col lg:flex-row w-full max-w-7xl justify-center items-stretch gap-8">
        {market.map((item, index) => (
          <BlurFade
            key={item.name}
            delay={index * 0.1}
            className="flex w-full lg:w-1/3"
          >
            <div
              className={cn(
                "relative flex flex-col w-full rounded-[2rem] p-8 sm:p-10 transition-all duration-500 hover:-translate-y-2 bg-white dark:bg-zinc-900",
                item.recommend
                  ? "border-2 border-orange-500/50 shadow-[0_0_40px_-10px_rgba(249,115,22,0.2)] dark:shadow-[0_0_40px_-10px_rgba(249,115,22,0.1)]"
                  : "border border-zinc-200 dark:border-zinc-800 shadow-[0_8px_30px_rgb(0,0,0,0.04)]"
              )}
            >

              {item.recommend && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 bg-gradient-to-r from-orange-500 to-orange-400 text-white px-4 py-1 rounded-b-xl text-xs font-bold tracking-widest uppercase shadow-md flex items-center gap-1">
                  <Sparkles className="w-3 h-3" />
                  Recommended
                </div>
              )}


              <div className="flex flex-col items-center border-b border-zinc-100 dark:border-zinc-800 pb-8 mt-2">
                <div className="h-16 flex items-center justify-center mb-6">
                  <Image
                    width={200}
                    height={80}
                    src={`/platform/${item.icon}`}
                    alt={`${item.name} logo`}
                    className="object-contain max-h-[50px] mx-auto drop-shadow-sm dark:brightness-110"
                  />
                </div>
                <div className="flex items-baseline gap-2">
                  <span className="font-bold text-4xl sm:text-5xl text-zinc-900 dark:text-zinc-50 tracking-tight">
                    {item.price}
                  </span>
                </div>
                <span className="text-sm font-medium text-orange-500 mt-2 bg-orange-50 dark:bg-orange-500/10 px-3 py-1 rounded-full">
                  {item.status}
                </span>
              </div>


              <ul className="flex-1 flex flex-col gap-4 py-8">
                {item.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-blue-500 shrink-0 mt-0.5" />
                    <span className="text-zinc-600 dark:text-zinc-300 text-sm font-medium leading-relaxed">
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>


              <a href={item.url} target="_blank" rel="noopener noreferrer" className="mt-auto w-full">
                <Button
                  size="lg"
                  disabled={item.url === "#"}
                  className={cn(
                    "w-full h-14 rounded-xl font-bold text-base transition-all duration-300",
                    item.recommend
                      ? "bg-orange-500 hover:bg-orange-600 text-white shadow-lg shadow-orange-500/25 hover:shadow-orange-500/40"
                      : "bg-zinc-900 hover:bg-zinc-800 dark:bg-zinc-100 dark:hover:bg-white dark:text-zinc-900"
                  )}
                >
                  {item.buttonText}
                </Button>
              </a>
            </div>
          </BlurFade>
        ))}
      </div>


      <BlurFade inView delay={0.4}>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-12 mt-16 text-muted-foreground text-sm font-medium">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-5 h-5 text-green-500" />
            <span>Secure & Encrypted Checkout</span>
          </div>
          <div className="hidden sm:block w-1.5 h-1.5 rounded-full bg-zinc-300 dark:bg-zinc-700"></div>
          <div className="flex items-center gap-2">
            <Zap className="w-5 h-5 text-orange-500" />
            <span>Instant Access After Purchase</span>
          </div>
        </div>
      </BlurFade>

    </div>
  );
}