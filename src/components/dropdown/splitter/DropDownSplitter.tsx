import React from 'react';
import { classes } from './Styles';

interface IDropDownSplitterProps { }

export const DropDownSplitter: React.FC<IDropDownSplitterProps> = () => (
  <div className={classes.dropDownSplitter}></div>
);
