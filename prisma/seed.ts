import prisma from '.';
import seedData from './initialData';

async function main() {
  const queries = seedData.questions.map((question) => {
    const { id, ...rest } = question;

    return prisma.question.upsert({
      where: { id: question.id },
      // @ts-ignore
      update: { ...rest },
      // @ts-ignore
      create: { ...question },
    });
  });

  await prisma.$transaction(queries);
}

main().finally(async () => {
  await prisma.$disconnect();
});
