import React from 'react';
import Hero from './components/Hero';
import Layout from './components/Layout';
import Navigation from './components/Navigation';
import About from './pages/About';
import Portfolio from './pages/Portolio';

function App() {
  return (
    <Layout>
      <Navigation />
      <Hero title="My name is Marco Chavez" subtitle="and I am a Software Developer" />
      <About />
      <Portfolio />
    </Layout>
  );
}

export default App;
