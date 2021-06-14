import React from 'react';
import Checkbox from '@material-ui/core/Checkbox';

export default function CheckboxLabels(props) {
    
    return (
        <Checkbox
          checked={props.status}
          onChange={props.event}
          id={props.id}
          label="Secondary"
        />
    );
  }