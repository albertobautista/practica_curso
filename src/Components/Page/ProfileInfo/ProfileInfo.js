import React, {Component} from 'react';

export class ProfileInfo extends Component{
    render(){
        return(
            <div className="wi100">
                <div className="row">
                    <div className="col-md-12">
                        <img src="http://www.hdfondos.eu/pictures/2014/0220/1/uefa-champions-league-stadium-wallpaper-59429.jpg " className="width"/>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-3">
                    <img src="http://photos.myjoyonline.com/photos/news/201707/2757040410043_6112173111488.jpg" className="imageWidthProfile" />
                        
                    </div>
                    <div className="col-md-9">
                        <span className="nameStyle">Alberto Bautista</span><br/>
                        <span className="userNameStyle">@Dachb</span>
                    </div>
                </div><br/>
                <div className="row">
                    <div className="col-md-4">
                        <span className="infoProfile"><center>Tweets</center></span>
                    </div>
                    <div className="col-md-4">
                        <span className="infoProfile"><center>Following</center></span>
                    </div>
                    <div className="col-md-4">
                        <span className="infoProfile"><center>Followers</center></span>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-4">
                        <span className="infoProfileNumbers"><center>1,899</center></span>
                    </div>
                    <div className="col-md-4">
                        <span className="infoProfileNumbers"><center>349</center></span>
                    </div>
                    <div className="col-md-4">
                        <span className="infoProfileNumbers"><center>112</center></span>
                    </div>
                </div><br/>
            </div>
        );
    }
}