import { FC } from 'react';
import './style.css';

interface HeaderProps {}

const Header: FC<HeaderProps> = (): JSX.Element => (
  <header className='header-container'>
    <a href='/#'>Logo</a>
    <nav>
      <ul className='menu-container'>
        <li>
          <a href='/#'>Home</a>
        </li>
        <li>
          <a href='/#'>About</a>
        </li>
      </ul>
    </nav>
  </header>
);

export default Header;
