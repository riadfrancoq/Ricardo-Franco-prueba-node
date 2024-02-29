import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class users_clientes extends Model {
  static init(sequelize, DataTypes) {
  return super.init({
    id: {
      autoIncrement: true,
      type: DataTypes.MEDIUMINT.UNSIGNED,
      allowNull: false,
      primaryKey: true
    },
    telefono: {
      type: DataTypes.BIGINT.UNSIGNED,
      allowNull: true
    },
    nombre: {
      type: DataTypes.STRING(60),
      allowNull: true
    },
    genero: {
      type: DataTypes.TINYINT.UNSIGNED,
      allowNull: false,
      defaultValue: 1,
      comment: "1=Otro 2=Masculino 3=Femenino"
    },
    nacimiento: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    identificacion: {
      type: DataTypes.STRING(20),
      allowNull: true,
      comment: "El label se obtiene de x_parametros.tipo=101",
      unique: "identificacion"
    },
    id_direccion: {
      type: DataTypes.MEDIUMINT.UNSIGNED,
      allowNull: true,
      comment: "Conexión a dirección que actualmente está como Principal",
      references: {
        model: 'users_direcciones',
        key: 'id'
      }
    },
    id_user: {
      type: DataTypes.MEDIUMINT.UNSIGNED,
      allowNull: false,
      comment: "User al que está asociado este Cliente",
      references: {
        model: 'users',
        key: 'id'
      },
      unique: "users_clientes_ibfk_2"
    }
  }, {
    sequelize,
    tableName: 'users_clientes',
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
        name: "id_user_2",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id_user" },
        ]
      },
      {
        name: "identificacion",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "identificacion" },
        ]
      },
      {
        name: "id_user",
        using: "BTREE",
        fields: [
          { name: "id_user" },
        ]
      },
      {
        name: "id_direccion",
        using: "BTREE",
        fields: [
          { name: "id_direccion" },
        ]
      },
    ]
  });
  }
}
