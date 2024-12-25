import React from 'react';
import Header from "../components/Header";
import Hero from '../components/Hero';
import FeaturedPosts from '../components/FeaturedPosts';
import Footer from '../components/Footer';

const HomePage: React.FC = () => (
  <div className='relative flex flex-col '>
    <Header />
    <Hero />
    <FeaturedPosts />
    <Footer />
  </div>
);

export default HomePage;
