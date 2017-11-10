import React from 'react';
export const Trend =({ tittle, description })=>{
    return(
        <div>
            <div className="ulTrends">{tittle}</div>
            <div className="ulTrendsDescription">{description}</div>
        </div>
    )
}