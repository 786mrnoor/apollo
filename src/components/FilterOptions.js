import styles from '@/styles/FilterSidebar.module.css';
import React, { useState } from 'react';

export default function FilterOptions({ filterKey, filters, onChange, options, itemsToShowInitially = 3 }) {
    const [visibleItemCount, setVisibleItemCount] = useState(itemsToShowInitially);
    const isExpanded = visibleItemCount < options.length;

    function toggleVisibility() {
        setVisibleItemCount(isExpanded ? options.length : itemsToShowInitially);
    };

    return (
        <div className={styles.filterOptions}>
            {
                options.slice(0, visibleItemCount).map(({ label, value }) => (
                    <label key={value}>
                        <input
                            type="checkbox"
                            value={value}
                            name={value}
                            checked={filters[filterKey]?.includes(value)}
                            onChange={() => onChange(filterKey, value)}
                        />
                        <span className={styles.checkboxText}>{label}</span>
                        <span className={styles.checkMark}></span>
                    </label>
                ))
            }
            {options.length > itemsToShowInitially && (
                <button onClick={toggleVisibility}>
                    {isExpanded ? `+${options.length - itemsToShowInitially} More` : 'Show Less'}
                </button>
            )}
        </div>
    );
}