import { FaArrowLeft } from "react-icons/fa";

import "./header.css";

const Header = () => {
  return (
    <header className='header'>
      <FaArrowLeft className='header__arrow' color='#fec465' />
      <h3 className='header__text'>Dragatron.</h3>
    </header>
  );
};

export default Header;
