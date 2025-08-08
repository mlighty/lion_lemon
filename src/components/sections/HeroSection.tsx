import React from 'react';
import ContactForm from '../forms/ContactForm';

export default function HeroSection() {
  return (
    <header className="relative bg-slate-900 box-border flex flex-col justify-center w-full overflow-hidden pt-0 pb-10 md:block md:flex-row md:justify-normal md:pt-10">
      <img src="https://c.animaapp.com/me11n5bffLhWIi/assets/11.webp" alt="California lemon law attorneys helping clients with defective vehicles" sizes="(max-width: 1440px) 100vw, 1440px" className="static aspect-[auto_1440_/_734] box-border hidden h-full max-w-full object-cover w-full right-0 inset-y-0 md:absolute md:block" loading="lazy" />
      <img src="https://c.animaapp.com/me11n5bffLhWIi/assets/16.webp" alt="Lion Lemon Law mobile hero image" sizes="(max-width: 960px) 100vw, 960px" className="static aspect-[auto_960_/_866] box-border block h-full max-w-full min-h-[auto] min-w-[auto] object-cover w-full right-0 inset-y-0 md:absolute md:hidden md:min-h-0 md:min-w-0" loading="lazy" />
      <div className="static items-center box-border flex flex-col min-h-[auto] min-w-[auto] w-full pt-6 px-4 left-[60%] md:relative md:[align-items:normal] md:block md:flex-row md:min-h-0 md:min-w-0 md:w-[500px] md:pt-0">
        <h1 className="text-white text-sm box-border clear-both tracking-[4.48px] leading-5 min-h-[auto] min-w-[auto] font-source_sans_pro md:min-h-0 md:min-w-0">Lion Lemon - California Lemon Law Attorneys</h1>
        <span className="text-zinc-50 text-5xl box-border block leading-[60px] min-h-[auto] min-w-[auto] text-center md:text-[68px] md:inline md:leading-[85px] md:min-h-0 md:min-w-0 md:text-left">
          Have A Lemon? <span className="text-yellow-400 text-5xl box-border block leading-[60px] text-center md:text-[68px] md:leading-[85px] md:text-left">We Can Help.</span>
        </span>
        <div className="box-border max-w-none min-h-[auto] min-w-[auto] w-full mt-4 md:max-w-md md:min-h-0 md:min-w-0">
          <ContactForm />
        </div>
      </div>
    </header>
  );
}
