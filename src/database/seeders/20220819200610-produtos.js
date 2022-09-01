'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('produtos', [
      {
        nome: 'Gift Card Digital PlayStation Store',
        descricao: 'Cartão presente playstation store. Tudo o que você quiser jogar, escolha da maior biblioteca de conteúdo PlayStation no mundo. Adicione crédito à sua carteira digital para resgatar o que quiser na PlayStationStore (PS3, PS4 & PS5).',
        preco: 29.90,
        imagem: 'ps.png',
        categoria: 'Jogos',
      
    }, { 
        nome: 'Gift Card Digital Uber',
        descricao: 'O Cartão Uber Cash permite que você adicione crédito em sua conta Uber e possa viajar tranquilo ou encomendar sua comida favorita pelo Uber Eats, além controlar melhor seus gastos ou presentear amigos e parentes.',
        preco: 45.00,
        imagem: 'uber.png',
        categoria: 'Transporte',
      
      }
    ]);
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('produtos', null, {});
  }
};
