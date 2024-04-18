import React from 'react';
import './datatable.scss';
import { DataGrid} from '@mui/x-data-grid';
import { userColumns} from '../../datatablesource';
import { useGlobalContext } from '../../Context';
import { NavLink } from 'react-router-dom';




function Datatable({title,src}) {
  const {data,handlView,handlDelete} = useGlobalContext();
    

    const actionColumn ={
        field:"action",
        headerName:"Action",
        width:200,
        renderCell:(params) =>{
            return (
                <div className='cellAction'>
                  <NavLink to='/users/test' style={{textDecoration:'none'}}>
                    <div className='viewButton' onClick={()=> handlView(params.row.id)}>View</div>
                  </NavLink>
                  <div className='deleteButton' onClick={()=> handlDelete(params.row.id)}>Delete</div>
                </div>
            )
        }
    }
    
  return (
    <div className='datatable'>
      <div className="dataTableTitle">
       {title}
        <NavLink to={src} style={{textDecoration:'none'}} className='link'>Add New</NavLink>
      </div>
     <DataGrid
     className='datagrid'
        rows={data}
        columns={userColumns.concat(actionColumn)}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 9},
          },
        }}
        pageSizeOptions={[5, 10]}
        checkboxSelection
      />
    </div>
  )
}

export default Datatable;
