import s from './HomePage.module.css';
import React from 'react';
import Layout from '../../Layout/Layout';
import BrickInner from "../../MyBrickApp/BrickInner/BrickInner";

const HomePage = () => {
  return (
    <div>
      <Layout>
        <h3>Home Page</h3>
        <h3>Brick</h3>
          <BrickInner/>
      </Layout>
    </div>
  );
};

export default HomePage;
