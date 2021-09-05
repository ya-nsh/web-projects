import { Card, CardContent, Typography } from '@material-ui/core';
import React from 'react';
import './Stats.css';

export default function Stats({
  title,
  cases,
  total,
  active,
  isRed,
  ...props
}) {
  return (
    <Card
      onClick={props.onClick}
      className={`stats ${active && 'stats--selected'} ${
        isRed && 'stats--red'
      }`}
    >
      <CardContent>
        <Typography color="textSecondary" gutterBottom>
          {title}
        </Typography>
        <h2 className={`stats__cases ${!isRed && 'stats__cases--green'}`}>
          {cases}
        </h2>

        <Typography className="stats__total" color="textSecondary">
          {total} Total
        </Typography>
      </CardContent>
    </Card>
  );
}
