"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "spaces",
      [
        {
          title: "Born and raised in Philly",
          description: "How I become the proince of Bel Air",
          backgroundColor: "#00FF00",
          color: "#FFFF00",
          createdAt: new Date(),
          updatedAt: new Date(),
          userId: 1,
        },
        {
          title: "How I became a programmer",
          description: "How I learned stop worrying and love the typos",
          backgroundColor: "#808080",
          color: "#0000FF",
          createdAt: new Date(),
          updatedAt: new Date(),
          userId: 2,
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("spaces", null, {});
  },
};
