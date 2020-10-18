import React from 'react';
import { classes } from './Styles';

interface IDropDownFooterProps {
  onReset?: () => void;
  onApply?: () => void;
}

export const DropDownFooter: React.FC<IDropDownFooterProps> = ({ onReset, onApply }) => (
  <div className={classes.dropDownFooter}>
    <div className={classes.reset} onClick={onReset}>Reset</div>
    <div className={classes.splitter}></div>
    <button className={classes.apply} onClick={onApply}>Apply</button>
  </div>
);
