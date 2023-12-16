import React, { Fragment } from 'react';
import './style.css';

interface GapProps {
  [key: string]: number;
}

interface ResponsiveListProps<T> {
  data: T[];
  maxCols?: number;
  gap?: GapProps[keyof GapProps];
  renderItem: (item: T) => React.ReactNode;
}

export const defaultGap: GapProps = {
  sm: 8,
  md: 16,
  lg: 24,
};

/**
 * calc is used to subtract the height of the header and padding
 * 80px is the height of the header
 * 10px x 2 is the padding of the header
 * FIXME: This is not a good solution, but it works for now
 */
function ResponsiveList<T>({
  data,
  maxCols = 4,
  gap = defaultGap.sm,
  renderItem,
}: ResponsiveListProps<T>) {
  const colWidth = Math.floor(window.innerWidth / maxCols) - gap;
  return (
    <div
      className='grid-container'
      style={{
        gap: `${gap}px`,
        minHeight: 'calc(100vh - 100px)',
        gridTemplateColumns: `repeat(auto-fill, minmax(${colWidth}px, 1fr))`,
      }}
    >
      {data.map((item, index) => {
        return <Fragment key={index}>{renderItem(item)}</Fragment>;
      })}
    </div>
  );
}

export default ResponsiveList;
