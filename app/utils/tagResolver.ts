import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export async function resolveTagMessage(tags: string[]) {
  for (const tag of tags) {
    const message = await prisma.tagMessage.findFirst({ where: { tag } });
    if (message) return message;
  }
  return null;
}
