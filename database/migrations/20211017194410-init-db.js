'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('responsible', {
      id: {
          type: Sequelize.INTEGER,
          autoIncrement: true,
          allowNull: false,
          primaryKey: true
      },
      name: Sequelize.STRING(128),
      cpf: Sequelize.STRING(11),
      createdAt: {
        field: 'created_at',
        type: Sequelize.DATE
      }
    })

    await queryInterface.createTable('collaborator', {
      id: {
          type: Sequelize.INTEGER,
          autoIncrement: true,
          allowNull: false,
          primaryKey: true
      },
      name: Sequelize.STRING(128),
      cpf: Sequelize.STRING(11),
      email: Sequelize.STRING(128),
      phone: Sequelize.STRING(15),
      state: Sequelize.STRING(64),
      city: Sequelize.STRING(128),
      bornDate: {
        field: 'born_date',
        type: Sequelize.DATE
      },
      createdAt: {
        field: 'created_at',
        type: Sequelize.DATE
      },
      responsible_id: {
        type: Sequelize.INTEGER,
        references: {
         model: "responsible",
         key: "id"
        }
      }
  })

    await queryInterface.createTable('photo', {
      id: {
          type: Sequelize.INTEGER,
          autoIncrement: true,
          allowNull: false,
          primaryKey: true
      },
      title: Sequelize.STRING(128),
      img: Sequelize.STRING(128),
      photographer: Sequelize.STRING(128),
      createdAt: {
        field: 'created_at',
        type: Sequelize.DATE
      },
      owner: {
        type: Sequelize.INTEGER,
        references: {
         model: "collaborator",
         key: "id"
        }
      }
  })
  },

  down: async (queryInterface, Sequelize) => {
    queryInterface.dropTable('photo')
    queryInterface.dropTable('collaborator')
    queryInterface.dropTable('responsible')
  }
};
