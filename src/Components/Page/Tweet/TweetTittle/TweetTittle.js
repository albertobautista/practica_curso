import React from 'react';
export const TweetTittle =({ name, user,img })=>{
    return(
        <div className="tweetBoxBack">
            <div className="col-md-1">
                <img src={img} className="imageTweet"/>
            </div>
            <div className="col-md-6">
                <div><span className="nameTweetStyle">{name}</span> <span className="userTweetStyle">{user}</span></div>

            </div>
       </div>
    )
}