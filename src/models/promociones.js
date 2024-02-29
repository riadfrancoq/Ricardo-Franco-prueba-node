import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class promociones extends Model {
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
      comment: "0=Inactivo 1=Activo"
    },
    nombre: {
      type: DataTypes.STRING(40),
      allowNull: false
    },
    imagen: {
      type: DataTypes.STRING(120),
      allowNull: true,
      comment: "Max 900"
    },
    porcentaje: {
      type: DataTypes.TINYINT.UNSIGNED,
      allowNull: true
    },
    dias_semana: {
      type: DataTypes.STRING(21),
      allowNull: false,
      defaultValue: "[0,0,0,0,0,0,0]",
      comment: "0=No 1=Si... Lunes=Día_1 Domingo=Día_7... Aplica para Full_categoría"
    }
  }, {
    sequelize,
    tableName: 'promociones',
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
    ]
  });
  }
}
