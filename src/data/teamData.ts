export interface TeamMember {
  readonly id: string;
  readonly name: string;
  readonly title: string;
  readonly image: string;
  readonly href: string;
  readonly imageClass?: string;
}

export interface TeamData {
  readonly seniorTeam: TeamMember[];
  readonly partners: TeamMember[];
  readonly associates: TeamMember[];
}

export const teamData: TeamData = {
  seniorTeam: [
    {
      id: 'jessica-anvar',
      name: 'Jessica Anvar',
      title: 'Founder / Managing Partner',
      image: "https://c.animaapp.com/me11n5bffLhWIi/assets/43.webp",
      href: "https://lemonlawexperts.com/attorneys/jessica-anvar/"
    },
    {
      id: 'carey-wood',
      name: 'Carey Wood',
      title: 'Senior Partner',
      image: "https://c.animaapp.com/me11n5bffLhWIi/assets/44.webp",
      href: "https://lemonlawexperts.com/attorneys/carey-wood/"
    },
    {
      id: 'jordan-cohen',
      name: 'Jordan Cohen',
      title: 'Senior Partner',
      image: "https://c.animaapp.com/me11n5bffLhWIi/assets/45.webp",
      href: "https://lemonlawexperts.com/attorneys/jordan-cohen/"
    }
  ],
  partners: [
    {
      id: 'sean-crandall',
      name: 'Sean Crandall',
      title: 'Partner',
      image: "https://c.animaapp.com/me11n5bffLhWIi/assets/46.webp",
      href: "https://lemonlawexperts.com/attorneys/sean-crandall/"
    },
    {
      id: 'vanessa-oliva',
      name: 'Vanessa Oliva',
      title: 'Partner',
      image: "https://c.animaapp.com/me11n5bffLhWIi/assets/47.webp",
      href: "https://lemonlawexperts.com/attorneys/vanessa-oliva/"
    },
    {
      id: 'joshua-fennell',
      name: 'Joshua Fennell',
      title: 'Partner',
      image: "https://c.animaapp.com/me11n5bffLhWIi/assets/48.webp",
      href: "https://lemonlawexperts.com/attorneys/joshua-fennell/"
    }
  ],
  associates: [
    {
      id: 'joseph-liu',
      name: 'Joseph Liu',
      title: 'Senior Associate',
      image: "https://c.animaapp.com/me11n5bffLhWIi/assets/49.webp",
      href: "https://lemonlawexperts.com/attorneys/joseph-liu/",
      imageClass: "aspect-[auto_270_/_300] box-border h-[170px] max-w-full object-cover mx-auto md:h-[175px]"
    },
    {
      id: 'diana-rivero',
      name: 'Diana Rivero',
      title: 'Senior Associate',
      image: "https://c.animaapp.com/me11n5bffLhWIi/assets/50.webp",
      href: "https://lemonlawexperts.com/attorneys/diana-rivero/",
      imageClass: "aspect-[auto_236_/_300] box-border h-[170px] max-w-full object-cover mx-auto md:h-[175px]"
    },
    {
      id: 'corinna-jiang',
      name: 'Corinna Jiang',
      title: 'Associate Attorney',
      image: "https://c.animaapp.com/me11n5bffLhWIi/assets/51.webp",
      href: "https://lemonlawexperts.com/attorneys/corinna-jiang/",
      imageClass: "aspect-[auto_270_/_300] box-border h-[170px] max-w-full object-cover mx-auto md:h-[175px]"
    },
    {
      id: 'joseph-kowalski',
      name: 'Joseph Kowalski',
      title: 'Associate Attorney',
      image: "https://c.animaapp.com/me11n5bffLhWIi/assets/52.webp",
      href: "https://lemonlawexperts.com/attorneys/joseph-kowalski/",
      imageClass: "aspect-[auto_270_/_300] box-border h-[170px] max-w-full object-cover mx-auto md:h-[175px]"
    },
    {
      id: 'sandro-manno',
      name: 'Sandro Manno',
      title: 'Associate Attorney',
      image: "https://c.animaapp.com/me11n5bffLhWIi/assets/53.webp",
      href: "https://lemonlawexperts.com/attorneys/sandro-manno/",
      imageClass: "aspect-[auto_270_/_300] box-border h-[170px] max-w-full object-cover mx-auto md:h-[175px]"
    },
    {
      id: 'andrew-dickson',
      name: 'Andrew Dickson',
      title: 'Associate Attorney',
      image: "https://c.animaapp.com/me11n5bffLhWIi/assets/54.webp",
      href: "https://lemonlawexperts.com/attorneys/andrew-dickson/",
      imageClass: "aspect-[auto_289_/_300] box-border h-[170px] max-w-full object-cover mx-auto md:h-[175px]"
    },
    {
      id: 'bobby-walker',
      name: 'Bobby Walker',
      title: 'Associate Attorney',
      image: "https://c.animaapp.com/me11n5bffLhWIi/assets/55.webp",
      href: "https://lemonlawexperts.com/attorneys/bobby-walker/",
      imageClass: "aspect-[auto_270_/_300] box-border h-[170px] max-w-full object-cover mx-auto md:h-[175px]"
    },
    {
      id: 'arbre-kornely',
      name: 'Arbre Kornely',
      title: 'Associate Attorney',
      image: "https://c.animaapp.com/me11n5bffLhWIi/assets/56.webp",
      href: "https://lemonlawexperts.com/attorneys/arbre-kornely/",
      imageClass: "aspect-[auto_270_/_300] box-border h-[170px] max-w-full object-cover mx-auto md:h-[175px]"
    },
    {
      id: 'gabriel-eredia',
      name: 'Gabriel Eredia',
      title: 'Associate Attorney',
      image: "https://c.animaapp.com/me11n5bffLhWIi/assets/57.webp",
      href: "https://lemonlawexperts.com/attorneys/gabriel-eredia/",
      imageClass: "aspect-[auto_270_/_300] box-border h-[170px] max-w-full object-cover mx-auto md:h-[175px]"
    },
    {
      id: 'lara-rogers',
      name: 'Lara Rogers',
      title: 'Associate Attorney',
      image: "https://c.animaapp.com/me11n5bffLhWIi/assets/58.webp",
      href: "https://lemonlawexperts.com/attorneys/lara-rogers-lle/",
      imageClass: "aspect-[auto_270_/_300] box-border h-[170px] max-w-full object-cover mx-auto md:h-[175px]"
    },
    {
      id: 'mark-noel',
      name: 'Mark Noel',
      title: 'Pre-Litigation Supervising Associate',
      image: "https://c.animaapp.com/me11n5bffLhWIi/assets/59.webp",
      href: "https://lemonlawexperts.com/attorneys/mark-noel/",
      imageClass: "aspect-[auto_270_/_300] box-border h-[170px] max-w-full object-cover mx-auto md:h-[175px]"
    },
    {
      id: 'michael-figura',
      name: 'Michael Figura',
      title: 'Associate Attorney',
      image: "https://c.animaapp.com/me11n5bffLhWIi/assets/60.webp",
      href: "https://lemonlawexperts.com/attorneys/michael-figura/",
      imageClass: "aspect-[auto_270_/_300] box-border h-[170px] max-w-full object-cover mx-auto md:h-[175px]"
    },
    {
      id: 'wil-vollbrecht',
      name: 'Wil Vollbrecht',
      title: 'Associate Attorney',
      image: "https://c.animaapp.com/me11n5bffLhWIi/assets/61.webp",
      href: "https://lemonlawexperts.com/attorneys/wil-vollbrecht/",
      imageClass: "aspect-[auto_270_/_300] box-border h-[170px] max-w-full object-cover mx-auto md:h-[175px]"
    },
    {
      id: 'eesha-dalia',
      name: 'Eesha Dalia',
      title: 'Associate Attorney',
      image: "https://c.animaapp.com/me11n5bffLhWIi/assets/62.webp",
      href: "https://lemonlawexperts.com/attorneys/eesha-dalia/",
      imageClass: "aspect-[auto_270_/_300] box-border h-[170px] max-w-full object-cover mx-auto md:h-[175px]"
    },
    {
      id: 'june-kim',
      name: 'June Kim',
      title: 'Associate Attorney',
      image: "https://c.animaapp.com/me11n5bffLhWIi/assets/63.webp",
      href: "https://lemonlawexperts.com/attorneys/june-kim/",
      imageClass: "aspect-[auto_270_/_300] box-border h-[170px] max-w-full object-cover mx-auto md:h-[175px]"
    },
    {
      id: 'jasmine-song',
      name: 'Jasmine Song',
      title: 'Associate Attorney',
      image: "https://c.animaapp.com/me11n5bffLhWIi/assets/64.webp",
      href: "https://lemonlawexperts.com/attorneys/jasmine-song/",
      imageClass: "aspect-[auto_270_/_300] box-border h-[170px] max-w-full object-cover mx-auto md:h-[175px]"
    },
    {
      id: 'stephanie-argent',
      name: 'Stephanie Argent',
      title: 'Associate Attorney',
      image: "https://c.animaapp.com/me11n5bffLhWIi/assets/65.webp",
      href: "https://lemonlawexperts.com/attorneys/stephanie-argent/",
      imageClass: "aspect-[auto_270_/_300] box-border h-[170px] max-w-full object-cover mx-auto md:h-[175px]"
    },
    {
      id: 'gunwant-singh',
      name: 'Gunwant Singh',
      title: 'Associate Attorney',
      image: "https://c.animaapp.com/me11n5bffLhWIi/assets/66.webp",
      href: "https://lemonlawexperts.com/attorneys/gunwant-singh/",
      imageClass: "aspect-[auto_270_/_300] box-border h-[170px] max-w-full object-cover mx-auto md:h-[175px]"
    },
    {
      id: 'shayna-elian',
      name: 'Shayna Elian',
      title: 'Associate Attorney',
      image: "https://c.animaapp.com/me11n5bffLhWIi/assets/67.webp",
      href: "https://lemonlawexperts.com/attorneys/shayna-elian/",
      imageClass: "aspect-[auto_270_/_300] box-border h-[170px] max-w-full object-cover mx-auto md:h-[175px]"
    },
    {
      id: 'ashley-sura',
      name: 'Ashley Sura',
      title: 'Associate Attorney',
      image: "https://c.animaapp.com/me11n5bffLhWIi/assets/68.webp",
      href: "https://lemonlawexperts.com/attorneys/ashley-sura/",
      imageClass: "aspect-[auto_270_/_300] box-border h-[170px] max-w-full object-cover mx-auto md:h-[175px]"
    },
    {
      id: 'destinae-demery',
      name: 'Destinae Demery',
      title: 'Associate Attorney',
      image: "https://c.animaapp.com/me11n5bffLhWIi/assets/69.webp",
      href: "https://lemonlawexperts.com/attorneys/destinae-demery/",
      imageClass: "aspect-[auto_270_/_300] box-border h-[170px] max-w-full object-cover mx-auto md:h-[175px]"
    }
  ]
} as const;
