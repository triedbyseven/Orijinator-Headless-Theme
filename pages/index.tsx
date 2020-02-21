import React from 'react';
import Layout from '../components/Layout';
import Hero from '../components/Hero';
import WhoWeAre from '../components/WhoWeAre';
import OurAdvantages from '../components/OurAdvantages';
import OurServices from '../components/OurServices';
import { getPosts } from '../api/posts';
import { NextPage } from 'next';

interface IndexProps {
  posts: any;
}

const Index: NextPage<IndexProps> = props => {
  return (
    <Layout>
      <Hero />
      <WhoWeAre />
      <OurAdvantages />
      <OurServices />
    </Layout>
  );
};

Index.getInitialProps = async () => {
  const posts: any = await getPosts();
  return { posts: posts };
};

export default Index;
