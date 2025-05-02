'use client';

import styles from './MobileFilter.module.css';
import SortByContent from './SortByContent';
import { useState } from 'react';
import Image from 'next/image';
import FilterContent from './FilterContent';
import useSort from '@/hooks/useSort';
// import validSortLabel from '@/utils/validSortLabel';

export default function MobileFilter({ filters, labels, sortBy }) {
    const [sort, label, submit] = useSort(sortBy);

    const [showSort, setShowSort] = useState(false);
    const [showFilter, setShowFilter] = useState(false);
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
                    labels.map(label => (
                        <li key={label} className={styles.appliedFilter}>
                            {label}
                            <Image src='/blueClose.webp' alt='close' width={20} height={20} />
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
                <FilterContent appliedFilter={filters} setShowModal={setShowFilter} />
            }
        </>
    )
};
