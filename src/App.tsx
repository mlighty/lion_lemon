import React from 'react';
import Header from './components/layout/Header';
import HeroSection from './components/sections/HeroSection';
import VerdictSection from './components/sections/VerdictSection';
import AwardsSection from './components/sections/AwardsSection';
import AboutSection from './components/sections/AboutSection';
import StatsSection from './components/sections/StatsSection';
import FeaturesSection from './components/sections/FeaturesSection';
import LeaderSection from './components/sections/LeaderSection';
import RecoveredSection from './components/sections/RecoveredSection';
import TeamSection from './components/sections/TeamSection';
import NewsSection from './components/sections/NewsSection';
import ReasonsSection from './components/sections/ReasonsSection';
import ReviewsSection from './components/sections/ReviewsSection';
import ContactFormSection from './components/sections/ContactFormSection';
import Footer from './components/layout/Footer';
import CookieBanner from './components/ui/CookieBanner';
import CookieDialog from './components/ui/CookieDialog';
import AccessibilityWidget from './components/ui/AccessibilityWidget';
import ChatWidget from './components/ui/ChatWidget';
import CallTextBar from './components/ui/CallTextBar';

function App() {
  return (
    <div className="text-zinc-600 text-lg not-italic normal-nums font-normal accent-auto box-border block tracking-[normal] leading-[27px] list-outside list-disc overflow-x-hidden overflow-y-auto text-start indent-[0px] normal-case visible border-separate font-source_sans_pro">
      <AccessibilityWidget />
      <Header />
      <div className="box-border pt-[152px] md:pt-[153px]">
        <main className="box-border">
          <article className="bg-white box-border">
            <HeroSection />
            <VerdictSection />
            <AwardsSection />
            <AboutSection />
            <StatsSection />
            <FeaturesSection />
            <LeaderSection />
            <RecoveredSection />
            <TeamSection />
            <NewsSection />
            <ReasonsSection />
            <ReviewsSection />
            <ContactFormSection />
          </article>
        </main>
      </div>
      <Footer />
      <CookieBanner />
      <CookieDialog />
      <CallTextBar />
      <ChatWidget />
    </div>
  );
}

export default App;
