import React, { useState } from 'react';

export default function CookieBanner() {
  const [isVisible, setIsVisible] = useState(true);

  const handleAccept = () => {
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <aside aria-label="GDPR Cookie Banner" className="fixed text-white bg-neutral-800 box-border max-h-[400px] min-h-[60px] text-center w-full z-[9900] border-t border-solid border-white left-0 bottom-0 font-nunito">
      <div className="box-border inline-block p-[15px] md:px-10 md:py-2.5">
        <div className="items-center box-border block text-left w-full px-0 md:flex md:px-[30px]">
          <div className="box-border min-h-0 min-w-0 mb-2.5 pl-1 md:min-h-[auto] md:min-w-[auto] md:mb-0 md:pl-0">
            <p className="text-sm font-bold box-border leading-[18px]">We are using cookies to give you the best experience on our website.</p>
            <p className="text-sm font-bold box-border leading-[18px]">
              You can find out more about which cookies we are using or switch them off in{' '}
              <button className="bg-transparent text-center underline p-0">settings</button>.
            </p>
          </div>
          <div className="items-center box-border flex flex-wrap min-h-0 min-w-0 pl-0 md:flex-nowrap md:min-h-[auto] md:min-w-[auto] md:pl-[38.4px]">
            <button aria-label="Accept" className="text-xs font-bold bg-blue-800 block leading-5 order-1 text-center text-nowrap mx-1 my-[3px] px-5 py-[5px] rounded-[150px] md:text-sm md:px-[30px] md:py-2" onClick={handleAccept}>
              Accept
            </button>
          </div>
        </div>
      </div>
    </aside>
  );
}
