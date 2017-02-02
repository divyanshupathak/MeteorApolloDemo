import { Post } from './connectors';
import MongoPosts from './collections';

// import rp from 'request-promise';

// import { getRepositoryByName } from './github-connector.js';

// create the resolve functions for the available GraphQL queries
export default resolvers = {
	Query: {
		posts(_, args){
			// console.log("Post >>>> ", Post.findAll({where: args}));
			return Post.findAll({where: args});
		},
		mongoPost(_, args) {
			// console.log("mongoPost Query ARGS >>>> ", args);
			// console.log("mongoPost >>>> ", MongoPosts.find().fetch());
			return MongoPosts.find().fetch();
		},
		// gitHubRepository(root, args, context) {
		//   return getRepositoryByName(args.name);
		// },
	},
	// Submission: {
	//   'repository'(root, args, context) {
	//     return getRepositoryByName(root.repositoryFullName);
	//   }
	// },
	Mutation: {
		addPost(_, args) {
			return Post.create(args);
		},
		deletePost(_, args) {
			console.log("deletePost ARGS >>>> ", args, args.id);
			return Post.destroy({ where: { id: args.id } });
		},
		addMongoPost(_, args) {
			// console.log("> ARGS = > ",args);
			return MongoPosts.insert(args);
		},
		deleteMongoPost(_, args) {
			// console.log("deleteMongoPost ARGS >>>> ", args);
			return MongoPosts.remove({_id: args._id});
		}
	}
};