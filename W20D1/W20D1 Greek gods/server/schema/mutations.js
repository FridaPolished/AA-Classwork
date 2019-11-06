const graphql = require("graphql");
const { GraphQLObjectType, GraphQLString, GraphQLInt, GraphQLID, GraphQLNonNull } = graphql;
const mongoose = require("mongoose");
const God = mongoose.model("god");
const GodType = require("./god_type");
const Emblem = mongoose.model("emblem");
const EmblemType = require("./emblem_type");
const Abode = mongoose.model("abode");
const AbodeType = require("./abode_type");

const mutation = new GraphQLObjectType({
  name: "Mutation",
  fields: {
    newGod: {
      type: GodType,
      args: {
        name: { type: GraphQLString },
        type: { type: GraphQLString },
        description: { type: GraphQLString }
      },
      resolve(parentValue, { name, type, description }) {
        return new God({ name, type, description }).save();
      }
    },
    deleteGod: {
      type: GodType,
      args: {
        id: {type: GraphQLNonNull(GraphQLID)}
      },
      resolve(parentValue, { id }){
        return God.findByIdAndDelete(id);
      }
    },
    updateGod: {
      type: GodType,
      args: {
        id: { type: GraphQLNonNull(GraphQLID) },
        name: { type: GraphQLString },
        type: { type: GraphQLString },
        description: { type: GraphQLString }
      },
      resolve(parentValue, { id, name, type, description }) {
        const updateObj = {};
        // we can create our own object here and pass in the variables is they exist
        updateObj.id = id;
        if (name) updateObj.name = name;
        if (type) updateObj.type = type;
        if (description) updateObj.description = description;

        return God.findOneAndUpdate({ _id: id }, { $set: updateObj }, { new: true }, (err, god) => {
          return god;
        });
      }
    },
    addGodRelative: {
      type: GodType,
      args: {
        godId: { type: GraphQLNonNull(GraphQLID) },
        relativeId: { type: GraphQLNonNull(GraphQLID) },
        relationship: { type: GraphQLNonNull(GraphQLString) }
      },
      resolve(parentValue, { godId, relativeId, relationship }) {
        return God.addRelative(godId, relativeId, relationship);
      }
    },
    removeGodRelative: {
      type: GodType,
      args: {
        godId: { type: GraphQLNonNull(GraphQLID) },
        relativeId: { type: GraphQLNonNull(GraphQLID) },
        relationship: { type: GraphQLNonNull(GraphQLString) }
      },
      resolve(parentValue, { godId, relativeId, relationship }) {
        return God.removeRelative(godId, relativeId, relationship);
      }
    },
    addGodEmblem: {
      type: GodType,
      args: {
        godId: { type: GraphQLNonNull(GraphQLID) },
        emblemId: { type: GraphQLNonNull(GraphQLID) }
      },
      resolve(parentValue, { godId, emblemId }) {
        return God.addGodEmblem(godId, emblemId);
      }
    },
    removeGodEmblem: {
      type: GodType,
      args: {
        godId: { type: GraphQLNonNull(GraphQLID) },
        emblemId: { type: GraphQLNonNull(GraphQLID) }
      },
      resolve(parentValue, { godId, emblemId }) {
        return God.removeGodEmblem(godId, emblemId);
      }
    },
    updateGodAbode: {
      type: GodType,
      args: {
        godId: { type: GraphQLNonNull(GraphQLID) },
        abodeId: { type: GraphQLNonNull(GraphQLID) }
      },
      resolve(parentValue, {godId, abodeId}){
        return God.updateGodAbode(godId, abodeId);
      }
    },
    addGodDomain: {
      type: GodType,
      args: {
        godId: { type: GraphQLNonNull(GraphQLID) },
        domain: { type: GraphQLNonNull(GraphQLString)}
      },
      resolve(parentValue, {godId, domain}){
        return God.findOneAndUpdate({ _id: godId }, { $push: { domains: domain }}, { new: true });
      }
    },
    removeGodDomain: {
      type: GodType,
      args: {
        godId: { type: GraphQLNonNull(GraphQLID) },
        domain: { type: GraphQLNonNull(GraphQLString) }

      },
      resolve(parentValue, { godId, domain }) {
        return God.findOneAndUpdate({ _id: godId }, { $pull: { domains: domain } }, { new: true });
      }
    },
    newEmblem: {
      type: EmblemType,
      args: {
        name: { type: GraphQLNonNull(GraphQLString) }
      },
      resolve(parentValue, { name }) {
        return new Emblem({ name }).save();
      }
    },
    deleteEmblem: {
      type: EmblemType,
      args: {
        id: { type: GraphQLNonNull(GraphQLID) }
      },
      resolve(parentValue, { id }) {
        return Emblem.findByIdAndDelete(id);
      }
    },
    updateEmblem: {
      type: EmblemType,
      args: {
        id: { type: GraphQLNonNull(GraphQLID) },
        name: { type: GraphQLString }
      },
      resolve(parentValue, { id, name }) {
        const updateObj = {};
        // we can create our own object here and pass in the variables is they exist
        updateObj.id = id;
        if (name) updateObj.name = name;

        return Emblem.findOneAndUpdate({ _id: id }, { $set: updateObj }, { new: true }, (err, god) => {
          return emblem;
        });
      }
    },
    newAbode: {
      type: AbodeType,
      args: {
        name: { type: GraphQLNonNull(GraphQLString) },
        coordinates: { type: GraphQLString}
      },
      resolve(parentValue, { name, coordinates }) {
        return new Abode({ name, coordinates }).save();
      }
    },
    deleteAbode: {
      type: AbodeType,
      args: {
        id: { type: GraphQLNonNull(GraphQLID) }
      },
      resolve(parentValue, { id }) {
        return Abode.findByIdAndDelete(id);
      }
    },
    updateAbode: {
      type: AbodeType,
      args: {
        id: { type: GraphQLNonNull(GraphQLID) },
        name: { type: GraphQLString },
        coordinates: { type: GraphQLString }
      },
      resolve(parentValue, { id, name, coordinates }) {
        const updateObj = {};
        // we can create our own object here and pass in the variables is they exist
        updateObj.id = id;
        if (name) updateObj.name = name;
        if (coordinates) updateObj.coordinates = coordinates;

        return Abode.findOneAndUpdate({ _id: id }, { $set: updateObj }, { new: true }, (err, abode) => {
          return abode;
        });
      }
    },
  }
});

module.exports = mutation;

// testgod: 5dc0a4539b9f611c48174a1c
// testgod2: 5dc0a4919b9f611c48174a1d