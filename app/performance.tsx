export default function Performance() {
    return (
        <div className="flex flex-col items-center justify-center space-y-8 text-center">
            <div className="max-w-2xl space-y-4">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Linear Performance Scaling</h2>
                <p className="text-muted-foreground md:text-lg">
                    Stop waiting. See how adding more idle computers to your RenderWorkshop network exponentially reduces your rendering times.
                </p>
            </div>

            <div className="w-full max-w-3xl bg-white/50 dark:bg-zinc-900/50 p-8 rounded-2xl border shadow-sm">
                <div className="space-y-6">
                    <div className="space-y-2">
                        <div className="flex justify-between text-sm font-medium">
                            <span>1 Node (Standard PC)</span>
                            <span>100 mins</span>
                        </div>
                        <div className="h-4 w-full bg-muted rounded-full overflow-hidden">
                            <div className="h-full bg-zinc-400 w-full rounded-full"></div>
                        </div>
                    </div>

                    <div className="space-y-2">
                        <div className="flex justify-between text-sm font-medium">
                            <span>5 Nodes (Small Studio)</span>
                            <span className="text-blue-600 dark:text-blue-400">22 mins</span>
                        </div>
                        <div className="h-4 w-full bg-muted rounded-full overflow-hidden">
                            <div className="h-full bg-blue-500 w-[22%] rounded-full"></div>
                        </div>
                    </div>

                    <div className="space-y-2">
                        <div className="flex justify-between text-sm font-medium">
                            <span>10 Nodes (Render Farm)</span>
                            <span className="text-green-600 dark:text-green-400">11 mins</span>
                        </div>
                        <div className="h-4 w-full bg-muted rounded-full overflow-hidden relative">
                            <div className="h-full bg-green-500 w-[11%] rounded-full relative z-10"></div>
                            <div className="absolute top-0 left-0 h-full w-[11%] bg-gradient-to-r from-transparent via-white/40 to-transparent -translate-x-full animate-[shimmer_2s_infinite]"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}