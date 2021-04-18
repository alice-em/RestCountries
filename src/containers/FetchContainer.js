import PropTypes from 'prop-types';

import { useFetchContext } from '../context/FetchProvider';

const FetchContainer = ({ children, ErrorComponent, LoadingComponent }) => {
  const { isLoading, error } = useFetchContext();
  let component;
  if (isLoading) {
    component = LoadingComponent;
  } else if (error) {
    component = ErrorComponent;
  } else {
    component = children;
  }
  return component;
};

FetchContainer.propTypes = {
  children: PropTypes.node.isRequired,
  ErrorComponent: PropTypes.node.isRequired,
  LoadingComponent: PropTypes.node.isRequired,
};

export default FetchContainer;
