const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLInt,
  GraphQLSchema,
  GraphQLList,
  GraphQLNonNull,
} = require("graphql");

const CustomerType = new GraphQLObjectType({
  name: "John Doe",
  fields: () => ({
    id: { type: GraphQLString },
    name: { type: GraphQLString },
    email: { type: GraphQLString },
    age: { type: GraphQLInt },
  }),
});

const RootQuery = new GraphQLObjectType({
  name: "RootQueryType",
  customer: {
    type: CustomerType,
    fields: {
      type: CustomerType,
      args:{}
    },
  },
});

// Schema query should be an object type
// Root query object type is passed to graphql schema
module.exports = new GraphQLSchema({});
