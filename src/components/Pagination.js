'use client';
import { useRouter } from 'next/navigation';
import styles from '@/styles/Pagination.module.css';

export default function Pagination({ total, currentPage = 1 }) {
  const router = useRouter();

  const goToPage = (pageNumber) => {
    const params = new URLSearchParams(window.location.search);
    params.set('page', pageNumber);
    router.push(`/?${params.toString()}`);
  };

  return (
    <ul className={styles.pagination}>
      <li 
        onClick={() => goToPage(currentPage - 1)}
        className={currentPage <= 1 ? styles.disabled : ''}
      >&lt;</li>
      {
        Array.from({ length: total }).map((v, i) => (
          <li
            key={i}
            className={currentPage === i + 1 ? styles.active : ''}
            onClick={() => goToPage(i + 1)}
          >
            {i + 1}
          </li>
        ))
      }
      <li 
        onClick={() => goToPage(currentPage + 1)}
        className={currentPage >= total ? styles.disabled : ''}
      >&gt;</li>
    </ul>
  );
}
