import React from 'react';
import Button from '@material-ui/core/Button';

export default function Buttons(props){
    return (
        <Button variant="contained"   color="primary" onClick={props.myevent}>
          {props.text}
        </Button>
      );
}