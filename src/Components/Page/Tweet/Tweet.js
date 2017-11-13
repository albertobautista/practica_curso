import React, {Component} from 'react';
import {TweetTittle} from './TweetTittle/TweetTittle';
import {TweetBody} from './TweetBody/TweetBody';
import {TweetFooter} from './TweetFooter/TweetFooter';

export const Tweet  = ({tweets}) =>{
        return(
            <div className="tweetBack">
                {tweets.map(tweet => {
                    return(  
                        <div>
                        <div className="row padding">
                            <TweetTittle name={tweet.name} user={tweet.user} img={tweet.img}/>
                            <TweetBody  description={tweet.description}/>
                            <TweetFooter/>
                            
                        </div>
                        <hr/>
                    </div>
                        
                    )
                })}
            </div>
        );
    
}