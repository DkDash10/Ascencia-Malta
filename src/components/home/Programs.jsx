import { useRef, useState, useEffect, useCallback } from "react";
import Card from "../common/Card";
import Section from "../common/Section";
import styles from "./Programs.module.css";
import { FaComputer } from "react-icons/fa6";
import { VscGraph } from "react-icons/vsc";
import { FaGoogleScholar } from "react-icons/fa6";
import { FaGlobeAmericas } from "react-icons/fa";
import { SiSagemath } from "react-icons/si";
import { CgNotes } from "react-icons/cg";
import { FaTrophy } from "react-icons/fa6";
import { FaPersonChalkboard } from "react-icons/fa6";
import { MdEngineering } from "react-icons/md";
import { LiaSchoolSolid } from "react-icons/lia";
import { GiDiploma } from "react-icons/gi";
import { FaPython } from "react-icons/fa6";

const PROGRAMMES = [
  {
    icon: <FaGoogleScholar />,
    level: "Courses",
    name: "Masters Degrees",
  },
  {
    icon: <VscGraph />,
    level: "Courses",
    name: "MBA Degrees",
  },
  {
    icon: <FaComputer />,
    level: "Courses",
    name: "DBA Degrees",
  },
  {
    icon: <SiSagemath />,
    level: "Courses",
    name: "MSc Business Economics",
  },
  {
    icon: <FaGlobeAmericas />,
    level: "Courses",
    name: "MA International Management",
  },
  {
    icon: <FaPersonChalkboard />,
    level: "Courses",
    name: "MA Human Resource Management",
  },
  {
    icon: <MdEngineering />,
    level: "Courses",
    name: "Bachelors Degrees",
  },
  {
    icon: <FaPython />,
    level: "Courses",
    name: "BSc Computer Science",
  },
  {
    icon: <CgNotes />,
    level: "Courses",
    name: "Postgraduate Programmes",
  },
  {
    icon: <GiDiploma />,
    level: "Courses",
    name: "Diploma Degrees",
  },
  {
    icon: <FaTrophy />,
    level: "Courses",
    name: "Award Certificates",
  },
  {
    icon: <LiaSchoolSolid />,
    level: "Courses",
    name: "English Language School",
  },
];

function getVisibleCount() {
  const w = window.innerWidth;
  if (w < 640) return 1;
  if (w < 1024) return 2;
  return 3;
}

export default function Programs() {
  const trackRef = useRef(null);
  const [current, setCurrent] = useState(0);
  const [visible, setVisible] = useState(getVisibleCount);
  const [dragging, setDragging] = useState(false);
  const dragStart = useRef(0);
  const dragDelta = useRef(0);

  const total = PROGRAMMES.length;
  const maxIdx = total - visible; 

  useEffect(() => {
    const onResize = () => {
      const v = getVisibleCount();
      setVisible(v);
      setCurrent((prev) => Math.min(prev, PROGRAMMES.length - v));
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  const scrollToIndex = useCallback((idx) => {
    const track = trackRef.current;
    if (!track) return;
    const card = track.children[idx];
    if (!card) return;
    track.scrollTo({ left: card.offsetLeft, behavior: "smooth" });
  }, []);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    const onScroll = () => {
      const card = track.children[0];
      if (!card) return;
      const cardW =
        card.offsetWidth + parseInt(getComputedStyle(track).gap || 0, 10);
      const newIdx = Math.round(track.scrollLeft / cardW);
      setCurrent(Math.min(newIdx, maxIdx));
    };
    track.addEventListener("scroll", onScroll, { passive: true });
    return () => track.removeEventListener("scroll", onScroll);
  }, [maxIdx]);

  const goTo = useCallback(
    (idx) => {
      const clamped = Math.max(0, Math.min(idx, maxIdx));
      setCurrent(clamped);
      scrollToIndex(clamped);
    },
    [maxIdx, scrollToIndex],
  );

  const prev = () => goTo(current - 1);
  const next = () => goTo(current + 1);

  const onMouseDown = (e) => {
    dragStart.current = e.clientX;
    dragDelta.current = 0;
    setDragging(true);
  };
  const onMouseMove = (e) => {
    if (!dragging) return;
    dragDelta.current = e.clientX - dragStart.current;
  };
  const onMouseUp = () => {
    if (!dragging) return;
    setDragging(false);
    if (dragDelta.current < -60) next();
    else if (dragDelta.current > 60) prev();
    dragDelta.current = 0;
  };

  
  const onTouchStart = (e) => {
    dragStart.current = e.touches[0].clientX;
  };
  const onTouchEnd = (e) => {
    const delta = e.changedTouches[0].clientX - dragStart.current;
    if (delta < -50) next();
    else if (delta > 50) prev();
  };

  const isPrevDisabled = current === 0;
  const isNextDisabled = current >= maxIdx;

  const pageCount = Math.ceil(total / visible);
  const activePage = Math.floor(current / visible);

  return (
    <Section bg="Cream" id="programmes">
      <div className={styles.headerRow}>
        <div className={styles.headerText}>
          <p className="section-tag">Our Programmes</p>
          <h2 className="section-title">
            Find the best <em>programme</em> for yourself
          </h2>
          <p className="section-subtitle">
            Because each training course corresponds to a personal ambition, all
            our students receive individual attention. The success of each
            student is our priority.
          </p>
        </div>

        <div className={styles.navBtns}>
          <button
            className={`${styles.navBtn} ${isPrevDisabled ? styles.navBtnDisabled : ""}`}
            onClick={prev}
            aria-label="Previous programmes"
            disabled={isPrevDisabled}
          >
            <ArrowLeft />
          </button>
          <button
            className={`${styles.navBtn} ${isNextDisabled ? styles.navBtnDisabled : ""}`}
            onClick={next}
            aria-label="Next programmes"
            disabled={isNextDisabled}
          >
            <ArrowRight />
          </button>
        </div>
      </div>
      <div className={styles.carouselOuter}>
        <div
          className={`${styles.fade} ${styles.fadeLeft}  ${isPrevDisabled ? styles.fadeHidden : ""}`}
        />
        <div
          className={`${styles.fade} ${styles.fadeRight} ${isNextDisabled ? styles.fadeHidden : ""}`}
        />

        <div
          ref={trackRef}
          className={`${styles.track} ${dragging ? styles.trackDragging : ""}`}
          onMouseDown={onMouseDown}
          onMouseMove={onMouseMove}
          onMouseUp={onMouseUp}
          onMouseLeave={onMouseUp}
          onTouchStart={onTouchStart}
          onTouchEnd={onTouchEnd}
        >
          {PROGRAMMES.map((prog, i) => (
            <div
              key={i}
              className={styles.slide}
              style={{ "--visible": visible }}
            >
              <Card className={styles.progCard}>
                <div className={styles.cardInner}>
                  <div className={styles.iconWrap}>
                    <span className={styles.icon}>{prog.icon}</span>
                  </div>
                  <p className={styles.level}>{prog.level}</p>
                  <h3 className={styles.name}>{prog.name}</h3>
                  <div className={styles.learnMore}>
                    <span>Learn more</span>
                    <ArrowRight size={14} />
                  </div>
                </div>
              </Card>
            </div>
          ))}
        </div>
      </div>

      <div className={styles.carouselFooter}>
        <div className={styles.dots}>
          {Array.from({ length: pageCount }).map((_, i) => (
            <button
              key={i}
              className={`${styles.dot} ${i === activePage ? styles.dotActive : ""}`}
              onClick={() => goTo(i * visible)}
              aria-label={`Go to page ${i + 1}`}
            />
          ))}
        </div>
        <span className={styles.counter}>
          <strong>{current + 1}</strong>
          <span> – {Math.min(current + visible, total)}</span>
          <span className={styles.counterTotal}> / {total}</span>
        </span>
      </div>
    </Section>
  );
}

function ArrowLeft() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polyline points="15 18 9 12 15 6" />
    </svg>
  );
}

function ArrowRight({ size = 18 }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polyline points="9 18 15 12 9 6" />
    </svg>
  );
}
