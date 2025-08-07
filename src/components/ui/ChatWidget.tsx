import React, { useState } from 'react';

export default function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [showCallbackForm, setShowCallbackForm] = useState(false);

  return (
    <>
      <iframe src="https://insight.adsrvr.org/track/cei?adv=ofacchk&ref=https%253A%252F%252Flemonlawexperts.com%252F&upid=m98s0m4&upv=1.1.0&paapi=1" title="TTD Universal Pixel" className="box-border hidden h-0 w-0"></iframe>
      <img className="aspect-[auto_1_/_1] box-border hidden max-w-full w-px" />
      <img className="aspect-[auto_1_/_1] box-border hidden max-w-full w-px" />
      <div role="button" className="fixed bg-blue-600 box-border hidden leading-[18px] z-[2147483647] rounded-[50%] left-5 bottom-5"></div>
      <div className="fixed box-border flex flex-col-reverse max-h-fit z-[2147482900] p-0 right-2.5 bottom-2.5 font-arial md:max-h-[calc(100%_-_48px)] md:p-2.5 md:right-5 md:bottom-5">
        <div className="items-center box-border flex flex-row-reverse ml-[-5px] mr-[-5px] z-[2147482998]">
          <div className="relative items-center box-border flex flex-col h-[100px] justify-center w-[100px] rounded-[20px] after:accent-auto after:bg-green-500 after:box-border after:text-zinc-600 after:block after:text-lg after:not-italic after:normal-nums after:font-normal after:h-[18px] after:tracking-[normal] after:leading-[27px] after:list-outside after:list-disc after:absolute after:text-start after:indent-[0px] after:normal-case after:visible after:w-[18px] after:rounded-[50%] after:border-separate after:border-2 after:border-solid after:border-white after:right-[7px] after:bottom-[3px] after:font-arial">
            <img src="https://c.animaapp.com/me11n5bffLhWIi/assets/photo-002_2_(1).jpg" alt="Intaker widget Avatar" className="shadow-[rgba(60,60,60,0.6)_0px_0px_35px_0px] box-border h-[100px] max-w-full w-[100px] rounded-[50%]" />
          </div>
          <div className="relative text-[15px] bg-white shadow-[rgba(60,60,60,0.6)_0px_0px_35px_0px] box-border hidden leading-[22.5px] max-w-[300px] text-ellipsis mx-[11px] px-2.5 py-2 rounded-[10px] after:accent-auto after:box-border after:text-zinc-600 after:block after:text-[15px] after:not-italic after:normal-nums after:font-normal after:h-0 after:tracking-[normal] after:leading-[22.5px] after:list-outside after:list-disc after:absolute after:right-[-15px] after:text-start after:indent-[0px] after:normal-case after:visible after:w-0 after:border-l-white after:border-r-transparent after:border-y-transparent after:border-separate after:border-8 after:border-solid after:top-2/4 after:font-arial">
            <div className="text-neutral-800 box-border max-w-[210px]">👋🏼 How can I help you?</div>
            <a href="https://intaker.com/lemonlawexperts/lemon" aria-label="Open chat" className="absolute text-cyan-600 bg-[url('https://intaker.azureedge.net/new-dashboard/iconsChat/openTabWithShadow.svg')] bg-no-repeat bg-size-[100%] bottom-[-38px] box-border block h-[42px] right-[-7px] w-[42px] bg-center"></a>
          </div>
        </div>
        <div className="fixed bg-white shadow-[rgba(0,0,0,0.16)_0px_5px_40px_0px] box-border hidden h-full max-h-full max-w-full w-full rounded-none inset-0 md:static md:h-[640px] md:w-[360px] md:rounded-[20px] md:inset-auto">
          <iframe className="absolute box-border h-full max-h-full w-full rounded-none bottom-0 inset-x-0 md:static md:max-h-none md:rounded-[22px] md:bottom-auto md:inset-x-auto"></iframe>
        </div>
        <div className="relative text-zinc-800 bg-white/90 shadow-[rgba(60,60,60,0.6)_0px_0px_20px_0px] box-border max-h-[260px] -translate-x-9 w-[255px] mb-2.5 rounded-[22px]">
          <button 
            aria-label="Close Intaker Chat Widget" 
            className="absolute bg-neutral-800/50 block h-7 right-[-3px] text-center top-[-41px] w-7 p-0 rounded-[10px] before:accent-auto before:bg-neutral-100 before:box-border before:text-zinc-800 before:block before:text-lg before:not-italic before:normal-nums before:font-normal before:h-4 before:tracking-[normal] before:leading-[27px] before:list-outside before:list-disc before:absolute before:text-center before:indent-[0px] before:normal-case before:-rotate-45 before:visible before:w-0.5 before:border-separate before:left-[13px] before:top-[7px] before:font-arial after:accent-auto after:bg-neutral-100 after:box-border after:text-zinc-800 after:block after:text-lg after:not-italic after:normal-nums after:font-normal after:h-4 after:tracking-[normal] after:leading-[27px] after:list-outside after:list-disc after:absolute after:text-center after:indent-[0px] after:normal-case after:rotate-45 after:visible after:w-0.5 after:border-separate after:left-[13px] after:top-[7px] after:font-arial"
            onClick={() => setIsOpen(false)}
          ></button>
          <a href="https://intaker.com/lemonlawexperts/lemon" aria-label="Open direct chat" className="absolute text-cyan-600 bg-neutral-800/50 bg-[url('https://c.animaapp.com/me11n5bffLhWIi/assets/openTabGrey.svg')] bg-no-repeat bg-size-[14px_14px] box-border block h-7 top-[-41px] w-7 bg-center rounded-[10px] right-7"></a>
          <a href="https://intaker.com/home/" aria-label="Open intaker chat" className="absolute text-cyan-600 bg-[url('https://c.animaapp.com/me11n5bffLhWIi/assets/intaker-power.svg')] bg-no-repeat bottom-[-18px] box-border block h-[18px] w-[23px] bg-center left-5"></a>
          <div className="relative text-base box-border hidden leading-[22px] overflow-hidden mb-[15px] pt-[5px]">
            <div className="text-neutral-700 box-border px-[5px]">👋🏼 How can I help you?</div>
          </div>
          <div className="relative box-border h-full overflow-hidden rounded-[20px]">
            <div className="box-border flex flex-col max-h-[250px] overflow-auto p-[5px]">
              <div className="relative text-base box-border leading-[22px] overflow-hidden mb-[15px] pt-[5px]">
                <div className="box-border px-[5px]">👋🏼 How can I help you?</div>
              </div>
              <div className="box-border hidden"></div>
              <div className="box-border flex flex-col max-h-[152px] px-[5px]">
                <div className="content-start box-border flex flex-wrap">
                  <div className="relative text-neutral-800 text-sm font-medium items-center bg-white/90 box-border flex leading-[25px] min-h-10 border-sky-800 mr-[5px] mb-2.5 pl-6 pr-[9px] py-[5px] rounded-[20px] border-2 border-solid">
                    <span className="absolute bg-white box-border block h-3 w-3 border-sky-800 rounded-[50%] border-2 border-solid left-[7px] top-3"></span>
                    <p className="text-zinc-800 box-border">Vehicle Lemon Law</p>
                  </div>
                </div>
              </div>
              <span className="absolute text-sky-800 text-sm items-center bg-white shadow-[rgba(0,0,0,0.357)_0px_0px_15px_0px] box-border hidden h-[33px] justify-center leading-[14px] w-[94px] rounded-[10px] left-2/4 bottom-3">
                <span className="box-border border border-sky-800 mr-[3px] px-1 py-px rounded-[7px] border-solid">
                  <span className="box-border block h-[5px] w-[5px] border-sky-800 mt-px mb-[3px] border-r-2 border-b-2 border-solid"></span>
                  <span className="box-border block h-[5px] w-[5px] border-sky-800 -mt-1.5 mb-[3px] border-r-2 border-b-2 border-solid"></span>
                  <span className="box-border block h-[5px] w-[5px] border-sky-800 -mt-1.5 mb-[3px] border-r-2 border-b-2 border-solid"></span>
                </span>
                Scroll
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="fixed box-border justify-center translate-y-[-50.0%] z-[2147482800] left-2.5 bottom-[100px] font-arial md:left-5 md:bottom-10">
        <div className="text-green-600/20 items-center bg-white box-border hidden flex-col h-16 justify-center w-16 z-[5] mt-3 rounded-[20px]">
          <p className="bg-[url('https://intaker.azureedge.net/new-dashboard/iconsChat/messenger.svg')] bg-no-repeat box-border h-6 w-6 bg-center mb-2"></p>
          <span className="text-sky-500 text-[10px] font-medium box-border leading-[normal]">Messenger</span>
        </div>
        <div className="text-green-600/20 items-center bg-green-500 box-border hidden flex-col h-16 justify-center w-16 z-[5] mt-3 rounded-[20px]">
          <p className="bg-[url('https://intaker.azureedge.net/new-dashboard/iconsChat/whatsappWhite.svg')] bg-no-repeat box-border h-6 w-6 bg-center mb-2"></p>
          <span className="text-white text-[10px] font-medium box-border leading-[normal]">WhatsApp</span>
        </div>
        <div className="text-green-600/20 items-center bg-blue-500 box-border hidden flex-col h-16 justify-center w-16 z-[5] mt-3 rounded-[20px]">
          <p className="bg-[url('https://intaker.azureedge.net/new-dashboard/icons/text-us-new.svg')] bg-no-repeat box-border h-6 w-6 bg-center mb-2"></p>
          <span className="text-white text-[10px] font-medium box-border leading-[normal]">Text us</span>
        </div>
        <div className="text-green-600/20 items-center bg-green-600 shadow-[rgba(67,160,71,0.16)_0px_0px_0px_1.03778px] box-border flex flex-col h-16 justify-center w-16 z-[5] mt-3 rounded-[20px] md:shadow-[rgba(67,160,71,0.16)_0px_0px_0px_1.06802px]">
          <p className="bg-[url('https://c.animaapp.com/me11n5bffLhWIi/assets/call-us-new.svg')] bg-no-repeat box-border h-6 w-6 bg-center mb-2"></p>
          <span className="text-white text-[10px] font-medium box-border block leading-[normal]">Call us</span>
        </div>
        {showCallbackForm && (
          <div className="relative bg-white shadow-[rgba(0,0,0,0.16)_0px_0px_20px_0px] box-border hidden h-[280px] max-w-[360px] min-w-[335px] w-full pt-5 pb-2.5 px-5 rounded-[22px]">
            <button 
              aria-label="Close" 
              className="absolute bg-transparent bg-[url('https://intaker.azureedge.net/new-dashboard/iconsChat/spriteSvg.svg#closeWidget')] bg-no-repeat block h-7 text-center w-7 p-0 right-5 top-5"
              onClick={() => setShowCallbackForm(false)}
            ></button>
            <div className="text-sm box-border leading-[21px] mb-2.5">
              <div className="box-border flex mb-[23px]">
                <div className="bg-[url('https://intaker.azureedge.net/new-dashboard/iconsChat/spriteSvg.svg#callBackG')] bg-no-repeat bg-size-[100%] box-border h-10 w-10 bg-center mr-[5px]"></div>
                <div className="box-border leading-5">
                  <div className="text-xl box-border">Request a call back</div>
                  <span className="box-border">Submit a phone number</span>
                </div>
              </div>
              <div className="box-border flex justify-between mb-2.5">
                <input type="text" placeholder="First Name" className="text-neutral-900 text-base font-medium bg-blue-50 box-border block h-11 leading-[44px] max-w-full indent-[10px] w-[calc(100%_-_90px)] mr-0.5 p-0 rounded-l-[20px] font-source_sans_pro" />
                <input type="text" placeholder="Last Name" className="text-neutral-900 text-base font-medium bg-blue-50 box-border block h-11 leading-[44px] max-w-full indent-[10px] w-[calc(100%_-_90px)] p-0 rounded-r-[20px] font-source_sans_pro" />
              </div>
              <div className="box-border flex justify-between mb-2.5">
                <div className="relative box-border w-[90px] mr-0.5">
                  <div className="absolute text-zinc-800 text-base font-medium bg-zinc-100 box-border leading-[44px] indent-[10px] rounded-l-[20px] inset-0 after:accent-auto after:border-b-zinc-500 after:border-l-zinc-500 after:border-r-zinc-800 after:border-t-zinc-800 after:box-border after:text-zinc-800 after:block after:text-base after:not-italic after:normal-nums after:font-medium after:h-[7px] after:tracking-[normal] after:leading-[44px] after:list-outside after:list-disc after:absolute after:text-start after:indent-[10px] after:normal-case after:visible after:w-[7px] after:-mt-1 after:rounded-[1px] after:border-l-2 after:border-b-2 after:border-separate after:border-solid after:right-2.5 after:top-2/4 after:font-arial">
                    <span className="box-border inline-block indent-[0px] text-ellipsis text-nowrap w-[calc(100%_-_40px)] overflow-hidden">select</span>
                  </div>
                </div>
                <input type="text" placeholder="Type phone number" className="text-neutral-900 text-base font-medium bg-blue-50 box-border block h-11 leading-[44px] max-w-full indent-[10px] w-[calc(100%_-_90px)] p-0 rounded-r-[20px] font-source_sans_pro" />
              </div>
              <div className="text-red-600 text-[11px] box-border hidden leading-[16.5px]">PLease enter valid phone number</div>
              <button aria-label="Call" className="relative text-white bg-zinc-100 h-11 leading-[44px] text-center w-full p-0 rounded-[20px] after:accent-auto after:border-b-zinc-500 after:border-l-zinc-500 after:box-border after:text-white after:block after:text-sm after:not-italic after:normal-nums after:font-normal after:h-1.5 after:tracking-[normal] after:leading-[44px] after:list-outside after:list-disc after:absolute after:text-center after:indent-[0px] after:normal-case after:visible after:w-5 after:-mt-1 after:rounded-sm after:border-l-2 after:border-r-white after:border-t-white after:border-b-2 after:border-separate after:border-solid after:left-2/4 after:top-2/4 after:font-arial"></button>
              <div className="absolute items-center box-border flex justify-center w-full left-0 bottom-[3px]">
                <span className="text-neutral-800/20 box-border block font-roboto">Powered by</span>
                <a href="https://intaker.com/" className="relative text-cyan-600 bg-[linear-gradient(rgba(0,0,0,0)_calc(100%_-_2px),rgb(38,121,184)_1px)] bg-no-repeat bg-size-[100%_100%] box-border block h-3 bg-right"></a>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
