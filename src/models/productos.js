import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class productos extends Model {
  static init(sequelize, DataTypes) {
  return super.init({
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      primaryKey: true
    },
    estado: {
      type: DataTypes.TINYINT.UNSIGNED,
      allowNull: false,
      defaultValue: 1,
      comment: "0=Inactivo 1=Activo."
    },
    kit: {
      type: DataTypes.TINYINT.UNSIGNED,
      allowNull: false,
      defaultValue: 0,
      comment: "0=No 1=Si... Para evaluar disponibilidad, descuentos y otros en productos_kits"
    },
    barcode: {
      type: DataTypes.STRING(30),
      allowNull: false,
      comment: "Código de barras",
      unique: "barcode"
    },
    nombre: {
      type: DataTypes.STRING(60),
      allowNull: false
    },
    presentacion: {
      type: DataTypes.STRING(25),
      allowNull: false
    },
    descripcion: {
      type: DataTypes.STRING(500),
      allowNull: true
    },
    foto: {
      type: DataTypes.STRING(120),
      allowNull: true,
      comment: "Max 200"
    },
    peso: {
      type: DataTypes.DECIMAL(6,2),
      allowNull: false,
      defaultValue: 0.00,
      comment: "En Kilogramos"
    }
  }, {
    sequelize,
    tableName: 'productos',
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
        name: "barcode",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "barcode" },
        ]
      },
      {
        name: "nombre",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "nombre" },
          { name: "presentacion" },
        ]
      },
      {
        name: "barcode_2",
        using: "BTREE",
        fields: [
          { name: "barcode" },
        ]
      },
    ]
  });
  }
}
