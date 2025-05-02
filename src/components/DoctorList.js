'use client'

import DoctorCard from '@/components/DoctorCard';
import Pagination from '@/components/Pagination';
import { useState } from 'react';

export default function DoctorList({ initialDoctors, pages, page }) {
    const [doctors, setDoctors] = useState(initialDoctors);
    function handlePageChange(pageNumber){
        
    }
    
    return (
        <>
            {doctors.map((doc) => (
                <DoctorCard key={doc._id} doctor={doc} />
            ))}
            <Pagination total={pages} currentPage={page} onChange={handlePageChange} />
        </>
    )
};
