import React  from "react";

export const userColumns = [
    { field: 'id', headerName: 'ID', width: 70 },
    {field:'user',headName:'User',width:230,
    renderCell: (params)=> {
        return (
            <div className="cellWithImg">
                <img className="cellImg" src={params.row.img} alt='avatar'/>
                {params.row.username}
            </div>
        )
    }
    },
    {field:'email',headerName:'Email',width:200},
    {field:'age',headName:'age',width:100},
    {field:'status',headName:'Status',width:100,
    renderCell: (params)=>{
        return (
            <div className={`cellWithStatus  ${params.row.status}`}>{params.row.status}</div>
        )
    }
    },
    
    
    
];

export const userRows = [
    {
      id: 1,
      username: "Snow",
      img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
      status: "active",
      email: "1snow@gmail.com",
      age: 35,
      phone:'+1 234 543 45',
      address:'3703 19th St Lubbock',
      country:'United States',
      data:[
        {
          name: 'January',total:2435,
        },
        {
          name: 'February',total:4935,
        },
        {
          name: 'March',total:2435,
        },
        {
          name: 'April',total:3435,
        },
        {
          name: 'May',total:1935,
        },
        {
          name: 'June',total:4435,
        }
      ]
    },
    {
      id: 2,
      username: "Jamie Lannister",
      img: "https://images.pexels.com/photos/375880/pexels-photo-375880.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      email: "2snow@gmail.com",
      status: "passive",
      age: 42,
      phone:'+1 234 543 45',
      address:'Esc. 547 Paseo César, 7, Elda, Ext 56633',
      country:'Mexico',
      data:[
        {
          name: 'January',total:1435,
        },
        {
          name: 'February',total:435,
        },
        {
          name: 'March',total:6535,
        },
        {
          name: 'April',total:2335,
        },
        {
          name: 'May',total:2335,
        },
        {
          name: 'June',total:5435,
        }
      ]
    },
    {
      id: 3,
      username: "Lannister",
      img: "https://images.pexels.com/photos/428333/pexels-photo-428333.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      email: "3snow@gmail.com",
      status: "pending",
      age: 45,
      phone:'+1 234 543 45',
      address:'Esc. 449 Subida Laura, 3, Gerona, Can 79114',
      country:'Mexico',
      data:[
        {
          name: 'January',total:3435,
        },
        {
          name: 'February',total:6935,
        },
        {
          name: 'March',total:435,
        },
        {
          name: 'April',total:2435,
        },
        {
          name: 'May',total:4935,
        },
        {
          name: 'June',total:3435,
        }
      ]
    },
    {
      id: 4,
      username: "Stark",
      img: "https://images.pexels.com/photos/1121796/pexels-photo-1121796.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      email: "4snow@gmail.com",
      status: "active",
      age: 16,
      phone:'+1 234 543 45',
      address:'8282 Nienow Mission, Lake Murielside, VA 88768-5815',
      country:'United States',
      data:[
        {
          name: 'January',total:7435,
        },
        {
          name: 'February',total:4935,
        },
        {
          name: 'March',total:1435,
        },
        {
          name: 'April',total:3435,
        },
        {
          name: 'May',total:4935,
        },
        {
          name: 'June',total:4435,
        }
      ]
    },
    {
      id: 5,
      username: "Targaryen",
      img: "https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      email: "5snow@gmail.com",
      status: "passive",
      age: 22,
      phone:'+1 234 543 45',
      address:'183 Janella Branch, Nathanieltown, NE 56250-0806',
      country:'United States',
      data:[
        {
          name: 'January',total:2435,
        },
        {
          name: 'February',total:2935,
        },
        {
          name: 'March',total:5435,
        },
        {
          name: 'April',total:8435,
        },
        {
          name: 'May',total:4935,
        },
        {
          name: 'June',total:1435,
        }
      ]
    },
    {
      id: 6,
      username: "Melisandre",
      img: "https://images.pexels.com/photos/775358/pexels-photo-775358.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      email: "6snow@gmail.com",
      status: "active",
      age: 15,
      phone:'+1 234 543 45',
      address:'Calle Susana 17 Puerta 923, Segovia, Cat 57652',
      country:'Spain',
      data:[
        {
          name: 'January',total:2435,
        },
        {
          name: 'February',total:4935,
        },
        {
          name: 'March',total:1435,
        },
        {
          name: 'April',total:5435,
        },
        {
          name: 'May',total:1935,
        },
        {
          name: 'June',total:4435,
        }
      ]
    },
    {
      id: 7,
      username: "Clifford",
      img: "https://images.pexels.com/photos/712513/pexels-photo-712513.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      email: "7snow@gmail.com",
      status: "passive",
      age: 44,
      phone:'+1 234 543 45',
      address:'690 Collette Brooks, Lake Dell, OK 00035',
      country:'Canada',
      data:[
        {
          name: 'January',total:1435,
        },
        {
          name: 'February',total:4935,
        },
        {
          name: 'March',total:5435,
        },
        {
          name: 'April',total:3435,
        },
        {
          name: 'May',total:2935,
        },
        {
          name: 'June',total:4435,
        }
      ]
    },
    {
      id: 8,
      username: "Frances",
      img: "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      email: "8snow@gmail.com",
      status: "active",
      age: 36,
      phone:'+31 234 543 45',
      address:'Lindenstr. 33c, Selinabrunn, HH 62020',
      country:'Germany',
      data:[
        {
          name: 'January',total:2435,
        },
        {
          name: 'February',total:5935,
        },
        {
          name: 'March',total:2435,
        },
        {
          name: 'April',total:1435,
        },
        {
          name: 'May',total:5935,
        },
        {
          name: 'June',total:3435,
        }
      ]
    },
    {
      id: 9,
      username: "Roxie",
      img: "https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      email: "snow@gmail.com",
      status: "pending",
      age: 65,
      phone:'+1 980 233 45',
      address:'229 Cremin Alley, South Aronton, IA 73901',
      country:'United States',
      data:[
        {
          name: 'January',total:2435,
        },
        {
          name: 'February',total:2935,
        },
        {
          name: 'March',total:3435,
        },
        {
          name: 'April',total:3435,
        },
        {
          name: 'May',total:1935,
        },
        {
          name: 'June',total:7435,
        }
      ]
    },
    {
      id: 10,
      username: "Roxie",
      img: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      email: "snow@gmail.com",
      status: "active",
      age: 65,
      phone:'+1 443 523 45',
      address:'66742 Kourtney Knolls, Grantland, WV 32794',
      country:'United States',
      data:[
        {
          name: 'January',total:2435,
        },
        {
          name: 'February',total:4935,
        },
        {
          name: 'March',total:2435,
        },
        {
          name: 'April',total:3435,
        },
        {
          name: 'May',total:4935,
        },
        {
          name: 'June',total:4435,
        }
      ]
    },
];