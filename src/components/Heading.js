'use client';

import { sortOptions } from '@/filter-sort-data';
import useSort from '@/hooks/useSort';
import styles from '@/styles/Heading.module.css';
import Image from 'next/image';
import { useEffect, useState } from 'react';

export default function Heading({ sortBy, total }) {
    const [show, setShow] = useState(false);
    const [sort, label, applySort] = useSort(sortBy);

    useEffect(() => {
        function handleClickOutside(event) {
            if (show) {
                setShow(false);
            }
        };
        document.addEventListener('click', handleClickOutside);
        return () => {
            document.removeEventListener('click', handleClickOutside);
        };
    }, [show]);

    return (
        <div className={styles.heading}>
            <h1>
                Consult General Physicians Online - Internal Medicine Specialists
                <span className={styles.count}> ({total} doctors)</span>
            </h1>
            <div className={styles.sortSelect}>
                <button onClick={() => setShow(!show)}>
                    <Image src='/sort.svg' alt='sort' width={18} height={18} />
                    {label}
                    <Image src='/angle-down.svg' alt='angle-down' width={12} height={12} />
                </button>

                {show &&
                    <ul>
                        {
                            sortOptions.map(s => (
                                <li key={s.label} onClick={(e) => applySort(s.value)}>{s.label}</li>
                            ))
                        }
                    </ul>
                }

            </div>
        </div>
    )
};
