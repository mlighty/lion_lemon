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

const manufacturerData: Record<string, { 
  name: string; 
  description: string; 
  introduction: string;
  models: string[];
  commonIssues: string[];
  detailedIssues: string[];
}> = {
  'acura': {
    name: 'Acura',
    description: 'Acura vehicles are known for luxury and performance, but some models may experience transmission, electrical, or engine issues that qualify under California lemon law.',
    introduction: 'Acura, a division of Honda America Motor Co., Inc., was introduced to the United States in 1986. Their slogan is "Precision Crafted Automobiles." While Acura manufactures high-end vehicles, some cars may be considered "lemons" if they have substantial repair issues that cannot be fixed after a reasonable number of repair attempts.',
    models: ['Acura CL', 'Acura TL', 'Acura ILX', 'Acura TLX', 'Acura RLX', 'Acura RDX', 'Acura MDX', 'Acura NSX', 'Acura TSX', 'Acura ZDX'],
    commonIssues: ['Transmission Problems', 'Steering Issues', 'Engine Defects', 'Suspension Problems'],
    detailedIssues: [
      'Transmission jerking between gears',
      'Steering wheel locking while driving', 
      'Transmission hesitating on acceleration',
      'Engine burning excessive oil',
      'Transmission failure while driving',
      'Suspension rattling and noise',
      'Check engine light illuminating',
      'Engine failure and stalling'
    ]
  },
  'audi': {
    name: 'Audi',
    description: 'Audi luxury vehicles may develop complex electrical, transmission, or engine problems covered by California lemon law protections.',
    introduction: 'Audi, the German luxury automotive manufacturer, has been producing premium vehicles since 1909. Known for their "Vorsprung durch Technik" (Advancement through Technology) slogan, Audi vehicles feature advanced engineering. However, some models may experience defects that qualify under California lemon law.',
    models: ['Audi A3', 'Audi A4', 'Audi A5', 'Audi A6', 'Audi A7', 'Audi A8', 'Audi Q3', 'Audi Q5', 'Audi Q7', 'Audi Q8', 'Audi e-tron'],
    commonIssues: ['Electrical System Failures', 'Transmission Defects', 'Engine Problems', 'Suspension Issues'],
    detailedIssues: [
      'MMI infotainment system malfunctions',
      'DSG transmission jerking and hesitation',
      'Oil consumption issues in TFSI engines',
      'Air suspension failures',
      'Carbon buildup in direct injection engines',
      'Electrical component failures',
      'Timing chain stretch problems',
      'Water pump failures'
    ]
  },
  'bmw': {
    name: 'BMW',
    description: 'BMW vehicles may experience engine, transmission, electrical, or cooling system defects that qualify for lemon law protection in California.',
    introduction: 'BMW (Bayerische Motoren Werke), founded in 1916, is a German luxury vehicle manufacturer known for "The Ultimate Driving Machine." While BMW produces high-performance luxury vehicles, some models may develop recurring problems that cannot be adequately repaired, qualifying them as lemons under California law.',
    models: ['BMW 3 Series', 'BMW 5 Series', 'BMW 7 Series', 'BMW X1', 'BMW X3', 'BMW X5', 'BMW X7', 'BMW i3', 'BMW i8', 'BMW Z4'],
    commonIssues: ['Engine Cooling Problems', 'Transmission Issues', 'Electrical Failures', 'Fuel System Defects'],
    detailedIssues: [
      'Water pump failures causing overheating',
      'High-pressure fuel pump failures',
      'Transmission valve body malfunctions',
      'iDrive system glitches and reboots',
      'Turbocharger wastegate rattle',
      'Electric water pump failures',
      'Vanos solenoid failures',
      'Window regulator malfunctions'
    ]
  },
  'chevrolet': {
    name: 'Chevrolet',
    description: 'Chevrolet vehicles may have engine, transmission, electrical, or safety-related defects covered under California lemon law.',
    introduction: 'Chevrolet, founded in 1911 by Louis Chevrolet and William Durant, is an American automotive brand known for affordable, reliable vehicles. While Chevrolet produces popular cars and trucks, some models may experience recurring defects that qualify under California lemon law protection.',
    models: ['Chevrolet Malibu', 'Chevrolet Cruze', 'Chevrolet Equinox', 'Chevrolet Traverse', 'Chevrolet Tahoe', 'Chevrolet Silverado', 'Chevrolet Camaro', 'Chevrolet Corvette', 'Chevrolet Bolt'],
    commonIssues: ['Engine Problems', 'Transmission Defects', 'Electrical System Issues', 'Brake System Failures'],
    detailedIssues: [
      'Engine timing chain stretch and failure',
      'CVT transmission shuddering',
      'Infotainment system freezing and rebooting',
      'Brake booster failures',
      'Oil consumption problems',
      'Air conditioning compressor failures',
      'Power steering assist loss',
      'Fuel pump failures'
    ]
  },
  'chrysler': {
    name: 'Chrysler',
    description: 'Chrysler vehicles may experience transmission, electrical, engine, or safety defects that qualify for lemon law remedies in California.',
    introduction: 'Chrysler, founded in 1925 by Walter Chrysler, is an American luxury vehicle brand known for innovation and style. Some Chrysler vehicles may develop recurring problems that qualify under California lemon law.',
    models: ['Chrysler 300', 'Chrysler Pacifica', 'Chrysler Voyager', 'Chrysler Sebring', 'Chrysler Town & Country'],
    commonIssues: ['Transmission Problems', 'Electrical Failures', 'Engine Defects', 'Steering System Issues'],
    detailedIssues: ['Transmission shifting problems', 'Electrical system malfunctions', 'Engine stalling', 'Power steering failures', 'HVAC system issues', 'Brake problems']
  },
  'dodge': {
    name: 'Dodge',
    description: 'Dodge vehicles may develop engine, transmission, electrical, or suspension problems covered by California lemon law.',
    introduction: 'Dodge, established in 1900, is known for performance vehicles and trucks. Despite their reputation, some Dodge models may experience defects covered by lemon law.',
    models: ['Dodge Charger', 'Dodge Challenger', 'Dodge Durango', 'Dodge Journey', 'Dodge Grand Caravan', 'Dodge Ram'],
    commonIssues: ['Engine Defects', 'Transmission Issues', 'Electrical Problems', 'Suspension Failures'],
    detailedIssues: ['HEMI engine tick problems', 'Transmission harsh shifting', 'Electrical component failures', 'Suspension noise', 'HVAC malfunctions', 'Brake system issues']
  },
  'ford': {
    name: 'Ford',
    description: 'Ford vehicles may experience engine, transmission, electrical, or safety-related defects that qualify under California lemon law.',
    introduction: 'Ford Motor Company, founded in 1903 by Henry Ford, revolutionized automotive manufacturing. While Ford produces popular vehicles, some models may develop issues qualifying for lemon law protection.',
    models: ['Ford F-150', 'Ford Escape', 'Ford Explorer', 'Ford Fusion', 'Ford Mustang', 'Ford Edge', 'Ford Expedition', 'Ford Focus'],
    commonIssues: ['Engine Problems', 'Transmission Defects', 'Electrical System Failures', 'Brake Issues'],
    detailedIssues: ['PowerShift transmission shuddering', 'EcoBoost engine problems', 'SYNC system malfunctions', 'Door handle failures', 'Cooling system issues', 'Brake pedal problems']
  },
  'gmc': {
    name: 'GMC',
    description: 'GMC trucks and SUVs may have engine, transmission, electrical, or drivetrain problems covered by California lemon law.',
    introduction: 'GMC, established in 1912, specializes in trucks, vans, and SUVs. Known for professional grade vehicles, some GMC models may still develop defects covered under lemon law.',
    models: ['GMC Sierra', 'GMC Acadia', 'GMC Terrain', 'GMC Yukon', 'GMC Canyon', 'GMC Savana'],
    commonIssues: ['Engine Defects', 'Transmission Problems', 'Electrical Failures', 'Drivetrain Issues'],
    detailedIssues: ['Lifter failures', 'Transmission shift issues', 'Electrical component problems', 'Transfer case failures', 'Air conditioning issues', 'Brake system problems']
  },
  'honda': {
    name: 'Honda',
    description: 'Honda vehicles may develop transmission, engine, electrical, or safety defects that qualify for lemon law protection in California.',
    introduction: 'Honda Motor Co., Ltd., established in 1948, is renowned for producing reliable, fuel-efficient vehicles. Despite their reputation for quality, some Honda models may experience recurring defects, particularly with CVT transmissions and certain engine issues that qualify under California lemon law.',
    models: ['Honda Civic', 'Honda Accord', 'Honda CR-V', 'Honda Pilot', 'Honda Odyssey', 'Honda HR-V', 'Honda Passport', 'Honda Ridgeline', 'Honda Fit', 'Honda Insight'],
    commonIssues: ['Transmission Problems', 'Engine Defects', 'Electrical Issues', 'Air Conditioning Failures'],
    detailedIssues: [
      'CVT transmission juddering and failure',
      'VTC actuator noise and failure',
      'Air conditioning compressor clutch failure',
      'Paint peeling and clearcoat issues',
      'Infotainment system freezing',
      'Engine oil dilution problems',
      'Power steering pump failures',
      'Sliding door problems in Odyssey'
    ]
  },
  'hyundai': {
    name: 'Hyundai',
    description: 'Hyundai vehicles may experience engine, transmission, electrical, or safety-related problems covered under California lemon law.',
    introduction: 'Hyundai Motor Company, founded in 1967, is a South Korean automotive manufacturer known for value and comprehensive warranties. Despite quality improvements, some models may develop issues qualifying for lemon law protection.',
    models: ['Hyundai Elantra', 'Hyundai Sonata', 'Hyundai Tucson', 'Hyundai Santa Fe', 'Hyundai Genesis', 'Hyundai Accent', 'Hyundai Veloster'],
    commonIssues: ['Engine Problems', 'Transmission Defects', 'Electrical System Issues', 'Brake System Problems'],
    detailedIssues: ['Engine knocking and seizure', 'Dual-clutch transmission problems', 'Infotainment system malfunctions', 'Brake light switch failures', 'Suspension strut issues', 'Air bag warning lights']
  },
  'jeep': {
    name: 'Jeep',
    description: 'Jeep vehicles may have engine, transmission, electrical, or drivetrain defects that qualify for lemon law remedies in California.',
    introduction: 'Jeep, established in 1941, is known for rugged off-road vehicles. While built for adventure, some Jeep models may experience defects that qualify under California lemon law.',
    models: ['Jeep Wrangler', 'Jeep Grand Cherokee', 'Jeep Cherokee', 'Jeep Compass', 'Jeep Renegade', 'Jeep Gladiator'],
    commonIssues: ['Engine Defects', 'Transmission Problems', 'Electrical Failures', 'Drivetrain Issues'],
    detailedIssues: ['Engine stalling problems', 'Transmission gear hunting', 'Uconnect system failures', 'Transfer case issues', 'Death wobble in steering', 'Water leaks into cabin']
  },
  'kia': {
    name: 'Kia',
    description: 'Kia vehicles may develop engine, transmission, electrical, or safety defects covered by California lemon law protections.',
    introduction: 'Kia Motors, founded in 1944, is a South Korean automaker known for affordable vehicles with comprehensive warranties. Some Kia models may still develop recurring issues qualifying for lemon law protection.',
    models: ['Kia Optima', 'Kia Forte', 'Kia Sorento', 'Kia Sportage', 'Kia Soul', 'Kia Rio', 'Kia Stinger'],
    commonIssues: ['Engine Problems', 'Transmission Defects', 'Electrical System Failures', 'Brake Issues'],
    detailedIssues: ['Engine knocking and failure', 'DCT transmission jerking', 'UVO infotainment problems', 'Brake light switch issues', 'Suspension noise', 'Air conditioning failures']
  },
  'lexus': {
    name: 'Lexus',
    description: 'Lexus luxury vehicles may experience complex electrical, engine, transmission, or suspension problems qualifying under California lemon law.',
    introduction: 'Lexus, launched in 1989 as Toyota\'s luxury division, is known for "The Relentless Pursuit of Perfection." While generally reliable, some Lexus models may develop sophisticated system defects qualifying for lemon law protection.',
    models: ['Lexus ES', 'Lexus RX', 'Lexus NX', 'Lexus GX', 'Lexus LX', 'Lexus IS', 'Lexus LS'],
    commonIssues: ['Electrical System Problems', 'Engine Defects', 'Transmission Issues', 'Suspension Failures'],
    detailedIssues: ['Infotainment system malfunctions', 'Hybrid system failures', 'Air suspension problems', 'Navigation system glitches', 'Engine oil leaks', 'Brake actuator issues']
  },
  'mercedes-benz': {
    name: 'Mercedes-Benz',
    description: 'Mercedes-Benz vehicles may have sophisticated electrical, engine, transmission, or air suspension defects covered by California lemon law.',
    introduction: 'Mercedes-Benz, founded in 1926, represents "The Best or Nothing" in German luxury automotive engineering. Despite premium quality, complex Mercedes systems may develop defects qualifying for lemon law protection.',
    models: ['Mercedes C-Class', 'Mercedes E-Class', 'Mercedes S-Class', 'Mercedes GLE', 'Mercedes GLC', 'Mercedes A-Class'],
    commonIssues: ['Electrical System Failures', 'Engine Problems', 'Transmission Defects', 'Air Suspension Issues'],
    detailedIssues: ['COMAND system failures', 'Air suspension compressor failures', '7G-TRONIC transmission problems', 'BlueTEC emission system issues', 'SBC brake system malfunctions', 'Electrical component failures']
  },
  'nissan': {
    name: 'Nissan',
    description: 'Nissan vehicles may develop CVT transmission, engine, electrical, or safety-related problems that qualify for lemon law protection in California.',
    introduction: 'Nissan Motor Company, established in 1933, is known for innovation and efficiency. However, some Nissan models, particularly those with CVT transmissions, may experience defects qualifying for lemon law protection.',
    models: ['Nissan Altima', 'Nissan Sentra', 'Nissan Rogue', 'Nissan Murano', 'Nissan Pathfinder', 'Nissan Maxima', 'Nissan Titan'],
    commonIssues: ['CVT Transmission Problems', 'Engine Defects', 'Electrical Issues', 'Brake System Failures'],
    detailedIssues: ['CVT transmission shuddering and failure', 'Engine timing chain stretch', 'NissanConnect system malfunctions', 'Brake master cylinder issues', 'Air conditioning problems', 'Fuel pump failures']
  },
  'subaru': {
    name: 'Subaru',
    description: 'Subaru vehicles may experience engine, transmission, electrical, or all-wheel-drive system defects covered under California lemon law.',
    introduction: 'Subaru, founded in 1953, is known for boxer engines and standard all-wheel drive with "Love" campaigns. While generally reliable, some Subaru models may develop issues qualifying for lemon law protection.',
    models: ['Subaru Outback', 'Subaru Forester', 'Subaru Impreza', 'Subaru Legacy', 'Subaru Crosstrek', 'Subaru Ascent', 'Subaru WRX'],
    commonIssues: ['Engine Problems', 'Transmission Defects', 'Electrical System Issues', 'AWD System Problems'],
    detailedIssues: ['Head gasket failures', 'CVT transmission shuddering', 'Starlink infotainment issues', 'Excessive oil consumption', 'Brake light switch problems', 'Air conditioning compressor failures']
  },
  'tesla': {
    name: 'Tesla',
    description: 'Tesla electric vehicles may have battery, electrical, software, or build quality defects that qualify for lemon law remedies in California.',
    introduction: 'Tesla, Inc., founded in 2003, revolutionized electric vehicles with cutting-edge technology. While innovative, some Tesla models may experience software, hardware, or build quality issues qualifying for lemon law protection.',
    models: ['Tesla Model S', 'Tesla Model 3', 'Tesla Model X', 'Tesla Model Y', 'Tesla Cybertruck'],
    commonIssues: ['Battery System Problems', 'Electrical Failures', 'Software Defects', 'Build Quality Issues'],
    detailedIssues: ['Battery pack degradation', 'Touchscreen failures', 'Door handle malfunctions', 'Autopilot system issues', 'Paint and panel gaps', 'Charging system problems']
  },
  'toyota': {
    name: 'Toyota',
    description: 'Toyota vehicles may develop engine, transmission, electrical, or hybrid system problems covered by California lemon law protections.',
    introduction: 'Toyota Motor Corporation, founded in 1937, is known for reliability and quality with their "Toyota Way" philosophy. However, even Toyota vehicles can sometimes develop persistent defects that qualify under California lemon law, particularly in complex hybrid systems and newer technologies.',
    models: ['Toyota Camry', 'Toyota Corolla', 'Toyota Prius', 'Toyota RAV4', 'Toyota Highlander', 'Toyota 4Runner', 'Toyota Tacoma', 'Toyota Tundra', 'Toyota Sienna', 'Toyota Avalon'],
    commonIssues: ['Engine Defects', 'Transmission Problems', 'Electrical System Failures', 'Hybrid System Issues'],
    detailedIssues: [
      'Oil consumption problems in 2AZ-FE engines',
      'CVT transmission shuddering and failure',
      'Hybrid battery pack failures',
      'Prius headlight condensation issues',
      'RAV4 transmission vibration',
      'Entune infotainment system freezing',
      'Camry engine sludge buildup',
      'Tacoma transmission gear hunting'
    ]
  },
  'volkswagen': {
    name: 'Volkswagen',
    description: 'Volkswagen vehicles may experience engine, transmission, electrical, or emissions system defects that qualify under California lemon law.',
    introduction: 'Volkswagen, founded in 1937, is known for "Das Auto" engineering excellence. Despite German engineering reputation, some VW models may develop recurring defects qualifying for lemon law protection.',
    models: ['Volkswagen Jetta', 'Volkswagen Passat', 'Volkswagen Golf', 'Volkswagen Tiguan', 'Volkswagen Atlas', 'Volkswagen Beetle'],
    commonIssues: ['Engine Problems', 'Transmission Defects', 'Electrical Failures', 'Emissions System Issues'],
    detailedIssues: ['TSI engine carbon buildup', 'DSG transmission mechatronic failures', 'Infotainment system glitches', 'Diesel emission system problems', 'Water pump failures', 'Electrical component malfunctions']
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
                        Information
                      </h2>
                      
                      <p className="box-border break-words my-[19.8px] md:my-[30px]">
                        {data.introduction}
                      </p>

                      <h3 className="text-blue-900 text-[20px] font-bold mb-4 font-oswald">Your {manufacturerName} Lemon Law Rights</h3>
                      <p className="box-border break-words my-[19.8px] md:my-[30px]">
                        If your {manufacturerName} vehicle has recurring issues and has been taken to an authorized dealership for repairs, you might have a lemon law claim. Key points include:
                      </p>
                      <ul className="box-border list-disc break-words pl-5 mb-[19.8px]">
                        <li className="text-zinc-600 mb-2">Claims can be brought even if you're no longer under manufacturer's warranty</li>
                        <li className="text-zinc-600 mb-2">Manufacturer must have a reasonable opportunity to repair the vehicle</li>
                        <li className="text-zinc-600 mb-2">If repairs cannot be completed in a reasonable number of attempts, you may be entitled to relief</li>
                        <li className="text-zinc-600 mb-2">If successful, the manufacturer may pay reasonable attorneys' fees and costs</li>
                      </ul>

                      <h3 className="text-blue-900 text-[20px] font-bold mb-4 font-oswald">Is Your {manufacturerName} a Lemon?</h3>
                      <p className="box-border break-words my-[19.8px] md:my-[30px]">
                        Your {manufacturerName} may be covered under California state lemon law and federal lemon law. This applies to both new and used vehicles, whether purchased or leased.
                      </p>

                      <h4 className="text-blue-900 text-[18px] font-bold mb-3 font-oswald">Successful Claims Have Involved These {manufacturerName} Models:</h4>
                      <div className="grid grid-cols-2 md:grid-cols-3 gap-2 mb-[19.8px]">
                        {data.models?.map((model, index) => (
                          <span key={index} className="bg-gray-100 px-3 py-1 rounded text-sm text-blue-900 font-semibold">
                            {model}
                          </span>
                        ))}
                      </div>
                      <div className="items-center box-border gap-x-[9px] flex flex-wrap break-words gap-y-[9px] mt-[19.8px] md:mt-[30px]">
                        <div className="box-border break-words">
                          <a href="/contact/" className="relative text-neutral-900 text-[20.25px] font-bold content-center bg-yellow-400 bg-[linear-gradient(rgba(0,0,0,0)_calc(100%_-_2px),rgb(38,121,184)_1px)] bg-no-repeat bg-size-[0px] box-border inline-block h-full leading-[30.375px] break-words text-center uppercase w-full border-yellow-400 bg-right px-6 py-3 border-2 border-solid font-oswald">Free Case Evaluation</a>
                        </div>
                      </div>
                    </div>
                    <div className="box-border basis-full grow break-words md:basis-0">
                      <div className="box-border break-words mb-[19.8px] md:mb-[30px]">
                        <h3 className="text-blue-900 text-[20px] font-bold mb-4 font-oswald">Common {manufacturerName} Issues:</h3>
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

                      <div className="box-border break-words mb-[19.8px] md:mb-[30px]">
                        <h4 className="text-blue-900 text-[18px] font-bold mb-3 font-oswald">Specific {manufacturerName} Problems Include:</h4>
                        <ul className="box-border list-disc break-words pl-5">
                          {data.detailedIssues?.map((issue, index) => (
                            <li key={index} className="text-zinc-600 mb-2 text-[16px]">{issue}</li>
                          ))}
                        </ul>
                      </div>

                      <div className="bg-blue-50 p-4 rounded-lg mb-[19.8px] md:mb-[30px]">
                        <h4 className="text-blue-900 text-[18px] font-bold mb-3 font-oswald">Important:</h4>
                        <p className="text-zinc-600 text-[16px] mb-2">
                          If your {manufacturerName} has been in for repair multiple times for the same problem, or has been out of service for more than 30 days total, you may have a valid lemon law claim.
                        </p>
                        <p className="text-zinc-600 text-[16px]">
                          California's lemon law covers both new and used vehicles under manufacturer warranty.
                        </p>
                      </div>

                      <p className="box-border break-words mt-[19.8px] md:mt-[30px] text-[16px]">
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