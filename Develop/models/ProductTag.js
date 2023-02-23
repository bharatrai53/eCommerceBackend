const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection');

class ProductTag extends Model {}

ProductTag.init(
  {
    // define columns
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
  },
  // define product_name column
  product_name: {
      type: DataTypes.STRING,
      allowNull: false
  },
  // define price column
  price: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: false,
      validate: {
          isDecimal: true
      }
  },
  // define stock column
  stock: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 10,
      validate: {
          isNumeric: true
      }
  },
  // define category_id column
  category_id: {
      type: DataTypes.INTEGER,
      references: {
          model: "category",
          key: "id"
      }
  }
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'product_tag',
  }
);

module.exports = ProductTag;
