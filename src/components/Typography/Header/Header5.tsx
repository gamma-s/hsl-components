/**
 * @fileoverview The implementation of the <h1>–<h6>: The HTML Section Heading
 * elements
 * @see https://developer.mozilla.org/en-US/docs/Web/HTML/Element/Heading_Elements
 */

/**
 * Module dependencies
 */
import classNames from 'classnames';

import {Typography} from './index.type';
import {prefix} from '../../../settings/index';

import styles from './index.module.scss';

/**
 * The HTML Section Heading Component
 * @param {object?} props
 * @param {React.ReactNode?} props.children
 * @param {string?} props.className
 * @return {JSX.Element} Caption component
 */
const Header5 = ({children, className}: Typography) => {
  const headerClassPrefix = {
    [styles[`${prefix}-header--5`]]: true,
  };

  const headerClasses = classNames(className, headerClassPrefix);

  return <h5 className={headerClasses}>{children}</h5>;
};

export default Header5;