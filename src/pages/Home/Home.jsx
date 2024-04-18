import React from 'react';
import  './home.scss';
import Sidebar from '../../component/sidebar/Sidebar';
import Navbar from '../../component/navbar/Navbar';
import Widget from '../../component/widget/Widget'
import Featured from '../../component/featured/Featured';
import Chart from '../../component/chart/Chart';
import Table from '../../component/table/Table';
import { userRows } from '../../datatablesource';
function Home() {
  return (
    <div className='home'>
      <Sidebar/>
      <div className="home_container">
        <Navbar/>
        <div className="widgets">
          <Widget type="user"/>
          <Widget type="order"/>
          <Widget type="earning"/>
          <Widget type="balance"/>
        </div>
        <div className="charts">
          <Featured/>
          <Chart aspect={2 / 1} title='Last 6 Months (Revenue)' data={userRows[0].data}/>
        </div>
        <div className="listcontainer">
          <div className="listTitle">Lasted Transactions</div>
          <Table/>
        </div>
      </div>
    </div>
  )
}

export default Home;
