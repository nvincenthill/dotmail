import React from 'react';
import PropTypes from 'prop-types';

const Response = (props) => {
  const { response } = props;
  const { message, error, data } = response;
  const messageView = <div className="response-message success">{message}</div>;
  const errorView = <div className="response-message error">{`ERROR: ${error}`}</div>;
  const dataView = <div className="response-message data">{data}</div>;
  return (
    <div className="response-container">
      {message ? messageView : null}
      {error ? errorView : null}
      {data ? dataView : null}
    </div>
  );
};

Response.propTypes = {
  response: PropTypes.PropTypes.shape({
    message: PropTypes.string,
    data: PropTypes.string,
    error: PropTypes.string,
  }).isRequired,
};

export default Response;
