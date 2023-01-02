import { Injectable } from '@nestjs/common';
import getArticles from './models/aggregate';
import { Article } from './models/articles.models';

@Injectable()
export class ArticlesService {
  private readonly articles = getArticles();

  async findAll(): Promise<Article[]> {
    return this.articles;
  }

  async findPage(offset: number, limit: number): Promise<Article[]> {
    return (await this.articles).slice(offset, offset + limit);
  }
}
