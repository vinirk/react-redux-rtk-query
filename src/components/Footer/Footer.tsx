import { FC } from 'react';
import './style.css';

interface FooterProps {}

const Footer: FC<FooterProps> = (): JSX.Element => (
  <footer className='footer-container'>
    <span>Vinicius | vinirk@gmail.com</span>
  </footer>
);

export default Footer;
