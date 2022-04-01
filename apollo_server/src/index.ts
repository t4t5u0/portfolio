import {ApolloServer} from 'apollo-server';
import {resolvers, typeDefs} from './apollo_util';

// サーバーの起動
const server = new ApolloServer({typeDefs, resolvers});

server.listen().then(({url}) => {
  console.log(`🚀  Server ready at ${url}`);
});
