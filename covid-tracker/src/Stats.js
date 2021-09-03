import { Card, CardContent, Typography } from '@material-ui/core';
import React from 'react';

export default function Stats({ title, cases, total }) {
  return (
    <Card className="stats">
      <CardContent>
        <Typography className="stats__title" color="textSecondary">
          {title}
        </Typography>
        <h3 className="stats__cases">{cases}</h3>
        <Typography className="stats__total" color="textSecondary">
          <strong>{total} Total </strong>
        </Typography>
      </CardContent>
    </Card>
  );
}
