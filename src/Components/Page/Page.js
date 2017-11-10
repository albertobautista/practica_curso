import React, {Component} from 'react';
import {TrendsInfo} from './TrendsInfo/TrendsInfo';
import {NavigationBar} from './NavigationBar/NavigationBar';
import {ProfileInfo} from './ProfileInfo/ProfileInfo';

export class Page extends Component{
    constructor(props){
        super(props)

        this.state = {
            trends: [
                {tittle: 'Chivas', description: '5,310 tweets'},
                {tittle: 'América', description: '1,223 tweets'},
                {tittle: 'Atlas', description: '309 tweets'},
                {tittle: 'Cruz Azul', description: '5,310 tweets'},
                {tittle: 'Xolos', description: '1,223 tweets'},
                {tittle: 'Monterrey', description: '309 tweets'},
                {tittle: 'Tigres', description: '5,310 tweets'},
                {tittle: 'Leon', description: '1,223 tweets'},
                {tittle: 'Tecos', description: '309 tweets'},
                
                  
            ]
        }
    }

    render(){
        return(

            <div className="">
                <NavigationBar/><br/>
                <ProfileInfo/> <br/>
                <TrendsInfo trends={this.state.trends} /> <br/>
                
                                
            </div>

        );
    }

}