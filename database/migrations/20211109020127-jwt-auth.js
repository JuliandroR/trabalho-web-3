'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn(
      'collaborator',
      'password',
      {
        type: Sequelize.STRING(72)
      }
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn('collaborator', 'password');
  }
};
