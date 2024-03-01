import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class carritos extends Model {
  static init(sequelize, DataTypes) {
  return sequelize.define('carritos', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      primaryKey: true
    },
    cantidad: {
      type: DataTypes.DECIMAL(9,3),
      allowNull: false
    },
    id_producto: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      references: {
        model: 'productos',
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
    id_user: {
      type: DataTypes.MEDIUMINT.UNSIGNED,
      allowNull: false,
      comment: "Cliente Comprador",
      references: {
        model: 'users',
        key: 'id'
      }
    }
  }, {
    tableName: 'carritos',
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
        name: "id_producto_2",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id_producto" },
          { name: "id_tienda" },
          { name: "id_user" },
        ]
      },
      {
        name: "created_by",
        using: "BTREE",
        fields: [
          { name: "id_user" },
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
    ]
  });
  }
}
