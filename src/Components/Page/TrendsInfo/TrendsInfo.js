import React from 'react';
import {Trend} from './Trend/Trend';

export const TrendsInfo = ({trends}) => {
        return(
            <div className="w100">
                <div className="row">
                    <div className="col-md-12"><br/>
                        <span className="trendsTittle">Mexico Trends</span>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12">
                        <div>
                            {trends.map(trend => {
                                return(
                                    <Trend tittle={trend.tittle} description={trend.description}/>
                                )
                            })}
                            <br/>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

