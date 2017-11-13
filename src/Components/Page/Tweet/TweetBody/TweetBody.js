import React from 'react';
export const TweetBody =({ description })=>{
    return(
        <div>
            <div className="col-md-1"></div>
            <div className="col-md-11">
                <span className="tweetBody">{description}</span><br/><br/>
            </div>  
            
       </div>
    )
}