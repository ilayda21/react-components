import classNames from "classnames";
import PropTypes from "prop-types";
import React from "react";
import type { HTMLProps, ReactNode } from "react";

type Props = {
  /**
   * The content of the row.
   */
  children: ReactNode;
  /**
   * Optional class(es) to pass to the wrapping div element.
   */
  className?: string;
} & HTMLProps<HTMLDivElement>;

const Row = ({ children, className, ...props }: Props): JSX.Element => (
  <div className={classNames(className, "row")} {...props}>
    {children}
  </div>
);

Row.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};

export default Row;
