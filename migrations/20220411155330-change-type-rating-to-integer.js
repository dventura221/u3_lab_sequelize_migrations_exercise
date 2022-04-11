'use strict'

module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.changeColumn('businesses', 'rating', {
      type: 'INTEGER USING CAST("rating" as INTEGER)' //solution found https://github.com/sequelize/sequelize/issues/2471
    })
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.changeColumn('businesses', 'rating', {
      type: Sequelize.STRING
    })
  }
}
