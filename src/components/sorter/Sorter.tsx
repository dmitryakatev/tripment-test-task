import React from 'react';
import clsx from 'clsx';
import { SortingIcon, CheckIcon } from '@icons';
import {
  DropDown,
  DropDownMain,
} from '@components';

import { classes } from './Styles';

interface IOption {
  id: number;
  name: string;
}

interface ISorterProps {
  width?: number;
  height?: number;
  className,
  options?: IOption[];
  selected?: number[];
  onChange?: (ids: number[]) => void;
}

export const Sorter: React.FC<ISorterProps> = ({
  width,
  height,
  className,
  options,
  selected,
  onChange,
}) => {
  const currSelected = selected || [];

  const onChangeHandler = (id: number) => {
    if (onChange) {
      onChange([id]);
    }
  };

  return (
    <DropDown
      width={width}
      height={height}
      className={clsx(classes.sorter, className)}
      valueText={
        <div>
          <SortingIcon className={classes.head} />
          <span className={classes.text}>Sort</span>
        </div>
      }
      minWidthContext={250}>
      <DropDownMain>
        <div className={classes.sortBy}>Sort by</div>
        {options?.map((option) => (
          <div
            key={option.id}
            className={classes.item}
            onClick={() => onChangeHandler(option.id)}>
            <span className={classes.icon}>
                { currSelected.indexOf(option.id) !==-1 ? <CheckIcon /> : null }
            </span>
            <span className={classes.text}>{option.name}</span>
          </div>
        ))}
      </DropDownMain>
    </DropDown>
  );
};
