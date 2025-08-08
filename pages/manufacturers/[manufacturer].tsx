import React, { useState } from 'react';
import Head from 'next/head';
import { GetStaticProps, GetStaticPaths } from 'next';
import Header from '../../src/components/layout/Header';
import Footer from '../../src/components/layout/Footer';
import ContactForm from '../../src/components/forms/ContactForm';
import AccessibilityWidget from '../../src/components/ui/AccessibilityWidget';
import CookieBanner from '../../src/components/ui/CookieBanner';
import CookieDialog from '../../src/components/ui/CookieDialog';
import ChatWidget from '../../src/components/ui/ChatWidget';
import CallTextBar from '../../src/components/ui/CallTextBar';
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
  const [isCookieDialogOpen, setIsCookieDialogOpen] = useState(false);
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
        <span role="alert" className="static box-content inline h-auto w-auto z-auto mt-0 left-auto top-auto md:absolute md:aspect-auto md:box-border md:block md:h-px md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:w-[200px] md:z-[-1] md:overflow-hidden md:[mask-position:0%] md:bg-left-top md:-mt-px md:scroll-m-0 md:scroll-p-[auto] md:left-0 md:top-0">
          Press Alt+1 for screen-reader mode, Alt+0 to cancel
        </span>
        
        <AccessibilityWidget />
        <Header />
        
        <div className="box-border pt-[152px] md:pt-[153px]">
          <main className="box-border">
            <article className="bg-white box-border">
              <div className="box-border before:accent-auto before:box-border before:text-zinc-600 before:table before:text-lg before:not-italic before:normal-nums before:font-normal before:tracking-[normal] before:leading-[27px] before:list-outside before:list-disc before:table-fixed before:text-start before:indent-[0px] before:normal-case before:visible before:border-separate before:font-source_sans_pro after:accent-auto after:box-border after:clear-both after:text-zinc-600 after:table after:text-lg after:not-italic after:normal-nums after:font-normal after:tracking-[normal] after:leading-[27px] after:list-outside after:list-disc after:table-fixed after:text-start after:indent-[0px] after:normal-case after:visible after:border-separate after:font-source_sans_pro">
                
                {/* Header Section with Breadcrumb and Title */}
                <header className="relative text-zinc-50 bg-sky-950 box-border clear-both max-w-full w-full mx-auto pt-10 md:w-auto after:md:accent-auto after:md:bg-white after:md:box-border after:md:text-zinc-50 after:md:block after:md:text-lg after:md:not-italic after:md:normal-nums after:md:font-normal after:md:h-[12%] after:md:tracking-[normal] after:md:leading-[27px] after:md:list-outside after:md:list-disc after:md:absolute after:md:text-start after:md:indent-[0px] after:md:normal-case after:md:visible after:md:w-full after:md:z-0 after:md:border-separate after:md:bottom-0 after:md:inset-x-0 after:md:font-source_sans_pro">
                  <div className="relative box-border max-w-none w-full mx-auto px-4 md:max-w-screen-xl">
                    <div className="[align-items:normal] box-border flex flex-wrap md:items-center">
                      <div className="box-border w-full pr-0 py-4 md:pr-4">
                        <p className="box-border break-words">
                          <span className="box-border break-words">
                            <span className="box-border break-words">
                              <a href="/" className="relative text-yellow-400 bg-[linear-gradient(rgba(0,0,0,0)_calc(100%_-_2px),rgb(38,121,184)_1px)] bg-no-repeat bg-size-[100%_100%] box-border break-words bg-right">Home</a>
                            </span>
                            » <span className="box-border break-words">{manufacturerName} Lemon Law Information</span>
                          </span>
                        </p>
                        <h1 className="text-[35px] box-border clear-both leading-[38.5px] uppercase pt-4 font-oswald md:text-[61px] md:leading-[67.1px]">{manufacturerName} Lemon Law Information</h1>
                        <p className="box-border break-words"></p>
                      </div>
                      <div className="box-border w-full z-10 mr-0 pl-0 py-4 md:w-6/12 md:mr-auto md:pl-10"></div>
                    </div>
                  </div>
                </header>
                
                {/* Introduction Section */}
                <div className="box-border clear-both gap-x-9 flex flex-wrap max-w-[345px] gap-y-9 mt-[19.98px] mb-[31.5px] mx-auto md:flex-nowrap md:max-w-[1080px] md:mt-[30px]">
                  <div className="box-border basis-full grow break-words mb-[19.8px] md:basis-0 md:mb-0">
                    <p className="box-border break-words mb-[19.8px] md:mb-[30px]">
                      {data.introduction}
                    </p>
                    <div className="items-center box-border gap-x-[9px] flex flex-wrap break-words gap-y-[9px] mt-[19.8px] md:mt-[30px]">
                      <div className="box-border break-words">
                        <a href="/contact/" className="relative text-neutral-900 text-[20.25px] font-bold content-center bg-yellow-400 bg-[linear-gradient(rgba(0,0,0,0)_calc(100%_-_2px),rgb(38,121,184)_1px)] bg-no-repeat bg-size-[0px] box-border inline-block h-full leading-[30.375px] break-words text-center uppercase w-full border-yellow-400 bg-right px-6 py-3 border-2 border-solid font-oswald">Contact us today</a>
                      </div>
                    </div>
                  </div>
                  
                  <div className="box-border basis-full grow break-words md:basis-0">
                    <div className="aspect-video bg-gray-200 rounded-lg flex items-center justify-center mb-4">
                      <span className="text-gray-500 text-lg">Video Player Placeholder</span>
                    </div>
                    <p className="box-border break-words mt-[19.8px] md:mt-[30px]"></p>
                  </div>
                </div>
                
                {/* Awards/Logos Section */}
                <div className="box-border clear-both max-w-full w-full mx-auto my-[19.98px] py-4 md:w-auto md:my-[30px]">
                  <div className="text-center py-8">
                    <p className="text-gray-500">Awards and Certifications Section</p>
                  </div>
                </div>
                
                {/* "Is Your [Brand] a Lemon?" Section */}
                <div className="box-border clear-both gap-x-9 flex flex-wrap max-w-full gap-y-9 w-full mt-[19.98px] mb-[31.5px] mx-auto md:flex-nowrap md:w-auto md:mt-[30px]">
                  <div className="box-border basis-full grow break-words md:grow-0">
                    <div className="relative bg-sky-950 box-border clear-both flow-root max-w-full break-words w-full mx-auto px-[19.98px] py-[37.5px] md:w-auto md:p-[60px]">
                      <div className="box-border clear-both flex flex-wrap max-w-[345px] break-words mb-[31.5px] mx-auto md:flex-nowrap md:max-w-[1080px]">
                        <div className="box-border basis-full grow max-w-none break-words md:basis-0 md:max-w-[50%]">
                          <h2 className="text-zinc-50 text-[35px] box-border clear-both leading-[38.5px] max-w-full break-words w-full mb-[19.8px] mx-auto px-5 font-oswald md:text-[55px] md:leading-[60.5px] md:w-auto md:mb-[30px]">Is Your {manufacturerName} a Lemon?</h2>
                          <p className="text-zinc-50 box-border break-words mt-[19.8px] px-5 md:mt-[30px]">
                            Not all {manufacturerName} vehicles are made the same. If you have purchased or leased any type of {manufacturerName} 
                            vehicle that has been repeatedly repaired during the manufacturer warranty period, your 
                            {manufacturerName} may be a lemon and you have rights. Approximately 1% of all vehicles purchased or 
                            leased in California are lemons. If your {manufacturerName} is a lemon, you should contact one of our 
                            Lion Lemon attorneys who will explain your consumer rights to you. You may be entitled to a 
                            refund, a replacement {manufacturerName}, or cash compensation plus the payment of your reasonable 
                            attorney fees and costs.<br className="box-border break-words" /><br className="box-border break-words" />
                            California {manufacturerName} Lemon Law Tips<br className="box-border break-words" /><br className="box-border break-words" />
                            If you suspect your {manufacturerName} is a lemon, do not delay in getting help from one of our Lion Lemon 
                            attorneys. Remember to take your {manufacturerName} to an authorized {manufacturerName} dealer and 
                            have them accurately report your complaints in your repair orders. Make sure to retain a 
                            copy of all your repair orders, purchase contract or lease agreement and your current 
                            registration. It is important to speak with one of our experienced staff members who can 
                            assist you through every step of the lemon law process. Our{' '}
                            <a href={`/manufacturers/${manufacturer}/`} className="relative text-slate-800 bg-[linear-gradient(rgba(0,0,0,0)_calc(100%_-_2px),rgb(38,121,184)_1px)] bg-no-repeat bg-size-[100%_100%] box-border break-words bg-right">{manufacturerName} lemon law attorneys</a> have 
                            helped thousands of California lemon law consumers obtain refunds, replacement vehicles 
                            and cash compensation. We are open 24/7 and our{' '}
                            <a href="/" className="relative text-slate-800 bg-[linear-gradient(rgba(0,0,0,0)_calc(100%_-_2px),rgb(38,121,184)_1px)] bg-no-repeat bg-size-[100%_100%] box-border break-words bg-right">lemon lawyers</a> are here to help 
                            you through every step of the way.
                          </p>
                        </div>
                      </div>
                      <img 
                        src="https://c.animaapp.com/me2c824qb08Vji/assets/39.png" 
                        alt={`Lemon ${manufacturerName} vehicle`} 
                        sizes="(max-width: 640px) 100vw, 640px" 
                        className="static aspect-[auto_800_/_272] box-border max-w-full break-words transform-none w-[800px] right-auto top-auto md:absolute md:right-[-20%] md:translate-y-[-50.0%] md:w-[63%] md:top-2/4" 
                      />
                    </div>
                  </div>
                </div>
                
                {/* Most Common Defects Section */}
                <h2 className="text-blue-900 text-[35px] box-border clear-both leading-[38.5px] max-w-full text-center w-full mx-auto my-[19.98px] font-oswald md:text-[55px] md:leading-[60.5px] md:w-auto md:my-[30px]">Most Common {manufacturerName} Defects</h2>
                <hr className="text-yellow-400 bg-yellow-400 border-b-slate-800 border-l-yellow-400 border-r-yellow-400 border-t-yellow-400 clear-both h-0 max-w-[345px] mx-auto my-[19.98px] border-x-0 md:max-w-[1080px] md:my-[30px]" />
                
                <div className="box-border clear-both gap-x-9 flex flex-wrap max-w-[345px] gap-y-9 mt-[19.98px] mb-[31.5px] mx-auto md:flex-nowrap md:max-w-[1080px] md:mt-[30px]">
                  <div className="box-border basis-full grow break-words mb-[19.8px] md:basis-0 md:mb-0">
                    <p className="box-border break-words mb-[19.8px] md:mb-[30px]">The {manufacturerName} line-up of vehicles consists of the following:</p>
                    <ul className="box-border list-none break-words my-[19.8px] pl-5 md:my-[30px]">
                      {data.models?.map((model, index) => (
                        <li key={index} className="box-border list-disc break-words text-left">{model}</li>
                      ))}
                    </ul>
                    
                    <p className="box-border break-words my-[19.8px] md:my-[30px]">
                      California {manufacturerName} consumers who own and lease all models of {manufacturerName} vehicles have reported the following 
                      problems with their vehicles:
                    </p>
                    <ul className="box-border list-none break-words my-[19.8px] pl-5 md:my-[30px]">
                      {data.detailedIssues?.map((defect, index) => (
                        <li key={index} className="box-border list-disc break-words text-left">{defect}</li>
                      ))}
                    </ul>
                    
                    <h2 className="text-blue-900 text-[35px] box-border clear-both leading-[38.5px] break-words my-[19.8px] font-oswald md:text-[55px] md:leading-[60.5px] md:my-[30px]">Success Stories</h2>
                    <p className="box-border break-words mt-[19.8px] md:mt-[30px]">
                      <a href="/case-results/" className="relative text-cyan-600 bg-[linear-gradient(rgba(0,0,0,0)_calc(100%_-_2px),rgb(38,121,184)_1px)] bg-no-repeat bg-size-[100%_100%] box-border break-words bg-right">
                        Lion Lemon Recovers $45,000 for Client with Defective {manufacturerName} Vehicle
                      </a>
                    </p>
                  </div>
                  
                  <div className="box-border basis-full grow break-words md:basis-0">
                    <h3 className="text-blue-900 text-[35px] box-border clear-both leading-[38.5px] break-words mb-[19.8px] font-oswald md:text-[44px] md:leading-[48.4px] md:mb-[30px]">Free Case Evaluation</h3>
                    <div className="box-border break-words my-[19.8px] md:my-[30px]">
                      <div className="box-border break-words"></div>
                      <div className="box-border break-words">
                        <p className="box-border break-words"></p>
                      </div>
                      <ContactForm />
                    </div>
                  </div>
                  
                  <div className="relative text-black items-center bg-neutral-900 box-border clear-both flex justify-center max-w-full min-h-[430px] w-full overflow-clip bg-center mx-auto p-[18px] md:w-auto">
                    <span className="absolute bg-sky-950 box-border block z-[1] inset-0"></span>
                    <div className="relative box-border w-full z-[1] my-[30px]">
                      <h2 className="text-zinc-50 text-lg box-border clear-both leading-[19.8px] text-center w-full mb-[19.98px] mx-auto font-oswald md:text-5xl md:leading-[52.8px] md:w-auto md:mb-[30px]">Lion Lemon Can Help With Your {manufacturerName}</h2>
                      <hr className="text-yellow-400 bg-yellow-400 border-b-slate-800 border-l-yellow-400 border-r-yellow-400 border-t-yellow-400 clear-both h-0 max-w-[345px] w-[345px] mx-auto my-[19.98px] border-x-0 md:max-w-[1080px] md:w-[1080px] md:my-[30px]" />
                      <div className="box-border clear-both flow-root max-w-full w-[345px] mx-auto my-[19.98px] md:w-[1080px] md:my-[30px]">
                        <div className="box-border mx-auto">
                          <div className="box-border clear-both gap-x-9 flex flex-wrap max-w-full gap-y-9 w-[345px] mx-auto md:flex-nowrap md:w-[1080px]">
                            <div className="box-border basis-full grow break-words md:basis-0">
                              <p className="text-zinc-50 box-border break-words text-center">
                                Almost every state has its own lemon laws. Luckily for California consumers, the 
                                California Lemon Law is among the strongest in our nation. The California lemon law 
                                applies to new, used, purchased and leased vehicles. If you find yourself taking your 
                                {manufacturerName} into an authorized {manufacturerName} dealer for repeated repairs during the 
                                warranty, chances are that your {manufacturerName} is a lemon. You have rights and the California 
                                lemon law can help! If {manufacturerName} is unable to repair your {manufacturerName} within a 
                                reasonable number of repair attempts, then it must either provide you with a refund or 
                                replacement {manufacturerName} plus pay for your reasonable attorneys fees and costs.
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="items-center box-border gap-x-[9px] flex flex-wrap justify-center max-w-[345px] gap-y-[9px] mt-[19.98px] mx-auto md:max-w-[610px] md:mt-[30px]">
                        <div className="box-border">
                          <a href="/contact/" className="relative text-neutral-900 text-[20.25px] font-bold content-center bg-yellow-400 bg-[linear-gradient(rgba(0,0,0,0)_calc(100%_-_2px),rgb(38,121,184)_1px)] bg-no-repeat bg-size-[0px] box-border inline-block h-full leading-[30.375px] text-center uppercase w-full border-yellow-400 bg-right px-6 py-3 border-2 border-solid font-oswald">CONTACT US TODAY</a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </article>
          </main>
        </div>
        
        <CookieBanner onSettingsClick={() => setIsCookieDialogOpen(true)} />
        <CookieDialog isOpen={isCookieDialogOpen} onClose={() => setIsCookieDialogOpen(false)} />
        <Footer />
        <CallTextBar />
        <ChatWidget />
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