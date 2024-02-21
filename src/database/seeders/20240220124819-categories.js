'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    
     await queryInterface.bulkInsert('categories', [
      {
      name: 'Ultimos visitados',
      image: null,
      createdAt: new Date(),
      updatedAt: new Date()
      },
      {
      name: 'en oferta',
      image: null,
      createdAt: new Date(),
      updatedAt: new Date()
      }
    ], {});
    
  },

  async down (queryInterface, Sequelize) {
    
      await queryInterface.bulkDelete('People', null, {});
     
  }
};
