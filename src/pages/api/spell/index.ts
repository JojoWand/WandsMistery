import { PrismaClient } from "@prisma/client";
import { NextApiRequest } from "next";
import { NextApiResponse } from "next";

const prisma = new PrismaClient();
export default async (req: NextApiRequest, res: NextApiResponse) => {
  const { method } = req;
  if (method == "GET") {
    res.status(200);
    res.json(await prisma.spell.findMany());
  } else if (method == "POST") {
    res.json(
      await prisma.spell.create({ data: { name: "Abra", description: "None" } })
    );
    res.status(200);
  }
  res.status(405);
};
