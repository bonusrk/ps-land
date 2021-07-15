import React from 'react';
import clsx from 'clsx';

export type GridProps = {
  space?: number
  className?: string
  grid?: number
  cols?: number
  sm?: number
  md?: number
  lg?: number
  smGrid?: number
  mdGrid?: number
  lgGrid?: number
};

export type ContainerProps = Pick<GridProps, 'space' | 'className'>;

const Container: React.FC<ContainerProps> = (props): JSX.Element => {
  const { children, className } = props;
  const classList = clsx('container', className);
  return (
    <div className={classList}>
      {children}
    </div>
  );
};

export default Container;
