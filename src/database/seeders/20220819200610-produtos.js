'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('produtos', [
      {
        nome: 'Gift Card Digital PlayStation Store',
        descricao: 'Cartão presente playstation store. Tudo o que você quiser jogar, escolha da maior biblioteca de conteúdo PlayStation no mundo. Adicione crédito à sua carteira digital para resgatar o que quiser na PlayStationStore (PS3, PS4 & PS5). Termos e Condições de serviço: https://www.playstation.com/pt-br/legal/psn-terms-of-service/',
        preco: 29.90,
        imagem: 'ps.png',
        categoria: 'Jogos',
      
    }, { 
        nome: 'Gift Card Digital Uber',
        descricao: 'O Cartão Uber Cash permite que você adicione crédito em sua conta Uber e possa viajar tranquilo ou encomendar sua comida favorita pelo Uber Eats, além controlar melhor seus gastos ou presentear amigos e parentes. Termos e Condições: Olá! Bom saber que você se interessou pelo Uber Pré-Pago. Queremos lhe explicar como vai funcionar! Antes de tudo, lembre-se que para usar o Uber Pré-Pago você precisa ter uma conta ativa de Usuário da Uber, isto é: i) ter 18 anos ou mais, ii) ter lido, compreendido e aceito tanto os Termos e Condições de Usuário como os seguintes Termos e Condições para o uso do Uber Pré-Pago. Este Uber Pré-Pago só funcionará em viagens do aplicativo Uber nas cidades brasileiras em que atuamos e não poderá ser recarregado, exceto quando exigido por lei. Também não poderá ser resgatado em dinheiro, reembolsado ou devolvido. O crédito é válido por 36 meses, contados somente após a sua ativação no ponto de venda, logo, não há motivo para não aproveitar seu Uber Pré-Pago. Uma dica: em algumas situações, você será obrigado a adicionar um método de pagamento secundário para usar seu Uber Pré-Pago em viagens no aplicativo Uber. Por favor, cuide bem do seu Uber Pré-Pago, porque não nos responsabilizamos por cartões perdidos ou roubados ou por uso não autorizado. Este Uber Pré-Pago é emitido pela Uber Do Brasil Tecnologia Ltda. Gostou? Conheça mais sobre o funcionamento do Uber Pré-Pago nos termos e condições completos e nos canais de atendimento ao cliente ou pelo site, uber.com/legal/gift/br.',
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
