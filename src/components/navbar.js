import Link from 'next/link'
import styles from './navbar.module.scss';
const Navbar = () => {
    return (
        <>
            <ul className={styles.list}>
                <li className={styles.listTtem}>
                    <Link href="/">
                        <a>Home</a>
                    </Link>
                </li>
                <li className={styles.listTtem}>
                    <Link href="/articles">
                        <a>Articles</a>
                    </Link>
                </li>
                <li className={styles.listTtem}>
                    <Link href="/courses">
                        <a>Courses</a>
                    </Link>
                </li>
                <li className={styles.listTtem}>
                    <Link href="/about">
                        <a>About</a>
                    </Link>
                </li>
                <li className={styles.listTtem}>
                    <Link href="/contact-us">
                        <a>Contact Us</a>
                    </Link>
                </li>
            </ul>
        </>
    )
}
export default Navbar;