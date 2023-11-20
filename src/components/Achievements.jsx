import React from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { certifications } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";

const CertificationCard = ({ index, image, name, source_link }) => {
  return (
    <Tilt className="sm:w-[340px] w-full">
      <motion.div
        variants={fadeIn("right", "spring", index * 0.5, 0.75)}
        className="w-full bg-tertiary p-[1px] rounded-[20px] shadow-card"
      >
        <div className="relative w-full h-full">
          <div
            onClick={() => window.open(source_link, "_blank")}
            className="cursor-pointer"
          >
            <img
              src={image}
              alt="project_image"
              className="xs:w-[230px] h-full object-cover rounded-2xl"
            />
          </div>
        </div>
        <div className='mt-5'>
          <h3 className='text-white font-bold text-[18px] p-3'>{name}</h3>
        </div>
      </motion.div>
    </Tilt>
  );
};

const Achievements = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} `}>My certifications</p>
        <h2 className={`${styles.sectionHeadText}`}>Personal Achievement.</h2>
      </motion.div>

      <div className="mt-20 flex flex-wrap gap-4">
        {certifications.map((certification, index) => (
          <CertificationCard
            key={`certifications-${index}`}
            index={index}
            name={certification.name}
            image={certification.image}
            source_link={certification.source_link}
          />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Achievements, "achievements");
