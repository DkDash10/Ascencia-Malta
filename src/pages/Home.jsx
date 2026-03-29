import { useEffect } from 'react';
import Hero        from '../components/home/Hero';
import Programs    from '../components/home/Programs';
import WhyUs       from '../components/home/WhyUs';
import News from '../components/home/News';
import JoinUs      from '../components/home/JoinUs';

export default function Home() {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <div className="page-wrapper">
      <Hero />
      <Programs />
      <WhyUs />
      <News />
      <JoinUs />
    </div>
  );
}