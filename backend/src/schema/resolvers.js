const landingPages = require("../data/landing");

const resolvers = {
  Query: {
    landing: () => {
      const randomIndex = Math.floor(Math.random() * landingPages.length);
      return landingPages[randomIndex];
    }
  }
};

module.exports = resolvers;