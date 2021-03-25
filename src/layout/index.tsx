import React from 'react';
import { withRouter } from 'react-router-dom';

export default withRouter(({ location, children, history }: any) => {
  return (
    <div>
      layout
      {children}
    </div>
  );
});
