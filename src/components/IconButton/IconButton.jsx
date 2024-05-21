import PropTypes from 'prop-types';
import Icon from '../Icon/Icon';

const IconButton = ({ IconComponent, altText, onClick }) => {
  return (
    <button  onClick={onClick}>
      <Icon IconComponent={IconComponent} alt={altText} />
    </button>
  );
};

IconButton.propTypes = {
  IconComponent: PropTypes.elementType.isRequired,
  altText: PropTypes.string.isRequired,
  onClick: PropTypes.func,
};

export default IconButton;
