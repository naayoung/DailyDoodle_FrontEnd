import '@styles/layouts/footer.css';

export default function Footer() {
  return (
    <div className='footer'>
      <div className='footer-content'>
        <div className='footer-header'>
          <div className='footer-logo-container'>
            <div className='footer-logo'>
              <img src='/img/dailyDoodle_logo.png' alt='DailyDoodle_Logo' />
            </div>
            <div className='footer-address'>
              <span>옹이네</span>
              <span>서울시 마포구 월드컵북로 4길 77</span>
              <span>02-432-5121 | 02-739-4122</span>
              <span>대표자 옹이 | 개인정보책임자 이망곰</span>
              <span>사업자등록번호 000-00-0000</span>
            </div>
          </div>
        </div>
        <hr className='footer-divider' />
        <div className='footer-social-container'>
          <div className='footer-copy'>
            © 2024 DailyDoodle™. All Rights Reserved.
          </div>
        </div>
      </div>
    </div>
  );
}
