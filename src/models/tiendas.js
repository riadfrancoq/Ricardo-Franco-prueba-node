import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class tiendas extends Model {
  static init(sequelize, DataTypes) {
  return super.init({
    id: {
      autoIncrement: true,
      type: DataTypes.SMALLINT.UNSIGNED,
      allowNull: false,
      primaryKey: true
    },
    estado: {
      type: DataTypes.TINYINT.UNSIGNED,
      allowNull: false,
      comment: "0=Inactivo 1=Activo"
    },
    nombre: {
      type: DataTypes.STRING(30),
      allowNull: false
    },
    descripcion: {
      type: DataTypes.STRING(500),
      allowNull: true
    },
    telefono: {
      type: DataTypes.STRING(20),
      allowNull: false
    },
    direccion: {
      type: DataTypes.STRING(120),
      allowNull: false
    },
    direccion_anexo: {
      type: DataTypes.STRING(40),
      allowNull: true
    },
    direccion_barrio: {
      type: DataTypes.STRING(25),
      allowNull: true
    },
    calificacion: {
      type: DataTypes.DECIMAL(3,2),
      allowNull: false,
      defaultValue: 0.00
    },
    calificacion_cantidad: {
      type: DataTypes.MEDIUMINT.UNSIGNED,
      allowNull: false,
      defaultValue: 0
    },
    impuestos: {
      type: DataTypes.TINYINT.UNSIGNED,
      allowNull: false,
      defaultValue: 0,
      comment: "0=No 1=Si +Impto 2=Si Impto incluido 3=Si Impto incluido sin etiqueta.. Los pedidos se liquidan con Impuestos, aplica para Pedidos y Admin_Pedidos"
    },
    dias_trabajados: {
      type: DataTypes.STRING(21),
      allowNull: false,
      defaultValue: "[1,1,1,1,1,1,0]",
      comment: "Arreglo de los días en trabaja el Cedis.. 0=No trabaja 1=Si trabaja... Lunes=Día_1 Domingo=Día_7"
    }
  }, {
    sequelize,
    tableName: 'tiendas',
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
