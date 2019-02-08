import React from 'react';
import PropTypes from 'prop-types';

import styled from 'styled-components';

const ResponseStyles = styled.div`
  .response {
    padding: 0.5rem;
  }

  .error {
    background: red;
    color: white;
  }

  .success {
    background: green;
    color: white;
  }
`;

const Response = (props) => {
  const { response } = props;
  const { message, error } = response;
  const responseView = <div className={`response ${error ? 'error' : 'success'}`}>{message}</div>;
  return <ResponseStyles>{message === null ? null : responseView}</ResponseStyles>;
};

Response.propTypes = {
  response: PropTypes.PropTypes.shape({
    message: PropTypes.string,
    error: PropTypes.bool,
  }).isRequired,
};

export default Response;
