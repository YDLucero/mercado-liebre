'use strict';

const productsJSON = require('../../data/productsDataBase.json')
const productsDB = productsJSON.map(({name, price, discount, category, description})=>{
  return {
    name:name.trim(),
    price,
    discount,
    description:description.trim(),
    image:null,
    categoryId: category == "visited"? 1 : 2,
    createdAt: new Date(),
    updatedAt: new Date()
  }
})

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    
     await queryInterface.bulkInsert(
      'Products',
      productsDB,
      {}
     )
  },

  async down (queryInterface, Sequelize) {
    
      await queryInterface.bulkDelete('Products', null, {});
     
  }
};
