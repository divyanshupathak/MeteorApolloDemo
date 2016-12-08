import Sequelize from 'sequelize';
import Mongoose from 'mongoose';

// create the connection for Sql
const sqlDb = new Sequelize('apollodemo', "root", "DT@234", {
	host: 'localhost',
	dialect: 'mysql'
});


// define the model
const PostModel = sqlDb.define('post', {
	content: { type: Sequelize.STRING },
	views: { type: Sequelize.INTEGER }
},{
	timestamps: false
});

// create the table if it doesn't exist yet
sqlDb.sync();

// export Post
const Post = sqlDb.models.post;
export { Post };