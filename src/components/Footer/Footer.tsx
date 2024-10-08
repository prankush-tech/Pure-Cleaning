"use client";
import initTranslations from "@/app/i18n";
import { useParams } from "next/navigation";
import { Fragment, useEffect, useState } from "react";

interface Translations {
  t: (key: string) => string; // Adjust this as needed based on your translation structure
}

const Footer = () => {
  const [direction, setDirection] = useState<string>("text-left");
  const [t, setTranslations] = useState<Translations | null>(null);
  const locale = useParams<{ locale: string }>();
  useEffect(() => {
    const fetchTranslations = async () => {
      try {
        const translations = await initTranslations(locale.locale, ["Footer"]);
        setTranslations(translations);

        if (locale.locale === "en") {
          setDirection("text-left");
        } else if (locale.locale == "ar-AE") {
          setDirection("text-right");
        }
      } catch (error) {
        console.error("Failed to load translations:", error);
      }
    };

    if (locale) {
      fetchTranslations();
    }
  }, [locale]);

  if (!t) {
    return (
      <div>
        <section id="residential-cleaning">
          <h2>Residential Cleaning Services</h2>
          <ul>
            <li>
              <strong>Move In & Move Out Cleaning:</strong> A thorough cleaning
              service to ensure your new or old home is spotless.
            </li>
            <li>
              <strong>One Off Cleaning:</strong> Book a one-time cleaning
              service for your home, tailored to your needs.
            </li>
            <li>
              <strong>Villa Deep Cleaning:</strong> Specialized deep cleaning
              for villas, ensuring every corner is covered.
            </li>
            <li>
              <strong>General Domestic Cleaning:</strong> Regular cleaning
              services to maintain the cleanliness of your home.
            </li>
            <li>
              <strong>Sterilization Services:</strong> Disinfection and
              sterilization for a safer, healthier living environment.
            </li>
            <li>
              <strong>Moving and Packing Services:</strong> Stress-free moving
              and packing solutions to make your move easier.
            </li>
          </ul>
        </section>

        <section id="commercial-cleaning">
          <h2>Commercial Cleaning Services</h2>
          <ul>
            <li>
              <strong>Building Cleaning:</strong> Professional cleaning for
              commercial and residential buildings.
            </li>
            <li>
              <strong>Hotel and Apartment Cleaning:</strong> Comprehensive
              cleaning for hotels and serviced apartments.
            </li>
            <li>
              <strong>School and Office Cleaning:</strong> Keep your educational
              institutions and offices clean and sanitized.
            </li>
            <li>
              <strong>General Maintenance Services:</strong> We offer commercial
              maintenance and cleaning services for various properties.
            </li>
            <li>
              <strong>Event Manpower Supply:</strong> We provide skilled
              manpower for event setups and post-event cleanups.
            </li>
          </ul>
        </section>

        <section id="outdoor-cleaning">
          <h2>Outdoor Cleaning Services</h2>
          <ul>
            <li>
              <strong>Swimming Pool Cleaning:</strong> Keep your pool in
              pristine condition with our expert cleaning services.
            </li>
          </ul>
        </section>

        <section id="furniture-cleaning">
          <h2>Furniture Cleaning Services</h2>
          <ul>
            <li>
              <strong>Carpet Cleaning:</strong> Deep cleaning for carpets to
              remove dirt, stains, and allergens.
            </li>
            <li>
              <strong>Wet and Dry Cleaning of Beds and Sofas:</strong> We offer
              both wet and dry cleaning options for your furniture.
            </li>
            <li>
              <strong>Sofa Cleaning:</strong> Professional sofa cleaning to
              remove stains and refresh your upholstery.
            </li>
          </ul>
        </section>

        <section id="vehicle-cleaning">
          <h2>Vehicle Cleaning Services</h2>
          <ul>
            <li>
              <strong>Car Wash Services:</strong> Convenient car wash services
              to keep your vehicle clean and shiny.
            </li>
          </ul>
        </section>
      </div>
    );
  }

  return (
    <Fragment>
      {t.t && (
        <div className="px-4 pt-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
          <div className="grid gap-10 row-gap-6 mb-8 sm:grid-cols-2 lg:grid-cols-4">
            <div className="sm:col-span-2">
              <a
                href="/"
                aria-label="Go home"
                title="Company"
                className="inline-flex items-center"
              >
                <img src="/logo.jpg" className="max-w-28" />
                <span className="ml-2 text-xl font-bold tracking-wide text-gray-800 uppercase">
                  Purely Services
                </span>
              </a>
              <div className="mt-6 lg:max-w-sm">
                <p className={`text-sm ${direction} text-gray-800`}>
                  {t.t("header1")}
                </p>
                <p className={`mt-4 text-sm ${direction} text-gray-800`}>
                  {t.t("header2")}
                </p>
              </div>
            </div>
            <div className="space-y-2 text-sm">
              <p className="text-base font-bold tracking-wide text-gray-900">
                Contacts
              </p>
              <div className="flex">
                <p className="mr-1 text-gray-800">Phone:</p>
                <a
                  href="tel:+971 50 504 0045"
                  aria-label="Our phone"
                  title="Our phone"
                  className="text-blue-700 transition-colors duration-300 text-deep-purple-accent-400 hover:text-deep-purple-800"
                >
                  +971 50 504 0045
                </a>
              </div>
              <div className="flex">
                <p className="mr-1 text-gray-800">Email:</p>
                <a
                  href="mailto:purelyservices01@gmail.com"
                  aria-label="Our email"
                  title="Our email"
                  className=" text-blue-700 transition-colors duration-300 text-deep-purple-accent-400 hover:text-deep-purple-800"
                >
                  purelyservices01@gmail.com
                </a>
              </div>
              <div className="flex">
                <p className="mr-1 text-gray-800">Address:</p>
                <a
                  href="https://www.google.com/maps"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Our address"
                  title="Our address"
                  className="transition-colors duration-300 text-deep-purple-accent-400 hover:text-deep-purple-800"
                >
                  Al Muroor, Abu Dhabi UAE
                </a>
              </div>
            </div>
            <div>
              <span className="text-base font-bold tracking-wide text-gray-900">
                Socials:
              </span>
              <div className="flex items-center mt-1 space-x-3">
                <a
                  href="https://www.instagram.com/purely.services/"
                  target="_blank"
                  className="text-gray-500 transition-colors duration-300 hover:text-deep-purple-accent-400"
                >
                  <svg viewBox="0 0 30 30" fill="currentColor" className="h-6">
                    <circle cx="15" cy="15" r="4" />
                    <path d="M19.999,3h-10C6.14,3,3,6.141,3,10.001v10C3,23.86,6.141,27,10.001,27h10C23.86,27,27,23.859,27,19.999v-10   C27,6.14,23.859,3,19.999,3z M15,21c-3.309,0-6-2.691-6-6s2.691-6,6-6s6,2.691,6,6S18.309,21,15,21z M22,9c-0.552,0-1-0.448-1-1   c0-0.552,0.448-1,1-1s1,0.448,1,1C23,8.552,22.552,9,22,9z" />
                  </svg>
                </a>
              </div>
              <p className={`mt-4 text-sm ${direction} text-gray-500`}>
                {t.t("Socials")}
              </p>
            </div>
          </div>
          <div className="flex flex-col-reverse justify-between pt-5 pb-10 border-t lg:flex-row">
            <p className="text-sm text-gray-600">{t.t("copyright")}</p>
            <ul className="flex flex-col mb-3 space-y-2 lg:mb-0 sm:space-y-0 sm:space-x-5 sm:flex-row">
              <li>
                <a
                  href="#"
                  className="text-sm text-gray-600 transition-colors duration-300 hover:text-deep-purple-accent-400"
                >
                  F.A.Q
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-sm text-gray-600 transition-colors duration-300 hover:text-deep-purple-accent-400"
                >
                  Privacy Policy
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-sm text-gray-600 transition-colors duration-300 hover:text-deep-purple-accent-400"
                >
                  Terms &amp; Conditions
                </a>
              </li>
            </ul>
          </div>
        </div>
      )}
    </Fragment>
  );
};

export default Footer;
