import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { motion } from "framer-motion";
import "react-vertical-timeline-component/style.min.css";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { textVariant } from "../utils/motion";

// Обработка состояния загрузки и проверка данных
const ExperienceCard = ({ experience }) => {
  const { i18n } = useTranslation();
  const currentLang = i18n.language || 'en';

  return (
    <VerticalTimelineElement
      contentStyle={{
        background: "#1d1836",
        color: "#fff",
      }}
      contentArrowStyle={{ borderRight: "7px solid  #232631" }}
      date={experience.date?.[currentLang] || experience.date?.['en']}
      iconStyle={{ background: experience.iconBg }}
      icon={
        <div className='flex justify-center items-center w-full h-full'>
          <img
            src={experience.icon}
            alt={experience.company_name?.[currentLang] || experience.company_name?.['en']}
            className='w-[60%] h-[60%] object-contain'
          />
        </div>
      }
    >
      <div>
        <h3 className='text-white text-[24px] font-bold'>
          {experience.title?.[currentLang] || experience.title?.['en']}
        </h3>
        <p
          className='text-secondary text-[16px] font-semibold'
          style={{ margin: 0 }}
        >
          {experience.company_name?.[currentLang] || experience.company_name?.['en']}
        </p>
      </div>

      <ul className='mt-5 list-disc ml-5 space-y-2'>
        {experience.points?.[currentLang]?.map((point, index) => (
          <li
            key={`experience-point-${index}`}
            className='text-white-100 text-[14px] pl-1 tracking-wider'
          >
            {point}
          </li>
        )) || (
          <li className="text-white-100 text-[14px] pl-1 tracking-wider">
            No data available
          </li>
        )}
      </ul>
    </VerticalTimelineElement>
  );
};

const Experience = ({ experiences }) => {
  const { t } = useTranslation();
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState([]);

  useEffect(() => {
    // Предполагаем, что fetchExperiences — это функция для получения данных
    // Если данные берутся из другого места, адаптируйте этот блок
    const fetchExperiences = async () => {
      // Пример загрузки данных (замените на реальный API-запрос)
      const fetchedExperiences = experiences || []; 
      setData(fetchedExperiences);
      setIsLoading(false);
    };

    fetchExperiences();
  }, [experiences]);

  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} text-center`}>
          {t('what_done_so_far')}
        </p>
        <h2 className={`${styles.sectionHeadText} text-center`}>
          {t('work_experience')}
        </h2>
      </motion.div>

      <div className='mt-20 flex flex-col'>
        {isLoading ? (
          <p className="text-center text-white">Loading experiences...</p>
        ) : data && data.length > 0 ? (
          <VerticalTimeline>
            {data.map((experience, index) => (
              <ExperienceCard key={`experience-${index}`} experience={experience} />
            ))}
          </VerticalTimeline>
        ) : (
          <p className="text-center text-white">No experiences available.</p>
        )}
      </div>
    </>
  );
};

export default SectionWrapper(Experience, "work");
