import React from 'react';
import Head from 'next/head';
import Header from '../src/components/layout/Header';
import HeroSection from '../src/components/sections/HeroSection';
import VerdictSection from '../src/components/sections/VerdictSection';
import AwardsSection from '../src/components/sections/AwardsSection';
import AboutSection from '../src/components/sections/AboutSection';
import StatsSection from '../src/components/sections/StatsSection';
import FeaturesSection from '../src/components/sections/FeaturesSection';
import LeaderSection from '../src/components/sections/LeaderSection';
import RecoveredSection from '../src/components/sections/RecoveredSection';
import TeamSection from '../src/components/sections/TeamSection';
import NewsSection from '../src/components/sections/NewsSection';
import ReasonsSection from '../src/components/sections/ReasonsSection';
import ReviewsSection from '../src/components/sections/ReviewsSection';
import ContactFormSection from '../src/components/sections/ContactFormSection';
import Footer from '../src/components/layout/Footer';
import CookieBanner from '../src/components/ui/CookieBanner';
import CookieDialog from '../src/components/ui/CookieDialog';
import AccessibilityWidget from '../src/components/ui/AccessibilityWidget';
import ChatWidget from '../src/components/ui/ChatWidget';
import CallTextBar from '../src/components/ui/CallTextBar';
import SchemaMarkup from '../src/components/seo/SchemaMarkup';

export default function Home() {
  return (
    <>
      <Head>
        <title>California Lemon Law Attorneys | Free Consultation | Lion Lemon Law</title>
        <meta 
          name="description" 
          content="California's premier lemon law attorneys with proven results. Free case evaluation for defective vehicles. No upfront costs. Get the compensation you deserve. Call now!" 
        />
        <meta 
          name="keywords" 
          content="california lemon law attorney, lemon law lawyer california, defective car attorney, california lemon lawyer, automotive attorney california, lemon law case attorney" 
        />
        
        {/* Open Graph Meta Tags */}
        <meta property="og:title" content="California Lemon Law Attorneys | Lion Lemon Law" />
        <meta 
          property="og:description" 
          content="California's premier lemon law attorneys with proven results. Free case evaluation for defective vehicles. No upfront costs." 
        />
        <meta property="og:url" content="https://lionlemonlaw.com/" />
        
        {/* Twitter Card Meta Tags */}
        <meta name="twitter:title" content="California Lemon Law Attorneys | Lion Lemon Law" />
        <meta 
          name="twitter:description" 
          content="California's premier lemon law attorneys with proven results. Free case evaluation for defective vehicles." 
        />
      </Head>

      {/* Schema Markup for SEO */}
      <SchemaMarkup />

      <div className="text-zinc-600 text-lg not-italic normal-nums font-normal accent-auto box-border block tracking-[normal] leading-[27px] list-outside list-disc overflow-x-hidden overflow-y-auto text-start indent-[0px] normal-case visible border-separate font-source_sans_pro">
        {/* Skip Links for Accessibility */}
        <a 
          href="#main-content" 
          className="sr-only focus:not-sr-only focus:absolute focus:top-0 focus:left-0 focus:z-50 focus:px-4 focus:py-2 focus:bg-blue-600 focus:text-white focus:underline"
        >
          Skip to main content
        </a>
        <AccessibilityWidget />
        <Header />
        <div className="box-border pt-[152px] md:pt-[153px]">
          <main id="main-content" className="box-border">
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
    </>
  );
}