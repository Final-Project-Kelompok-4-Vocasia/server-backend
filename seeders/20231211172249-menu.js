'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
    await queryInterface.bulkInsert(
      'Menus', [{
        namaMenu: "Nasi Pecel",
        kategori: "Makanan",
        harga: "10000",
        image: "Ini Gambar Pecel",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        namaMenu: "Es Teh",
        kategori: "Minuman",
        harga: "5000",
        image: "Ini Gambar Es Teh",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ], {});
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * 
     */
    await queryInterface.bulkDelete('Menus', null, {});
  }
};
