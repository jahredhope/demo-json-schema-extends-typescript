import { compileFromFile } from "json-schema-to-typescript";
import { join } from "path";
import { promises as fs } from "fs";

async function run(folder: string) {
  console.log("Creating types for", folder);
  let content: string;
  try {
    content = await compileFromFile(join(folder, "schema.json"), {
      cwd: folder,
    });
  } catch (error) {
    console.error(`Unable to generate types for ${folder}. Error:`, error);
    return;
  }
  const fileName = join(folder, `types.d.ts`);
  await fs.writeFile(fileName, content);
  console.log("Updated file", fileName);
}

Promise.resolve()
  .then(() => run("extends"))
  .then(() => run("allOf"));
