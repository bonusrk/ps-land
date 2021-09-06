import React, { useContext } from 'react'
import clsx from 'clsx'
import { GridProps } from './Container'
import GridContext from './GridContext'

export type ColProps = GridProps

const Col: React.FC<ColProps> = (props): JSX.Element => {
  const { children, cols, sm, md, lg, className } = props

  const gridContext = useContext(GridContext)

  const { space = 2, smGrid, mdGrid, lgGrid, grid } = gridContext

  const calculateWidth = () => {
    if (!cols) return 'flex-grow'
    if (cols !== grid) return `w-${cols}/${grid}`
    return ''
  }

  const classList = clsx(
    'col',
    // `px-${space || 2}`,
    `px-${space || 2}`,
    calculateWidth(),
    [sm && `sm:w-${sm}/${smGrid || grid}`],
    [md && `md:w-${md}/${mdGrid || grid}`],
    [lg && `lg:w-${lg}/${lgGrid || grid}`],
    className
  )
  return <div className={classList}>{children}</div>
}

export default Col
