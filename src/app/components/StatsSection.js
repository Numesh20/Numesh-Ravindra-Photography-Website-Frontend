'use client';

import { useEffect, useRef, useState } from "react";

const STATS = [
  { value: 3, suffix: "+", label: "Years of\nExperience", icon: "" },
  { value: 84, suffix: "+", label: "Photos in\nPortfolio", icon: "" },
  { value: 4, suffix: "", label: "Photo\nAlbums", icon: "" },
  { value: 100, suffix: "%", label: "Client\nSatisfaction", icon: "" },
];

function AnimatedNumber({ target, suffix, start }) {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (!start) return;
    let startTime = null;
    const duration = 1800;

    const step = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCurrent(Math.floor(eased * target));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [start, target]);

  return <>{current}{suffix}</>;
}

export default function StatsSection() {
  const [visible, setVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={ref} className="stats-strip">
      <div className="stats-strip-inner">
        {STATS.map((stat, i) => (
          <div key={i} className="stat-block">
            <div className="stat-icon-wrap">{stat.icon}</div>
            <div className="stat-number-wrap">
              <AnimatedNumber target={stat.value} suffix={stat.suffix} start={visible} />
            </div>
            <p className="stat-block-label">
              {stat.label.split('\n').map((line, j) => (
                <span key={j}>{line}{j === 0 && <br />}</span>
              ))}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
