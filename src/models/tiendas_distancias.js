import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class tiendas_distancias extends Model {
  static init(sequelize, DataTypes) {
  return super.init({
    id: {
      autoIncrement: true,
      type: DataTypes.MEDIUMINT.UNSIGNED,
      allowNull: false,
      primaryKey: true
    },
    id_tienda: {
      type: DataTypes.SMALLINT.UNSIGNED,
      allowNull: false,
      references: {
        model: 'tiendas',
        key: 'id'
      }
    },
    valor: {
      type: DataTypes.SMALLINT.UNSIGNED,
      allowNull: false
    },
    desde: {
      type: DataTypes.SMALLINT.UNSIGNED,
      allowNull: true
    },
    hasta: {
      type: DataTypes.SMALLINT.UNSIGNED,
      allowNull: true,
      comment: "Null= +nn mt. Se usa para dar valor cuando la distancia sobre pasa la distancia mayor"
    }
  }, {
    sequelize,
    tableName: 'tiendas_distancias',
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
    ]
  });
  }
}
