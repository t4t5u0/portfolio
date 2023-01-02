import { Resolver, Query, Args } from '@nestjs/graphql';
import { ArticlesService } from './articles.service';
import { Article } from './models/articles.models';

@Resolver()
export class ArticlesResolver {
  constructor(private articleService: ArticlesService) { }

  @Query(() => [Article], { nullable: 'items' })
  async findAll(): Promise<Article[]> {
    return this.articleService.findAll();
  }

  @Query(() => [Article], { nullable: 'items' })
  async findPage(@Args('offset') offset: number, @Args('limit') limit: number): Promise<Article[]> {
    return this.articleService.findPage(offset, limit);
  }
}
