import React, { useState } from 'react';

export default function CookieDialog() {
  const [isOpen, setIsOpen] = useState(false);
  const [strictCookiesEnabled, setStrictCookiesEnabled] = useState(true);

  return (
    <dialog aria-label="GDPR Settings Screen" className="text-black box-border min-h-[600px] mx-auto p-[18px] font-nunito">
      <div className="relative bg-white box-border flex flex-wrap max-h-[900px] max-w-[1170px] min-h-0 min-w-0 w-[325px] mx-auto rounded-[10px] md:block md:flex-nowrap md:max-h-none md:min-h-[600px] md:min-w-[700px] md:w-[1024px] after:accent-auto after:box-border after:clear-both after:text-black after:table after:text-lg after:not-italic after:normal-nums after:font-normal after:tracking-[normal] after:leading-[27px] after:list-outside after:list-disc after:text-start after:indent-[0px] after:normal-case after:visible after:border-separate after:font-nunito">
        <button 
          aria-label="Close GDPR Cookie Settings" 
          className="absolute bg-transparent block h-[30px] leading-[30px] right-[-15px] text-center top-[-15px] w-[30px] z-[99] p-0 rounded-[50%] md:h-[60px] md:leading-[60px] md:right-[-30px] md:top-[-30px] md:w-[60px]"
          onClick={() => setIsOpen(false)}
        >
          <span className="relative text-white text-3xl bg-blue-800 box-border block h-[30px] leading-[30px] w-[30px] border border-blue-800 rounded-[50%] border-solid md:text-5xl md:h-[60px] md:leading-[60px] md:w-[60px] before:accent-auto before:bg-white before:box-border before:text-white before:block before:text-3xl before:not-italic before:normal-nums before:font-normal before:h-3.5 before:tracking-[normal] before:leading-[30px] before:list-outside before:list-disc before:absolute before:text-center before:indent-[0px] before:normal-case before:top-[calc(50%_-_7px)] before:visible before:w-px before:border-separate before:font-nunito before:md:text-5xl before:md:h-6 before:md:leading-[60px] before:md:top-[calc(50%_-_12px)] after:accent-auto after:bg-white after:box-border after:text-white after:block after:text-3xl after:not-italic after:normal-nums after:font-normal after:h-3.5 after:tracking-[normal] after:leading-[30px] after:list-outside after:list-disc after:absolute after:text-center after:indent-[0px] after:normal-case after:top-[calc(50%_-_7px)] after:visible after:w-px after:border-separate after:font-nunito after:md:text-5xl after:md:h-6 after:md:leading-[60px] after:md:top-[calc(50%_-_12px)]"></span>
        </button>
        <div className="relative bg-white shadow-[rgba(35,35,35,0.1)_0px_0px_30px_0px] box-border float-left h-full text-center w-full z-10 pt-[30px] pb-2.5 px-2.5 rounded-t-[5px] rounded-bl-none left-0 top-0 md:absolute md:float-none md:text-start md:w-2/5 md:pb-[30px] md:px-[30px] md:rounded-tr-none md:rounded-bl-[5px]">
          <div className="box-border text-left mb-[15px] md:mb-[30px]">
            <img src="https://c.animaapp.com/me11n5bffLhWIi/assets/71.webp" alt="The Lemon Law Experts" className="aspect-[auto_350_/_233] box-border inline-block max-h-10 max-w-[70%] md:max-h-[75px]" />
          </div>
          <ul className="box-border hidden flex-wrap list-none ml-[-3px] mr-[-3px] text-center z-[12] pl-0 md:block md:flex-nowrap md:text-start md:mx-0">
            <li className="box-border inline-flex basis-[0%] grow text-center m-[3px] md:list-item md:basis-auto md:grow-0 md:text-left md:mt-0 md:mb-[15px] md:mx-0">
              <button aria-label="Privacy Overview" className="text-sm font-extrabold items-center bg-white flex leading-[15.4px] text-left uppercase w-full border border-zinc-100 p-[5px] rounded-[5px] border-solid md:px-5 md:py-[13px]">
                <span className="text-[8px] items-center box-border flex leading-[9.6px] w-[calc(100%_-_40px)] md:text-sm md:leading-[15.4px]">Privacy Overview</span>
              </button>
            </li>
            <li className="box-border inline-flex basis-[0%] grow text-center m-[3px] md:list-item md:basis-auto md:grow-0 md:text-left md:mt-0 md:mb-[15px] md:mx-0">
              <button aria-label="Strictly Necessary Cookies" className="text-blue-800 text-sm font-extrabold items-center bg-zinc-100 flex leading-[15.4px] text-left uppercase w-full border border-zinc-100 p-[5px] rounded-[5px] border-solid md:px-5 md:py-[13px]">
                <span className="text-[8px] items-center box-border flex leading-[9.6px] w-[calc(100%_-_40px)] md:text-sm md:leading-[15.4px]">Strictly Necessary Cookies</span>
              </button>
            </li>
          </ul>
          <div className="absolute box-border text-center pb-0 left-auto right-[3px] top-[3px] bottom-auto md:text-start md:pb-[30px] md:top-auto md:bottom-0 md:inset-x-[30px]">
            <a href="https://wordpress.org/plugins/gdpr-cookie-compliance/" className="relative text-[10px] font-bold bg-[linear-gradient(rgba(0,0,0,0)_calc(100%_-_2px),rgb(38,121,184)_1px)] bg-no-repeat bg-size-[100%_100%] box-border block tracking-[-0.3px] leading-3 text-right bg-right py-[5px] top-0 md:text-[13px] md:leading-[19.5px] md:text-start md:py-5 md:top-2.5">
              Powered by <span className="text-[10px] box-border block leading-3 text-right underline md:text-[13px] md:inline-block md:leading-[19.5px] md:text-start">GDPR Cookie Compliance</span>
            </a>
          </div>
        </div>
        <div className="relative bg-zinc-100 box-border float-right h-auto w-full px-2.5 py-[15px] rounded-tr-none rounded-b-[5px] right-0 top-0 md:absolute md:float-none md:h-full md:w-3/5 md:px-[30px] md:py-10 md:rounded-tr-[5px] md:rounded-bl-none">
          <div className="box-border"></div>
          <div className="box-border flex flex-col h-full">
            <div className="box-border h-auto max-h-[500px] overflow-auto mb-20 md:h-full md:max-h-none md:overflow-visible md:mb-0">
              <div className="box-border h-auto max-h-full md:h-full md:max-h-none">
                <span className="text-base font-bold box-border block leading-[19.2px] mb-[25px] md:text-[28px] md:leading-[33.6px]">Privacy Overview</span>
                <div className="relative box-border flex flex-col max-h-[580px] overflow-auto pr-0 pb-0 md:static md:max-h-[calc(100%_-_155px)] md:pr-5 md:pb-[15px]">
                  <p className="text-sm box-border leading-[18.2px] mb-[18px] md:text-base md:leading-[22.4px]">
                    This website uses cookies so that we can provide you with the best user experience possible. Cookie information is stored in your browser and performs functions such as recognising you when you return to our website and helping our team to understand which sections of the website you find most interesting and useful.
                  </p>
                </div>
              </div>
              <div className="box-border block h-auto max-h-full md:hidden md:h-full md:max-h-none">
                <span className="relative text-base font-bold bg-white box-border block leading-[19.2px] border mt-2.5 mb-0 pl-[30px] pr-2.5 py-2.5 rounded-[5px] border-solid border-white md:static md:text-[28px] md:bg-transparent md:leading-[33.6px] md:mt-0 md:mb-[25px] md:p-0 md:rounded-none md:border-0 md:border-black">Strictly Necessary Cookies</span>
                <div className="relative bg-white box-border hidden flex-col max-h-[580px] overflow-auto p-2.5 md:static md:bg-transparent md:flex md:max-h-[calc(100%_-_155px)] md:pl-0 md:pr-5 md:pt-0 md:pb-[15px]">
                  <p className="text-sm box-border leading-[18.2px] mb-[18px] md:text-base md:leading-[22.4px]">
                    Strictly Necessary Cookie should be enabled at all times so that we can save your preferences for cookie settings.
                  </p>
                  <div className="box-border mr-2.5 mb-[15px] p-0 md:p-[5px] after:accent-auto after:box-border after:clear-both after:text-black after:table after:text-lg after:not-italic after:normal-nums after:font-normal after:tracking-[normal] after:leading-[27px] after:list-outside after:list-disc after:text-start after:indent-[0px] after:normal-case after:visible after:border-separate after:font-nunito">
                    <div className="box-border">
                      <div className="box-border">
                        <label className="relative box-border inline-block h-6 w-10 md:h-[30px] md:w-[50px]">
                          <input 
                            type="checkbox" 
                            aria-label="Strictly Necessary Cookies" 
                            value="check" 
                            name="moove_gdpr_strict_cookies" 
                            className="bg-transparent box-border hidden p-0"
                            checked={strictCookiesEnabled}
                            onChange={(e) => setStrictCookiesEnabled(e.target.checked)}
                          />
                          <span className="absolute bg-red-600 shadow-[rgba(0,0,0,0)_1px_1px_0px_0px] box-border block rounded-[34px] inset-0 before:accent-auto before:bg-white before:shadow-[rgba(0,0,0,0.25)_0px_5px_15px_0px] before:text-black before:block before:text-lg before:not-italic before:normal-nums before:font-normal before:h-5 before:tracking-[normal] before:leading-[27px] before:list-outside before:list-disc before:absolute before:text-start before:indent-[0px] before:normal-case before:visible before:w-5 before:border before:border-zinc-100 before:rounded-[50%] before:border-separate before:border-solid before:left-px before:bottom-px before:font-nunito before:md:h-[26px] before:md:w-[26px] after:accent-auto after:box-border after:text-red-600 after:hidden after:text-xs after:not-italic after:normal-nums after:font-extrabold after:tracking-[normal] after:leading-[30px] after:list-outside after:list-disc after:min-w-[130px] after:absolute after:text-start after:indent-[0px] after:normal-case after:text-nowrap after:visible after:border-separate after:left-[60px] after:top-0 after:font-nunito after:md:text-base after:md:font-bold after:md:min-w-0">
                            <span className="absolute text-red-600 text-xs font-extrabold box-border block leading-[21.6px] min-w-[130px] text-nowrap left-[60px] top-0 md:text-base md:font-bold md:leading-[30px] md:min-w-0">
                              <span className="text-green-600 text-xs font-extrabold box-border hidden leading-[21.6px] text-nowrap md:text-base md:font-bold md:leading-[30px]">Enabled</span>
                              <span className="text-xs font-extrabold box-border block leading-[21.6px] text-nowrap md:text-base md:font-bold md:leading-[30px]">Disabled</span>
                            </span>
                          </span>
                        </label>
                      </div>
                    </div>
                  </div>
                  <div className="box-border mt-2.5">
                    <p className="text-sm box-border leading-[18.2px] mb-[18px] md:text-base md:leading-[22.4px]">
                      If you disable this cookie, we will not be able to save your preferences. This means that every time you visit this website you will need to enable or disable cookies again.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="absolute items-center bg-zinc-100 box-border flex flex-wrap h-[70px] w-full z-[15] py-[5px] rounded-[5px] left-0 bottom-0 md:flex-nowrap md:h-[120px] md:py-0 before:accent-auto before:bg-stone-300 before:box-border before:text-black before:block before:text-lg before:not-italic before:normal-nums before:font-normal before:h-px before:tracking-[normal] before:leading-[27px] before:list-outside before:list-disc before:absolute before:text-start before:indent-[0px] before:normal-case before:visible before:border-separate before:bottom-[70px] before:inset-x-2.5 before:font-nunito before:md:bottom-[120px] before:md:inset-x-[30px]">
            <div className="items-center box-border flex flex-wrap justify-between w-[calc(100%_+_16px)] mb-2.5 -mx-0.5 px-2.5 md:[align-items:normal] md:mb-0 md:px-[30px]">
              <button aria-label="Enable All" className="text-white text-xs font-bold bg-blue-800 block leading-[18px] text-center border border-blue-800 m-0.5 px-[15px] py-[5px] rounded-[150px] border-solid md:text-sm md:leading-5 md:px-[30px] md:py-2.5">Enable All</button>
              <button aria-label="Save Settings" className="text-white text-xs font-bold bg-blue-800 hidden leading-[18px] text-center border border-blue-800 m-0.5 px-[15px] py-[5px] rounded-[150px] border-solid md:text-sm md:leading-5 md:px-[30px] md:py-2.5">Save Settings</button>
            </div>
          </div>
        </div>
        <div className="box-border after:accent-auto after:box-border after:clear-both after:text-black after:table after:text-lg after:not-italic after:normal-nums after:font-normal after:tracking-[normal] after:leading-[27px] after:list-outside after:list-disc after:text-start after:indent-[0px] after:normal-case after:visible after:border-separate after:font-nunito"></div>
      </div>
    </dialog>
  );
}
