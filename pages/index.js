import React from 'react';
import { getPosts } from '../api/posts';

const Index = props => {
  return (
    <ul>
      {props.posts.map(post => (
        <li key={post.id}>{post.title}</li>
      ))}
    </ul>
  )
}

Index.getInitialProps = async () => {
  const posts = await getPosts();
  return { posts: posts }
}

export default Index;