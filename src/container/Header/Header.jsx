import React from 'react';

import { SubHeading } from '../../components';
import {images} from '../../constants';


import './Header.css';

const Header = () => (
  <div className='app__header app__wrapper section__padding' id='home'>
    <div className='app__wrapper_info'>
<SubHeading title="Chase the new flavor" />
<h1 className='app__header-h1'>the key to Fine Dining</h1>
<p className='p__opensans' style={{margin: '2rem 0'}}>We have some of the best food in all of New England with locally sourced organic ingredients.</p>
<button type='button' className='custom__button'>Explore Menu</button>
    </div>

    <div className='app_wrapper_img'>
  <img src={images.welcome} alt="header img" />
    </div>
  </div>
);

export default Header;
