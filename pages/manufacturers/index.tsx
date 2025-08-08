import React from 'react';
import Head from 'next/head';
import Header from '../../src/components/layout/Header';
import Footer from '../../src/components/layout/Footer';
import SchemaMarkup from '../../src/components/seo/SchemaMarkup';

const manufacturers = [
  { id: 'acura', name: 'Acura', href: '/manufacturers/acura/' },
  { id: 'audi', name: 'Audi', href: '/manufacturers/audi/' },
  { id: 'bmw', name: 'BMW', href: '/manufacturers/bmw/' },
  { id: 'chevrolet', name: 'Chevrolet', href: '/manufacturers/chevrolet/' },
  { id: 'chrysler', name: 'Chrysler', href: '/manufacturers/chrysler/' },
  { id: 'dodge', name: 'Dodge', href: '/manufacturers/dodge/' },
  { id: 'ford', name: 'Ford', href: '/manufacturers/ford/' },
  { id: 'gmc', name: 'GMC', href: '/manufacturers/gmc/' },
  { id: 'honda', name: 'Honda', href: '/manufacturers/honda/' },
  { id: 'hyundai', name: 'Hyundai', href: '/manufacturers/hyundai/' },
  { id: 'jeep', name: 'Jeep', href: '/manufacturers/jeep/' },
  { id: 'kia', name: 'Kia', href: '/manufacturers/kia/' },
  { id: 'lexus', name: 'Lexus', href: '/manufacturers/lexus/' },
  { id: 'mercedes', name: 'Mercedes-Benz', href: '/manufacturers/mercedes-benz/' },
  { id: 'nissan', name: 'Nissan', href: '/manufacturers/nissan/' },
  { id: 'subaru', name: 'Subaru', href: '/manufacturers/subaru/' },
  { id: 'tesla', name: 'Tesla', href: '/manufacturers/tesla/' },
  { id: 'toyota', name: 'Toyota', href: '/manufacturers/toyota/' },
  { id: 'volkswagen', name: 'Volkswagen', href: '/manufacturers/volkswagen/' }
];

export default function ManufacturersIndex() {
  return (
    <>
      <Head>
        <title>All Auto Manufacturers - Lemon Law Attorney California | Lion Lemon Law</title>
        <meta 
          name="description" 
          content="California lemon law attorneys for all major auto manufacturers including Toyota, Honda, Ford, Chevrolet, BMW, Mercedes, Tesla and more. Free consultation for defective vehicles."
        />
        <meta 
          name="keywords" 
          content="lemon law attorney california, auto manufacturers, defective car attorney, california lemon lawyer, automotive attorney california"
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
                <div className="max-w-6xl mx-auto text-center">
                  <h1 className="text-4xl md:text-6xl font-bold mb-6 font-oswald">
                    All Auto Manufacturers
                  </h1>
                  <p className="text-xl md:text-2xl mb-8">
                    California Lemon Law Protection for Every Major Brand
                  </p>
                  <p className="text-lg mb-8 max-w-4xl mx-auto">
                    Lion Lemon represents clients with defective vehicles from all major manufacturers. 
                    We have extensive experience handling lemon law cases for every brand of car, truck, 
                    SUV, and motorcycle sold in California.
                  </p>
                  <a 
                    href="/contact/" 
                    className="bg-yellow-400 text-black font-bold px-8 py-4 rounded-lg hover:bg-yellow-500 transition-colors duration-200 font-oswald uppercase"
                  >
                    Free Case Evaluation
                  </a>
                </div>
              </section>

              {/* Manufacturers Grid */}
              <section className="py-16 px-4 bg-gray-50">
                <div className="max-w-6xl mx-auto">
                  <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-blue-900 font-oswald">
                    Choose Your Vehicle Manufacturer
                  </h2>
                  <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {manufacturers.map((manufacturer) => (
                      <a
                        key={manufacturer.id}
                        href={manufacturer.href}
                        className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200 text-center group"
                      >
                        <h3 className="text-lg font-bold text-blue-900 group-hover:text-yellow-600 transition-colors duration-200 font-oswald">
                          {manufacturer.name}
                        </h3>
                        <p className="text-sm text-gray-600 mt-2">
                          Lemon Law Help
                        </p>
                      </a>
                    ))}
                  </div>
                </div>
              </section>

              {/* Information Section */}
              <section className="py-16 px-4 bg-white">
                <div className="max-w-4xl mx-auto">
                  <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-blue-900 font-oswald">
                    We Handle All Manufacturer Defects
                  </h2>
                  <div className="grid md:grid-cols-2 gap-8">
                    <div className="bg-gray-50 p-6 rounded-lg">
                      <h3 className="text-xl font-bold mb-4 text-blue-900 font-oswald">
                        Common Vehicle Defects
                      </h3>
                      <ul className="space-y-2 text-gray-700">
                        <li>• Engine and transmission problems</li>
                        <li>• Electrical system failures</li>
                        <li>• Brake and safety system defects</li>
                        <li>• Air conditioning and heating issues</li>
                        <li>• Suspension and steering problems</li>
                        <li>• Paint and body defects</li>
                      </ul>
                    </div>
                    <div className="bg-gray-50 p-6 rounded-lg">
                      <h3 className="text-xl font-bold mb-4 text-blue-900 font-oswald">
                        What We Do For You
                      </h3>
                      <ul className="space-y-2 text-gray-700">
                        <li>• Free case evaluation and consultation</li>
                        <li>• Handle all paperwork and documentation</li>
                        <li>• Negotiate with manufacturers</li>
                        <li>• Pursue maximum compensation</li>
                        <li>• No upfront costs or fees</li>
                        <li>• Fast resolution of your case</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </section>

              {/* Call to Action */}
              <section className="py-16 px-4 bg-blue-900 text-white text-center">
                <div className="max-w-4xl mx-auto">
                  <h2 className="text-3xl md:text-4xl font-bold mb-6 font-oswald">
                    Is Your Vehicle a Lemon?
                  </h2>
                  <p className="text-xl mb-8">
                    Regardless of the manufacturer, you have rights under California lemon law. 
                    Get expert legal help today.
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