import React from 'react';

export default function AboutSection() {
  return (
    <div className="relative text-zinc-50 bg-sky-950 box-border clear-both ml-[-30px] max-w-[calc(100%_+_60px)] w-[calc(100%_+_60px)] mr-auto mt-[19.98px] py-10 md:mt-[30px]">
      <div className="relative box-border max-w-none w-full z-[1] mx-auto px-4 md:max-w-4xl">
        <div className="items-end box-border flex flex-wrap mb-8">
          <header className="box-border w-auto mx-auto md:w-6/12">
            <span className="box-border block leading-[22.5px] uppercase">
              <strong className="font-bold box-border">WE ARE</strong>
            </span>
            <h2 className="text-[26px] box-border clear-both leading-[32.5px] uppercase font-oswald md:text-[61px] md:leading-[76.25px]">
              California's Premier <span className="text-yellow-400 text-[26px] box-border block leading-[32.5px] md:text-[61px] md:leading-[76.25px]">Lemon Law Firm</span>
            </h2>
          </header>
          <div className="box-border hidden min-h-0 min-w-0 text-right w-6/12 md:block md:min-h-[auto] md:min-w-[auto]">
            <a href="/about/" className="relative text-neutral-900 font-bold bg-yellow-400 bg-[linear-gradient(rgba(0,0,0,0)_calc(100%_-_2px),rgb(38,121,184)_1px)] bg-no-repeat bg-size-[0px] box-border inline-block text-center uppercase border-yellow-400 bg-right px-6 py-3 border-2 border-solid font-oswald">Learn About Lion Lemon</a>
          </div>
        </div>
        <div className="box-border">
          <p className="box-border break-words">
            <iframe 
              src="https://www.youtube.com/embed/JLMSWmSO_DU?si=dZCTQNFm06h_nc0R" 
              title="YouTube video player" 
              className="aspect-video box-border max-w-full break-words w-full"
            ></iframe>
          </p>
        </div>
        <div className="box-border block text-center mt-8 md:hidden">
          <a href="/about/" className="relative text-neutral-900 font-bold bg-yellow-400 bg-[linear-gradient(rgba(0,0,0,0)_calc(100%_-_2px),rgb(38,121,184)_1px)] bg-no-repeat bg-size-[0px] box-border inline-block uppercase border-yellow-400 bg-right px-6 py-3 border-2 border-solid font-oswald">Learn About Lion Lemon</a>
        </div>
      </div>
    </div>
  );
}
