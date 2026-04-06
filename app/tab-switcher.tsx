"use client";

import { useRouter, usePathname, useSearchParams } from "next/navigation";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ReactNode } from "react";

interface TabSwitcherProps {
    defaultTab: string;
    homeContent: ReactNode;
    docContent: ReactNode;
    changelogContent: ReactNode;
}

export default function TabSwitcher({
    homeContent,
    docContent,
    changelogContent,
}: TabSwitcherProps) {
    const router = useRouter();
    const pathname = usePathname();
    const searchParams = useSearchParams(); 

    
    const pageParam = searchParams.get("page");
    let activeTab = "home";
    if (pageParam === "manual") {
        activeTab = "document";
    } else if (pageParam === "changelog") {
        activeTab = "changelog";
    }

    const handleValueChange = (value: string) => {
        const params = new URLSearchParams();

        if (value === "document") {
            params.set("page", "manual");
        } else if (value === "changelog") {
            params.set("page", "changelog");
        }

        const queryString = params.toString();
        const newUrl = queryString ? `${pathname}?${queryString}` : pathname;

        
        router.push(newUrl, { scroll: true });
    };

    return (
        
        <Tabs value={activeTab} onValueChange={handleValueChange} className="z-10 w-full">
            <TabsList className="overflow-x-auto">
                <TabsTrigger value="home" className="tracking-wide">
                    Home
                </TabsTrigger>
                <TabsTrigger value="document" className="tracking-wide">
                    Manual
                </TabsTrigger>
                <TabsTrigger value="changelog" className="tracking-wide">
                    Changelog
                </TabsTrigger>
            </TabsList>

            <TabsContent value="home">{homeContent}</TabsContent>
            <TabsContent value="document">{docContent}</TabsContent>
            <TabsContent value="changelog">{changelogContent}</TabsContent>
        </Tabs>
    );
}