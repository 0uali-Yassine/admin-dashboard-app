import React from 'react';
import './featured.scss';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import KeyboardArrowDownOutlinedIcon from '@mui/icons-material/KeyboardArrowDownOutlined';

function Featured() {
  return (
    <div className='featured'>
        <div className="top">
            <h1 className="title">Total Revenue</h1>
            <MoreVertIcon fontSize="small"/>
        </div>
        <div className="bottom">
            <div className="featuredChart">
                <CircularProgressbar value={70}  text={`${70}%`} strokeWidth={5}
                    styles={buildStyles({
                        // Rotation of path and trail, in number of turns (0-1)
                        rotation: 0.25,
                    
                        // Whether to use rounded or flat corners on the ends - can use 'butt' or 'round'
                        strokeLinecap: 'round',
                    
                        // Text size
                        textSize: '16px',
                    
                        // How long animation takes to go from one percentage to another, in seconds
                        pathTransitionDuration: 0.5,
                    
                        // Can specify path transition in more detail, or remove it entirely
                        pathTransition: 'none',
                    
                        // Colors
                        pathColor: `rgba(62, 152, 199, ${70 / 100})`,
                        textColor: '#f88',
                        trailColor: '#d6d6d6',
                        backgroundColor: '#3e98c7',
                    })}
                />
            </div>
            <p className='title'>Total sales made today</p>
            <p className='amount'>$420</p>
            <p className='desc'>Previous transactions processing. Last payemants may not be icluded.</p>
            <div className="summary">
                <div className="item">
                    <div className="itemTitle">Target</div>
                    <div className="itemsResult positive">
                        <KeyboardArrowUpIcon fontSize='small'/>
                        <div className="resultAmount">$21.4K</div>
                    </div>
                </div>
                <div className="item">
                    <div className="itemTitle">Last Week</div>
                    <div className="itemsResult positive">
                        <KeyboardArrowUpIcon fontSize='small'/>
                        <div className="resultAmount">$21.4K</div>
                    </div>
                </div>
                <div className="item">
                    <div className="itemTitle">Last Month</div>
                    <div className="itemsResult negative">
                        <KeyboardArrowDownOutlinedIcon fontSize='small'/>
                        <div className="resultAmount">$21.4K</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Featured;
