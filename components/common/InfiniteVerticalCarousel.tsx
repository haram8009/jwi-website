"use client";
import { motion, useAnimation } from "framer-motion";
import { ReactNode, useEffect } from "react";

/**
 * Reusable infinite vertical carousel.
 *
 * - Splits the `items` array into `columns` buckets (default 4)
 * - Each column scrolls upward in an infinite loop
 * - Hovering a column pauses its animation and resumes on mouse leave
 * - Highly generic: you provide `renderItem` to decide the card UI
 */
export interface InfiniteVerticalCarouselProps<T> {
  items: T[];
  /**
   * Render function that receives the item and its absolute index in the original array
   */
  renderItem: (item: T, index: number) => ReactNode;
  /** Number of columns on large viewports (≥1024px). Defaults to 4. */
  columns?: number;
  /** Loop duration in seconds for the first column. Each subsequent column adds +5 s (to break perfect sync). */
  baseDuration?: number;
  /** Gap between cards in `rem`. Defaults to 1. */
  gapRem?: number;
  /** Width CSS calc string for each column on large screens. Leave undefined to auto‑calc. */
  columnWidth?: string;
}

function splitByColumn<T>(arr: T[], cols: number): T[][] {
  return Array.from({ length: cols }, (_, c) => arr.filter((_, i) => i % cols === c));
}

export default function InfiniteVerticalCarousel<T = unknown>({
  items,
  renderItem,
  columns = 4,
  baseDuration = 40,
  gapRem = 1,
  columnWidth,
}: InfiniteVerticalCarouselProps<T>) {
  const colData = splitByColumn(items, columns);
  const widthStyle = columnWidth || `calc(100%/${columns} - ${gapRem}rem)`;

  return (
    <div className="overflow-hidden relative">
      <div className="flex max-w-7xl mx-auto px-4" style={{ gap: `${gapRem}rem` }}>
        {colData.map((col, ci) => {
          const controls = useAnimation();
          const duration = baseDuration + ci * 5;

          useEffect(() => {
            controls.start({ y: ["0%", "-50%"], transition: { duration, repeat: Infinity, ease: "linear" } });
          }, [controls, duration]);

          return (
            <motion.div
              key={ci}
              style={{ width: widthStyle }}
              className="flex flex-col" // gaps handled by parent gap
              animate={controls}
              onMouseEnter={() => controls.stop()}
              onMouseLeave={() =>
                controls.start({ y: ["0%", "-50%"], transition: { duration, repeat: Infinity, ease: "linear" } })
              }
            >
              {[...col, ...col].map((item, idx) => renderItem(item, idx + ci * col.length))}
            </motion.div>
          );
        })}
      </div>

      {/* top & bottom fade masks for smoother entry/exit */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-12 bg-gradient-to-b from-white" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-12 bg-gradient-to-t from-white" />
    </div>
  );
}
