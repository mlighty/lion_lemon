import React from 'react';

interface SchemaMarkupProps {
  businessName?: string;
  description?: string;
  telephone?: string;
  url?: string;
  streetAddress?: string;
  addressLocality?: string;
  addressRegion?: string;
  postalCode?: string;
  latitude?: number;
  longitude?: number;
  priceRange?: string;
}

const SchemaMarkup: React.FC<SchemaMarkupProps> = ({
  businessName = "Lion Lemon Law",
  description = "California's premier lemon law attorneys with proven results. Free case evaluation for defective vehicles. No upfront costs.",
  telephone = "+1-877-891-1876",
  url = "https://lionlemonlaw.com",
  streetAddress = "800 Parkview Dr. N.",
  addressLocality = "El Segundo", 
  addressRegion = "CA",
  postalCode = "90245",
  latitude = 33.9181,
  longitude = -118.4067,
  priceRange = "Free Consultation"
}) => {
  const legalServiceSchema = {
    "@context": "https://schema.org",
    "@type": "LegalService",
    "name": businessName,
    "description": description,
    "image": `${url}/logo.png`,
    "@id": url,
    "url": url,
    "telephone": telephone,
    "priceRange": priceRange,
    "areaServed": {
      "@type": "State",
      "name": "California"
    },
    "serviceType": [
      "Lemon Law Attorney",
      "Automotive Law",
      "Consumer Protection",
      "Defective Vehicle Attorney"
    ],
    "address": {
      "@type": "PostalAddress",
      "streetAddress": streetAddress,
      "addressLocality": addressLocality,
      "addressRegion": addressRegion,
      "postalCode": postalCode,
      "addressCountry": "US"
    },
    "geo": {
      "@type": "GeoCoordinates", 
      "latitude": latitude,
      "longitude": longitude
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday", 
        "Wednesday",
        "Thursday",
        "Friday"
      ],
      "opens": "08:00",
      "closes": "19:00"
    },
    "sameAs": [
      "https://www.facebook.com/lionlemonlaw",
      "https://twitter.com/lionlemonlaw",
      "https://www.linkedin.com/company/lionlemonlaw/"
    ],
    "potentialAction": {
      "@type": "ContactAction",
      "target": {
        "@type": "EntryPoint",
        "urlTemplate": `${url}/contact`,
        "inLanguage": "en-US"
      }
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "287"
    }
  };

  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": businessName,
    "alternateName": "Lion Lemon",
    "url": url,
    "logo": `${url}/logo.png`,
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": telephone,
      "contactType": "customer service",
      "areaServed": "CA",
      "availableLanguage": ["English", "Spanish"]
    },
    "address": {
      "@type": "PostalAddress",
      "streetAddress": streetAddress,
      "addressLocality": addressLocality,
      "addressRegion": addressRegion,
      "postalCode": postalCode,
      "addressCountry": "US"
    }
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": businessName,
    "url": url,
    "potentialAction": {
      "@type": "SearchAction",
      "target": {
        "@type": "EntryPoint",
        "urlTemplate": `${url}/search?q={search_term_string}`
      },
      "query-input": "required name=search_term_string"
    }
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What is California's Lemon Law?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "California's Lemon Law protects consumers who purchase or lease defective vehicles. If your vehicle has a substantial defect that cannot be repaired after a reasonable number of attempts, you may be entitled to a replacement vehicle or full refund."
        }
      },
      {
        "@type": "Question", 
        "name": "How much does a lemon law attorney cost?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Under California's Lemon Law, the manufacturer must pay your attorney fees if you win your case. This means there are no upfront costs to you for legal representation."
        }
      },
      {
        "@type": "Question",
        "name": "How long does a lemon law case take?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Most lemon law cases are resolved within 30-90 days. The timeline depends on the manufacturer's willingness to cooperate and the complexity of your specific case."
        }
      }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(legalServiceSchema)
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(organizationSchema)
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(websiteSchema)
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqSchema)
        }}
      />
    </>
  );
};

export default SchemaMarkup;