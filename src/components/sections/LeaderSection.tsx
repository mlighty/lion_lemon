import React from 'react';

export default function LeaderSection() {
  return (
    <div className="static items-center bg-slate-900 box-border flex flex-col h-auto justify-center max-w-[375px] w-screen overflow-hidden mx-auto pb-6 md:relative md:[align-items:normal] md:flex-row md:h-[648px] md:justify-normal md:max-w-screen-xl md:pb-0">
      <img src="https://c.animaapp.com/me11n5bffLhWIi/assets/ll-team-2025.jpg" className="static aspect-[auto_1920_/_885] bg-slate-900 box-border hidden h-full max-w-full object-contain w-full right-0 inset-y-0 md:absolute md:block" />
      <img src="https://c.animaapp.com/me11n5bffLhWIi/assets/ll-team-2025-mobile.jpg" className="static aspect-[auto_784_/_750] box-border block h-full max-w-full min-h-[auto] min-w-[auto] object-cover w-full right-0 inset-y-0 md:absolute md:hidden md:min-h-0 md:min-w-0" />
      <div className="static text-white items-center box-border flex flex-col justify-center text-center w-[480px] z-[100] py-6 left-[3%] top-[70px] md:relative md:[align-items:normal] md:block md:flex-row md:justify-normal md:text-start md:py-0">
        <h2 className="text-zinc-50 text-[35px] box-border clear-both leading-[38.5px] min-h-[auto] min-w-[auto] text-center font-oswald md:text-[55px] md:leading-[60.5px] md:min-h-0 md:min-w-0 md:text-start">A Leader</h2>
        <h2 className="text-yellow-400 text-[35px] box-border clear-both leading-[38.5px] min-h-[auto] min-w-[auto] text-center font-oswald md:text-[55px] md:leading-[60.5px] md:min-h-0 md:min-w-0 md:text-start">In The Industry</h2>
        <p className="box-border min-h-[auto] min-w-[auto] break-words text-center w-[300px] mt-[29px] mb-[49px] md:min-h-0 md:min-w-0 md:text-start md:w-auto">
          The Lemon Law Experts specialize in advocating for consumers like you facing repeat vehicle repairs. Our acclaimed lawyers excel at securing substantial settlements and jury awards, ensuring you receive the maximum compensation possible. If your vehicle has been subject to repeat warranty repairs, trust our award-winning team to navigate your case to success and ensure you receive the justice and compensation you deserve. Join the Lemon Law Experts to claim your rights and achieve success with your lemon law claim.
        </p>
        <a href="/contact-our-attorneys/" className="relative text-neutral-900 font-bold bg-yellow-400 bg-[linear-gradient(rgba(0,0,0,0)_calc(100%_-_2px),rgb(38,121,184)_1px)] bg-no-repeat bg-size-[0px] box-border block min-h-[auto] min-w-[auto] text-center uppercase border-yellow-400 bg-right px-6 py-3 border-2 border-solid font-oswald md:inline-block md:min-h-0 md:min-w-0">
          <strong className="font-black box-border">CONTACT US</strong>
        </a>
      </div>
    </div>
  );
}
