"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert("Productos", [
      {
        name: "Agua",
        price: 1,
        CategoriaId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Coca Cola",
        price: 2,
        CategoriaId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Fanta",
        price: 2,
        CategoriaId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Vino",
        price: 5,
        CategoriaId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Ron",
        price: 15,
        CategoriaId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
