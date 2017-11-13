import React, {Component} from 'react';

export class TweetBox extends Component{
    render(){
        return(
            <div className="tweetBackBox">
                <div className="row padding">
                    <div className="col-md-1">
                        <img src="http://photos.myjoyonline.com/photos/news/201707/2757040410043_6112173111488.jpg" className="imageTweetBox" />         
                    </div>
                    <div className="col-md-10">
                        <input type="text" className="inputSearchTweetBox" placeholder="   What´s Happening?"/>
                    </div>
                </div>
                
                
            </div>
        );
    }
}