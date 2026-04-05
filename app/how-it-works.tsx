"use client"; 

import { BlurFade } from "@/components/ui/blur-fade";
import { TextAnimate } from "@/components/ui/text-animate";

export default function HowItWorks() {
    return (
        <div className="flex flex-col items-center justify-center space-y-12 sm:space-y-16 py-12 px-4 sm:px-0 overflow-hidden">
            
            <BlurFade inView>
                <div className="max-w-3xl space-y-4 text-center mx-auto">
                    
                    <TextAnimate
                        animation="blurInUp"
                        by="word"
                        as="h2"
                        className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tighter text-center"
                    >
                        Architecture Overview
                    </TextAnimate>
                    <p className="text-muted-foreground text-sm sm:text-base md:text-lg max-w-[90%] mx-auto">
                        A single lightweight Manager distributes tasks to multiple Worker nodes across your network, resulting in near-linear render time reduction.
                    </p>
                </div>
            </BlurFade>

            <div className="grid lg:grid-cols-2 gap-10 sm:gap-12 w-full max-w-6xl items-center">

                
                <BlurFade inView delay={0.2} className="relative flex flex-col items-center p-6 sm:p-10 bg-white dark:bg-zinc-900 border rounded-[2rem] shadow-[0_8px_30px_rgb(0,0,0,0.04)] w-full">
                    
                    <div className="relative z-10 flex flex-col items-center justify-center w-full max-w-[200px] sm:max-w-[220px] h-14 sm:h-16 bg-zinc-900 text-white dark:bg-zinc-100 dark:text-zinc-900 rounded-2xl shadow-lg font-semibold tracking-wide text-sm sm:text-base">
                        Manager Node
                        <span className="text-[10px] sm:text-xs font-normal opacity-80">(UI & Tasking)</span>
                        <span className="absolute -bottom-2 w-2.5 h-2.5 sm:w-3 sm:h-3 bg-green-400 rounded-full animate-ping"></span>
                    </div>

                    
                    <div className="w-full flex flex-col items-center">
                        
                        <div className="w-[2px] h-8 sm:h-10 bg-border"></div>

                        
                        <div className="w-[75%] h-[2px] bg-border hidden sm:block"></div>

                        
                        <div className="relative z-10 w-full grid grid-cols-2 gap-4 sm:flex sm:justify-between sm:gap-0 mt-0">

                            
                            <div className="flex flex-col items-center gap-2 sm:gap-3 w-full sm:w-[25%]">
                                
                                <div className="w-[2px] h-6 bg-border hidden sm:block"></div>
                                <div className="w-full max-w-[120px] h-12 bg-white dark:bg-zinc-800 border rounded-xl shadow-sm flex items-center justify-center text-xs sm:text-sm font-medium hover:border-blue-500 hover:shadow-md transition-all">
                                    Worker 1
                                </div>
                                <span className="text-[10px] sm:text-xs font-medium text-blue-500 animate-pulse">Rendering</span>
                            </div>

                            
                            <div className="flex flex-col items-center gap-2 sm:gap-3 w-full sm:w-[25%]">
                                <div className="w-[2px] h-6 bg-border hidden sm:block"></div>
                                <div className="w-full max-w-[120px] h-12 bg-white dark:bg-zinc-800 border rounded-xl shadow-sm flex items-center justify-center text-xs sm:text-sm font-medium hover:border-blue-500 hover:shadow-md transition-all">
                                    Worker 2
                                </div>
                                <span className="text-[10px] sm:text-xs font-medium text-blue-500 animate-pulse" style={{ animationDelay: "200ms" }}>Rendering</span>
                            </div>

                            
                            <div className="flex flex-col items-center gap-2 sm:gap-3 w-full sm:w-[25%]">
                                <div className="w-[2px] h-6 bg-border hidden sm:block"></div>
                                <div className="w-full max-w-[120px] h-12 bg-white dark:bg-zinc-800 border rounded-xl shadow-sm flex items-center justify-center text-xs sm:text-sm font-medium hover:border-blue-500 hover:shadow-md transition-all">
                                    Worker 3
                                </div>
                                <span className="text-[10px] sm:text-xs font-medium text-blue-500 animate-pulse" style={{ animationDelay: "400ms" }}>Rendering</span>
                            </div>

                            
                            <div className="flex flex-col items-center gap-2 sm:gap-3 w-full sm:w-[25%] justify-start">
                                <div className="w-[2px] h-6 bg-border hidden sm:block"></div>
                                <div className="w-full max-w-[120px] h-12 bg-zinc-50 dark:bg-zinc-900/50 border border-dashed border-zinc-300 dark:border-zinc-700 rounded-xl flex items-center justify-center text-xl font-bold text-zinc-400">
                                    ...
                                </div>
                                <span className="text-[10px] sm:text-xs font-medium text-muted-foreground">Scale Infinitely</span>
                            </div>

                        </div>
                    </div>
                </BlurFade>

                
                <BlurFade inView delay={0.4} className="space-y-6 sm:space-y-8 p-4 sm:p-6 lg:p-8">
                    <h3 className="text-xl sm:text-2xl font-bold">Time to Render (100 Frames)</h3>
                    <div className="space-y-6 sm:space-y-8 relative">

                        
                        <div className="space-y-2 sm:space-y-3">
                            <div className="flex justify-between text-xs sm:text-sm font-medium text-muted-foreground">
                                <span>1 Node (1x Speed)</span>
                                <span>100 mins</span>
                            </div>
                            <div className="h-3 sm:h-4 w-full bg-zinc-100 dark:bg-zinc-800 rounded-full overflow-hidden">
                                <div className="h-full bg-zinc-300 dark:bg-zinc-600 rounded-full animate-[progress-1_1.5s_ease-out_forwards] w-0"></div>
                            </div>
                        </div>

                        
                        <div className="space-y-2 sm:space-y-3">
                            <div className="flex justify-between text-xs sm:text-sm font-medium text-muted-foreground">
                                <span>2 Nodes (1.9x Speed)</span>
                                <span>~52 mins</span>
                            </div>
                            <div className="h-3 sm:h-4 w-full bg-zinc-100 dark:bg-zinc-800 rounded-full overflow-hidden">
                                <div className="h-full bg-blue-500 rounded-full animate-[progress-2_1.5s_ease-out_forwards] w-0 shadow-[0_0_10px_rgba(59,130,246,0.3)]"></div>
                            </div>
                        </div>

                        
                        <div className="space-y-2 sm:space-y-3">
                            <div className="flex justify-between text-xs sm:text-sm font-bold">
                                <span>10 Nodes (9.5x Speed)</span>
                                <span className="text-green-600 dark:text-green-400">~11 mins</span>
                            </div>
                            <div className="h-3 sm:h-4 w-full bg-zinc-100 dark:bg-zinc-800 rounded-full overflow-hidden relative">
                                <div className="h-full bg-green-500 rounded-full relative z-10 animate-[progress-10_1.5s_ease-out_forwards] w-0 shadow-[0_0_10px_rgba(34,197,94,0.5)]"></div>
                            </div>
                        </div>
                    </div>
                    
                    <p className="text-[10px] sm:text-xs text-muted-foreground pt-2 sm:pt-4">
                        * 仅作示意，实际渲染时间根据电脑性能、网络情况等因素决定。
                    </p>
                </BlurFade>

            </div>
        </div>
    );
}