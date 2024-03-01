import { Sequelize } from 'sequelize';
import dbConfig from '../config/config.js';
import models from '../models/init-models.js';
const {HOST, USER, PASSWORD, DB, DIALECT, POOL} = dbConfig;
const {MAX, MIN, ACQUIRE, IDLE} = POOL;

const sequelize = new Sequelize(
    DB,
    USER,
    PASSWORD,
    {
        host: HOST,
        dialect: DIALECT,
        operatorsAliases: false,
        pool: {
            max: MAX,
            min: MIN,
            acquire: ACQUIRE,
            idle: IDLE
        }
    }

)

sequelize.authenticate().then(() => {

})
.catch(err => {
    console.error(err);
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.tables = models(sequelize);

db.sequelize.sync({force: false}). // very important to put it 
then(()=> {
    console.log('yes re-sync done!');
});

export default db;