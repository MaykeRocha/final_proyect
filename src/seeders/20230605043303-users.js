'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {

    return queryInterface.bulkInsert('users', [
      {
        username:"srmayke0",
        email:"srmayke0@academlo.com",
        password:"123456789"
      },
      {
        username:"alejandra96",
        email:"alejandra96@academlo.com",
        password:"987654321"
      },
      {
        username:"gustavogos",
        email:"gustavogos@academlo.com",
        password:"56789"
      },
      {
        username:"mariasouza",
        email:"mariasouza@academlo.com",
        password:"9808046"
      },
      {
        username:"brendagatos",
        email:"brendagatos400@academlo.com",
        password:"442886611111"
      },
      {
        username:"yan",
        email:"yanpetr@academlo.com",
        password:"I496ro"
      }
    ]);
  },
  

  async down (queryInterface, Sequelize) {
    
await queryInterface.bulkDelete('users', null, {})
  }
};
