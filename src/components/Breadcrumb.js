import styles from '@/styles/Breadcrumb.module.css';
import Link from 'next/link';

export default function BreadCrumb() {
    return (
        <div className={styles.breadcrumb}>
            <Link href="/">Home</Link>
            <Link href="#">Doctors</Link>
            <Link href="#" className="active">general physicians</Link>
        </div>
    )
};
