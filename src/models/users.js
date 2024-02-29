import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class users extends Model {
  static init(sequelize, DataTypes) {
  return super.init({
    id: {
      autoIncrement: true,
      type: DataTypes.MEDIUMINT.UNSIGNED,
      allowNull: false,
      primaryKey: true
    },
    estado: {
      type: DataTypes.TINYINT.UNSIGNED,
      allowNull: false,
      defaultValue: 1,
      comment: "0=Inactivo 1=Activo."
    },
    tipo: {
      type: DataTypes.TINYINT.UNSIGNED,
      allowNull: false,
      comment: "1=Admin 2=Tienda 3=Cliente"
    },
    login: {
      type: DataTypes.TINYINT.UNSIGNED,
      allowNull: false,
      comment: "1=Teléfono 2=Correo"
    },
    telefono: {
      type: DataTypes.BIGINT.UNSIGNED,
      allowNull: true,
      comment: "Identificador Principal. Unique",
      unique: "telefono"
    },
    codigo_temporal: {
      type: DataTypes.MEDIUMINT.UNSIGNED,
      allowNull: true,
      comment: "Código temporal para Login por mensaje de texto o correo"
    },
    correo: {
      type: DataTypes.STRING(70),
      allowNull: true,
      unique: "correo"
    },
    password: {
      type: DataTypes.STRING(120),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'users',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id" },
        ]
      },
      {
        name: "telefono",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "telefono" },
        ]
      },
      {
        name: "correo",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "correo" },
        ]
      },
    ]
  });
  }
}
