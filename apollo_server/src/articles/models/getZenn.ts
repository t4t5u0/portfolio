import { Article, ArticleType } from "./articles.models";
import { load } from 'cheerio'


export interface User {
  id: number;
  username: string;
  name: string;
  avatar_small_url: string;
}

export interface ZennArticle {
  id: number;
  post_type: string;
  title: string;
  slug: string;
  published: boolean;
  comments_count: number;
  liked_count: number;
  body_letters_count: number;
  article_type: string;
  emoji: string;
  is_suspending_private: boolean;
  published_at: string;
  body_updated_at: string;
  source_repo_updated_at: string;
  path: string;
  user: User;
  publication?: any;
}

export interface RootObject {
  articles: ZennArticle[];
  next_page?: any;
}

const getTags = async (url: string) => {
  const $ = await fetch(url)
    .then(res => res.text())
    .then(data => load(data));
  const tags = $('section')
    .children().first()
    .children().first()
    .children().first()
    .find('div')
    .filter((_, el) => $(el).attr('class').match(/View_topicName__/) !== null)
    .map((_, el) => $(el).text()).get() as string[];
  return tags;
}

const getZenn = async () => {
  const articles = await fetch("https://zenn.dev/api/articles?username=t4t5u0")
    .then(res => res.json() as Promise<RootObject>)
    .then(data => data.articles.map(article => {
      return {
        id: 0,
        type: ArticleType.ZENN,
        title: article.title,
        created_at: new Date(article.published_at),
        updated_at: new Date(article.body_updated_at),
        likes_count: article.liked_count,
        tags: [],
        url: `https://zenn.dev/t4t5u0/articles/${article.slug}`,
      } as Article;
    }))
    .catch((err) => {
      console.error(err);
      return [] as Article[];
    });
    // tag付け替え
    const result = await Promise.all(articles.map(
      async (article) => {
        article.tags = await getTags(article.url);
        return article;
      }
    ))

  return result;
};

export default getZenn;