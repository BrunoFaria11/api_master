module.exports = {
  up: (queryInterface, Sequelize) => {
    const Page = queryInterface.createTable('Pages', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      name: {
        allowNull: false,
        type: Sequelize.STRING,
      }
    });

    return Page;
  },

  down: queryInterface => queryInterface.dropTable('Pages'),
};