import { Resolver, Query, Args } from '@nestjs/graphql';
import { ArticlesService } from './articles.service';
import { Article } from './models/articles.models';

@Resolver()
export class ArticlesResolver {
  constructor(private articleService: ArticlesService) {}

  @Query(() => [Article], {nullable: 'items'})
  findAll(): Article[] {
    return this.articleService.findAll();
  }

  @Query(() => [Article], {nullable: 'items'})
  findPage(@Args('offset') offset: number, @Args('limit') limit: number): Article[] {
    return this.articleService.findPage(offset, limit);
  }
}
