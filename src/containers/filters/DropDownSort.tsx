import React from 'react';
import { connect } from 'react-redux';
import { Sorter } from '@components';
import { selectSort } from '@actions/filters/sorting';

const DropDownSortFC = ({
  className,

  sort,

  sorters,
  selected,
}) => (
    <Sorter
      className={className}
      options={sorters}
      selected={selected}
      onChange={sort} />
);

const stateToProps = (state, props) => {
  const {
    sorters,
    selected,
  } = state.filters.useSorters;

  return {
    ...props,

    sorters,
    selected,
  };
};

export const DropDownSort = connect(stateToProps, {
  sort: selectSort,
})(DropDownSortFC);
