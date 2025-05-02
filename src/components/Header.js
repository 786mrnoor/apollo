import styles from '@/styles/Header.module.css';
// import AngleDown from '@/components/svg/AngleDown';
import Image from 'next/image';

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.headerTop}>
        <a href="/">
          <img src="https://images.apollo247.in/images/icons/apollo247.svg" title="Online Doctor Consultation &amp; Medicines" alt="Online Doctor Consultation &amp; Medicines" />
        </a>

        <div className={styles.headerLocation}>
          <img src='http://images.apollo247.in/images/ic_location_new.svg?tr=q-80,w-50,dpr-4,c-at_max' alt="chooseLocation" width="24" height="24" />
          <div className={styles.locationText}>
            <label>Select Location</label>
            <div className={styles.text}>
              <p>Select Address</p>
              <Image src='/angle-down.svg' alt='angle-down' width={12} height={12} />
            </div>
          </div>
        </div>

        <div className={styles.searchInput}>
          <input type="text" placeholder='Search Doctors, Specialities, Conditions etc.' />
        </div>

        <div className={styles.loginLogo}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M406.5 399.6C387.4 352.9 341.5 320 288 320l-64 0c-53.5 0-99.4 32.9-118.5 79.6C69.9 362.2 48 311.7 48 256C48 141.1 141.1 48 256 48s208 93.1 208 208c0 55.7-21.9 106.2-57.5 143.6zm-40.1 32.7C334.4 452.4 296.6 464 256 464s-78.4-11.6-110.5-31.7c7.3-36.7 39.7-64.3 78.5-64.3l64 0c38.8 0 71.2 27.6 78.5 64.3zM256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zm0-272a40 40 0 1 1 0-80 40 40 0 1 1 0 80zm-88-40a88 88 0 1 0 176 0 88 88 0 1 0 -176 0z" /></svg>
        </div>
      </div>

      <div className={styles.headerBottom}>
        <ul>
          <li>
            <a href="#">Buy Medicines</a>
          </li>
          <li>
            <a href="#">Find Doctors</a>
          </li>
          <li>
            <a href="#">Lab Tests</a>
          </li>
          <li>
            <a href="#">Circle Membership</a>
          </li>
          <li>
            <a href="#">Health Records</a>
          </li>
          <li>
            <a href="#">Diabetes Reversal</a>
          </li>
          <li>
            <a href="#">
              Buy Insurance
              <span>New</span>
            </a>
          </li>
        </ul>
      </div>

    </header>
  );
}

