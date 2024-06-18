import React from 'react';
import { useNavigate } from 'react-router-dom';

const WithAuth = WrappedComponent => {
    const navigate = useNavigate();
  return class extends React.Component {
    componentDidMount() {
      if (!this.props.currentUser) {
        navigate('/login');
      }
    }

    componentDidUpdate() {
      if (!this.props.currentUser) {
        navigate('/login');
      }
    }

    render() {
      return <WrappedComponent {...this.props} />;
    }
  };
};

export default WithAuth;