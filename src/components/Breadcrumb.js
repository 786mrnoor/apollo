import styles from '@/styles/Breadcrumb.module.css';

export default function BreadCrumb() {
    return (
        <div className={styles.breadcrumb}>
            <a href="/">Home</a>
            <a href="#">Doctors</a>
            <a href="#" className="active">general physicians</a>
        </div>
    )
};
