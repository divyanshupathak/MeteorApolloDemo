export default typeDefs = [`
	type Post {
		id: Int
		content: String
		views: Int
	}
	type MongoPost {
	  _id: String
	  content: String
	  views: Int
	}
	type MongoPostsDelete{
		_id: String
	}
	type DeletePost{
		id: Int
	}
	#type GitHubRepository {
	#	name: String
	#}
	type Query {
	  posts(views: Int): [Post]
	  mongoPost(views: Int): [MongoPost]
	  #gitHubRepository(name: String): [GitHubRepository]
	}
	#type Submission {
	#	repository(fullName: String): [GitHubRepository]
	#}

	# this schema allows the following mutation:
	type Mutation {
	  addPost (
	    content: String!,
	    views: Int
	  ): Post
	  deletePost (
	  	id: Int
	  ): [DeletePost]
	  addMongoPost (
	    content: String!,
	    views: Int
	  ): Post
	  deleteMongoPost (
	  	_id: String
	  ): [MongoPostsDelete]
	}

	schema {
	  query: Query
	  mutation: Mutation
	}
`];