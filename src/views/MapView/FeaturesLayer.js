import React, { useEffect, forwardRef } from "react";

const FeaturesLayer = forwardRef(({ children, features }, ref) => {
  useEffect(() => {
    ref.current.features = features;
  }, [features, ref]);

  return <vl-map-features-layer ref={ref}>{children}</vl-map-features-layer>;
});

export default FeaturesLayer;
