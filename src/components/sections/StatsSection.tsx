import React from 'react';

export default function StatsSection() {
  return (
    <>
      <h2 className="text-blue-900 text-[35px] box-border clear-both leading-[38.5px] max-w-[345px] text-center mx-auto my-[19.98px] font-oswald md:text-[55px] md:leading-[60.5px] md:max-w-[610px] md:my-[30px]">What Sets Us Apart</h2>
      <p className="box-border max-w-[345px] break-words text-center mx-auto my-[19.98px] md:max-w-[610px] md:my-[30px]">
        Our Lemon Law Experts are skilled in finding economic and expeditious solutions for our clients. We are dedicated to quality, we understand the law, and we pride ourselves in having a long-standing relationship with our clients and the community.
      </p>
      <div className="items-center box-border flex justify-center max-w-[345px] mx-auto my-[19.98px] md:max-w-[610px] md:my-[30px]">
        <div className="items-center bg-sky-950 box-border flex flex-wrap h-[372px] justify-around max-w-[1052px] w-[340px] mt-10 mb-[75px] md:flex-nowrap md:h-[186px] md:w-[1052px]">
          <div className="items-center box-border flex flex-col h-[186px] justify-center w-[170px] md:h-[94px] md:justify-end md:w-[263px]">
            <h2 className="text-yellow-400 text-[35px] box-border clear-both leading-[38.5px] font-oswald md:text-[55px] md:leading-[60.5px]">15<sup className="text-[29.1667px] box-border leading-[32.0833px] md:text-[45.8333px] md:leading-[50.4167px]">+</sup></h2>
            <p className="text-zinc-50 text-base box-border leading-6 break-words">Years Helping Consumers</p>
          </div>
          <div className="items-center box-border flex flex-col h-[186px] justify-center w-[170px] md:h-[94px] md:justify-end md:w-[263px]">
            <h2 className="text-yellow-400 text-[35px] box-border clear-both leading-[38.5px] font-oswald md:text-[55px] md:leading-[60.5px]">20K<sup className="text-[29.1667px] box-border leading-[32.0833px] md:text-[45.8333px] md:leading-[50.4167px]">+</sup></h2>
            <p className="text-zinc-50 text-base box-border leading-6 break-words">Clients Served</p>
          </div>
          <div className="items-center box-border flex flex-col h-[186px] justify-center w-[170px] md:h-[94px] md:justify-end md:w-[263px]">
            <h2 className="text-yellow-400 text-[35px] box-border clear-both leading-[38.5px] font-oswald md:text-[55px] md:leading-[60.5px]">99%</h2>
            <p className="text-zinc-50 text-base box-border leading-6 break-words">Success Rate</p>
          </div>
          <div className="items-center box-border flex flex-col h-[186px] justify-center w-[170px] md:h-[94px] md:justify-end md:w-[263px]">
            <h2 className="text-yellow-400 text-[35px] box-border clear-both leading-[38.5px] font-oswald md:text-[55px] md:leading-[60.5px]">$100M<sup className="text-[29.1667px] box-border leading-[32.0833px] md:text-[45.8333px] md:leading-[50.4167px]">+</sup></h2>
            <p className="text-zinc-50 text-base box-border leading-6 break-words">Verdicts & Settlements</p>
          </div>
        </div>
      </div>
    </>
  );
}
