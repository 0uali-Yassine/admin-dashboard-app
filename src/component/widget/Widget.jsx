import React from 'react';
import './widget.scss';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import MonetizationOnOutlinedIcon from '@mui/icons-material/MonetizationOnOutlined';
import AccountBalanceWalletOutlinedIcon from '@mui/icons-material/AccountBalanceWalletOutlined';

function Widget({type}) {
    let data;
    const amount = 100;
    const diff = 20;
    switch (type) {
        case "user":
            data={
                title:"USERS",
                isMoney:false,
                link:"See all users",
                icon:<PersonOutlineIcon className='icon' 
                    style={{
                        color:'crimson',
                        backgroundColor:"rgba(255,0,0,.2)",
                    }}
                />
            }
            break;
        case "order":
            data={
                title:"ORDERS",
                isMoney:false,
                link:"See all orders",
                icon:<ShoppingCartOutlinedIcon className='icon'
                    style={{
                        color:'goldenrod',
                        backgroundColor:"rgba(218,165,32,.2)",
                    }}
                />
            }
            break;
            case "earning":
            data={
                title:"EARNINGS",
                isMoney:true,
                link:"See all earning",
                icon:<MonetizationOnOutlinedIcon className='icon'
                    style={{
                        color:'green',
                        backgroundColor:"rgba(0,128,0,.2)",
                    }}
                />
            }
            break;
            case "balance":
            data={
                title:"BALANCE",
                isMoney:true,
                link:"See all balance",
                icon:<AccountBalanceWalletOutlinedIcon className='icon'
                    style={{
                        color:'PURPLE',
                        backgroundColor:"rgba(128,0,128,.2)",
                    }}
                />
            }
            break;
    
        default:
            break;
    }

  return (
    <div className='widget'>
        <div className="left">
            <div className="title">{data.title}</div>
            <div className="counter">{data.isMoney && "$"}{amount}</div>
            <div className="link">{data.link}</div>
        </div>
        <div className="rigth">
            <div className="persentage positive">
                <KeyboardArrowUpIcon/>
                {diff}%
            </div>
            {data.icon}

        </div>
    </div>
  )
}

export default Widget
