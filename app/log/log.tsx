import { getMarkdownContent } from "../utils";

export default async function Log() {
  const { content, data } = await getMarkdownContent("log.md");
  console.log(data);

  return (
    <>
      <div className="flex flex-col justify-center items-center bg-white bg-opacity-70">
        <div className="border rounded-lg shadow-md p-8 prose">
          <div dangerouslySetInnerHTML={{ __html: content }} />
        </div>
      </div>
    </>
  );
}
