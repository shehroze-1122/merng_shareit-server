const { gql } = require('graphql-tag')

module.exports = gql`

    type Post{
        id: ID!
        body: String!
        createdAt: String!
        username: String!
        comments: [Comment]!
        likes: [Like]!
        likesCount: Int!
        commentsCount: Int!
    }

    type Comment{
        id: ID!
        body: String!
        username: String!
        createdAt: String!
    }

    type Like{
        id: ID!
        username: String!
        createdAt: String!
    }

    type User{
        id: ID!
        username: String!
        email: String!
        password: String!
        token: String!
        createdAt: String!
    
    }

    input RegisterInput{ 
        username: String!
        password: String!
        confirmPassword: String!
        email: String!
    }

    input LoginInput{
        username: String!
        password: String!
    }

    input CommentInput{
        postId: ID!
        body: String!
    }

    input DeleteInput{
        postId: ID!
        commentId: ID!
    }

    type Query{
        getPosts: [Post]!
        getPost(postId: ID): Post!
    }

    type Mutation{
        register(registerInput: RegisterInput!): User!
        login( loginInput: LoginInput! ): User!
        createPost(body: String!): Post!
        deletePost(postId: ID!): String!
        createComment(commentInput: CommentInput!): Post!
        deleteComment(deleteCommentInput: DeleteInput!): Post!
        likePost(postId: ID!): Post!
    }

    # type Subscription{
    #     newPost: Post!
    # }

`