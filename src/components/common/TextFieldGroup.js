import React  from 'react';
import PropTypes from 'prop-types';

const TextFieldGroup = ({field, value, placeholder, error, type, onChange}) => {
	return(
	<div className="form-group">
		<input 
			className="form-control"
			placeholder={placeholder} 
			type={type} 
			value={value} 
			name={field}
			onChange={onChange}
		/>
		{error && <span style={{color:'red'}} className="help-block">{error}</span>}
	</div>
	);
}

TextFieldGroup.propTypes = {
	field: PropTypes.string.isRequired,
	value: PropTypes.string.isRequired,
	placeholder: PropTypes.string.isRequired,
	error: PropTypes.string,
	type: PropTypes.string.isRequired,
	onChange: PropTypes.func.isRequired
}

TextFieldGroup.defaultProps = {
	type:'text'
}

export default TextFieldGroup;