'use client'

import DoctorCard from '@/components/DoctorCard';
import Pagination from '@/components/Pagination';

export default function DoctorList({ initialDoctors, pages, page }) {

    return (
        <>
            {initialDoctors.map((doc) => (
                <DoctorCard key={doc._id} doctor={doc} />
            ))}
            {
                pages> 1 &&
                <Pagination total={pages} currentPage={page}  />
            }
        </>
    )
};
