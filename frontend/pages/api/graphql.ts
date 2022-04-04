import {ApolloServer} from 'apollo-server-micro';
import {schema} from '../../graphql/schema';
import Cors from 'micro-cors';
import {MicroRequest} from 'apollo-server-micro/dist/types';
import {ServerResponse} from 'http';
import {createContext} from '../../graphql/context';

const cors = Cors();

const apolloSever = new ApolloServer({schema, context: createContext});
const startSever = apolloSever.start();

export default cors(async function handler(
  req: MicroRequest,
  res: ServerResponse
) {
  if (req.method === 'OPTIONS') {
    res.end();
    return false;
  }
  await startSever;
  await apolloSever.createHandler({
    path: '/api/graphql',
  })(req, res);
});

export const config = {
  api: {
    bodyParser: false,
  },
};
