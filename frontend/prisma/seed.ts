import {prisma} from '../libs/prisma';

const main = async () => {
  await prisma.task.createMany({
    data: [],
  });
};

main()
  .catch(e => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
