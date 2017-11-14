import React, {Component} from 'react';

export class FollowBox extends Component{
    render(){
        return(
            <div className="backFollowBox">
                <div className="row">
                    <div className="col-md-12">
                        <span className="followTittle">Who To Follow ?</span>
                    </div>
                    
                </div>
                <div className="row">
                    <div className="col-md-1"><img src="https://www.laschivasrayadas.com.mx/media/galeria/325/7/9/5/4/t_chivas_guadalajara_logo_y_escudo-10644597.png" className="imageFollow"/></div>
                    <div className="col-md-10">
                        <span className="followStyle">Chivas</span><span className="userFollow"> @chivas</span><br/>
                        <button className="buttonStyleFollow"><span className="twittetButton">Follow</span></button> 
                    
                    </div>
                </div>
                <hr/>
                <div className="row">
                    <div className="col-md-1"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b5/Gianluigi_Buffon_%2831784615942%29.jpg/300px-Gianluigi_Buffon_%2831784615942%29.jpg" className="imageFollow"/></div>
                    <div className="col-md-10">
                        <span className="followStyle"> Buffon</span><span className="userFollow"> @GigiBuffon</span><br/>
                        <button className="buttonStyleFollow"><span className="twittetButton">Follow</span></button> 
                        
                    </div>
                </div> 
                <hr/>  
                <div className="row">
                    <div className="col-md-1"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Iker_Casillas_Euro_2012_vs_France.jpg/220px-Iker_Casillas_Euro_2012_vs_France.jpg" className="imageFollow"/></div>
                    <div className="col-md-10">
                        <span className="followStyle">Casillas</span><span className="userFollow"> @Casillas</span><br/>
                        <button className="buttonStyleFollow"><span className="twittetButton">Follow</span></button> 
                    </div>
                </div>        
                <hr/>
                <div className="row">
                    <div className="col-md-1"><img src="http://i.dailymail.co.uk/i/pix/2017/02/02/21/05D9ABCC0000044D-4185560-The_36_year_old_Brazilian_enjoyed_a_trophy_laden_five_year_spell-a-4_1486069250232.jpg" className="imageFollow"/></div>
                    <div className="col-md-10">
                        <span className="followStyle">Ronaldinho</span><span className="userFollow"> @Dinho</span><br/>
                        <button className="buttonStyleFollow"><span className="twittetButton">Follow</span></button> 
                    </div>
                </div>        
                <hr/>     
            </div>
            
        );
    }
}