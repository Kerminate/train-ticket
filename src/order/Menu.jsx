import React, {
  memo,
} from 'react';
import classnames from "classnames";
import PropTypes from "prop-types";
import "./Menu.css";

const MenuItem = memo((props) => {
  const {
    onPress,
    title,
    value,
    active,
  } = props;
  return (
    <li className={classnames({active})} onClick={() => onPress(value)}>
      { title }
    </li>
  );
});

MenuItem.propTypes = {
  onPress: PropTypes.func,
  title: PropTypes.string.isRequired,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  active: PropTypes.bool.isRequired,
};

const Menu = memo((props) => {
  const {
    show,
    options,
    onPress,
    hideMenu,
  } = props;
  return (
    <div className="menu">
      { show && <div className="menu-mask" onClick={() => hideMenu()}></div> }
      <div className={classnames('menu', {show})}>
        <div className="menu-title"></div>
        <ul>
          {
            options &&
            options.map(option => {
              return (
                <MenuItem
                  {...option}
                  key={option.value}
                  onPress={onPress}
                >
                </MenuItem>
              );
            })
          }
        </ul>
      </div>
    </div>
  );
});

Menu.propTypes = {
  show: PropTypes.bool.isRequired,
  options: PropTypes.array,
  onPress: PropTypes.func,
  hideMenu: PropTypes.func.isRequired,
};

export default Menu;
