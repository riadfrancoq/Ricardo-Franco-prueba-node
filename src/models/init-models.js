import _sequelize from "sequelize";
const DataTypes = _sequelize.DataTypes;
import _carritos from  "./carritos.js";
import _pedidos from  "./pedidos.js";
import _pedidos_estados from  "./pedidos_estados.js";
import _pedidos_productos from  "./pedidos_productos.js";
import _productos from  "./productos.js";
import _promociones from  "./promociones.js";
import _tiendas from  "./tiendas.js";
import _tiendas_distancias from  "./tiendas_distancias.js";
import _tiendas_productos from  "./tiendas_productos.js";
import _tiendas_promociones from  "./tiendas_promociones.js";
import _users from  "./users.js";
import _users_clientes from  "./users_clientes.js";
import _users_direcciones from  "./users_direcciones.js";

export default function initModels(sequelize) {
  const carritos = _carritos.init(sequelize, DataTypes);
  const pedidos = _pedidos.init(sequelize, DataTypes);
  const pedidos_estados = _pedidos_estados.init(sequelize, DataTypes);
  const pedidos_productos = _pedidos_productos.init(sequelize, DataTypes);
  const productos = _productos.init(sequelize, DataTypes);
  const promociones = _promociones.init(sequelize, DataTypes);
  const tiendas = _tiendas.init(sequelize, DataTypes);
  const tiendas_distancias = _tiendas_distancias.init(sequelize, DataTypes);
  const tiendas_productos = _tiendas_productos.init(sequelize, DataTypes);
  const tiendas_promociones = _tiendas_promociones.init(sequelize, DataTypes);
  const users = _users.init(sequelize, DataTypes);
  const users_clientes = _users_clientes.init(sequelize, DataTypes);
  const users_direcciones = _users_direcciones.init(sequelize, DataTypes);

  pedidos_estados.belongsTo(pedidos, { as: "id_pedido_pedido", foreignKey: "id_pedido"});
  pedidos.hasMany(pedidos_estados, { as: "pedidos_estados", foreignKey: "id_pedido"});
  pedidos_productos.belongsTo(pedidos, { as: "id_pedido_pedido", foreignKey: "id_pedido"});
  pedidos.hasMany(pedidos_productos, { as: "pedidos_productos", foreignKey: "id_pedido"});
  carritos.belongsTo(productos, { as: "id_producto_producto", foreignKey: "id_producto"});
  productos.hasMany(carritos, { as: "carritos", foreignKey: "id_producto"});
  pedidos_productos.belongsTo(productos, { as: "id_producto_producto", foreignKey: "id_producto"});
  productos.hasMany(pedidos_productos, { as: "pedidos_productos", foreignKey: "id_producto"});
  tiendas_productos.belongsTo(productos, { as: "id_producto_producto", foreignKey: "id_producto"});
  productos.hasMany(tiendas_productos, { as: "tiendas_productos", foreignKey: "id_producto"});
  pedidos_productos.belongsTo(promociones, { as: "id_promocion_promocione", foreignKey: "id_promocion"});
  promociones.hasMany(pedidos_productos, { as: "pedidos_productos", foreignKey: "id_promocion"});
  tiendas_productos.belongsTo(promociones, { as: "promocion", foreignKey: "id_promocion"});
  promociones.hasMany(tiendas_productos, { as: "tiendas_productos", foreignKey: "id_promocion"});
  tiendas_promociones.belongsTo(promociones, { as: "id_promocion_promocione", foreignKey: "id_promocion"});
  promociones.hasMany(tiendas_promociones, { as: "tiendas_promociones", foreignKey: "id_promocion"});
  carritos.belongsTo(tiendas, { as: "id_tienda_tienda", foreignKey: "id_tienda"});
  tiendas.hasMany(carritos, { as: "carritos", foreignKey: "id_tienda"});
  pedidos.belongsTo(tiendas, { as: "id_tienda_tienda", foreignKey: "id_tienda"});
  tiendas.hasMany(pedidos, { as: "pedidos", foreignKey: "id_tienda"});
  tiendas_distancias.belongsTo(tiendas, { as: "id_tienda_tienda", foreignKey: "id_tienda"});
  tiendas.hasMany(tiendas_distancias, { as: "tiendas_distancia", foreignKey: "id_tienda"});
  tiendas_productos.belongsTo(tiendas, { as: "id_tienda_tienda", foreignKey: "id_tienda"});
  tiendas.hasMany(tiendas_productos, { as: "tiendas_productos", foreignKey: "id_tienda"});
  tiendas_promociones.belongsTo(tiendas, { as: "id_tienda_tienda", foreignKey: "id_tienda"});
  tiendas.hasMany(tiendas_promociones, { as: "tiendas_promociones", foreignKey: "id_tienda"});
  carritos.belongsTo(users, { as: "id_user_user", foreignKey: "id_user"});
  users.hasMany(carritos, { as: "carritos", foreignKey: "id_user"});
  pedidos.belongsTo(users, { as: "id_user_user", foreignKey: "id_user"});
  users.hasMany(pedidos, { as: "pedidos", foreignKey: "id_user"});
  users_clientes.belongsTo(users, { as: "id_user_user", foreignKey: "id_user"});
  users.hasOne(users_clientes, { as: "users_cliente", foreignKey: "id_user"});
  users_direcciones.belongsTo(users, { as: "id_user_user", foreignKey: "id_user"});
  users.hasMany(users_direcciones, { as: "users_direcciones", foreignKey: "id_user"});
  users_clientes.belongsTo(users_direcciones, { as: "id_direccion_users_direccione", foreignKey: "id_direccion"});
  users_direcciones.hasMany(users_clientes, { as: "users_clientes", foreignKey: "id_direccion"});

  return {
    carritos,
    pedidos,
    pedidos_estados,
    pedidos_productos,
    productos,
    promociones,
    tiendas,
    tiendas_distancias,
    tiendas_productos,
    tiendas_promociones,
    users,
    users_clientes,
    users_direcciones,
  };
}
