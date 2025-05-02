'use client';
import { useRouter, useSearchParams } from 'next/navigation';
import styles from '@/styles/Pagination.module.css';

export default function Pagination({ total, currentPage }) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const page = Number(currentPage) || 1;
  const limit = 10;

  const goToPage = (pageNumber) => {
    const params = new URLSearchParams(searchParams.toString());
    params.set('page', pageNumber);
    router.push(`/destination?${params.toString()}`);
  };

  if (total <= 1) return null;

  return (
    <ul className={styles.pagination}>
      <li>&lt;</li>
      {
        Array.from({ length: total }).map((v, i) => (
          <li key={i} className={currentPage === i ? styles.active : ''}>{i + 1}</li>
        ))
      }
      <li>&gt;</li>
    </ul>
  );
}
