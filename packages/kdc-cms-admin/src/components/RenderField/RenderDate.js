import React from 'react';
import PropTypes from 'prop-types';
import { Input } from 'reactstrap';

const RenderDate = ({ name, register, initialValue, onChange, errors }) => (
  <Input
    type="date"
    name={name}
    innerRef={register}
    defaultValue={initialValue}
    onChange={onChange}
    invalid={errors[name] !== undefined}
  />
);

RenderDate.propTypes = {
  name: PropTypes.string.isRequired,
  register: PropTypes.func.isRequired,
  initialValue: PropTypes.any,
  onChange: PropTypes.func.isRequired,
  errors: PropTypes.any,
};

export default RenderDate;
