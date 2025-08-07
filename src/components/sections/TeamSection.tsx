import React from 'react';
import { teamData } from '../../data/teamData';

export default function TeamSection() {
  return (
    <div className="bg-sky-950 box-border clear-both flow-root max-w-full w-full mx-auto px-[19.98px] py-[37.5px] md:w-auto md:p-[60px] before:accent-auto before:box-border before:clear-both before:text-zinc-600 before:block before:text-lg before:not-italic before:normal-nums before:font-normal before:tracking-[normal] before:leading-[27px] before:list-outside before:list-disc before:text-start before:indent-[0px] before:normal-case before:visible before:border-separate before:font-source_sans_pro after:accent-auto after:box-border after:clear-both after:text-zinc-600 after:block after:text-lg after:not-italic after:normal-nums after:font-normal after:tracking-[normal] after:leading-[27px] after:list-outside after:list-disc after:text-start after:indent-[0px] after:normal-case after:visible after:border-separate after:font-source_sans_pro">
      <div className="box-border mx-auto">
        <h2 className="text-zinc-50 text-[26px] box-border clear-both leading-[28.6px] max-w-full text-center w-[345px] mt-[19.98px] mb-[30px] mx-auto font-oswald md:text-[55px] md:leading-[60.5px] md:w-[1080px] md:mt-[30px]">Meet The Experts</h2>
        <p className="text-zinc-50 box-border max-w-[345px] break-words text-center mt-[19.98px] mb-[30px] mx-auto md:max-w-[610px] md:mt-[30px]">
          A dedicated team with multilingual staff – serving all of California. Our attorneys are leading consumer protection advocates. In combination with the support team – we provide unparalleled customer service to our Lemon Law clients.
        </p>
        <div className="box-border clear-both gap-x-9 flex flex-wrap justify-center max-w-[1920px] gap-y-9 w-full mx-auto pb-0 md:flex-nowrap md:justify-normal md:pb-[30px]">
          {teamData.seniorTeam.map((member) => (
            <div key={member.id} className="box-border flex basis-auto grow break-words w-full mb-5 mx-[1%] md:basis-[33.33%] md:grow-0 md:w-auto md:mb-0 md:mx-0">
              <div className="box-border block flex-wrap justify-center break-words w-full md:flex md:flex-nowrap md:justify-normal">
                <a href={member.href} className="relative bg-zinc-50 bg-[linear-gradient(rgba(0,0,0,0)_calc(100%_-_2px),rgb(38,121,184)_1px)] bg-no-repeat bg-size-[0px] box-border block min-h-0 min-w-0 break-words text-center w-full bg-right md:min-h-[auto] md:min-w-[auto] md:text-start">
                  <figure className="bg-neutral-200 box-border break-words text-center pt-1 px-2 md:text-start">
                    <img src={member.image} alt={member.name} sizes="(max-width: 270px) 100vw, 270px" className="aspect-[auto_270_/_300] box-border h-[170px] max-w-full object-cover break-words text-center mx-auto md:h-[300px] md:text-start" />
                  </figure>
                  <div className="box-border break-words text-center p-4 md:text-start">
                    <h3 className="text-blue-900 text-[35px] box-border clear-both leading-[38.5px] break-words text-center font-oswald md:text-[44px] md:leading-[48.4px] md:text-start">{member.name}</h3>
                    <p className="box-border break-words text-center md:text-start">{member.title}</p>
                  </div>
                </a>
              </div>
            </div>
          ))}
        </div>
        <div className="box-border clear-both gap-x-9 flex flex-wrap justify-center max-w-[1920px] gap-y-9 w-full mx-auto md:flex-nowrap md:justify-normal">
          {teamData.partners.map((member) => (
            <div key={member.id} className="box-border flex basis-auto grow break-words w-full mb-5 mx-[1%] md:basis-[33.33%] md:grow-0 md:w-auto md:mb-0 md:mx-0">
              <div className="box-border block flex-wrap justify-center break-words w-full md:flex md:flex-nowrap md:justify-normal">
                <a href={member.href} className="relative bg-zinc-50 bg-[linear-gradient(rgba(0,0,0,0)_calc(100%_-_2px),rgb(38,121,184)_1px)] bg-no-repeat bg-size-[0px] box-border block min-h-0 min-w-0 break-words text-center w-full bg-right md:min-h-[auto] md:min-w-[auto] md:text-start">
                  <figure className="bg-neutral-200 box-border break-words text-center pt-1 px-2 md:text-start">
                    <img src={member.image} alt={member.name} sizes="(max-width: 270px) 100vw, 270px" className="aspect-[auto_270_/_300] box-border h-[170px] max-w-full object-cover break-words text-center mx-auto md:h-[300px] md:text-start" />
                  </figure>
                  <div className="box-border break-words text-center p-4 md:text-start">
                    <h3 className="text-blue-900 text-[35px] box-border clear-both leading-[38.5px] break-words text-center font-oswald md:text-[44px] md:leading-[48.4px] md:text-start">{member.name}</h3>
                    <p className="box-border break-words text-center md:text-start">{member.title}</p>
                  </div>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="box-border clear-both max-w-[345px] mx-auto my-[19.98px] md:max-w-[1080px] md:my-[30px]">
        <div className="box-border flex flex-wrap">
          {teamData.associates.map((member) => (
            <div key={member.id} className="box-border w-[46%] m-[2%] md:w-[17%] md:m-[1.5%]">
              <a href={member.href} className="relative bg-zinc-50 bg-[linear-gradient(rgba(0,0,0,0)_calc(100%_-_2px),rgb(38,121,184)_1px)] bg-no-repeat bg-size-[0px] box-border block bg-right">
                <figure className="bg-zinc-50 box-border pt-1 px-2">
                  <img src={member.image} alt={member.name} sizes="(max-width: 270px) 100vw, 270px" className={member.imageClass} />
                </figure>
                <div className="box-border p-4">
                  <h3 className="text-blue-900 box-border clear-both leading-[19.8px] font-oswald">{member.name}</h3>
                  <p className="text-base box-border leading-6 break-words">{member.title}</p>
                </div>
              </a>
            </div>
          ))}
        </div>
      </div>
      <div className="items-center box-border gap-x-[9px] flex flex-wrap justify-center max-w-[345px] gap-y-[9px] mx-auto my-[19.98px] md:max-w-[610px] md:my-[30px]">
        <div className="box-border">
          <a href="https://lemonlawexperts.com/attorneys/" className="relative text-neutral-900 text-[20.25px] font-bold content-center bg-yellow-400 bg-[linear-gradient(rgba(0,0,0,0)_calc(100%_-_2px),rgb(38,121,184)_1px)] bg-no-repeat bg-size-[0px] box-border inline-block h-full leading-[30.375px] text-center uppercase w-full border-yellow-400 bg-right px-6 py-3 border-2 border-solid font-oswald">Meet The Team</a>
        </div>
      </div>
    </div>
  );
}
