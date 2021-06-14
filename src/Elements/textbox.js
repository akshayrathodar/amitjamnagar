import React from 'react';
import TextField from '@material-ui/core/TextField';


export default function TextFields(props) {
    return(
        <TextField
        id={props.id}
        label={props.label}
        type={props.type !== '' ? 'Text' : props.type}
        autoComplete="current-password"
        variant="outlined"
        value={props.value}
        onChange={props.myevent}
      />
    );
}


