import React from 'react'
import clsx from 'clsx'
import { GridProvider } from './GridContext'
import { GridProps } from './Container'

export type RowProps = Pick<
  GridProps,
  'space' | 'grid' | 'smGrid' | 'mdGrid' | 'lgGrid' | 'className'
>

const Row: React.FC<RowProps> = (props): JSX.Element => {
  const {
    children,
    space = 2,
    grid = 12,
    smGrid = 12,
    mdGrid = 12,
    lgGrid = 12,
    className,
  } = props
  const classList = clsx(`row -mx-${space}`, className)
  return (
    <GridProvider
      value={{
        grid,
        smGrid,
        mdGrid,
        lgGrid,
        space,
      }}
    >
      <div className={classList}>{children}</div>
    </GridProvider>
  )
}

export default Row
