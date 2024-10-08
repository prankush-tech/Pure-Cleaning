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
    return (
      <Fragment>
        <section id="residential-cleaning">
          <h2>خدمات التنظيف السكني</h2>
          <ul>
            <li>
              <strong>تنظيف الانتقال للداخل والخارج:</strong> خدمة تنظيف شاملة
              لضمان أن يكون منزلك الجديد أو القديم نظيفًا تمامًا.
            </li>
            <li>
              <strong>تنظيف لمرة واحدة:</strong> احجز خدمة تنظيف لمرة واحدة
              لمنزلك، مصممة خصيصًا لاحتياجاتك.
            </li>
            <li>
              <strong>تنظيف عميق للفيلات:</strong> تنظيف عميق متخصص للفيلات،
              لضمان تغطية كل ركن.
            </li>
            <li>
              <strong>تنظيف منزلي عام:</strong> خدمات تنظيف منتظمة للحفاظ على
              نظافة منزلك.
            </li>
            <li>
              <strong>خدمات التعقيم:</strong> تعقيم وتطهير لبيئة معيشية أكثر
              أمانًا وصحة.
            </li>
            <li>
              <strong>خدمات النقل والتغليف:</strong> حلول نقل وتغليف خالية من
              الإجهاد لتسهيل عملية الانتقال.
            </li>
          </ul>
        </section>

        <section id="commercial-cleaning">
          <h2>خدمات التنظيف التجاري</h2>
          <ul>
            <li>
              <strong>تنظيف المباني:</strong> تنظيف احترافي للمباني التجارية
              والسكنية.
            </li>
            <li>
              <strong>تنظيف الفنادق والشقق:</strong> تنظيف شامل للفنادق والشقق
              المفروشة.
            </li>
            <li>
              <strong>تنظيف المدارس والمكاتب:</strong> حافظ على نظافة وتعقيم
              المؤسسات التعليمية والمكاتب.
            </li>
            <li>
              <strong>خدمات الصيانة العامة:</strong> نقدم خدمات صيانة وتنظيف
              تجارية لمختلف العقارات.
            </li>
            <li>
              <strong>توفير العمالة للفعاليات:</strong> نوفر عمالة ماهرة لإعداد
              الفعاليات وتنظيف ما بعد الفعاليات.
            </li>
          </ul>
        </section>

        <section id="outdoor-cleaning">
          <h2>خدمات التنظيف الخارجي</h2>
          <ul>
            <li>
              <strong>تنظيف حمامات السباحة:</strong> حافظ على نظافة حمام السباحة
              الخاص بك بفضل خدمات التنظيف الخبيرة لدينا.
            </li>
          </ul>
        </section>

        <section id="furniture-cleaning">
          <h2>خدمات تنظيف الأثاث</h2>
          <ul>
            <li>
              <strong>تنظيف السجاد:</strong> تنظيف عميق للسجاد لإزالة الأوساخ
              والبقع والمواد المسببة للحساسية.
            </li>
            <li>
              <strong>تنظيف رطب وجاف للأسرة والأرائك:</strong> نقدم خيارات تنظيف
              رطب وجاف لأثاثك.
            </li>
            <li>
              <strong>تنظيف الأرائك:</strong> تنظيف احترافي للأرائك لإزالة البقع
              وإنعاش الأقمشة.
            </li>
          </ul>
        </section>

        <section id="vehicle-cleaning">
          <h2>خدمات تنظيف المركبات</h2>
          <ul>
            <li>
              <strong>خدمات غسيل السيارات:</strong> خدمات غسيل سيارات مريحة
              للحفاظ على نظافة ولمعان مركبتك.
            </li>
          </ul>
        </section>

      </Fragment>
    );
  }

  return (
    <Fragment>
      {t.t && ( // Ensure t.t is defined before using it
        <nav className="navbar">
          <h1 className="purelyClean">
            <img src="/logo.jpg" className="max-w-52 p-2" />
          </h1>
          <div className="munuBarContainer">
            <LanguageChanger />
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
                <LanguageChanger />
              </div>
            </div>
          </div>
        </nav>
      )}
    </Fragment>
  );
};

export default Navbar;
