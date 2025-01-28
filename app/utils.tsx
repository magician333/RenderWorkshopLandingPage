import path from "path";
import matter from "gray-matter";
import fs from "fs";
import html from "remark-html";
import { remark } from "remark";

export async function getMarkdownContent(fileName: string) {
  const filePath = path.join(process.cwd(), "public", "doc", fileName);

  const fileContents = fs.readFileSync(filePath, "utf8");

  const { data, content } = matter(fileContents);

  const processedContent = await remark().use(html).process(content);

  const htmlContent = processedContent.toString();

  return {
    content: htmlContent,
    data,
  };
}
