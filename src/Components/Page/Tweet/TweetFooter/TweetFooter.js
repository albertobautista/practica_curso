import React,{Component} from 'react';
export class TweetFooter extends Component{
    render(){
        return(
            <div>
                <div className="col-md-1"></div>
                <div className="col-md-1">
                    <i class="fa fa-comment-o iconColorComment" aria-hidden="true"></i>
                </div>
                <div className="col-md-1">
                <i class="fa fa-retweet iconColorRetweet" aria-hidden="true"></i>
                </div> 
                <div className="col-md-1">
                <i class="fa fa-heart-o iconColorLike" aria-hidden="true"></i>
                </div>
                <div className="col-md-1">
                    <i class="fa fa-envelope-o iconColorMessage" aria-hidden="true"></i>
                </div>
            </div>
        );
    }
}