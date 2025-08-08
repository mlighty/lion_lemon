export interface NavigationItem {
  readonly id: string;
  readonly label: string;
  readonly href: string;
  readonly submenu?: NavigationItem[];
  readonly submenuClass?: string;
}

export interface NavigationData {
  readonly mainMenu: NavigationItem[];
}

export const navigationData: NavigationData = {
  mainMenu: [
    {
      id: 'about',
      label: 'About',
      href: "/about/",
      submenuClass: "absolute bg-white shadow-[rgba(0,0,0,0.3)_0px_0px_5px_0px] box-border min-w-[200px] text-nowrap transform-none origin-[50%_0%] border border-zinc-50 pl-0 rounded-sm border-solid z-50",
      submenu: [
        {
          id: 'experts',
          label: 'Experts',
          href: "https://lemonlawexperts.com/attorneys/",
          submenu: [
            { id: 'jessica-anvar', label: 'Jessica Anvar', href: "https://lemonlawexperts.com/attorneys/jessica-anvar/" },
            { id: 'eric-stotz', label: 'Eric Stotz (Non Attorney)', href: "https://lemonlawexperts.com/attorneys/eric-stotz/" },
            { id: 'carey-wood', label: 'Carey Wood', href: "https://lemonlawexperts.com/attorneys/carey-wood/" },
            { id: 'jordan-cohen', label: 'Jordan Cohen', href: '/attorneys/jordan-cohen/' },
            { id: 'vanessa-oliva', label: 'Vanessa Oliva', href: "https://lemonlawexperts.com/attorneys/vanessa-oliva/" },
            { id: 'sean-crandall', label: 'Sean Crandall', href: '/attorneys/sean-crandall/' },
            { id: 'joshua-fennell', label: 'Joshua Fennell', href: '/attorneys/joshua-fennell/' },
            { id: 'joseph-liu', label: 'Joseph Liu', href: "https://lemonlawexperts.com/attorneys/joseph-liu/" },
            { id: 'diana-rivero', label: 'Diana Rivero', href: "https://lemonlawexperts.com/attorneys/diana-rivero/" },
            { id: 'corinna-jiang', label: 'Corinna Jiang', href: '/attorneys/corinna-jiang/' },
            { id: 'sandro-manno', label: 'Sandro Manno', href: '/attorneys/sandro-manno/' },
            { id: 'joseph-kowalski', label: 'Joseph Kowalski', href: '/attorneys/joseph-kowalski/' },
            { id: 'andrew-dickson', label: 'Andrew Dickson', href: "https://lemonlawexperts.com/attorneys/andrew-dickson/" },
            { id: 'bobby-walker', label: 'Bobby Walker', href: "https://lemonlawexperts.com/attorneys/bobby-walker/" },
            { id: 'arbre-kornely', label: 'Arbre Kornely', href: "https://lemonlawexperts.com/attorneys/arbre-kornely/" },
            { id: 'gabriel-eredia', label: 'Gabriel Eredia', href: "https://lemonlawexperts.com/attorneys/gabriel-eredia/" },
            { id: 'lara-rogers', label: 'Lara Rogers', href: "https://lemonlawexperts.com/attorneys/lara-rogers-lle/" },
            { id: 'mark-noel', label: 'Mark Noel', href: "https://lemonlawexperts.com/attorneys/mark-noel/" },
            { id: 'michael-figura', label: 'Michael Figura', href: "https://lemonlawexperts.com/attorneys/michael-figura/" },
            { id: 'wil-vollbrecht', label: 'Wil Vollbrecht', href: "https://lemonlawexperts.com/attorneys/wil-vollbrecht/" },
            { id: 'eesha-dalia', label: 'Eesha Dalia', href: "https://lemonlawexperts.com/attorneys/eesha-dalia/" },
            { id: 'june-kim', label: 'June Kim', href: "https://lemonlawexperts.com/attorneys/june-kim/" },
            { id: 'jasmine-song', label: 'Jasmine Song', href: "https://lemonlawexperts.com/attorneys/jasmine-song/" },
            { id: 'shayna-elian', label: 'Shayna Elian', href: "https://lemonlawexperts.com/attorneys/shayna-elian/" },
            { id: 'stephanie-argent', label: 'Stephanie Argent', href: "https://lemonlawexperts.com/attorneys/stephanie-argent/" },
            { id: 'gunwant-singh', label: 'Gunwant Singh', href: "https://lemonlawexperts.com/attorneys/gunwant-singh/" },
            { id: 'ashley-sura', label: 'Ashley Sura', href: "https://lemonlawexperts.com/attorneys/ashley-sura/" },
            { id: 'destinae-demery', label: 'Destinae Demery', href: "https://lemonlawexperts.com/attorneys/destinae-demery/" }
          ]
        },
        { id: 'testimonials', label: 'Testimonials', href: "https://lemonlawexperts.com/testimonials/" },
        { id: 'videos', label: 'Videos', href: "https://lemonlawexperts.com/video-library/" },
        { id: 'careers', label: 'Careers', href: "https://lemonlawexperts.com/careers/" },
        { id: 'mission-values', label: 'Mission and Values', href: "https://lemonlawexperts.com/mission-and-values/" },
        { id: 'community', label: 'Community Involvement', href: "https://lemonlawexperts.com/community-involvement/" },
        { id: 'scholarships', label: 'Scholarships', href: "https://lemonlawexperts.com/lemon-law-experts-scholarships/" },
        { id: 'art-contest', label: 'Art Contest', href: "https://lemonlawexperts.com/visualizing-justice-the-lemon-law-experts-art-contest/" }
      ]
    },
    {
      id: 'lemon-law',
      label: 'Lemon Law',
      href: "/lemon-law/",
      submenuClass: "absolute bg-white shadow-[rgba(0,0,0,0.3)_0px_0px_5px_0px] box-border max-h-[840px] min-w-[200px] overflow-x-auto overflow-y-scroll text-nowrap transform-none origin-[50%_0%] border border-zinc-50 pl-0 rounded-sm border-solid z-50",
      submenu: [
        { id: 'process', label: 'Lemon Law Process', href: "https://lemonlawexperts.com/the-lemon-law-process/" },
        { id: 'presumption', label: 'Lemon Law Presumption', href: "https://lemonlawexperts.com/lemon-law-presumption-definition/" },
        { id: 'how-to-file', label: 'How to File a Lemon Law Claim', href: "https://lemonlawexperts.com/how-to-file-a-lemon-law-claim/" },
        { id: 'california', label: 'California Lemon Law', href: "https://lemonlawexperts.com/california-lemon-law-rules/" },
        { id: 'texas', label: 'Texas Lemon Law', href: "https://lemonlawexperts.com/out-of-state/texas-lemon-law/" },
        { id: 'military', label: 'Military Exceptions', href: "https://lemonlawexperts.com/california-lemon-law-military-exceptions/" },
        { id: 'korean', label: 'Korean Lemon Law', href: "https://lemonlawexperts.com/korean-language-page/" }
      ]
    },
    {
      id: 'resources',
      label: 'Resources',
      href: "/resources/",
      submenuClass: "absolute bg-white shadow-[rgba(0,0,0,0.3)_0px_0px_5px_0px] box-border min-w-[200px] text-nowrap transform-none origin-[50%_0%] border border-zinc-50 pl-0 rounded-sm border-solid z-50",
      submenu: [
        { id: 'blog', label: 'Lemon Law Blog', href: "https://lemonlawexperts.com/blog/" },
        { id: 'faqs', label: 'Lemon Law FAQs', href: "https://lemonlawexperts.com/lemon-law-faqs/" },
        { id: 'buyback-calculator', label: 'California Lemon Law Buyback: Calculate Yours Today', href: "https://lemonlawexperts.com/calculator-lemon-law-refund-buyback/" },
        { id: 'problems-complaints', label: 'Problems & Complaints by Manufacturer', href: "https://lemonlawexperts.com/manufacturer-list/" },
        { id: 'ebook', label: 'Free Lemon Law E-Book', href: "https://lemonlawexperts.com/ebook-request/" },
        { id: 'success-stories', label: 'Success Stories', href: '/case-results/' },
        { id: 'manufacturer-study', label: 'Manufacturer Study', href: '/study-lemon-law-claims-data-us/' }
      ]
    },
    {
      id: 'manufacturers',
      label: 'Manufacturers',
      href: "/manufacturers/",
      submenuClass: "absolute bg-white shadow-[rgba(0,0,0,0.3)_0px_0px_5px_0px] box-border max-h-[840px] min-w-[200px] overflow-x-auto overflow-y-scroll text-nowrap transform-none origin-[50%_0%] border border-zinc-50 pl-0 rounded-sm border-solid z-50",
      submenu: [
        { id: 'acura', label: 'Acura', href: '/manufacturers/acura/' },
        { id: 'audi', label: 'Audi', href: '/manufacturers/audi/' },
        { id: 'bmw', label: 'BMW', href: '/manufacturers/bmw/' },
        { id: 'chevrolet', label: 'Chevrolet', href: '/manufacturers/chevrolet/' },
        { id: 'chrysler', label: 'Chrysler', href: '/manufacturers/chrysler/' },
        { id: 'dodge', label: 'Dodge', href: '/manufacturers/dodge/' },
        { id: 'ford', label: 'Ford', href: '/manufacturers/ford/' },
        { id: 'gmc', label: 'GMC', href: '/manufacturers/gmc/' },
        { id: 'honda', label: 'Honda', href: '/manufacturers/honda/' },
        { id: 'hyundai', label: 'Hyundai', href: '/manufacturers/hyundai/' },
        { id: 'jeep', label: 'Jeep', href: '/manufacturers/jeep/' },
        { id: 'kia', label: 'Kia', href: '/manufacturers/kia/' },
        { id: 'lexus', label: 'Lexus', href: '/manufacturers/lexus/' },
        { id: 'mercedes', label: 'Mercedes Benz', href: '/manufacturers/mercedes-benz/' },
        { id: 'nissan', label: 'Nissan', href: '/manufacturers/nissan/' },
        { id: 'subaru', label: 'Subaru', href: '/manufacturers/subaru/' },
        { id: 'tesla', label: 'Tesla', href: '/manufacturers/tesla/' },
        { id: 'toyota', label: 'Toyota', href: '/manufacturers/toyota/' },
        { id: 'volkswagen', label: 'Volkswagen', href: '/manufacturers/volkswagen/' },
        { id: 'all', label: 'All Manufacturers', href: '/manufacturers/' }
      ]
    },
    {
      id: 'locations',
      label: 'Locations',
      href: "/locations/",
      submenuClass: "absolute bg-white shadow-[rgba(0,0,0,0.3)_0px_0px_5px_0px] box-border min-w-[200px] text-nowrap transform-none origin-[50%_0%] border border-zinc-50 pl-0 rounded-sm border-solid z-50",
      submenu: [
        { id: 'bakersfield', label: 'Bakersfield', href: "https://lemonlawexperts.com/bakersfield-lemon-law-lawyer/" },
        { id: 'el-segundo', label: 'El Segundo', href: "https://lemonlawexperts.com/lemon-law-lawyer-el-segundo/" },
        { id: 'fresno', label: 'Fresno', href: "https://lemonlawexperts.com/fresno-lemon-law-attorney/" },
        { id: 'long-beach', label: 'Long Beach', href: "https://lemonlawexperts.com/california-lemon-law-attorneys/long-beach-lemon-lawyers-attorneys/" },
        { id: 'los-angeles', label: 'Los Angeles', href: "https://lemonlawexperts.com/lemon-law-lawyer-los-angeles-county/" },
        { id: 'orange-county', label: 'Orange County', href: "https://lemonlawexperts.com/orange-county-lemon-law-attorneys/" },
        { id: 'riverside', label: 'Riverside', href: "https://lemonlawexperts.com/riverside-lemon-law-attorney/" },
        { id: 'sacramento', label: 'Sacramento', href: "https://lemonlawexperts.com/sacramento-lemon-law-attorney/" },
        { id: 'san-bernardino', label: 'San Bernardino', href: "https://lemonlawexperts.com/lemon-law-lawyer-san-bernardino-county/" },
        { id: 'san-diego', label: 'San Diego', href: "https://lemonlawexperts.com/lemon-law-lawyer-san-diego-county/" },
        { id: 'san-francisco', label: 'San Francisco', href: "https://lemonlawexperts.com/san-francisco-lemon-law-attorney/" },
        { id: 'san-jose', label: 'San Jose', href: "https://lemonlawexperts.com/san-jose-lemon-law-attorney/" },
        { id: 'dallas', label: 'Dallas', href: "https://lemonlawexperts.com/lemon-law-attorney-dallas/" },
        { id: 'areas-served', label: 'Areas We Serve', href: "https://lemonlawexperts.com/areas-we-serve/" }
      ]
    },
    {
      id: 'contact',
      label: 'Contact',
      href: "/contact/"
    }
  ]
} as const;
