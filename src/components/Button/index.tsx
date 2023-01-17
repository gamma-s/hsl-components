/**
 * @fileoverview The implementation of the HTML Button element.
 * @see https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button
 */

/**
 * Module dependencies
 */
import classNames from 'classnames';

import {Button} from './index.type';
import {ButtonText} from '../../components/Typography';
import {prefix} from '../../settings/';

import styles from './index.module.scss';

/**
 * HTML Button component
 * @param {Object} props
 * @param {React.ReactNode} props.children
 * @param {string} props.className
 * @param {boolean} props.disabled
 * @param {boolean} props.skeleton
 * @param {boolean} props.small
 * @param {string} props.kind
 * @param {string} props.href
 * @param {number} props.tabIndex
 * @param {string} props.type
 * @param {Object} props.other
 * @constructor
 */
const ControllerButton = ({
  className,
  disabled,
  skeleton,
  small,
  kind,
  href,
  tabIndex,
  type,
  children,
  ...other
}: Button &
  React.HTMLAttributes<HTMLButtonElement> &
  React.HTMLAttributes<HTMLAnchorElement>) => {
  const MODIFIER = 'button';

  const buttonClassPrefix = {
    [styles[`${prefix}-${MODIFIER}`]]: true,
    [styles[`${prefix}-${MODIFIER}--sm`]]: small,
    [styles[`${prefix}-${MODIFIER}--primary`]]: kind === 'primary',
    [styles[`${prefix}-${MODIFIER}--danger`]]: kind === 'danger',
    [styles[`${prefix}-${MODIFIER}--secondary`]]: kind === 'secondary',
    [styles[`${prefix}-${MODIFIER}--ghost`]]: kind === 'ghost',
    [styles[`${prefix}-${MODIFIER}--tertiary`]]: kind === 'tertiary',
    [styles[`${prefix}-${MODIFIER}--context`]]: kind === 'context',
    [styles[`${prefix}-${MODIFIER}--disabled`]]: disabled,
    [styles[`${prefix}-${MODIFIER}--skeleton`]]: skeleton,
  };

  const buttonClasses = classNames(className, buttonClassPrefix);

  const commonProps = {
    className: buttonClasses,
    tabIndex: tabIndex,
  };

  const otherProps = {
    disabled,
    type,
  };

  if (typeof href === 'undefined') {
    return (
      <button {...other} {...commonProps} {...otherProps}>
        <ButtonText className={styles[`${prefix}-button-text`]}>
          {children}
        </ButtonText>
      </button>
    );
  } else {
    // If href is provided, render an anchor tag
    const anchorProps = {
      role: 'button',
      href,
    };

    return (
      <a {...other} {...anchorProps} {...commonProps} {...otherProps}>
        <ButtonText className={styles[`${prefix}-button-text`]}>
          {children}
        </ButtonText>
      </a>
    );
  }
};

export default ControllerButton;
