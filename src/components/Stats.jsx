import { stats } from "../constants";
import styles from "../style";

const Stats = () => {
  return (
    <section
      className={`${styles.flexCenter} flex flex-row flex-wrap sm:mb-20 mb-6`}>
      {stats.map((stats) => (
        <div
          key={stats.id}
          className="flex-1 flex justify-start items-center flex-row m-3">
          <h4 className="font-poppins font-semibold xs:text-[40px] text-white text-[30px] xs:leading-[53px] leading-[43px]">
            {stats.value}
          </h4>
          <p className="font-poppins font-normal xs:text-[20px] text-[15px] xs:leading-[26px] text-gradient leading-[21px] ml-3">
            {stats.title}
          </p>
        </div>
      ))}
    </section>
  );
};

export default Stats;
