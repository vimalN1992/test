import React, { Component } from 'react';
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';
import '../../../node_modules/react-bootstrap-table/dist/react-bootstrap-table-all.min.css';
import CustomInsertModal from './CustomInsertModal';

const products = [{
      id: 1,
      name: "Product1",
      price: 120,
      status:0
  }, {
      id: 2,
      name: "Product2",
      price: 80,
      status:0
  },{
      id: 3,
      name: "Product1",
      price: 120,
      status:0
  }, {
      id: 4,
      name: "Product2",
      price: 80,
      status:0
  },{
      id: 5,
      name: "Product1",
      price: 120,
      status:1
  }, {
      id: 6,
      name: "Product2",
      price: 80,
      status:1
  },{
      id: 7,
      name: "Product1",
      price: 120,
      status:0
  }, {
      id: 8,
      name: "Product2",
      price: 80,
      status:0
  },{
      id: 9,
      name: "Product1",
      price: 120,
      status:1
  }, {
      id: 10,
      name: "Product2",
      price: 80,
      status:1
  },{
      id: 11,
      name: "Product1",
      price: 120,
      status:0
  }, {
      id: 12,
      name: "Product2",
      price: 80,
      status:0
  }];


class Datatable extends Component {
    constructor(props) {
      super(props);
      this.cellButton = this.cellButton.bind(this);
    }

    trClassFormat(row, rowIndex) {
      return rowIndex % 2 === 0 ? "tr-odd" : "tr-even";  // return class name.
    }
    handleInsertedRow(row) {
     console.log(row)
    }
    afterSaveCell(row, cellName, cellValue) {
      console.log(row);
    }
    handleDeletedRow(row, cellName) {
      console.log(cellName)
    }

    cellButton(cell, row, enumObject, rowIndex) {

      let theButton;
        if(row.status === 0){ 
          theButton = <div style={{textAlign:'center'}}>
                        <button style={{borderRadius:20}} onClick={() => {console.log(row)}} className="btn btn-success btn-circle">
                          <i className="fa fa-link"></i>
                        </button>
                      </div>
        }else{
          theButton = <div>{row.status}</div>
        }
        return theButton  
    }

    createCustomModal = (onModalClose, onSave,) => {

      const attr = {
          onModalClose, onSave,
      };
      return (
        <CustomInsertModal { ... attr } />
      );
    }

  render() {
    const options = {
      afterInsertRow: this.handleInsertedRow,
      afterDeleteRow: this.handleDeletedRow,
      insertModal: this.createCustomModal
      
    };
    const selectRow = {
      mode: 'checkbox',
      clickToSelect: true,
      bgColor: 'red',
    };
    const cellEdit = {
      mode: 'click', // click cell to edit
      blurToSave: true,
      afterSaveCell: this.afterSaveCell,
    };
  return (
  
  <div className="container">
  
  <h1>DataTable</h1>
  <BootstrapTable 
      data={products}
      striped 
      hover 
      pagination 
      trClassName={ this.trClassFormat } 
      selectRow={ selectRow }
      options={ options }
      insertRow 
      deleteRow
      cellEdit={ cellEdit }
      search  
      multiColumnSearch
      exportCSV 
  >
      <TableHeaderColumn hidden isKey filter={ { type: 'TextFilter', delay: 500 } } dataField='id'>Product ID</TableHeaderColumn>
      <TableHeaderColumn filter={{type: 'TextFilter'}} dataField='name'>Product Name</TableHeaderColumn>
      <TableHeaderColumn  filter={{type: 'TextFilter'}} dataField='price'>Product Price</TableHeaderColumn>
      <TableHeaderColumn  dataFormat={this.cellButton} editable={false}>Button</TableHeaderColumn>
  </BootstrapTable>

      </div>
    );
  }
}

export default Datatable; 