'use strict'

module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.renameColumn(
      'businesses',
      'phoneNmber',
      'phoneNumber'
    )
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.renameColumn(
      'businesses',
      'phoneNumber',
      'phoneNmber'
    )
  }
}
