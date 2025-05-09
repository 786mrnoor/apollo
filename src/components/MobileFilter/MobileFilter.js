'use client';

import styles from './MobileFilter.module.css';
import SortByContent from './SortByContent';
import { useState } from 'react';
import Image from 'next/image';
import FilterContent from './FilterContent';
import useSort from '@/hooks/useSort';
import { useRouter } from 'next/navigation';
// import validSortLabel from '@/utils/validSortLabel';

export default function MobileFilter({ initialFilters, labels, sortBy }) {
    const [sort, label] = useSort(sortBy);
    const [showSort, setShowSort] = useState(false);
    const [showFilter, setShowFilter] = useState(false);
    const router = useRouter();
    
    function removeFilter(key, value) {
        const params = new URLSearchParams(window.location.search);
        params.delete(key, value);
        router.replace(`/?${params.toString()}`);
    }
    return (
        <>
            <ul className={styles.mobileFilter}>
                <li className={styles.sortBy} onClick={() => setShowSort(!showSort)}>
                    {label}
                    <Image src='/down_arrow.svg' alt='down arrow' width={12} height={7} />
                </li>
                <li className={styles.filter} onClick={() => setShowFilter(!showFilter)}>
                    <Image src='/filter.webp' alt='filter' width={20} height={20} />
                    Filter
                </li>

                {
                    labels.map(({ label, value, key }) => (
                        <li key={value} className={styles.appliedFilter}>
                            {label}
                            <Image src='/blueClose.webp' alt='close' width={20} height={20} onClick={() => removeFilter(key, value)} />
                        </li>
                    ))
                }

            </ul>
            {
                showSort &&
                <SortByContent setShowModal={setShowSort} sortBy={sortBy} />
            }
            {
                showFilter &&
                <FilterContent initialFilters={initialFilters} setShowModal={setShowFilter} />
            }
        </>
    )
};
