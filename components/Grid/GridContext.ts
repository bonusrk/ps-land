import React from 'react';
import { GridProps } from './Container';

const GridContext = React.createContext<GridProps>({});
export const GridProvider = GridContext.Provider;
export default GridContext;
