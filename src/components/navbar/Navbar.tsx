"use client";
import { Fragment, useEffect, useState } from "react";
import "./navbar.css";
import { Squeeze as Hamburger } from "hamburger-react";
import Link from "next/link";
import initTranslations from "@/app/i18n";
import { useParams } from "next/navigation";
import LanguageChanger from "../Language/LanguageChanger";

// Define a type for your translations
interface Translations {
  t: (key: string) => string; // Adjust this as needed based on your translation structure
}

const Navbar = () => {
  const [isOpen, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(!isOpen);
  };



  const [t, setTranslations] = useState<Translations | null>(null); 
  const locale = useParams<{ locale: string }>();
  useEffect(() => {
    const fetchTranslations = async () => {
      try {
        const translations = await initTranslations(locale.locale, ["Navbar"]);
        setTranslations(translations);
      } catch (error) {
        console.error("Failed to load translations:", error);
      }
    };

    if (locale) {
      fetchTranslations();
    }
  }, [locale]);

  if (!t) {
    return <div>Loading...</div>;
  }




  return (
    <Fragment>
      {t.t && ( // Ensure t.t is defined before using it
        <nav className="navbar">
          <h1 className="purelyClean">
            <img src="/logo.jpg" className="max-w-64 p-2" />
          </h1>
          <div className="munuBarContainer">
            <LanguageChanger/>
            <Hamburger toggled={isOpen} toggle={setOpen} size={25} />
          </div>
          <div className={`navlinkContainer ${isOpen ? "" : "moveNavbar"}`}>
            <div className="navLinks">
              <Link className="linkText" href="/" onClick={handleOpen}>
                {t.t("Home")}
              </Link>
              <Link className="linkText" href="/about" onClick={handleOpen}>
                {t.t("About")}
              </Link>
              <Link className="linkText" href="/service" onClick={handleOpen}>
                {t.t("Services")}
              </Link>
              <Link className="linkText" href="/contact" onClick={handleOpen}>
                {t.t("Contact")}
              </Link>
              <div className="-mt-2 hidden lg:block">
              <LanguageChanger/>
              </div>
            </div>
          </div>
        </nav>
      )}
    </Fragment>
  );
};

export default Navbar;
