'use client';

import { useEffect } from 'react'
import styles from './sortByContent.module.css'
import Image from 'next/image';
import { sortOptions } from '@/filter-sort-data';
import useSort from '@/hooks/useSort';

export default function SortByContent({ setShowModal, sortBy }) {
    const [sort, label, applyFilter] = useSort(sortBy)

    useEffect(() => {
        function handleClickOutside(event) {
            setShowModal(false);
        };
        document.addEventListener('click', handleClickOutside);

        return () => {
            document.removeEventListener('click', handleClickOutside);
        };
    }, []);
    const stopPropagation = (e) => {
        e.nativeEvent.stopImmediatePropagation();
    }

    function handleChecked(e) {
        applyFilter(e.target.value);
        setShowModal(false);
    }
    return (
        <div className={styles.modal}>
            <div className={styles.sortByContent} onClick={stopPropagation}>
                <h2>Sort by
                    <Image src="/CircularCloseIcon.webp" alt="" width={18} height={18} onClick={() => setShowModal(false)} />
                </h2>
                <ul>
                    {
                        sortOptions.map((s) =>
                            <li key={s.label}>
                                <input type="radio" name="sort" value={s.value} defaultChecked={s.value === sortBy} onChange={handleChecked} id={s.value} />
                                <label htmlFor={s.value}>{s.label}</label>
                            </li>
                        )
                    }

                </ul>
            </div>
        </div>
    )
};
