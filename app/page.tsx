import Layout from '../components/Layout'
import HomePage from '../pages/HomePage'
import RecommendationPage from '../pages/RecommendationPage'
import CommunityPage from '../pages/CommunityPage'
import ProfilePage from '../pages/ProfilePage'
import OrderPage from '../pages/OrderPage'

export default function Home() {
  return (
    <Layout>
      <HomePage />
      <RecommendationPage />
      <CommunityPage />
      <ProfilePage />
      <OrderPage />
    </Layout>
  )
}

