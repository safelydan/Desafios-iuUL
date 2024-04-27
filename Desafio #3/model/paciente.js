import sequelize from "../db.js";
import { DataTypes, Model } from "sequelize";

class Paciente extends Model {
  static init(sequelize) {
    return super.init(
      {
        id: {
          type: DataTypes.INTEGER,
          primaryKey: true,
          autoIncrement: true,
        },
        nome: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        cpf: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        dataNascimento: {
          type: DataTypes.DATEONLY,
          allowNull: false,
        },
      },
      {
        sequelize,
        modelName: "Paciente",
      }
    );
  }
}

Paciente.init(sequelize);

sequelize.options.define = {
  timestamps: true,
  charset: "utf8",
  dialectOptions: {
    dateStrings: true,
    typeCast: true,
    timezone: "-03:00",
  },
};

export default Paciente;
