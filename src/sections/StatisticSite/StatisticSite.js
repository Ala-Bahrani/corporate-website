import { useEffect, useRef, useState } from "react";
import Circle from "../../components/Circle/Circle";
import Container from "../../components/Container/Container";
import { PureIncrement } from 'pure_counter';
import styles from './StatisticSite.module.css';

const StatisticSite = () => {
  const sectionRef = useRef(null); // ایجاد مرجع به بخش آمار
  const [startCounting, setStartCounting] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setStartCounting(true); // وقتی به این بخش رسید، شمارشگرها شروع کنند
            observer.disconnect(); // توقف مشاهده پس از فعال شدن شمارش
          }
        });
      },
      { threshold: 0.1 } // وقتی ۱۰ درصد از بخش قابل مشاهده باشد، شمارش شروع می‌شود
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current); // مشاهده بخش آمار
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current); // توقف مشاهده در هنگام خروج از صفحه
      }
    };
  }, []);

  return (
    <section ref={sectionRef} className={styles.section}>
      <Container className={styles.containerStyle}>
        <div className={styles.statisticSiteContainer}>
          <div className={styles.statisticSiteItem}>
            <Circle>
              {startCounting && (
                <PureIncrement start={0} end={180} duration={2} className="purecounter" />
              )}
            </Circle>
            <p>ساعت های پشتیبانی</p>
          </div>
          <div className={styles.statisticSiteItem}>
            <Circle>
              {startCounting && (
                <PureIncrement start={0} end={250} duration={2} className="purecounter" />
              )}
            </Circle>
            <p>کاربران راضی</p>
          </div>
          <div className={styles.statisticSiteItem}>
            <Circle>
              {startCounting && (
                <PureIncrement start={0} end={80} duration={2} className="purecounter" />
              )}
            </Circle>
            <p>پروژه های انجام شده</p>
          </div>
          <div className={styles.statisticSiteItem}>
            <Circle>
              {startCounting && (
                <PureIncrement start={0} end={25} duration={2} className="purecounter" />
              )}
            </Circle>
            <p>تجربه کارشناسان</p>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default StatisticSite;
