import {ApolloServer, gql} from 'apollo-server';
import blogs from './test_data';

// GraphQLスキーマの定義
const typeDefs = gql`
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
const resolvers = {
  Query: {
    blogs: () => blogs,
  },
};

// サーバーの起動
const server = new ApolloServer({typeDefs, resolvers});

server.listen().then(({url}) => {
  console.log(`🚀  Server ready at ${url}`);
});
