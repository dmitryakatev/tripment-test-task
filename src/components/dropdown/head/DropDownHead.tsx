import React from 'react';
import { classes } from './Styles';

interface IDropDownHeadProps { }

export const DropDownHead: React.FC<IDropDownHeadProps> = ({ children }) => (
  <div className={classes.dropDownHead}>{children}</div>
);
