import React, { Component } from 'react';


class CustomInsertModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value1: '', value2: ''};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange = (e) => {
      this.setState({ [e.target.name]: e.target.value });
  }

  handleSubmit(event) {
    console.log(this.state);
    event.preventDefault();
  }	
  handleSaveBtnClick = () => {
    console.log('hi')
  }

  render() {
    const { onModalClose, onSave } = this.props;

    return (
      <div style={ { backgroundColor: '#eeeeee', marginTop:100 } } className='modal-content'>
        
        <form onSubmit={this.handleSubmit}>
		      <div className="modal-header">
		        <button type="button" className="close" onClick={ onModalClose } data-dismiss="modal">&times;</button>
		        <h4 className="modal-title">Modal Header</h4>
		      </div>
		      <div className="modal-body">
		        <div className="form-group">
		        <label>
		          Name:
		          <input className="form-control" type="text" name='value1' value={this.state.value1} onChange={this.handleChange} />
		        </label>
		        </div>
		        <div className="form-group">
				<label>
		          Pick your favorite La Croix flavor:
		          <select name="value2" value={this.state.value2} onChange={this.handleChange} className="form-control">
		            <option value="">Select</option>
		            <option value="grapefruit">Grapefruit</option>
		            <option value="lime">Lime</option>
		            <option value="coconut">Coconut</option>
		            <option value="mango">Mango</option>
		          </select>
		        </label>
		        </div>
		      
		      </div>
		      <div className="modal-footer">
		      	<input type="submit" className='btn btn-success' value="Submit" />
		        <button className='btn btn-danger' onClick={ onModalClose }>Close</button>
		      </div>

       	</form>
        
      </div>
    );
  }
}
export default CustomInsertModal;