import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class users_direcciones extends Model {
  static init(sequelize, DataTypes) {
  return sequelize.define('users_direcciones', {
    id: {
      autoIncrement: true,
      type: DataTypes.MEDIUMINT.UNSIGNED,
      allowNull: false,
      primaryKey: true
    },
    nombre: {
      type: DataTypes.STRING(30),
      allowNull: false,
      comment: "Nombre del lugar. Oficina, Casa, Trabajo"
    },
    direccion: {
      type: DataTypes.STRING(120),
      allowNull: false
    },
    distancia: {
      type: DataTypes.SMALLINT.UNSIGNED,
      allowNull: false
    },
    id_user: {
      type: DataTypes.MEDIUMINT.UNSIGNED,
      allowNull: false,
      references: {
        model: 'users',
        key: 'id'
      }
    }
  }, {
    tableName: 'users_direcciones',
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
        name: "id_user",
        using: "BTREE",
        fields: [
          { name: "id_user" },
        ]
      },
    ]
  });
  }
}
