import React, { Component } from 'react';
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';
import '../../../node_modules/react-bootstrap-table/dist/react-bootstrap-table-all.min.css';

const products=[{
    id:1,
    img:"http://www.tenet.res.in/admin/_/images/company_logo/chakra.jpg"
   },{
    id:2,
    img:"http://www.tenet.res.in/admin/_/images/company_logo/cygni.jpg"
   },{
    id:3,
    img:"http://www.tenet.res.in/admin/_/images/company_logo/chakra.jpg"
   },{
    id:4,
    img:"http://www.tenet.res.in/admin/_/images/company_logo/cygni.jpg"
},{
    id:5,
    img:"http://www.tenet.res.in/admin/_/images/company_logo/cygni.jpg"
},{
    id:6,
    img:"http://www.tenet.res.in/admin/_/images/company_logo/chakra.jpg"
}];

class Incu_App extends Component {
  constructor(props){
    super(props);
    
  } 
  
  render() {

  const listItems = products.map((v) =>       
  <tr key={v.id} className="col-sm-3" >
    <td >
      <center>
        <img className="img-responsive" style={{width:200,height:100,marginRight:100,borderStyle: 'solid',
    borderWidth:2,borderColor:'#ddd',marginTop:10}} src={v.img} />
      </center>                              
    </td>
  </tr>              
  );

    return (
      <div className="container"> 
          <table className="col-sm-12">
            <thead>
              <tr><th> <h1><center>Images </center></h1></th></tr>
            </thead>
            <tbody >            
                  {listItems}
            </tbody>          
        </table>
      </div>
    );
    
  }
}

 
export default (Incu_App);