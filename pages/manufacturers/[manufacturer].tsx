import React from 'react';
import Head from 'next/head';
import { GetStaticProps, GetStaticPaths } from 'next';
import Header from '../../src/components/layout/Header';
import Footer from '../../src/components/layout/Footer';
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
              
              {/* Hero Section */}
              <section className="bg-slate-900 text-white py-20 px-4">
                <div className="max-w-4xl mx-auto text-center">
                  <h1 className="text-4xl md:text-6xl font-bold mb-6 font-oswald">
                    {manufacturerName} Lemon Law Attorney
                  </h1>
                  <p className="text-xl md:text-2xl mb-8">
                    California's Premier {manufacturerName} Lemon Law Specialists
                  </p>
                  <p className="text-lg mb-8 max-w-3xl mx-auto">
                    {data.description}
                  </p>
                  <a 
                    href="/contact/" 
                    className="bg-yellow-400 text-black font-bold px-8 py-4 rounded-lg hover:bg-yellow-500 transition-colors duration-200 font-oswald uppercase"
                  >
                    Free Case Evaluation
                  </a>
                </div>
              </section>

              {/* Common Issues Section */}
              <section className="py-16 px-4 bg-gray-50">
                <div className="max-w-4xl mx-auto">
                  <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-blue-900 font-oswald">
                    Common {manufacturerName} Lemon Law Issues
                  </h2>
                  <div className="grid md:grid-cols-2 gap-8">
                    {data.commonIssues.map((issue, index) => (
                      <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                        <h3 className="text-xl font-bold mb-3 text-blue-900 font-oswald">
                          {issue}
                        </h3>
                        <p className="text-gray-700">
                          If your {manufacturerName} vehicle has experienced {issue.toLowerCase()}, you may be entitled to a full refund or replacement under California lemon law.
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </section>

              {/* Why Choose Lion Lemon Section */}
              <section className="py-16 px-4 bg-white">
                <div className="max-w-4xl mx-auto">
                  <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-blue-900 font-oswald">
                    Why Choose Lion Lemon for Your {manufacturerName} Case?
                  </h2>
                  <div className="grid md:grid-cols-3 gap-8">
                    <div className="text-center">
                      <div className="bg-yellow-400 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                        <span className="text-2xl font-bold text-black">1</span>
                      </div>
                      <h3 className="text-xl font-bold mb-3 font-oswald">No Upfront Costs</h3>
                      <p>We work on contingency - you don't pay unless we win your case.</p>
                    </div>
                    <div className="text-center">
                      <div className="bg-yellow-400 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                        <span className="text-2xl font-bold text-black">2</span>
                      </div>
                      <h3 className="text-xl font-bold mb-3 font-oswald">{manufacturerName} Expertise</h3>
                      <p>Specialized knowledge of {manufacturerName} defects and recall issues.</p>
                    </div>
                    <div className="text-center">
                      <div className="bg-yellow-400 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                        <span className="text-2xl font-bold text-black">3</span>
                      </div>
                      <h3 className="text-xl font-bold mb-3 font-oswald">Proven Results</h3>
                      <p>Millions recovered for {manufacturerName} lemon law clients in California.</p>
                    </div>
                  </div>
                </div>
              </section>

              {/* Call to Action */}
              <section className="py-16 px-4 bg-blue-900 text-white text-center">
                <div className="max-w-4xl mx-auto">
                  <h2 className="text-3xl md:text-4xl font-bold mb-6 font-oswald">
                    Is Your {manufacturerName} a Lemon?
                  </h2>
                  <p className="text-xl mb-8">
                    Get a free case evaluation from California's leading {manufacturerName} lemon law attorneys.
                  </p>
                  <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
                    <a 
                      href="tel:877-891-1876" 
                      className="bg-yellow-400 text-black font-bold px-8 py-4 rounded-lg hover:bg-yellow-500 transition-colors duration-200 font-oswald"
                    >
                      Call (877) 891-1876
                    </a>
                    <a 
                      href="/contact/" 
                      className="border-2 border-yellow-400 text-yellow-400 font-bold px-8 py-4 rounded-lg hover:bg-yellow-400 hover:text-black transition-colors duration-200 font-oswald"
                    >
                      Free Online Consultation
                    </a>
                  </div>
                </div>
              </section>

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