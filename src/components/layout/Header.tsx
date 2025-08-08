import React, { useState } from 'react';
import { navigationData } from '../../data/navigationData';

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header role="banner" className="fixed bg-sky-950 box-border translate-y-[-0.00000253357px] w-full z-[900] top-0 inset-x-0 md:transform-none before:accent-auto before:box-border before:text-zinc-600 before:table before:text-lg before:not-italic before:normal-nums before:font-normal before:tracking-[normal] before:leading-[27px] before:list-outside before:list-disc before:table-fixed before:text-start before:indent-[0px] before:normal-case before:visible before:border-separate before:font-source_sans_pro after:accent-auto after:box-border after:clear-both after:text-zinc-600 after:table after:text-lg after:not-italic after:normal-nums after:font-normal after:tracking-[normal] after:leading-[27px] after:list-outside after:list-disc after:table-fixed after:text-start after:indent-[0px] after:normal-case after:visible after:border-separate after:font-source_sans_pro">
      <div className="text-base items-center box-border flex justify-between leading-6 w-full border-zinc-50 px-[15px] py-2 border-b border-solid md:px-[51.2px]">
        <span className="text-yellow-400 box-border hidden min-h-0 min-w-0 md:block md:min-h-[auto] md:min-w-[auto]">Hablamos Español</span>
        <div className="box-border">
          <a href="/" className="relative text-yellow-400 bg-[linear-gradient(rgba(0,0,0,0)_calc(100%_-_2px),rgb(38,121,184)_1px)] bg-no-repeat bg-size-[0px] box-border bg-right after:accent-auto after:box-border after:text-yellow-400 after:text-base after:not-italic after:normal-nums after:font-normal after:tracking-[normal] after:leading-6 after:list-outside after:list-disc after:text-start after:indent-[0px] after:normal-case after:visible after:border-separate after:font-source_sans_pro">
            <strong className="font-bold box-border">English</strong>
          </a>
          <a href="/es" className="relative text-yellow-400 bg-[linear-gradient(rgba(0,0,0,0)_calc(100%_-_2px),rgb(38,121,184)_1px)] bg-no-repeat bg-size-[0px] box-border bg-right">
            <strong className="font-bold box-border">Español</strong>
          </a>
        </div>
        <div className="text-zinc-50 items-center box-border flex min-h-[auto] min-w-[auto] md:hidden md:min-h-0 md:min-w-0">
          <a href="tel://1.877.891.1876" className="relative text-yellow-400 items-center bg-[linear-gradient(rgba(0,0,0,0)_calc(100%_-_2px),rgb(38,121,184)_1px)] bg-no-repeat bg-size-[0px] box-border gap-x-3 flex min-h-[auto] min-w-[auto] gap-y-3 bg-right md:min-h-0 md:min-w-0">
            <span className="box-border block min-h-[auto] min-w-[auto] border border-yellow-400 px-2 py-1 border-solid md:min-h-0 md:min-w-0">Call Us</span>
            <img src="https://c.animaapp.com/me11n5bffLhWIi/assets/icon-3.svg" alt="Icon" className="box-border h-6 mr-2" />
          </a>
          <button className="items-center bg-transparent flex min-h-[auto] min-w-[auto] text-center px-3 py-2 md:min-h-0 md:min-w-0" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            <img src="https://c.animaapp.com/me11n5bffLhWIi/assets/icon-4.svg" alt="Icon" className="box-border h-8 w-8" />
          </button>
        </div>
      </div>
      <div className="items-center bg-zinc-50 box-border flex justify-around p-4 md:bg-transparent md:justify-between">
        <div className="box-border flex h-auto md:h-full">
          <a href="/" className="relative text-cyan-600 box-border block">
            <img src="https://c.animaapp.com/me11n5bffLhWIi/assets/14.webp" alt="" sizes="(max-width: 335px) 100vw, 335px" className="aspect-[auto_335_/_78] box-border hidden max-w-full w-[335px] md:block" />
            <img src="https://c.animaapp.com/me11n5bffLhWIi/assets/20.png" alt="" sizes="(max-width: 240px) 100vw, 240px" className="aspect-[auto_240_/_56] box-border block max-w-full w-60 md:hidden" />
          </a>
        </div>
        <nav className="items-center box-border hidden grow justify-center min-h-0 min-w-0 px-4 md:flex md:min-h-[auto] md:min-w-[auto]">
          <div className="box-border max-w-none min-h-0 min-w-0 w-full md:max-w-[80%] md:min-h-[auto] md:min-w-[auto]">
            <ul className="text-zinc-50 items-center box-border flex justify-around list-none w-full pl-0">
              {navigationData.mainMenu.map((item) => (
                <li key={item.id} className="relative box-border min-h-0 min-w-0 text-left text-nowrap md:min-h-[auto] md:min-w-[auto]">
                  <a href={item.href} className="relative font-semibold bg-[linear-gradient(rgba(0,0,0,0)_calc(100%_-_2px),rgb(38,121,184)_1px)] bg-no-repeat bg-size-[0px] box-border inline-block text-nowrap bg-right py-2 border-b-2 border-solid border-transparent">{item.label}</a>
                  <img src="https://c.animaapp.com/me11n5bffLhWIi/assets/icon-5.svg" alt="Icon" className="box-border h-4 text-nowrap w-4" />
                  {item.submenu && (
                    <ul className={item.submenuClass}>
                      {item.submenu.map((subItem) => (
                        <li key={subItem.id} className="relative box-border text-nowrap">
                          <a href={subItem.href} className="relative text-sky-950 font-semibold bg-[linear-gradient(rgba(0,0,0,0)_calc(100%_-_2px),rgb(38,121,184)_1px)] bg-no-repeat bg-size-[0px] box-border inline-block text-nowrap w-full bg-right p-2">{subItem.label}</a>
                          {subItem.submenu && (
                            <>
                              <img src="https://c.animaapp.com/me11n5bffLhWIi/assets/icon-5.svg" alt="Icon" className="box-border h-4 text-nowrap w-4" />
                              <ul className="absolute bg-white shadow-[rgba(0,0,0,0.3)_0px_0px_5px_0px] box-border max-h-[840px] min-w-[200px] overflow-x-auto overflow-y-scroll text-nowrap transform-none origin-[0%_0%] border border-zinc-50 pl-0 rounded-sm border-solid right-0 top-0 md:scale-0">
                                {subItem.submenu.map((subSubItem) => (
                                  <li key={subSubItem.id} className="relative box-border text-nowrap">
                                    <a href={subSubItem.href} className="relative text-sky-950 font-semibold bg-[linear-gradient(rgba(0,0,0,0)_calc(100%_-_2px),rgb(38,121,184)_1px)] bg-no-repeat bg-size-[0px] box-border inline-block text-nowrap w-full bg-right p-2">{subSubItem.label}</a>
                                  </li>
                                ))}
                              </ul>
                            </>
                          )}
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              ))}
            </ul>
          </div>
          <a href="/search/" className="relative text-cyan-600 bg-[linear-gradient(rgba(0,0,0,0)_calc(100%_-_2px),rgb(38,121,184)_1px)] bg-no-repeat bg-size-[0px] box-border hidden min-h-0 min-w-0 bg-right mr-4 md:block md:min-h-[auto] md:min-w-[auto]">
            <img src="https://c.animaapp.com/me11n5bffLhWIi/assets/icon-6.svg" alt="Icon" className="box-border h-[18px] w-[18px]" />
          </a>
        </nav>
        <div className="text-zinc-50 items-center box-border hidden min-h-0 min-w-0 ml-0 md:flex md:min-h-[auto] md:min-w-[auto] md:ml-auto">
          <a href="tel://1.877.891.1876" className="relative text-yellow-400 bg-[linear-gradient(rgba(0,0,0,0)_calc(100%_-_2px),rgb(38,121,184)_1px)] bg-no-repeat bg-size-[0px] box-border inline min-h-0 min-w-0 bg-right md:block md:min-h-[auto] md:min-w-[auto]">
            <img src="https://c.animaapp.com/me11n5bffLhWIi/assets/icon-7.svg" alt="Icon" className="box-border h-6 mr-2" />
          </a>
          <div className="box-border min-h-0 min-w-0 text-center md:min-h-[auto] md:min-w-[auto]">
            <span className="box-border block uppercase">Call Us</span>
            <a href="tel://1.877.891.1876" className="relative text-yellow-400 text-[28.8px] bg-[linear-gradient(rgba(0,0,0,0)_calc(100%_-_2px),rgb(38,121,184)_1px)] bg-no-repeat bg-size-[0px] box-border block leading-[28.8px] bg-right">877.891.1876</a>
            <span className="text-base box-border block leading-6 uppercase">FREE CASE EVALUATION</span>
          </div>
        </div>
      </div>
    </header>
  );
}
