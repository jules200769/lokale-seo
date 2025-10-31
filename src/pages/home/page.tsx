
import Header from '../../components/feature/Header';
import Footer from '../../components/feature/Footer';
import HeroSection from './components/HeroSection';
import ProblemsSection from './components/ProblemsSection';
import WhyChooseSection from './components/WhyChooseSection';
import ServicesPreview from './components/ServicesPreview';
import CTASection from './components/CTASection';

const HomePage = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <HeroSection />
        <ProblemsSection />
        <WhyChooseSection />
        <ServicesPreview />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default HomePage;
