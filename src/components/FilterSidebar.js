'use client';
import styles from '@/styles/FilterSidebar.module.css';
import React, { useEffect } from 'react';
import { filterLabels, filterOptions } from '@/filter-sort-data';
import Image from 'next/image';
import FilterOptions from './FilterOptions';
import useFilter from '@/hooks/useFilter';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

export default function FilterSidebar({ initialFilters, labels }) {
  // const [filters, handleCheckboxChange] = useFilter(appliedFilters);

  const router = useRouter();
  function handleCheckboxChange(key, value) {
    const currentValues = initialFilters[key];
    const isChecked = currentValues.includes(value);

    const params = new URLSearchParams(window.location.search);
    params.delete('page');
    if (isChecked) {
      params.delete(key, value);
    } else {
      params.append(key, value);
    }
    router.replace(`/?${params.toString()}`);
  }

  function removeFilter(key, value) {
    const params = new URLSearchParams(window.location.search);
    params.delete(key, value);
    router.replace(`/?${params.toString()}`);
  }

  return (
    <aside className={styles.sidebar}>
      <div className={styles.header}>
        <p>Filters</p>
        <button>Clear All</button>
      </div>

      <ul className={styles.appliedFilters}>
        {
          labels.map(({ value, label, key }) => (
            <li key={value} className={styles.appliedFilter}>
              {label}
              <Image src='/blueClose.webp' alt='close' width={20} height={20} onClick={() => removeFilter(key, value)} />
            </li>
          ))
        }
      </ul>

      <div className={styles.divider}></div>

      <div className={styles.filters}>
        <Link href="/?sortby=distance">Show Doctors Near Me</Link>

        {
          Object.entries(filterOptions).map(([key, options]) => (
            <React.Fragment key={key}>
              <p>{filterLabels[key]}</p>
              <FilterOptions filterKey={key} filters={initialFilters} options={options} onChange={handleCheckboxChange} />
            </React.Fragment>
          ))
        }
      </div >
    </aside>
  );
}
