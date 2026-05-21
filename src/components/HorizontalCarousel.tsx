"use client";

import {
  useCallback,
  useRef,
  useState,
  type CSSProperties,
  type ReactNode,
} from "react";

export function Dots({
  count,
  activeIndex,
  onSelect,
}: {
  count: number;
  activeIndex: number;
  onSelect: (index: number) => void;
}) {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        gap: "6px",
        marginTop: "12px",
      }}
    >
      {Array.from({ length: count }).map((_, i) => (
        <button
          key={i}
          type="button"
          aria-label={`第 ${i + 1} 张`}
          onClick={() => onSelect(i)}
          style={{
            width: i === activeIndex ? "16px" : "5px",
            height: "5px",
            borderRadius: "999px",
            background: i === activeIndex ? "#214D49" : "#D6D6D6",
            transition: "width 0.3s, background 0.3s",
            display: "block",
            border: "none",
            padding: 0,
            cursor: "pointer",
          }}
        />
      ))}
    </div>
  );
}

export type CarouselSlide = {
  key: string;
  node: ReactNode;
};

export function HorizontalCarousel({
  slides,
  className,
  style: outerStyle,
}: {
  slides: CarouselSlide[];
  className?: string;
  style?: CSSProperties;
}) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const count = slides.length;

  const handleScroll = useCallback(() => {
    const el = scrollRef.current;
    if (!el || count < 1) return;
    const w = el.clientWidth;
    if (w < 1) return;
    const index = Math.round(el.scrollLeft / w);
    setActiveIndex(Math.min(Math.max(index, 0), count - 1));
  }, [count]);

  const scrollToIndex = useCallback((index: number) => {
    const el = scrollRef.current;
    if (!el) return;
    el.scrollTo({ left: index * el.clientWidth, behavior: "smooth" });
    setActiveIndex(index);
  }, []);

  if (count === 0) return null;

  return (
    <>
      <div
        ref={scrollRef}
        onScroll={handleScroll}
        style={{
          display: "flex",
          overflowX: "auto",
          overflowY: "hidden",
          scrollSnapType: "x mandatory",
          WebkitOverflowScrolling: "touch",
          scrollBehavior: "smooth",
          scrollbarWidth: "none",
          msOverflowStyle: "none",
          ...outerStyle,
        }}
        className={className}
      >
        {slides.map((slide) => (
          <div
            key={slide.key}
            style={{
              flex: "0 0 100%",
              width: "100%",
              minWidth: 0,
              scrollSnapAlign: "start",
              boxSizing: "border-box",
            }}
          >
            {slide.node}
          </div>
        ))}
      </div>
      {count > 1 && (
        <Dots
          count={count}
          activeIndex={activeIndex}
          onSelect={scrollToIndex}
        />
      )}
    </>
  );
}
