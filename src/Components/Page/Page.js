import React, {Component} from 'react';
import {TrendsInfo} from './TrendsInfo/TrendsInfo';
import {NavigationBar} from './NavigationBar/NavigationBar';
import {ProfileInfo} from './ProfileInfo/ProfileInfo';
import {TweetBox} from './TweetBox/TweetBox';
import {Tweet} from './Tweet/Tweet';

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
            ],
            tweets: [
                {img:'https://pbs.twimg.com/profile_images/925587729072533504/4i2G6uSW.jpg', name: 'Alberto Chavez Bautista', user: '@dachb', description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque laoreet iaculis erat ac fringilla. Nullam blandit eros vitae mi convallis vehicula. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam venenatis risus in lorem consequat, vel consectetur nisi vestibulum. Interdum et malesuada fames ac ante ipsum primis in faucibus.' },
                {img: 'https://mt.brightspotcdn.com/resource/assets/sites/mediotiempo/images/icon_200.37f4f8190d302c07c966c4747eccab69.jpg',name: 'Alan de Miguel Garcia', user: '@dimiguele', description:'Quisque interdum vitae tortor et pellentesque. Vivamus volutpat maximus lectus et hendrerit. Vestibulum tincidunt sodales purus bibendum porta. Pellentesque a metus sit amet dui fermentum sollicitudin. In id accumsan ligula, nec convallis enim. Aliquam maximus maximus tellus, nec mattis odio ullamcorper quis. Suspendisse eget massa ligula. Nulla velit massa, hendrerit vel ultricies ac, dictum eget nulla. Proin condimentum congue luctus' },
                {img:'https://pbs.twimg.com/profile_images/925587729072533504/4i2G6uSW.jpg', name: 'Alberto Chavez Bautista', user: '@dachb', description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque laoreet iaculis erat ac fringilla. Nullam blandit eros vitae mi convallis vehicula. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam venenatis risus in lorem consequat, vel consectetur nisi vestibulum. Interdum et malesuada fames ac ante ipsum primis in faucibus.' },
                {img: 'https://mt.brightspotcdn.com/resource/assets/sites/mediotiempo/images/icon_200.37f4f8190d302c07c966c4747eccab69.jpg',name: 'Alan de Miguel Garcia', user: '@dimiguele', description:'Quisque interdum vitae tortor et pellentesque. Vivamus volutpat maximus lectus et hendrerit. Vestibulum tincidunt sodales purus bibendum porta. Pellentesque a metus sit amet dui fermentum sollicitudin. In id accumsan ligula, nec convallis enim. Aliquam maximus maximus tellus, nec mattis odio ullamcorper quis. Suspendisse eget massa ligula. Nulla velit massa, hendrerit vel ultricies ac, dictum eget nulla. Proin condimentum congue luctus' },
                

            ]
        }
    }

    render(){
        return(

            <div className="">
                <NavigationBar/>  <br/>
                <div className="row">
                    <div className="col-md-2">
                        <ProfileInfo/><br/>
                        <TrendsInfo trends={this.state.trends} />
                    </div>
                    <div className="col-md-1">
                    </div>
                    <div className="col-md-2">
                        <TweetBox/>
                        <div className="row">
                            <div className="col-md-12">
                                <Tweet tweets={ this.state.tweets}/>
                            </div>
                        </div>
                    </div>
                </div><br/>          
            </div>

        );
    }

}