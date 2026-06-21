import { Navigation } from '../components/Navigation';
import { Hero } from '../components/Hero';
import { QuickAccess } from '../components/QuickAccess';
import { ConservationMap } from '../components/ConservationMap';
import { Statistics } from '../components/Statistics';
import { VolcanTenorioFeature } from '../components/VolcanTenorioFeature';
import { NewsAndEvents } from '../components/NewsAndEvents';
import { MultimediaGallery } from '../components/MultimediaGallery';
import { Footer } from '../components/Footer';

export function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <main>
        <Hero />
        <QuickAccess />
        <ConservationMap />
        <Statistics />
        <VolcanTenorioFeature />
        <NewsAndEvents />
        <MultimediaGallery />
      </main>
      <Footer />
    </div>
  );
}
