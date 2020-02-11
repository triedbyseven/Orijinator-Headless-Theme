import React from 'react';
import Layout from '../components/Layout';
import { getPosts } from '../api/posts';
import { NextPage } from 'next';

interface IndexProps {
  posts: any;
}

const Index: NextPage<IndexProps> = props => {
  return (
    <Layout>
      <ul>
        {props.posts.map(post => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </Layout>
  )
}

Index.getInitialProps = async () => {
  const posts: any = await getPosts();
  return { posts: posts }
}

export default Index;