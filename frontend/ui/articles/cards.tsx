'use client';

import Card, {cardInfo} from './card';

const cardInfos: cardInfo[] = [
  {
    title: 'Next.jsの記事を作成する',
    date: '2021-09-01',
    tags: ['Next.js', 'TypeScript'],
    type: 'zenn',
    url: 'https://zenn.dev/tatsuo/articles/nextjs',
  },
  {
    title: 'Next.jsの記事を作成する',
    date: '2021-09-01',
    tags: ['Next.js', 'TypeScript'],
    type: 'qiita',
    url: 'https://qiita.com/tatsuo/items/nextjs',
  },
  {
    title: 'Next.jsの記事を作成する',
    date: '2021-09-01',
    tags: ['Next.js', 'TypeScript'],
    type: 'cms',
    url: 'https://tatsuo.netlify.app/articles/nextjs',
  },
];

const Cards = () => {
  return (
    <>
      <div className="flex">
        {cardInfos.map((cardInfo, index) => {
          return <Card cardInfo={cardInfo} key={index} />;
        })}
      </div>
    </>
  );
};

export default Cards;
