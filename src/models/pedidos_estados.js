import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class pedidos_estados extends Model {
  static init(sequelize, DataTypes) {
  return sequelize.define('pedidos_estados', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      primaryKey: true
    },
    estado: {
      type: DataTypes.TINYINT.UNSIGNED,
      allowNull: false,
      comment: "\t1=Creado 2=Confirmado 3=Enviado 4=Finalizado 25=Rechazado 26=Cancelado Tienda 27=Cancelado Cliente 31=Reclamo 32=Reclamo Finalizado 33=Soporte 34=Soporte Finalizado"
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
    tableName: 'pedidos_estados',
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
