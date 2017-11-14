import React, {Component} from 'react';
import {TrendsInfo} from './TrendsInfo/TrendsInfo';
import {NavigationBar} from './NavigationBar/NavigationBar';
import {ProfileInfo} from './ProfileInfo/ProfileInfo';
import {TweetBox} from './TweetBox/TweetBox';
import {Tweet} from './Tweet/Tweet';
import {FollowBox} from './FollowBox/FollowBox';

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
                {img:'http://photos.myjoyonline.com/photos/news/201707/2757040410043_6112173111488.jpg', name: 'Alberto Chavez Bautista', user: '@dachb', description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque laoreet iaculis erat ac fringilla. Nullam blandit eros vitae mi convallis vehicula. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam venenatis risus in lorem consequat, vel consectetur nisi vestibulum. Interdum et malesuada fames ac ante ipsum primis in faucibus.' },
                {img: 'https://ugc.kn3.net/i/origin/http://i.dailymail.co.uk/i/pix/2015/12/19/20/2F83008B00000578-0-image-m-51_1450555825104.jpg',name: 'Alan de Miguel Garcia', user: '@dimiguele', description:'Quisque interdum vitae tortor et pellentesque. Vivamus volutpat maximus lectus et hendrerit. Vestibulum tincidunt sodales purus bibendum porta. Pellentesque a metus sit amet dui fermentum sollicitudin. In id accumsan ligula, nec convallis enim. Aliquam maximus maximus tellus, nec mattis odio ullamcorper quis. Suspendisse eget massa ligula. Nulla velit massa, hendrerit vel ultricies ac, dictum eget nulla. Proin condimentum congue luctus' },
                {img:'http://static.t13.cl/images/original/2017/04/1493135717-pinguino2.jpg', name: 'Rodrigo Orozco Becerra', user: '@rodrigorzc', description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque laoreet iaculis erat ac fringilla. Nullam blandit eros vitae mi convallis vehicula. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam venenatis risus in lorem consequat, vel consectetur nisi vestibulum. Interdum et malesuada fames ac ante ipsum primis in faucibus.' },
                {img: 'http://www.alborde.com/images/stories/136/cine_atleticosanpancho.jpg',name: 'Alan Sanchez Vazquez', user: '@alansnchz', description:'Quisque interdum vitae tortor et pellentesque. Vivamus volutpat maximus lectus et hendrerit. Vestibulum tincidunt sodales purus bibendum porta. Pellentesque a metus sit amet dui fermentum sollicitudin. In id accumsan ligula, nec convallis enim. Aliquam maximus maximus tellus, nec mattis odio ullamcorper quis. Suspendisse eget massa ligula. Nulla velit massa, hendrerit vel ultricies ac, dictum eget nulla. Proin condimentum congue luctus' },
                

            ]
        }
    }

    render(){
        return(

            <div className="">
                <NavigationBar/>  <br/>
                <div className="row">
                    <div className="col-md-2 example">
                        <ProfileInfo/><br/>
                        <TrendsInfo trends={this.state.trends} />
                    </div>
                    <div className="col-md-1"></div>
                    <div className="col-md-5">
                        <TweetBox/>
                        <div className="row">
                            <div className="col-md-12">
                                <Tweet tweets={ this.state.tweets}/>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-2">
                        <FollowBox/>    
                    </div>
                </div><br/>          
            </div>

        );
    }

}