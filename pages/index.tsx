import React from 'react';
import { getPosts } from '../api/posts';
import { NextPage } from 'next';

interface IndexProps {
  posts: any;
}

const Index: NextPage<IndexProps> = props => {
  return (
    <ul>
      {props.posts.map(post => (
        <li key={post.id}>{post.title}</li>
      ))}
    </ul>
  )
}

Index.getInitialProps = async () => {
  const posts: any = await getPosts();
  return { posts: posts }
}

export default Index;