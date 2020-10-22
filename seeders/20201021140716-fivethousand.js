'use strict';
module.exports = {
    up: (queryInterface, Sequelize) => {
      let datas = [];
      for(let i = 0; i < 1000000; i++){
        let obj = {
          name : 'name'+i,
          phone:'phone'+i,
          address: 'address'+i,
          hobby: 'hobby'+i,
          job: 'job'+i,
          music: 'music'+i,
          food: 'food'+i,
          money: 'money'+i,
          nickname: 'nickname'+i
        }
        datas.push(obj)
      }

      return queryInterface.bulkInsert('five_thousand_insert_test', datas, {});
    },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
