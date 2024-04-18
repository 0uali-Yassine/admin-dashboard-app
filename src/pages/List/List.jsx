import React from 'react';
import './list.scss';
import Sidebar from '../../component/sidebar/Sidebar';
import Navbar from '../../component/navbar/Navbar';
import Datatable from '../../component/datatable/Datatable';

function List({title,src}) {
  return (
    <div className='list'>
      <Sidebar/>
      <div className="listContainer">
        <Navbar/>
        <Datatable title={title} src={src} />
      </div>
    </div>
  )
}

export default List;
