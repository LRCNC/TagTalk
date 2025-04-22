import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export async function getAllTagMessages() {
  return prisma.tagMessage.findMany();
}

export async function createTagMessage(data) {
  return prisma.tagMessage.create({ data });
}

export async function deleteTagMessage(id) {
  return prisma.tagMessage.delete({ where: { id } });
}
