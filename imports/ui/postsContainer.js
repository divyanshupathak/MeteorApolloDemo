import React, { Component, PropTypes } from 'react';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';
import Post from './post';

/**
* This React component is responsible for querying Apollo for the posts
* and passing the results to the child Post components for rendering
*/
class Posts extends Component {
	constructor(props) {
		super(props);
	}
	render() {
		// console.log("Posts >>>>>", this.props.data)
		let posts = <div></div>
		// let ourProps = this.props;
		let receivedData = this.props.source == "mysql" ? this.props.data.posts : this.props.data.mongoPost;

		if (receivedData && receivedData instanceof Array) {
			posts = (
				<table className="table">
					<thead>
						<tr>
							<th>Id</th>
							<th>Post</th>
							<th>Delete</th>
						</tr>
					</thead>
					<tbody>
						{
							receivedData.map((post, index)=> {
								return (
									<Post key={index} post={post} source={this.props.source} {...this.props} />
								)
							})
						}
					</tbody>
				</table>
			)
		}
		return posts;
	}
}

// Posts requires props with a data attribute of an array of posts
Posts.propTypes = {
	data: PropTypes.shape({
		posts: PropTypes.array,
		mongoPost: PropTypes.array
	}).isRequired
};

// Define the graphql query to retrieve the posts and the desired attributes
const allPosts = gql`
	query PostsForDisplay {
		posts {
			id,
			content,
			views
		}
		mongoPost {
			_id,
			content,
			views
		}
	}
`;

const deleteMySQlPost = gql`
	mutation deleteMySQLPostMutation ($id: Int!) {
		deletePost(id: $id) {
			id
		}
	}
`;
const deleteMongodbPost = gql`
	mutation deleteMongoPostMutation ($id: String) {
		deleteMongoPost(_id: $id) {
			_id
		}
	}
`;

// Define the graphql mutation for deleting the posts

/*const EditPostMutation = gql`
	mutation editPost($content: String) {
		edit(content: $content)
	}
`;*/

export default MessageFormContainer = graphql(allPosts, {
	options: { pollInterval: 5000 }
})(graphql(deleteMongodbPost, {
	props: ({ mutate }) => ({
		deleteMongoDbPost: (id) => mutate({
			variables: { id } 
		}),
	})
})(graphql(deleteMySQlPost, {
		props: ({ mutate }) => ({ 
			deleteSqlPost: (id) => ({ 
				variables: { id } 
			}),
		})
	})(Posts)
));

// Use the graphql container to run the allPosts query and pass the results to PostsContainer

/*export default PostsContainer = graphql(allPosts, {
	options: { pollInterval: 5000 }
})(Posts);*/