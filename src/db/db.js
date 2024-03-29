import { Sequelize } from 'sequelize';
import dbConfig from '../config/config.js';
import models from '../models/init-models.js';
const {HOST, USER, PASSWORD, DB, DIALECT ,POOL} = dbConfig;
const {MAX, MIN, ACQUIRE, IDLE} = POOL;

const sequelize = new Sequelize(
    DB,
    USER,
    PASSWORD,
    {
        logging: false,
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

try {
    sequelize.authenticate();
    console.log('Connection has been established successfully.');
} catch (error) {
    console.error(err);    
}


const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.tables = models(sequelize);

db.sequelize.sync({force: false}). // very important to put it 
then(()=> {
    console.log('yes re-sync done!');
});

export default db;