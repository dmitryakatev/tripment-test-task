import React from 'react';
import clsx from 'clsx';
import { CheckIcon, CrossIcon } from '@icons';
import { classes } from './Styles';

interface ISliderProps {
  width?: number;
  height?: number;

  checked?: boolean;
  onChange?: (checked: boolean) => void;
}

export const Slider: React.FC<ISliderProps> = ({
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
      className={classes.slider}
      style={{ width, height }}
      tabIndex={0}
      onClick={onClickHandler}>
      <div className={classes.text}>
        {children}
      </div>
      <div className={clsx(classes.check, { [classes.checked]: checked })}>
        <div className={classes.button}>
          {checked ? <CheckIcon /> : <CrossIcon />}
        </div>
      </div>
    </div>
  );
};
