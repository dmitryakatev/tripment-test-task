import React from 'react';
import { connect } from 'react-redux';
import {
  resetAllFilters
} from '@actions/content';
import { DropDownAvailabilities } from './DropDownAvailabilities';
import { DropDownSpecialities } from './DropDownSpecialities';
import { DropDownInsurances } from './DropDownInsurances';
import { DropDownSort } from './DropDownSort';

import { classes } from './Styles';

const FiltersFC = ({ className, reset }) => {
  return (
    <div className={className}>
      <DropDownAvailabilities className={classes.dropDownFilter} />
      <DropDownSpecialities className={classes.dropDownFilter} />
      <DropDownInsurances className={classes.dropDownFilter} />
      <DropDownSort className={classes.dropDownFilter} />
      <div className={classes.clearFilter} onClick={() => reset()}>Clear filters</div>
    </div>
  );
};

const stateToProps = () => ({});

export const Filters = connect(stateToProps, {
  reset: resetAllFilters,
})(FiltersFC);
