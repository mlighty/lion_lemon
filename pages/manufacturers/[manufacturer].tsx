import React from 'react';
import Head from 'next/head';
import { GetStaticProps, GetStaticPaths } from 'next';
import Header from '../../src/components/layout/Header';
import Footer from '../../src/components/layout/Footer';
import ContactForm from '../../src/components/forms/ContactForm';
import SchemaMarkup from '../../src/components/seo/SchemaMarkup';

interface ManufacturerPageProps {
  manufacturer: string;
  manufacturerName: string;
}

const manufacturerData: Record<string, { name: string; description: string; commonIssues: string[] }> = {
  'acura': {
    name: 'Acura',
    description: 'Acura vehicles are known for luxury and performance, but some models may experience transmission, electrical, or engine issues that qualify under California lemon law.',
    commonIssues: ['Transmission problems', 'Electrical system failures', 'Engine defects', 'Air conditioning issues']
  },
  'audi': {
    name: 'Audi',
    description: 'Audi luxury vehicles may develop complex electrical, transmission, or engine problems covered by California lemon law protections.',
    commonIssues: ['Electrical system failures', 'Transmission defects', 'Engine problems', 'Suspension issues']
  },
  'bmw': {
    name: 'BMW',
    description: 'BMW vehicles may experience engine, transmission, electrical, or cooling system defects that qualify for lemon law protection in California.',
    commonIssues: ['Engine cooling problems', 'Transmission issues', 'Electrical failures', 'Fuel system defects']
  },
  'chevrolet': {
    name: 'Chevrolet',
    description: 'Chevrolet vehicles may have engine, transmission, electrical, or safety-related defects covered under California lemon law.',
    commonIssues: ['Engine problems', 'Transmission defects', 'Electrical system issues', 'Brake system failures']
  },
  'chrysler': {
    name: 'Chrysler',
    description: 'Chrysler vehicles may experience transmission, electrical, engine, or safety defects that qualify for lemon law remedies in California.',
    commonIssues: ['Transmission problems', 'Electrical failures', 'Engine defects', 'Steering system issues']
  },
  'dodge': {
    name: 'Dodge',
    description: 'Dodge vehicles may develop engine, transmission, electrical, or suspension problems covered by California lemon law.',
    commonIssues: ['Engine defects', 'Transmission issues', 'Electrical problems', 'Suspension failures']
  },
  'ford': {
    name: 'Ford',
    description: 'Ford vehicles may experience engine, transmission, electrical, or safety-related defects that qualify under California lemon law.',
    commonIssues: ['Engine problems', 'Transmission defects', 'Electrical system failures', 'Brake issues']
  },
  'gmc': {
    name: 'GMC',
    description: 'GMC trucks and SUVs may have engine, transmission, electrical, or drivetrain problems covered by California lemon law.',
    commonIssues: ['Engine defects', 'Transmission problems', 'Electrical failures', 'Drivetrain issues']
  },
  'honda': {
    name: 'Honda',
    description: 'Honda vehicles may develop transmission, engine, electrical, or safety defects that qualify for lemon law protection in California.',
    commonIssues: ['Transmission problems', 'Engine defects', 'Electrical issues', 'Air conditioning failures']
  },
  'hyundai': {
    name: 'Hyundai',
    description: 'Hyundai vehicles may experience engine, transmission, electrical, or safety-related problems covered under California lemon law.',
    commonIssues: ['Engine problems', 'Transmission defects', 'Electrical system issues', 'Brake system problems']
  },
  'jeep': {
    name: 'Jeep',
    description: 'Jeep vehicles may have engine, transmission, electrical, or drivetrain defects that qualify for lemon law remedies in California.',
    commonIssues: ['Engine defects', 'Transmission problems', 'Electrical failures', 'Drivetrain issues']
  },
  'kia': {
    name: 'Kia',
    description: 'Kia vehicles may develop engine, transmission, electrical, or safety defects covered by California lemon law protections.',
    commonIssues: ['Engine problems', 'Transmission defects', 'Electrical system failures', 'Brake issues']
  },
  'lexus': {
    name: 'Lexus',
    description: 'Lexus luxury vehicles may experience complex electrical, engine, transmission, or suspension problems qualifying under California lemon law.',
    commonIssues: ['Electrical system problems', 'Engine defects', 'Transmission issues', 'Suspension failures']
  },
  'mercedes-benz': {
    name: 'Mercedes-Benz',
    description: 'Mercedes-Benz vehicles may have sophisticated electrical, engine, transmission, or air suspension defects covered by California lemon law.',
    commonIssues: ['Electrical system failures', 'Engine problems', 'Transmission defects', 'Air suspension issues']
  },
  'nissan': {
    name: 'Nissan',
    description: 'Nissan vehicles may develop CVT transmission, engine, electrical, or safety-related problems that qualify for lemon law protection in California.',
    commonIssues: ['CVT transmission problems', 'Engine defects', 'Electrical issues', 'Brake system failures']
  },
  'subaru': {
    name: 'Subaru',
    description: 'Subaru vehicles may experience engine, transmission, electrical, or all-wheel-drive system defects covered under California lemon law.',
    commonIssues: ['Engine problems', 'Transmission defects', 'Electrical system issues', 'AWD system problems']
  },
  'tesla': {
    name: 'Tesla',
    description: 'Tesla electric vehicles may have battery, electrical, software, or build quality defects that qualify for lemon law remedies in California.',
    commonIssues: ['Battery system problems', 'Electrical failures', 'Software defects', 'Build quality issues']
  },
  'toyota': {
    name: 'Toyota',
    description: 'Toyota vehicles may develop engine, transmission, electrical, or hybrid system problems covered by California lemon law protections.',
    commonIssues: ['Engine defects', 'Transmission problems', 'Electrical system failures', 'Hybrid system issues']
  },
  'volkswagen': {
    name: 'Volkswagen',
    description: 'Volkswagen vehicles may experience engine, transmission, electrical, or emissions system defects that qualify under California lemon law.',
    commonIssues: ['Engine problems', 'Transmission defects', 'Electrical failures', 'Emissions system issues']
  }
};

export default function ManufacturerPage({ manufacturer, manufacturerName }: ManufacturerPageProps) {
  const data = manufacturerData[manufacturer];
  
  if (!data) {
    return <div>Manufacturer not found</div>;
  }

  return (
    <>
      <Head>
        <title>{manufacturerName} Lemon Law Attorney California | Lion Lemon Law</title>
        <meta 
          name="description" 
          content={`Experienced ${manufacturerName} lemon law attorneys in California. Free consultation for defective ${manufacturerName} vehicles. No upfront costs. Get the compensation you deserve.`}
        />
        <meta 
          name="keywords" 
          content={`${manufacturerName.toLowerCase()} lemon law attorney, ${manufacturerName.toLowerCase()} lemon law lawyer california, defective ${manufacturerName.toLowerCase()} attorney, ${manufacturerName.toLowerCase()} lemon lawyer`}
        />
      </Head>

      <SchemaMarkup />

      <div className="text-zinc-600 text-lg not-italic normal-nums font-normal accent-auto box-border block tracking-[normal] leading-[27px] list-outside list-disc overflow-x-hidden overflow-y-auto text-start indent-[0px] normal-case visible border-separate font-source_sans_pro">
        <Header />
        
        <div className="box-border pt-[152px] md:pt-[153px]">
          <main id="main-content" className="box-border">
            <article className="bg-white box-border">
              
              {/* Hero Section - matching homepage structure */}
              <header className="relative bg-slate-900 box-border flex flex-col justify-center w-full overflow-hidden pt-0 pb-10 md:block md:flex-row md:justify-normal md:pt-10">
                <img src="https://c.animaapp.com/me11n5bffLhWIi/assets/11.webp" alt={`${manufacturerName} lemon law attorneys helping clients with defective vehicles`} sizes="(max-width: 1440px) 100vw, 1440px" className="static aspect-[auto_1440_/_734] box-border hidden h-full max-w-full object-cover w-full right-0 inset-y-0 md:absolute md:block" loading="lazy" />
                <img src="https://c.animaapp.com/me11n5bffLhWIi/assets/16.webp" alt={`${manufacturerName} lemon law mobile hero image`} sizes="(max-width: 960px) 100vw, 960px" className="static aspect-[auto_960_/_866] box-border block h-full max-w-full min-h-[auto] min-w-[auto] object-cover w-full right-0 inset-y-0 md:absolute md:hidden md:min-h-0 md:min-w-0" loading="lazy" />
                <div className="static items-center box-border flex flex-col min-h-[auto] min-w-[auto] w-full pt-6 px-4 left-[60%] md:relative md:[align-items:normal] md:block md:flex-row md:min-h-0 md:min-w-0 md:w-[500px] md:pt-0">
                  <h1 className="text-white text-sm box-border clear-both tracking-[4.48px] leading-5 min-h-[auto] min-w-[auto] font-source_sans_pro md:min-h-0 md:min-w-0">California {manufacturerName} Lemon Law Attorneys</h1>
                  <span className="text-zinc-50 text-5xl box-border block leading-[60px] min-h-[auto] min-w-[auto] text-center md:text-[68px] md:inline md:leading-[85px] md:min-h-0 md:min-w-0 md:text-left">
                    Have A {manufacturerName} Lemon? <span className="text-yellow-400 text-5xl box-border block leading-[60px] text-center md:text-[68px] md:leading-[85px] md:text-left">We Can Help.</span>
                  </span>
                  <div className="box-border max-w-none min-h-[auto] min-w-[auto] w-full mt-4 md:max-w-md md:min-h-0 md:min-w-0">
                    <ContactForm />
                  </div>
                </div>
              </header>

              {/* Content Section - matching homepage layout */}
              <div className="bg-white box-border clear-both flow-root max-w-full w-full mx-auto px-[19.98px] py-[37.5px] md:w-auto md:p-[60px]">
                <div className="box-border mx-auto">
                  <div className="box-border clear-both gap-x-9 flex flex-wrap max-w-full gap-y-9 w-[345px] mx-auto md:flex-nowrap md:w-[1080px]">
                    <div className="box-border basis-full grow break-words mb-[19.8px] md:basis-0 md:mb-0">
                      <h2 className="text-blue-900 text-[26px] box-border clear-both leading-[28.6px] break-words mb-[19.8px] font-oswald md:text-[55px] md:leading-[60.5px] md:mb-[30px]">
                        {manufacturerName} Lemon Law<br className="text-[26px] box-border leading-[28.6px] break-words md:text-[55px] md:leading-[60.5px]" />
                        Expert Attorneys
                      </h2>
                      <p className="box-border break-words my-[19.8px] md:my-[30px]">
                        {data.description}
                      </p>
                      <p className="box-border break-words my-[19.8px] md:my-[30px]">
                        If you own a defective {manufacturerName} vehicle in California, you have legal rights under the state's lemon law. 
                        Lion Lemon attorneys specialize in {manufacturerName} lemon law cases and can help you get the compensation you deserve - 
                        whether that's a full refund, replacement vehicle, or cash settlement.
                      </p>
                      <div className="items-center box-border gap-x-[9px] flex flex-wrap break-words gap-y-[9px] mt-[19.8px] md:mt-[30px]">
                        <div className="box-border break-words">
                          <a href="/contact/" className="relative text-neutral-900 text-[20.25px] font-bold content-center bg-yellow-400 bg-[linear-gradient(rgba(0,0,0,0)_calc(100%_-_2px),rgb(38,121,184)_1px)] bg-no-repeat bg-size-[0px] box-border inline-block h-full leading-[30.375px] break-words text-center uppercase w-full border-yellow-400 bg-right px-6 py-3 border-2 border-solid font-oswald">Free Case Evaluation</a>
                        </div>
                      </div>
                    </div>
                    <div className="box-border basis-full grow break-words md:basis-0">
                      <div className="box-border break-words mb-[19.8px] md:mb-[30px]">
                        <h3 className="text-blue-900 text-[20px] font-bold mb-4 font-oswald">Common {manufacturerName} Defects:</h3>
                        <ul className="box-border list-none break-words pl-5">
                          {data.commonIssues.map((issue, index) => (
                            <li key={index} className="text-blue-900 text-lg items-center box-border flex leading-[27px] list-disc break-words text-left mb-4 md:text-[22px] md:leading-[33px] md:mb-6">
                              <div className="text-lg box-border leading-[27px] break-words mr-2 md:text-[22px] md:leading-[33px] md:mr-3">
                                <span className="text-lg font-semibold bg-yellow-400/40 box-border block leading-[27px] break-words border-yellow-400 px-[10.8px] py-[1.8px] rounded-full border-2 border-solid md:text-[22px] md:leading-[33px] md:px-[15.92px] md:py-[5px]">{index + 1}</span>
                              </div>
                              <span className="text-lg font-bold box-border block leading-[27px] break-words font-oswald md:text-[22px] md:leading-[33px]">{issue}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <p className="box-border break-words mt-[19.8px] md:mt-[30px]">
                        Don't let {manufacturerName} keep your money for a defective vehicle. California law is on your side, 
                        and Lion Lemon attorneys have the experience to fight for your rights. Contact us today for a free consultation.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

            </article>
          </main>
        </div>
        
        <Footer />
      </div>
    </>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const manufacturers = Object.keys(manufacturerData);
  
  const paths = manufacturers.map((manufacturer) => ({
    params: { manufacturer }
  }));

  return {
    paths,
    fallback: false
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const manufacturer = params?.manufacturer as string;
  const data = manufacturerData[manufacturer];
  
  if (!data) {
    return {
      notFound: true
    };
  }

  return {
    props: {
      manufacturer,
      manufacturerName: data.name
    }
  };
};