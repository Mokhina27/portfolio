import { useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import { styles } from "../styles";
import { navLinks } from "../constants";
import { menu, close } from '../assets';
import { useTranslation } from 'react-i18next';
import { FaGlobe } from 'react-icons/fa';

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const { i18n, t } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setScrolled(scrollTop > 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`${styles.paddingX} w-full flex items-center py-5 fixed top-0 z-20 ${scrolled ? "bg-primary" : "bg-transparent"}`}>
      <div className="w-full flex items-center justify-between max-w-7xl mx-auto">
        <Link
          to="/"
          className="flex items-center gap-2"
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        >
          <p className="text-white text-[18px] font-bold cursor-pointer flex">
            Mokhina&nbsp;
            <span className="sm:block hidden">| JavaScript | Python</span>
          </p>
        </Link>

        {/* Desktop menu */}
        <ul className="list-none hidden lg:flex flex-row gap-10">
          {navLinks.map((nav) => (
            <li
              key={nav.id}
              className={`${active === nav.title ? "text-white" : "text-secondary"} hover:text-white text-[18px] font-medium cursor-pointer`}
              onClick={() => setActive(nav.title)}
            >
              <a href={`#${nav.id}`}>{t(`navbar.${nav.title.toLowerCase()}`)}</a>
            </li>
          ))}
        </ul>

        {/* Language switcher */}
        <div className="hidden lg:flex items-center gap-4">
          <FaGlobe className="text-white" />
          <button
            onClick={() => changeLanguage('en')}
            className={`text-white w-10 h-10 rounded-full flex items-center justify-center ${i18n.language === 'en' ? 'bg-[#915EFF]' : 'bg-transparent'}`}
          >
            EN
          </button>
          <button
            onClick={() => changeLanguage('ru')}
            className={`text-white w-10 h-10 rounded-full flex items-center justify-center ${i18n.language === 'ru' ? 'bg-[#915EFF]' : 'bg-transparent'}`}
          >
            RU
          </button>
        </div>

        {/* Mobile menu icon and language switcher */}
        <div className="lg:hidden flex items-center gap-4">
          <FaGlobe className="text-white" />
          <button
            onClick={() => changeLanguage('en')}
            className={`text-white w-10 h-10 rounded-full flex items-center justify-center ${i18n.language === 'en' ? 'bg-[#915EFF]' : 'bg-transparent'}`}
          >
            EN
          </button>
          <button
            onClick={() => changeLanguage('ru')}
            className={`text-white w-10 h-10 rounded-full flex items-center justify-center ${i18n.language === 'ru' ? 'bg-[#915EFF]' : 'bg-transparent'}`}
          >
            RU
          </button>
          <img
            src={toggle ? close : menu}
            alt="menu"
            className="w-[28px] h-[28px] object-contain"
            onClick={() => setToggle(!toggle)}
          />
        </div>

        <div className={`${!toggle ? "hidden" : "flex"} p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}>
          <ul className="list-none flex justify-end items-start flex-1 flex-col gap-4">
            {navLinks.map((nav) => (
              <li
                key={nav.id}
                className={`font-poppins font-medium cursor-pointer text-[16px] ${active === nav.title ? "text-white" : "text-secondary"}`}
                onClick={() => {
                  setToggle(!toggle);
                  setActive(nav.title);
                }}
              >
                <a href={`#${nav.id}`}>{nav.title}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;












