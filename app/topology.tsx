export default function Topology() {
    return (
        <div className="flex flex-col items-center justify-center space-y-12 text-center">
            <div className="max-w-2xl space-y-4">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Decoupled Architecture</h2>
                <p className="text-muted-foreground md:text-lg">
                    A robust, master-worker topology designed for stability. The Manager handles UI and task distribution, while lightweight Workers focus purely on rendering.
                </p>
            </div>

            <div className="relative flex flex-col items-center w-full max-w-4xl py-10">
                <div className="z-10 bg-primary text-primary-foreground px-8 py-4 rounded-xl shadow-lg font-bold text-lg border-4 border-background flex items-center gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="14" x="2" y="3" rx="2" /><line x1="8" x2="16" y1="21" y2="21" /><line x1="12" x2="12" y1="17" y2="21" /></svg>
                    Manager (Task Distributor)
                </div>

                <div className="flex w-full justify-center my-[-2px] z-0">
                    <div className="w-[2px] h-12 bg-border"></div>
                </div>
                <div className="w-2/3 h-[2px] bg-border flex justify-between z-0 relative">
                    <div className="w-[2px] h-8 bg-border absolute left-0 top-0"></div>
                    <div className="w-[2px] h-8 bg-border absolute left-1/2 top-0 -translate-x-1/2"></div>
                    <div className="w-[2px] h-8 bg-border absolute right-0 top-0"></div>
                </div>

                <div className="flex justify-between w-full max-w-2xl mt-8">
                    <div className="bg-white dark:bg-zinc-800 border p-4 rounded-lg shadow-sm font-medium w-32 text-sm flex flex-col items-center gap-2">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="18" height="18" x="3" y="3" rx="2" /><path d="M7 7h10" /><path d="M7 12h10" /><path d="M7 17h10" /></svg>
                        Worker 01
                    </div>
                    <div className="bg-white dark:bg-zinc-800 border p-4 rounded-lg shadow-sm font-medium w-32 text-sm flex flex-col items-center gap-2">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="18" height="18" x="3" y="3" rx="2" /><path d="M7 7h10" /><path d="M7 12h10" /><path d="M7 17h10" /></svg>
                        Worker 02
                    </div>
                    <div className="bg-white dark:bg-zinc-800 border border-dashed border-muted-foreground p-4 rounded-lg font-medium w-32 text-sm flex flex-col items-center gap-2 text-muted-foreground">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><path d="M8 12h8" /><path d="M12 8v8" /></svg>
                        Worker N
                    </div>
                </div>
            </div>
        </div>
    );
}