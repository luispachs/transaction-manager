import { buildSubgraphSchema } from '@apollo/subgraph';
import {Resolver} from "@/lib/Schema/Resolver";
import gql from "graphql-tag";
import { readFileSync } from "fs";
import { startServerAndCreateNextHandler } from '@as-integrations/next';
import {ApolloServer} from "@apollo/server";

const TypeDefs = gql(
    readFileSync("lib/Schema/schema.graphql", {
        encoding: "utf-8",
    })
);
const apollo = new ApolloServer({
    schema: buildSubgraphSchema({ typeDefs:TypeDefs, resolvers:Resolver }),
    }
    );
export const config = {
    api: {
        bodyParser: false,
    },
};




export default startServerAndCreateNextHandler(apollo);