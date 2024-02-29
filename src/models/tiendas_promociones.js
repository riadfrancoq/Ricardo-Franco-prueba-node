import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class tiendas_promociones extends Model {
  static init(sequelize, DataTypes) {
  return sequelize.define('tiendas_promociones', {
    id: {
      autoIncrement: true,
      type: DataTypes.MEDIUMINT.UNSIGNED,
      allowNull: false,
      primaryKey: true
    },
    estado: {
      type: DataTypes.TINYINT.UNSIGNED,
      allowNull: false,
      comment: "0=Inactivo 1=Activo"
    },
    inicio: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    fin: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    id_tienda: {
      type: DataTypes.SMALLINT.UNSIGNED,
      allowNull: false,
      references: {
        model: 'tiendas',
        key: 'id'
      }
    },
    id_promocion: {
      type: DataTypes.MEDIUMINT.UNSIGNED,
      allowNull: false,
      references: {
        model: 'promociones',
        key: 'id'
      }
    }
  }, {
    tableName: 'tiendas_promociones',
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
        name: "id_tienda",
        using: "BTREE",
        fields: [
          { name: "id_tienda" },
        ]
      },
      {
        name: "id_promocion",
        using: "BTREE",
        fields: [
          { name: "id_promocion" },
        ]
      },
    ]
  });
  }
}
