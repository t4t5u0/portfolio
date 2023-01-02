import { Article, ArticleType } from "./articles.models";
import 'dotenv/config'

export interface Group {
  created_at: Date;
  description: string;
  name: string;
  private: boolean;
  updated_at: string;
  url_name: string;
}

export interface Tag {
  name: string;
  versions: string[];
}

export interface User {
  description: string;
  facebook_id: string;
  followees_count: number;
  followers_count: number;
  github_login_name: string;
  id: string;
  items_count: number;
  linkedin_id: string;
  location: string;
  name: string;
  organization: string;
  permanent_id: number;
  profile_image_url: string;
  team_only: boolean;
  twitter_screen_name: string;
  website_url: string;
}

export interface TeamMembership {
  name: string;
}

export interface QiitaArticle {
  rendered_body: string;
  body: string;
  coediting: boolean;
  comments_count: number;
  created_at: string;
  group: Group;
  id: string;
  likes_count: number;
  private: boolean;
  reactions_count: number;
  stocks_count: number;
  tags: Tag[];
  title: string;
  updated_at: string;
  url: string;
  user: User;
  page_views_count: number;
  team_membership: TeamMembership;
}

const getQiita = async (page: number) => {
  const TOKEN = process.env.QIITA_API_TOKEN;
  const result = await fetch(`https://qiita.com/api/v2/authenticated_user/items?page=${page}&per_page=100`, {
    headers: {
      Authorization: `Bearer ${TOKEN}`,
    },
  })
    .then(res => res.json() as Promise<QiitaArticle[]>)
    .then(data => data.map((article) => {
      return {
        id: 0,
        type: ArticleType.QIITA,
        title: article.title,
        created_at: new Date(article.created_at),
        updated_at: new Date(article.updated_at),
        likes_count: article.likes_count,
        tags: article.tags.map((tag) => tag.name),
        url: article.url,
      } as Article;
    }))
    .catch((err) => {
      console.error(err);
      return [] as Article[];
    });

  return result;
}

export default getQiita;