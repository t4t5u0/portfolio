import { Field, ID, ObjectType, registerEnumType } from '@nestjs/graphql';

export enum ArticleType {
  ZENN = "Zenn",
  QIITA = "Qiita",
  MISC = "Misc",
}

registerEnumType(ArticleType, {
  name: 'ArticleType',
});

@ObjectType()
export class Article {
  @Field(type => ID)
  id: number;

  @Field(type => ArticleType)
  type: ArticleType;

  @Field()
  title: string;

  @Field()
  created_at: Date;

  @Field()
  updated_at: Date;

  @Field()
  likes_count: number;

  @Field(type => [String])
  tags: string[];

  @Field()
  url: string;
}