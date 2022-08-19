import React from "react";

const LinkButton = React.forwardRef(({ children, onClick, href }, ref) => {
  return (
    <a
      className={`bg-secondary flex items-center justify-center rounded-lg 3xl:rounded-3xl w-52 h-20 3xl:w-[22rem] 3xl:h-[7.5rem] text-p 3xl:text-p_xl text-white
      `}
      href={href}
      onClick={onClick}
      ref={ref}
    >
      {children}
    </a>
  );
});

export default LinkButton;
