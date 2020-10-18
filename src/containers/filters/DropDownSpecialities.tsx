import React from 'react';
import { connect } from 'react-redux';
import {
  SearchField,
  CheckBox,
  DropDown,
  DropDownHead,
  DropDownMain,
  DropDownFooter,
} from '@components';
import {
  searchSpecialities,
  applySpecialities,
  selectSpecialities,
  resetForm,
} from '@actions/filters/specialities';

import { classes } from './Styles';

const DropDownSpecialitiesFC = ({
  className,

  search,
  apply,
  select,
  reset,

  specialities,
  selected,
  searchText,
  valueText,
  applied,
}) => {
  return (
    <DropDown
      className={className}
      placeholder='Speciality'
      selectedCount={applied.length}
      valueText={valueText}
      minWidthContext={375}
      maxHeightContext={300}
      onShow={() => reset()}
      onReset={() =>apply([])}>
      <DropDownHead>
        <SearchField
            value={searchText}
            onChange={search}
            placeholder='Filter by speciality'
            height={48}
            />
      </DropDownHead>
      <DropDownMain>
        {specialities.map((option) => (
          <CheckBox
            key={option.id}
            checked={selected ? selected.indexOf(option.id) !== -1 : false}
            onChange={(checked) => select(option.id, checked)}>
            <span>{option.name}</span>
            <span className={classes.count}>({option.count})</span>
          </CheckBox>
        ))}
      </DropDownMain>
      <DropDownFooter onApply={() => apply(selected)} onReset={() => apply([])} />
    </DropDown>
  );
};

const stateToProps = (state, props) => {
  const {
    specialities,
    selected,
    searchText,
    applied,
    valueText,
  } = state.filters.filterBySpecialities;

  return {
    ...props,

    specialities,
    selected,
    searchText,
    applied,
    valueText,
  };
};

export const DropDownSpecialities = connect(stateToProps, {
  search: searchSpecialities,
  apply: applySpecialities,
  select: selectSpecialities,
  reset: resetForm,
})(DropDownSpecialitiesFC);
