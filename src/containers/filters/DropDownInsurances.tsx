import React from 'react';
import { connect } from 'react-redux';
import {
  SearchField,
  CheckBox,
  Slider,
  DropDown,
  DropDownHead,
  DropDownMain,
  DropDownFooter,
} from '@components';
import {
  setOtherPayment,
  searchInsurances,
  applyInsurances,
  selectInsurances,
  resetForm,
} from '@actions/filters/insurances';

import { classes } from './Styles';

const DropDownInsurancesFC = ({
  className,

  payment,
  search,
  apply,
  select,
  reset,

  otherPayment,
  insurances,
  selected,
  searchText,
  valueText,
  applied,
}) => {
  return (
    <DropDown
      className={className}
      placeholder='Insurance'
      selectedCount={applied.length}
      valueText={valueText}
      minWidthContext={375}
      maxHeightContext={300}
      onShow={() => reset()}
      onReset={() =>apply([])}>
      <DropDownHead>
        <Slider
          checked={otherPayment}
          onChange={payment}>
          Provides other than insurance payment options
        </Slider>
        <SearchField
            value={searchText}
            onChange={search}
            placeholder='Filter by insurance carrier'
            height={48}
            />
      </DropDownHead>
      <DropDownMain>
        {insurances.map((option) => (
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
    insurances,
    selected,
    searchText,
    applied,
    valueText,
    otherPayment,
  } = state.filters.filterByInsurances;

  return {
    ...props,

    insurances,
    selected,
    searchText,
    applied,
    valueText,
    otherPayment,
  };
};

export const DropDownInsurances = connect(stateToProps, {
  payment: setOtherPayment,
  search: searchInsurances,
  apply: applyInsurances,
  select: selectInsurances,
  reset: resetForm,
})(DropDownInsurancesFC);
