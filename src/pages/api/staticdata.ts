import type { NextApiRequest, NextApiResponse } from "next";
import path from "path";
import { promises as fs } from "fs";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const jsonDirectory = path.join(process.cwd(), "json");
  const fileContents = await fs.readFile(
    jsonDirectory + "/listings.json",
    "utf8"
  );
  const convertedData = JSON.parse(fileContents)
  res.status(200).json(convertedData);
}
