'use client';

import Image from 'next/image';
import Link from 'next/link';

export interface cardInfo {
  title: string;
  date: string;
  tags: string[];
  type: 'zenn' | 'qiita' | 'cms';
  url: string;
  lieks?: number;
}

const SiteIcon = ({type}: {type: 'zenn' | 'qiita' | 'cms'}) => {
  switch (type) {
    case 'zenn':
      return <Image src={''} alt={'Zenn icon'}></Image>;
    case 'qiita':
      return <Image src={''} alt={'Qiita icon'}></Image>;
    case 'cms':
      return <Image src={''} alt={'CMS icon'}></Image>;
  }
};

const Card = ({cardInfo}: {cardInfo: cardInfo}) => {
  const {title, date, tags, type, url} = cardInfo;
  return (
    <>
      <div>
        <Link href={url} className={'grid'}>
          <div>{date}</div>
          <div>{title}</div>
          <div>{tags}</div>
          <SiteIcon type={type} />
        </Link>
      </div>
    </>
  );
};

export default Card;
