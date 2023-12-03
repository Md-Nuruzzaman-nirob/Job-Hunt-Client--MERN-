import cn from "../utils/cn";
import PropTypes from "prop-types";

const Container = ({ children, className, ...restProps }) => {
  return (
    <div
      className={cn("max-w-7xl mx-5 md:mx-10 xl:mx-auto", className)}
      {...restProps}
    >
      {children}
    </div>
  );
};
Container.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  restProps: PropTypes.array,
};

export default Container;
