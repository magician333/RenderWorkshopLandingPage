import { getMarkdownContent } from "../utils";
import MarkdownWithTOC from "@/components/markdown-with-toc";

export default async function Changelog() {
  const { content, data } = await getMarkdownContent("changelog.md");
  console.log(data);

  return (
    <div className="w-full bg-white dark:bg-zinc-950 rounded-3xl p-6 sm:p-12 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-zinc-100 dark:border-zinc-900">
      <MarkdownWithTOC content={content} />
    </div>
  );
}