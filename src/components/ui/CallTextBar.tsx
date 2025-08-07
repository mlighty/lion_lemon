import React from 'react';

export default function CallTextBar() {
  return (
    <div className="fixed bg-neutral-800 box-border hidden z-[900] px-4 py-2 bottom-0 inset-x-0">
      <div className="items-center box-border flex justify-center">
        <a href="tel://877.891.1876" className="relative text-yellow-400 text-[20.25px] font-bold content-center items-center bg-neutral-900 bg-[linear-gradient(rgba(0,0,0,0)_calc(100%_-_2px),rgb(38,121,184)_1px)] bg-no-repeat bg-size-[0px] box-border flex h-full leading-[30.375px] text-center uppercase border-yellow-400 bg-right mr-6 px-6 py-3 border-2 border-solid font-oswald">
          <img src="https://c.animaapp.com/me11n5bffLhWIi/assets/phone.svg" className="aspect-[auto_29_/_29] box-border grayscale-[1] brightness-0 invert-[0.85] sepia-[0.67] saturate-[26.33] hue-rotate-[344deg] brightness-[0.97] contrast-[1.1] max-w-full w-[29px] mr-2" />
          <span className="text-base box-border block leading-6">CALL</span>
        </a>
        <a href="sms://13233582679" className="relative text-neutral-900 text-[20.25px] font-bold content-center items-center bg-yellow-400 bg-[linear-gradient(rgba(0,0,0,0)_calc(100%_-_2px),rgb(38,121,184)_1px)] bg-no-repeat bg-size-[0px] box-border flex h-full leading-[30.375px] text-center uppercase border-yellow-400 bg-right px-6 py-3 border-2 border-solid font-oswald">
          <img src="https://c.animaapp.com/me11n5bffLhWIi/assets/sms.svg" className="aspect-[auto_19_/_18] box-border max-w-full w-[19px] mr-2" />
          <span className="text-base box-border block leading-6">TEXT</span>
        </a>
      </div>
    </div>
  );
}
