import {gql} from 'apollo-server';
import blogs from './test_data';

// GraphQLスキーマの定義
export const typeDefs = gql`
  type Tags {
    name: String
  }

  type Blogs {
    title: String
    url: String
    likes_count: Int
    created_at: String
    tags: [Tags]
  }

  type Query {
    blogs: [Blogs!]!
  }
`;

// リゾルバーの定義
export const resolvers = {
  Query: {
    blogs: () => blogs,
  },
};
