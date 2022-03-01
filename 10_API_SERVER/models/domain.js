const Sequlize = require("sequelize");

module.exports = class Domain extends Sequlize.Model {
  static init(sequelize) {
    return super.init(
      {
        host: {
          type: Sequlize.STRING(80),
          allowNull: false,
        },
        type: {
          type: Sequlize.ENUM("free", "premium"),
          allowNull: false,
        },
        clientSecret: {
          type: Sequlize.UUID,
          allowNull: false,
        },
      },
      {
        sequelize,
        timestamps: true,
        paranoid: true,
        modelName: "Domain",
        tableName: "domains",
      }
    );
  }

  static associate(db) {
    db.Domain.belongsTo(db.User);
  }
};
