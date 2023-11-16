const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Article extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ User, Category }) {
      this.belongsTo(User, { foreignKey: 'uId' });
      this.belongsTo(Category, { foreignKey: 'cId' });
    }
  }
  Article.init(
    {
      name: DataTypes.STRING,
      img: DataTypes.TEXT,
      price: DataTypes.STRING,
      info: DataTypes.TEXT,
      cId: DataTypes.INTEGER,
      uId: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: 'Article',
    },
  );
  return Article;
};
