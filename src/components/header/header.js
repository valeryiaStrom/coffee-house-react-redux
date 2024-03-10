import React, { forwardRef } from "react";

const Header = forwardRef((props, ref) => {
  return (
    <header className='header header_sticky' ref={ref}>
      {props.children}
    </header>
  );
});

export default Header;
