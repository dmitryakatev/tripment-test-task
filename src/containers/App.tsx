import React from 'react';
import { Filters } from './filters/Filters';
import { List } from './list/List';
import { classes } from './Styles';

export const App = () => (
  (
    <div className={classes.root}>
      <div className={classes.container}>
        <List className={classes.content} />
        <div className={classes.filterWrap}>
          <div className={classes.line}></div>
          <Filters className={classes.filter} />
        </div>
      </div>
    </div>
  )
);
