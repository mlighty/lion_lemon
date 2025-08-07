import React from 'react';

export default function AccessibilityWidget() {
  return (
    <>
      <span role="alert" className="static box-content inline h-auto w-auto z-auto mt-0 left-auto top-auto md:absolute md:aspect-auto md:box-border md:block md:h-px md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:w-[200px] md:z-[-1] md:overflow-hidden md:[mask-position:0%] md:bg-left-top md:-mt-px md:scroll-m-0 md:scroll-p-[auto] md:left-0 md:top-0">
        Press Alt+1 for screen-reader mode, Alt+0 to cancel
      </span>
      <access-widget-ui className="absolute text-black text-base block h-0 leading-[normal] origin-[0px_0px] w-0 left-0 right-[375px] top-0 bottom-[1000px] font-times_new_roman md:right-[1280px]">
        <div className="box-border"></div>
      </access-widget-ui>
      <a href="https://accessibe.com/blog/knowledgebase/screen-reader-guide" className="absolute text-cyan-600 bg-[linear-gradient(rgba(0,0,0,0)_calc(100%_-_2px),rgb(38,121,184)_1px)] bg-no-repeat bg-size-[100%_100%] box-border block h-px w-[200px] z-[-1] overflow-hidden bg-right -mt-px left-0 top-0">
        Accessibility Screen-Reader Guide, Feedback, and Issue Reporting | New window
      </a>
      <access-widget-ui className="absolute text-black text-base block h-0 leading-[normal] origin-[0px_0px] w-0 left-0 right-[375px] top-0 bottom-[1000px] font-times_new_roman md:right-[1280px]">
        <div className="box-border">
          <div role="region" aria-label="Skip Links" className="fixed box-border z-[2147483647] left-0 top-0">
            <div className="box-border"></div>
            <div className="box-content md:aspect-auto md:box-border md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
              <a href="#acsbMenu" className="static text-black bg-transparent shadow-none box-content inline min-w-0 opacity-100 outline-black text-start z-auto p-0 rounded-none left-auto top-auto font-times md:fixed md:text-gray-800 md:aspect-auto md:bg-white md:shadow-[rgba(19,110,248,0.3)_0px_0px_0px_5px] md:box-border md:block md:min-w-[200px] md:opacity-0 md:outline-blue-400 md:outline md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:text-center md:decoration-auto md:underline-offset-auto md:z-[2147483647] md:border-blue-600/80 md:[mask-position:0%] md:bg-left-top md:px-5 md:py-[13px] md:scroll-m-0 md:scroll-p-[auto] md:rounded-[50px] md:border-[3px] md:border-solid md:left-5 md:top-[50px] md:font-arial">
                Skip to Menu
                <div className="text-black text-base [align-items:normal] bg-transparent box-content block justify-normal normal-case ml-0 p-0 rounded-none md:text-white md:text-[10px] md:items-center md:aspect-auto md:bg-blue-600 md:box-border md:inline-flex md:justify-center md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:uppercase md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:ml-[30px] md:px-2.5 md:py-[5px] md:scroll-m-0 md:scroll-p-[auto] md:rounded-[50px]">
                  <span className="text-base box-content inline leading-[normal] min-h-0 min-w-0 mr-0 md:text-[15px] md:aspect-auto md:box-border md:block md:leading-[15px] md:min-h-[auto] md:min-w-[auto] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:mr-[3px] md:scroll-m-0 md:scroll-p-[auto]">↵</span>
                  ENTER
                </div>
              </a>
            </div>
            <div className="box-content md:aspect-auto md:box-border md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
              <a href="#acsbFooter" className="static text-black bg-transparent shadow-none box-content inline min-w-0 opacity-100 outline-black text-start z-auto p-0 rounded-none left-auto top-auto font-times md:fixed md:text-gray-800 md:aspect-auto md:bg-white md:shadow-[rgba(19,110,248,0.3)_0px_0px_0px_5px] md:box-border md:block md:min-w-[200px] md:opacity-0 md:outline-blue-400 md:outline md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:text-center md:decoration-auto md:underline-offset-auto md:z-[2147483647] md:border-blue-600/80 md:[mask-position:0%] md:bg-left-top md:px-5 md:py-[13px] md:scroll-m-0 md:scroll-p-[auto] md:rounded-[50px] md:border-[3px] md:border-solid md:left-5 md:top-[50px] md:font-arial">
                Skip to Footer
                <div className="text-black text-base [align-items:normal] bg-transparent box-content block justify-normal normal-case ml-0 p-0 rounded-none md:text-white md:text-[10px] md:items-center md:aspect-auto md:bg-blue-600 md:box-border md:inline-flex md:justify-center md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:uppercase md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:ml-[30px] md:px-2.5 md:py-[5px] md:scroll-m-0 md:scroll-p-[auto] md:rounded-[50px]">
                  <span className="text-base box-content inline leading-[normal] min-h-0 min-w-0 mr-0 md:text-[15px] md:aspect-auto md:box-border md:block md:leading-[15px] md:min-h-[auto] md:min-w-[auto] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:mr-[3px] md:scroll-m-0 md:scroll-p-[auto]">↵</span>
                  ENTER
                </div>
              </a>
            </div>
          </div>
        </div>
      </access-widget-ui>
      <access-widget-ui className="absolute text-black text-base block h-0 leading-[normal] origin-[0px_0px] w-0 left-0 right-[375px] top-0 bottom-[1000px] font-times_new_roman md:right-[1280px]">
        <div className="box-border">
          <button aria-label="Open accessiBe: accessibility options, statement and help" className="fixed text-zinc-600 text-[13.3333px] bg-blue-600 block h-[30px] text-center w-[30px] z-[2147483647] p-0 rounded-[50%] left-2.5 bottom-0 font-arial md:h-[45px] md:w-[45px] md:left-5 md:bottom-5">
            <span className="text-white box-border">
              <img src="https://c.animaapp.com/me11n5bffLhWIi/assets/icon-1.svg" alt="Icon" className="absolute box-border flex m-auto inset-0" />
              <span className="absolute text-blue-600 bg-white box-border hidden h-[22px] left-[-5px] w-[22px] border-blue-600 rounded-[50%] border-2 border-solid bottom-0">
                <img src="https://c.animaapp.com/me11n5bffLhWIi/assets/icon-2.svg" alt="Icon" className="absolute box-border h-[11px] w-[11px] m-auto inset-0" />
              </span>
            </span>
          </button>
        </div>
      </access-widget-ui>
    </>
  );
}
