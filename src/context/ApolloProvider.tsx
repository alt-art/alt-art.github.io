import {
  ApolloClient,
  ApolloProvider as Provider,
  InMemoryCache,
} from '@apollo/client';

const client = new ApolloClient({
  uri: import.meta.env.VITE_SANITY_GRAPHQL_API_URL,
  cache: new InMemoryCache({
    typePolicies: {
      Query: {
        fields: {
          Project: {
            read(_, { args, toReference }) {
              return toReference({
                __typename: 'Project',
                _id: args?.id,
              });
            },
          },
        },
      },
    },
  }),
});

export default function ApolloProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return <Provider client={client}>{children}</Provider>;
}
