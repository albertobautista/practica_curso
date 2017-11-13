import React,{Component} from 'react';

export class NavigationBar extends Component{
    render() {
        return (
            <div className="background">
                <div className="row">
                    <div className="col-md-1 col-lg-1"></div>
                    <div className="col-md-4">
                        <div className="row">
                            <div className="col-md-2 col-lg-2 tittleFormat"><center><i className="fa fa-home " aria-hidden="true"></i><span> Home</span></center></div>
                            <div className="col-md-3 col-lg-3 tittleFormat"><center><i className="fa fa-bolt" aria-hidden="true"></i> Moments</center></div>
                            <div className="col-md-3 col-lg-3 tittleFormat"><center><i className="fa fa-bell-o" aria-hidden="true"></i> Notifications</center></div>
                            <div className="col-md-3 col-lg-3 tittleFormat"><center><i className="fa fa-envelope-o" aria-hidden="true"></i> Messages</    center></div>
                        </div>
                    </div>
                    <div className="col-md-3 col-lg-3">
                       <center><div className="twitterIcon"><i className="fa fa-twitter" aria-hidden="true"></i></div></center>
                    </div>
                    <div className="col-md-4 col-lg-4">
                        <div className="row">
                            <div className="col-md-5 col-lg-5"><input type="text" className="inputSearch" placeholder="   Search Twitter"/></div>
                            <div className="col-md-1 col-lg-1"><img src="http://photos.myjoyonline.com/photos/news/201707/2757040410043_6112173111488.jpg" className="imageWidth" /></div>
                            <div className="col-md-2 col-lg-2"><button className="buttonStyle"><span className="twittetButton">Tweet</span></button></div>
                            
                        </div>
                    </div>
                </div>
          </div>
        );
      }
}