import React from "react";
import classNames from "classnames";
import { SectionProps } from "../../utils/SectionProps";

const propTypes = {
  ...SectionProps.types,
};

const defaultProps = {
  ...SectionProps.defaults,
};

const Hero3 = ({
  className,
  topOuterDivider,
  bottomOuterDivider,
  topDivider,
  bottomDivider,
  hasBgColor,
  invertColor,
  ...props
}) => {
  const outerClasses = classNames(
    "hero section center-content",
    topOuterDivider && "has-top-divider",
    bottomOuterDivider && "has-bottom-divider",
    hasBgColor && "has-bg-color",
    invertColor && "invert-color",
    className
  );

  const innerClasses = classNames(
    "hero-inner section-inner",
    topDivider && "has-top-divider",
    bottomDivider && "has-bottom-divider"
  );

  return (
    <section {...props} className={outerClasses}>
      <div className="container-sm">
        <div className={innerClasses}>
          <p
            meta
            charset="UTF-8"
            className="m-0 mb-32 reveal-from-bottom"
            data-reveal-delay="400"
          >
            ⚠️ Caution ⚠️ the PocketGym 📱 demo requires considerate amounts of
            CPU 💻 and GPU 🖥️ power 🔋 . Freezing 🥶 and latency may occur.
          </p>
        </div>
      </div>
    </section>
  );
};

Hero3.propTypes = propTypes;
Hero3.defaultProps = defaultProps;

export default Hero3;
