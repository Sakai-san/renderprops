import React, { useState, ComponentType } from "react";

const WithLoader = <P extends {}>(WrappedComponent: ComponentType<P>) => (props: P) => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [isLoading, setIsLoading] = useState(true);

  const onLoad = () => setIsLoading(false);

  
  return (
      <div>
        { !isLoading && <div>L O A D I N G</div> }
        <WrappedComponent {...props} onLoad={onLoad} />
      </div>
  );
};

export default WithLoader;  