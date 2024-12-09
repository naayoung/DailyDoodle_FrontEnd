import '@styles/layouts/header.css';
import { IoSearchSharp } from 'react-icons/io5';
import { FaRegBell } from 'react-icons/fa';
//import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <div className='header'>
      <div className='header-content'>
        <div className='logo'>
          <img
            src='/img/dailyDoodle_logo.png'
            alt='DailyDoodle Logo'
            className='logo-img'
          />
        </div>
        <div className='searchIcon'>
          <IoSearchSharp />
        </div>
        <div className='alarmIcon'>
          <FaRegBell />
        </div>
      </div>
    </div>
  );
}
