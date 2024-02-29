import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class pedidos extends Model {
  static init(sequelize, DataTypes) {
  return sequelize.define('pedidos', {
    id: {
      autoIncrement: true,
      type: DataTypes.MEDIUMINT.UNSIGNED,
      allowNull: false,
      primaryKey: true
    },
    instrucciones: {
      type: DataTypes.STRING(500),
      allowNull: true
    },
    entrega_fecha: {
      type: DataTypes.DATEONLY,
      allowNull: false,
      comment: "El cliente cuando desea que su pedido sea entregado"
    },
    valor_productos: {
      type: DataTypes.DECIMAL(12,3),
      allowNull: false
    },
    valor_envio: {
      type: DataTypes.DECIMAL(10,3),
      allowNull: false
    },
    valor_descuento: {
      type: DataTypes.DECIMAL(12,3),
      allowNull: false,
      comment: "Valor producto - Valor promo"
    },
    valor_cupon: {
      type: DataTypes.DECIMAL(11,3),
      allowNull: false,
      defaultValue: 0.000,
      comment: "Valor descuento por cupón aplicado (tomado del pedido hijo)"
    },
    impuestos: {
      type: DataTypes.TINYINT.UNSIGNED,
      allowNull: false,
      defaultValue: 0,
      comment: "0=No 1=Si"
    },
    valor_impuestos: {
      type: DataTypes.DECIMAL(11,3),
      allowNull: false,
      defaultValue: 0.000,
      comment: "Valor de impuestos de todos los productos -- No tiene en cuenta el valor final"
    },
    valor_final: {
      type: DataTypes.DECIMAL(12,3),
      allowNull: false
    },
    calificacion: {
      type: DataTypes.DECIMAL(3,2),
      allowNull: true,
      comment: "Calculado con todas las Calificaciones y sus pesos"
    },
    id_tienda: {
      type: DataTypes.SMALLINT.UNSIGNED,
      allowNull: false,
      references: {
        model: 'tiendas',
        key: 'id'
      }
    },
    direccion: {
      type: DataTypes.STRING(160),
      allowNull: true,
      comment: "Guardar el String de la dirección del cliente en ese momento. En manual es digitada"
    },
    valor_comision: {
      type: DataTypes.DECIMAL(11,3),
      allowNull: false,
      defaultValue: 0.000,
      comment: "Es el valor de la comisión calculado segun la utilidad"
    },
    id_user: {
      type: DataTypes.MEDIUMINT.UNSIGNED,
      allowNull: true,
      comment: "Cliente",
      references: {
        model: 'users',
        key: 'id'
      }
    }
  }, {
    tableName: 'pedidos',
    timestamps: true,
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
        name: "created_by",
        using: "BTREE",
        fields: [
          { name: "id_user" },
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
