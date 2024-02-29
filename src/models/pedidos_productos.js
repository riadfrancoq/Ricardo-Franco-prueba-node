import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class pedidos_productos extends Model {
  static init(sequelize, DataTypes) {
  return super.init({
    id: {
      autoIncrement: true,
      type: DataTypes.MEDIUMINT.UNSIGNED,
      allowNull: false,
      primaryKey: true
    },
    cantidad: {
      type: DataTypes.DECIMAL(9,3),
      allowNull: false
    },
    valor_unitario: {
      type: DataTypes.DECIMAL(11,3),
      allowNull: false,
      comment: "Valor en _productos_"
    },
    valor_unitario_promocion: {
      type: DataTypes.DECIMAL(11,3),
      allowNull: false,
      comment: "Valor en _productos_ si tiene promo _valor_promo_ si no tiene _valor_"
    },
    total_teorico: {
      type: DataTypes.DECIMAL(12,3),
      allowNull: false
    },
    total_final: {
      type: DataTypes.DECIMAL(12,3),
      allowNull: false,
      comment: "Se usa siempre, y es por motivo de si llega a haber promoción"
    },
    id_promocion: {
      type: DataTypes.MEDIUMINT.UNSIGNED,
      allowNull: true,
      comment: "La promoción de como se vendió",
      references: {
        model: 'promociones',
        key: 'id'
      }
    },
    id_producto: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: true,
      comment: "Null = Se borró el producto después",
      references: {
        model: 'productos',
        key: 'id'
      }
    },
    id_pedido: {
      type: DataTypes.MEDIUMINT.UNSIGNED,
      allowNull: false,
      references: {
        model: 'pedidos',
        key: 'id'
      }
    }
  }, {
    sequelize,
    tableName: 'pedidos_productos',
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
        name: "id_promocion",
        using: "BTREE",
        fields: [
          { name: "id_promocion" },
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
        name: "id_pedido",
        using: "BTREE",
        fields: [
          { name: "id_pedido" },
        ]
      },
    ]
  });
  }
}
