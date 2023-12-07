import {Sequelize} from "sequelize";

const db = new Sequelize('crud_db','root','',{
    host: 'localhost',
    dialect: 'mysql'
});

export default db;



// import Sequelize from "sequelize";

// const db = new Sequelize('crud_db','root','',{
//     host: 'localhost',
//     dialect: 'mysql'
// });

// async function testConnection() {
//     try {
//       await db.authenticate();
//       console.log('Connection has been established successfully.');
//     } catch (error) {
//       console.error('Unable to connect to the database:', error);
//     }
//   }

//   testConnection();

//   export default db;
