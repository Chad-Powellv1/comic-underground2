import React, { useState, useEffect } from 'react';
import moment from 'moment';

export const AuctionTimer = ({ currentAuction }) =>  {
    const [now, setNow] = useState();
    const endDate = moment(currentAuction.close_date);

    useEffect(() => {
        const interval = setInterval(() => {
            setNow(moment());
        }, 1000);

        return () => {
            clearInterval(interval);
        }
    }, []);

    const calcTimeLeft = () => {
        const currentTime = now;
        const timeDiff = endDate.diff(currentTime)
        const duration = moment.duration(timeDiff);
        const hours = duration.asHours();
        // console.log(timeDiff)
        if (hours > 0) {
          return moment(timeDiff).format('D [days] hh:mm:ss');
        } 
        return 'Auction has ended.'

    }

    return (
        <div>{calcTimeLeft()}</div>
    )
}