"use client";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { ArrowUp } from "lucide-react";

interface Heading {
    id: string;
    text: string;
    level: number;
}

export default function MarkdownWithTOC({ content }: { content: string }) {
    const [headings, setHeadings] = useState<Heading[]>([]);
    const [activeId, setActiveId] = useState<string>("");
    const [showTopBtn, setShowTopBtn] = useState(false);
    const [processedContent, setProcessedContent] = useState<string>(content);

    
    useEffect(() => {
        if (!content) return;

        const parser = new DOMParser();
        const doc = parser.parseFromString(content, "text/html");
        const elements = Array.from(doc.querySelectorAll("h2, h3"));
        const newHeadings: Heading[] = [];

        elements.forEach((el, index) => {
            const id = `heading-${index}`;
            el.id = id; 

            newHeadings.push({
                id,
                text: el.textContent || "",
                level: parseInt(el.tagName.charAt(1)),
            });
        });

        setProcessedContent(doc.body.innerHTML);
        setHeadings(newHeadings);
    }, [content]);

    
    useEffect(() => {
        if (headings.length === 0) return;

        const handleScroll = () => {
            
            const headingElements = headings
                .map((h) => document.getElementById(h.id))
                .filter((el): el is HTMLElement => el !== null);

            if (headingElements.length === 0) return;

            
            const scrollPosition = window.scrollY + 150;

            
            let currentActiveId = headingElements[0].id;

            
            
            for (let i = headingElements.length - 1; i >= 0; i--) {
                const el = headingElements[i];
                
                const elementTop = el.getBoundingClientRect().top + window.scrollY;

                if (scrollPosition >= elementTop) {
                    currentActiveId = el.id;
                    break;
                }
            }

            setActiveId(currentActiveId);
        };

        
        window.addEventListener("scroll", handleScroll, { passive: true });

        
        setTimeout(handleScroll, 100);

        return () => window.removeEventListener("scroll", handleScroll);
    }, [headings]);

    
    useEffect(() => {
        const handleTopBtnShow = () => setShowTopBtn(window.scrollY > 400);
        window.addEventListener("scroll", handleTopBtnShow, { passive: true });
        return () => window.removeEventListener("scroll", handleTopBtnShow);
    }, []);

    
    const scrollToHeading = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
        e.preventDefault();
        const element = document.getElementById(id);

        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
            setActiveId(id);
            window.history.pushState(null, "", `#${id}`);
        }
    };

    
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    return (
        <>
            <div className="flex flex-col lg:flex-row gap-12 w-full max-w-7xl mx-auto items-start py-8 relative">

                
                <aside className="hidden lg:block w-64 shrink-0 sticky top-24 self-start max-h-[calc(100vh-8rem)] overflow-y-auto pr-4 scrollbar-thin">
                    <h4 className="font-bold tracking-tight text-sm mb-4 text-zinc-900 dark:text-zinc-100 uppercase">
                        Table of contents
                    </h4>
                    <nav className="flex flex-col space-y-2.5 text-sm">
                        {headings.length === 0 && (
                            <span className="text-muted-foreground text-xs italic">Parsing catalog...</span>
                        )}
                        {headings.map((heading) => (
                            <a
                                key={heading.id}
                                href={`#${heading.id}`}
                                onClick={(e) => scrollToHeading(e, heading.id)}
                                className={cn(
                                    "transition-all duration-200 border-l-2 pl-3 py-1.5 block truncate",
                                    heading.level === 3 ? "ml-3 text-xs text-zinc-500 border-transparent" : "",
                                    
                                    activeId === heading.id
                                        ? "border-primary text-primary font-semibold shadow-[-2px_0_0_0_hsl(var(--primary))]"
                                        : "border-transparent text-zinc-500 hover:text-zinc-900 dark:hover:text-zinc-300 hover:border-zinc-300"
                                )}
                                title={heading.text}
                            >
                                {heading.text}
                            </a>
                        ))}
                    </nav>
                </aside>

                
                <div
                    className="flex-1 min-w-0 w-full prose prose-zinc dark:prose-invert max-w-none 
                     prose-headings:scroll-mt-28 
                     prose-h2:border-b prose-h2:pb-2 prose-h2:mt-12
                     prose-h3:mt-8
                     prose-a:text-primary prose-a:no-underline hover:prose-a:underline
                     prose-img:rounded-xl prose-img:shadow-md
                     prose-pre:bg-zinc-900 prose-pre:border prose-pre:border-zinc-800"
                    dangerouslySetInnerHTML={{ __html: processedContent }}
                />
            </div>

            
            <button
                onClick={scrollToTop}
                className={cn(
                    "fixed bottom-8 right-8 z-50 p-3 rounded-full bg-zinc-900 text-white dark:bg-zinc-100 dark:text-zinc-900 shadow-[0_8px_30px_rgb(0,0,0,0.12)] transition-all duration-300 ease-in-out hover:scale-110 focus:outline-none",
                    showTopBtn ? "translate-y-0 opacity-100" : "translate-y-16 opacity-0 pointer-events-none"
                )}
                aria-label="Back to top"
            >
                <ArrowUp className="w-5 h-5" />
            </button>
        </>
    );
}