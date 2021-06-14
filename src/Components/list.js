import React from 'react';
import { getUsersId } from '../Apis/callApis';

import Textbox from '../Elements/textbox';
import Button from '../Elements/Button'; 

export class List extends React.Component {
    
    constructor(){
        super();
        this.state = {
            //count:0
            textboxdata:'',
            tempVar : ''
        };
    }

    async componentDidMount() {
        // await this.setState({count:this.state.count+1});
        // await this.setState({count:this.state.count+1});
        // await this.setState({count:this.state.count+1});
        // await this.setState({count:this.state.count+1});
        // await this.setState({count:this.state.count+1});
        // getUsers().then((paisa)=>{
        //     console.log(paisa);
        // }).catch((err) =>{
        //     console.log(err);
        // })
       
    }
    ontyping = (e) => {        
        this.setState({textboxdata:e.target.value});
    }
    onClicking = () => {
        getUsersId(this.state.textboxdata).then((paisa)=>{
            console.log(paisa);   
            this.setState({tempVar:paisa.data.title});     
        }).catch((err) =>{
            console.log(err);
        })
    
    }

    render() {
        
        return(
            <>
            <h1>
                {this.state.count}
                <Textbox id="1" label="Enter Id" myevent={this.ontyping}  /> 
                <Button text="Click Me" myevent={this.onClicking}/> 
            </h1>
            
            
            <h1>{ this.state.tempVar}</h1>
                        
            </>
        );
    }
}


