import React from 'react';
import { classes } from './Styles';

interface IDropDownMainProps { }

export const DropDownMain: React.FC<IDropDownMainProps> = ({ children }) => (
  <div className={classes.dropDownMain}>{children}</div>
);
