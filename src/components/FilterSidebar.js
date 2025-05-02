'use client';
import styles from '@/styles/FilterSidebar.module.css';
import React, { useEffect } from 'react';
import { filterLabels, filterOptions } from '@/filter-sort-data';
import Image from 'next/image';
import FilterOptions from './FilterOptions';
import useFilter from '@/hooks/useFilter';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

export default function FilterSidebar({ appliedFilters, labels }) {
  // const [filters, handleCheckboxChange] = useFilter(appliedFilters);

  const router = useRouter();
  function handleCheckboxChange(key, value) {
    const currentValues = appliedFilters[key];
    const isChecked = currentValues.includes(value);

    let filtersObj = {
      ...appliedFilters,
      [key]: isChecked
        ? currentValues.filter((v) => v !== value) // remove
        : [...currentValues, value]              // add
    };

    const params = new URLSearchParams(window.location.search);
    Object.entries(filtersObj).map(([key, options]) => {
      if (options.length > 0) {
        filtersObj[key] = options;
      }
    })
    params.set('filterObject', JSON.stringify(filtersObj));
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
          labels.map(value => (
            <li key={value} className={styles.appliedFilter}>
              {value}
              <Image src='/blueClose.webp' alt='close' width={20} height={20} />
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
              <FilterOptions filterKey={key} filters={appliedFilters} options={options} onChange={handleCheckboxChange} />
            </React.Fragment>
          ))
        }
      </div >
    </aside>
  );
}
