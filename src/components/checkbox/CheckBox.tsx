import React from 'react';
import { CheckOnIcon, CheckOffIcon } from '@icons';
import { classes } from './Styles';

interface ICheckBoxProps {
  width?: number;
  height?: number;

  checked?: boolean;
  onChange?: (checked: boolean) => void;
}

export const CheckBox: React.FC<ICheckBoxProps> = ({
  width,
  height,
  checked,
  onChange,
  children,
}) => {
  const onClickHandler = () => {
    if (onChange) {
      onChange(!checked);
    }
  };

  return (
    <div
      className={classes.checkBox}
      style={{ width, height }}
      tabIndex={0}
      onClick={onClickHandler}>
      {checked ? <CheckOnIcon /> : <CheckOffIcon />}
      <div className={classes.text}>
        {children}
      </div>
    </div>
  );
};
