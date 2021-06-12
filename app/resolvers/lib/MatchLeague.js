/* eslint-disable no-empty-pattern */
const { MatchLeague } = require('../../models');

const resolvers = {
    Query: {
        getMatchLeagues: async (_, { input }, {}) => {
            const result = await MatchLeague.find({})
                .skip(input.nOffset * input.nLimit)
                .limit(input.nLimit);
            return result;
        },
        getMatchLeague: async (_, input, { dataSources }) => {
            const result = await dataSources.matchLeagueApi.getMatchLeague(input.id);
            return result;
        },
        getMatchLeagueByIds: async (_, input, { dataSources }) => {
            const result = await dataSources.matchLeagueApi.getMatchLeaguesByIds(input.id);
            return result;
        },
        getMatchLeagueByFieldName: async (_, { input }, {}) => {
            const result = await MatchLeague.find({ eCategory: input.value })
                .skip(input.nOffset * input.nLimit)
                .limit(input.nLimit);
            return result;
        },
    },
};

module.exports = resolvers;
