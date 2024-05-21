import PropTypes from 'prop-types';
import style from './Icon.module.scss';

const Icon = ({ IconComponent, alt }) => {
  return <IconComponent className={style.icon} aria-label={alt} />;
};

Icon.propTypes = {
  IconComponent: PropTypes.elementType.isRequired,
  alt: PropTypes.string.isRequired,
};

export default Icon;
