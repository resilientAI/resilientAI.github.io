import React from 'react';
import Layout from '../components/Layout';
import HomePage from './HomePage'; // 确保路径正确
import RecommendationPage from './RecommendationPage';
import CommunityPage from './CommunityPage';
import ProfilePage from './ProfilePage';
import OrderPage from './OrderPage';

export default function Home() {
  return (
    <Layout>
      <HomePage />
      <RecommendationPage />
      <CommunityPage />
      <ProfilePage />
      <OrderPage />
    </Layout>
  );
}
