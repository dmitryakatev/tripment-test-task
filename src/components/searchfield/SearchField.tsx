import React from 'react';
import { SearchIcon } from '@icons';
import { classes } from './Styles';

interface ISearchFieldProps {
  width?: number;
  height?: number;
  value?: string;
  onChange?: (value: string) => void,
  placeholder?: string;
}

export const SearchField: React.FC<ISearchFieldProps> = ({
  width,
  height,
  value,
  onChange,
  placeholder,
}) => {
  const onChangeValue = (e) => {
    if (onChange) {
      onChange(e.target.value);
    }
  };

  return (
    <div className={classes.searchField} style={{ width, height }}>
      <input type="text" value={value} onChange={onChangeValue} placeholder={placeholder} />
      <div className={classes.trigger}>
        <SearchIcon />
      </div>
    </div>
  );
};
