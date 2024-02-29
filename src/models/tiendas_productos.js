import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class tiendas_productos extends Model {
  static init(sequelize, DataTypes) {
  return sequelize.define('tiendas_productos', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      primaryKey: true
    },
    compra_maxima: {
      type: DataTypes.DECIMAL(3,1),
      allowNull: false,
      defaultValue: 1.0
    },
    valor: {
      type: DataTypes.DECIMAL(11,3),
      allowNull: false,
      comment: "Valor de venta más actual"
    },
    id_promocion: {
      type: DataTypes.MEDIUMINT.UNSIGNED,
      allowNull: true,
      references: {
        model: 'promociones',
        key: 'id'
      }
    },
    id_tienda: {
      type: DataTypes.SMALLINT.UNSIGNED,
      allowNull: false,
      references: {
        model: 'tiendas',
        key: 'id'
      }
    },
    id_producto: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      references: {
        model: 'productos',
        key: 'id'
      }
    }
  }, {
    tableName: 'tiendas_productos',
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
        name: "id_tienda_2",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id_tienda" },
          { name: "id_producto" },
        ]
      },
      {
        name: "id_producto",
        using: "BTREE",
        fields: [
          { name: "id_producto" },
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
