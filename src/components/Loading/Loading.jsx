import styles from './Loading.module.css';

export default function Loading({ active }) {
    return (
        <div className={`${styles.loading} ${active ? styles.isActive : ''}`}>
            <span>Announcement of results</span>
        </div>
    )
}
