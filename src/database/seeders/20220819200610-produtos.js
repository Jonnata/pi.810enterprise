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
      
      }, {
        nome: 'Gift Card Digital Ifood',
        descricao: 'O Cartão Ifood é uma ótima opção para presentear quem você ama. Com ele, você pode presentear alguém com créditos para pedir comida no Ifood. O Cartão Ifood é uma ótima opção para presentear quem você ama. Com ele, você pode presentear alguém com créditos para pedir comida no Ifood.',
        preco: 50.00,
        imagem: 'ifood.png',
        categoria: 'Alimentação',
      }, {
        nome: 'Gift Card Digital Steam',
        descricao: 'O Cartão Steam é uma ótima opção para presentear quem você ama. Com ele, você pode presentear alguém com créditos para comprar jogos na Steam. O Cartão Steam é uma ótima opção para presentear quem você ama. Com ele, você pode presentear alguém com créditos para comprar jogos na Steam.',
        preco: 43.00,
        imagem: 'steam.png',
        categoria: 'Jogos',
      }, {
        nome: 'Gift Card Digital Assai',
        descricao: 'O Cartão Assai é uma ótima opção para presentear quem você ama. Com ele, você pode presentear alguém com créditos para comprar na Assai. O Cartão Assai é uma ótima opção para presentear quem você ama. Com ele, você pode presentear alguém com créditos para comprar na Assai.',
        preco: 70.00,
        imagem: 'assai.png',
        categoria: 'Mercado',
      }, {
        nome: 'Gift Card Digital Google Play',
        descricao: 'O Cartão Google Play é uma ótima opção para presentear quem você ama. Com ele, você pode presentear alguém com créditos para comprar na Google Play. O Cartão Google Play é uma ótima opção para presentear quem você ama. Com ele, você pode presentear alguém com créditos para comprar na Google Play.',
        preco: 25.00,
        imagem: 'gp.png',
        categoria: 'Jogos',
      }
    ]);
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('produtos', null, {});
  }
};
