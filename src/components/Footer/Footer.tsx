import { FC } from 'react';
import './style.css';

interface FooterProps {
  description?: string;
}

const Footer: FC<FooterProps> = ({
  description = 'Vinicius | vinirk@gmail.com',
}): JSX.Element => (
  <footer className='footer-container'>
    <span>{description}</span>
  </footer>
);

export default Footer;
