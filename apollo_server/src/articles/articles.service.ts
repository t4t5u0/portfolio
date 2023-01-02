import { Injectable } from '@nestjs/common';
import { Article, ArticleType } from './models/articles.models';

@Injectable()
export class ArticlesService {
  private readonly articles: Article[] = [
    {
      id: 1,
      type: ArticleType.ZENN,
      title: 'NestJSでGraphQLサーバーを作る',
      created_at: new Date(),
      updated_at: new Date(),
      likes_count: 0,
      tags: ['nestjs', 'graphql'],
    }
  ]

  findAll(): Article[] {
    return this.articles;
  }

  findPage(offset: number, limit: number): Article[] {
    return this.articles.slice(offset, offset + limit);
  }
}
