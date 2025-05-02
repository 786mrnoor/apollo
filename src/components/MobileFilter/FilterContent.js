'use client';

import { useState } from 'react';
import { filterLabels, filterOptions } from '@/filter-sort-data';
import styles from './FilterContent.module.css';
import useFilter from '@/hooks/useFilter';

export default function FilterContent({ appliedFilter, setShowModal }) {
    const [filterKey, setFilterKey] = useState('consultMode');
    const [filters, handleCheckboxChange, applyFilter] = useFilter(appliedFilter);

    function submit(){
        setShowModal(false);
        applyFilter();
    }
    return (
        <div className={styles.modal}>
            <div className={styles.header}>
                <p>Filters</p>
                <button>Clear All</button>
            </div>

            <div className={styles.body}>
                <ul className={styles.filterKeys}>
                    {
                        Object.entries(filterLabels).map(([key, groupLabel]) =>
                            <li
                                key={key}
                                className={filterKey === key ? styles.active : ''}
                                onClick={() => setFilterKey(key)}
                            >{groupLabel}</li>
                        )
                    }
                </ul>
                <div className={styles.filterOptions}>
                    {
                        filterOptions[filterKey].map(({ label, value }) => (
                            <label key={value}>
                                <input
                                    type="checkbox"
                                    value={value}
                                    name={value}
                                    checked={filters[filterKey]?.includes(value)}
                                    onChange={() => handleCheckboxChange(filterKey, value)}
                                />
                                <span className={styles.checkboxText}>{label}</span>
                                <span className={styles.checkMark}></span>
                            </label>
                        ))
                    }
                </div>
            </div>

            <div className={styles.footer}>
                <button onClick={() => setShowModal(false)}>Cancel</button>
                <button onClick={submit}>Apply</button>
            </div>
        </div>
    )
};
