import React from 'react';
import { verdictData } from '../../data/verdictData';

export default function VerdictSection() {
  return (
    <div className="box-border before:accent-auto before:box-border before:text-zinc-600 before:table before:text-lg before:not-italic before:normal-nums before:font-normal before:tracking-[normal] before:leading-[27px] before:list-outside before:list-disc before:table-fixed before:text-start before:indent-[0px] before:normal-case before:visible before:border-separate before:font-source_sans_pro after:accent-auto after:box-border after:clear-both after:text-zinc-600 after:table after:text-lg after:not-italic after:normal-nums after:font-normal after:tracking-[normal] after:leading-[27px] after:list-outside after:list-disc after:table-fixed after:text-start after:indent-[0px] after:normal-case after:visible after:border-separate after:font-source_sans_pro">
      <div className="items-center box-border flex flex-col justify-center max-w-[770px] w-[340px] mb-[19.98px] mx-auto py-[70px] md:w-[770px] md:mb-[30px]">
        <h2 className="text-blue-900 text-[54px] font-medium box-border clear-both leading-[56px] max-w-[574px] text-center pb-[30px] font-oswald">Lemon Law Experts Verdicts and Settlements</h2>
        <p className="text-zinc-600 text-base box-border leading-6 break-words text-center pb-[46px] font-source_sans_pro">
          Experience the power of results! The Lemon Law Experts stand as a testament to our unwavering commitment to delivering unparalleled outcomes for our clients. Since 2009, we've proudly been the top choice for consumer lemon law claims. Explore some of the remarkable successes we've secured below. Contact us today to witness your triumph!
        </p>
        <div className="items-center box-border flex flex-col justify-center border border-slate-200 border-solid md:flex-row">
          {verdictData.map((verdict) => (
            <div key={verdict.id} className={verdict.className}>
              <img src={verdict.image} alt={verdict.type} className="box-border h-[50px] max-w-full w-[100px] mb-6" />
              <h3 className="text-blue-900 text-sm font-semibold box-border clear-both tracking-[3.92px] leading-6 text-center pb-2.5 font-source_sans_pro">{verdict.type}</h3>
              <p className="text-blue-900 text-[42px] font-bold box-border leading-[42px] break-words text-center font-source_sans_pro">{verdict.amount}</p>
            </div>
          ))}
        </div>
        <a href="https://lemonlawexperts.com/victories-case-results" className="relative text-neutral-900 font-bold bg-yellow-400 bg-[linear-gradient(rgba(0,0,0,0)_calc(100%_-_2px),rgb(38,121,184)_1px)] bg-no-repeat bg-size-[0px] box-border block text-center uppercase border-yellow-400 bg-right mt-[68px] px-6 py-3 border-2 border-solid font-oswald">More Victories</a>
      </div>
    </div>
  );
}
