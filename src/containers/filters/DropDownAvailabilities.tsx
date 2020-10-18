import React from 'react';
import { connect } from 'react-redux';
import {
  CheckBox,
  DropDown,
  DropDownMain,
  DropDownSplitter,
} from '@components';
import { selectAvailability } from '@actions/filters/availabilities';

import { classes } from './Styles';

const DropDownAvailabilitiesFC = ({
  className,

  select,

  availabilities,
  selected,
}) => {
  return (
    <DropDown
      className={className}
      placeholder='Availability'
      selectedCount={0}
      valueText={''}
      minWidthContext={375}
      maxHeightContext={300}>
      <DropDownMain>
        <div className={classes.title}>Availability</div>
        {availabilities.map((option, index) => {
          if (option  === null) {
            return <DropDownSplitter key={`splitter${index}`} />
          }

          return (
            <CheckBox
              key={option.id}
              checked={selected[option.key]}
              onChange={(checked) => select(option.key, checked)}>
              <span>{option.name}</span>
              <span className={classes.count}>({option.count})</span>
            </CheckBox>
          );
        })}
      </DropDownMain>
    </DropDown>
  );
};

const stateToProps = (state, props) => {
  const { availabilities, selected } = state.filters.filterByAvailabilities;

  return {
    ...props,

    availabilities,
    selected,
  };
};

export const DropDownAvailabilities = connect(stateToProps, {
  select: selectAvailability,
})(DropDownAvailabilitiesFC);
