import React from 'react';
import { Link } from 'react-router-dom';

import Textbox from '../Elements/textbox';
import Button from '../Elements/Button';
import CheckBox from '../Elements/Checkbox';

import { Grid } from '@material-ui/core';

export class Main extends React.Component {
    
    constructor(){
        super();
        this.state = {
            textboxdata:'',
            tempVar : []
        };
    }

    ontyping = (e) => {
        this.setState({textboxdata:e.target.value});
    }

    onClicking = () => {
        let myarr = this.state.tempVar;
        this.setState({tempVar:[...myarr,{id:(Math.random()*1000),status:false,text:this.state.textboxdata}],textboxdata:''});
    }

    checkboxClick = (e) => {
        let id = e.target.id;
        let myarr = this.state.tempVar;
        
        myarr.map((value,index)=>{
            if(value.id === id) {
                myarr[index].status = !myarr[index].status;
            }
            return true;
        })
        
        this.setState({tempVar:myarr});
        // let myclickindex = myarr.findIndex(x => x.id === id);
        
    }

    componentDidMount() {

    }
    render() {
        
        return(
            <>
                <Link to='/list'><h1>Main Called</h1></Link>                
                <Textbox id="1" label="Amit" value={this.state.textboxdata} myevent={this.ontyping} /> 
                <Button text="Click Bhai"   myevent={this.onClicking}/> 
    
                <Grid container>
                {this.state.tempVar.map( (value,index) => {
                    return <Grid item><CheckBox status={value.status} event={this.checkboxClick} id={value.id}></CheckBox><h1 id={index}>{value.status ? <s>{value.text}</s> : value.text}</h1></Grid>
                })
                }
                </Grid>
                
            </>
        );
    }
}


