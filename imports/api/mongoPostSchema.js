import { Random } from 'meteor/random';
import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';

var PostsCollection = new Mongo.Collection('posts');

export const mongoTypeDefs = [`
	type Post {
		_id: String
		content: String
		views: Int
	}
	type Query {
		mongoDBposts(): [Post]
	}

	# this schema allows the following mutation:
	type Mutation {
		addMongodbPosts (
			content: String!,
			views: Int
		): Post
	}
	schema {
		query: Query
		mutation: Mutation
	}
`];


export const mongoResolver = {
	Query: {
		mongoDBposts() {
			return PostsCollection.findOne({})
		}
	},
	Mutation: {
		addMongodbPosts(data){
			PostsCollection.create(data)
		}
	}
}