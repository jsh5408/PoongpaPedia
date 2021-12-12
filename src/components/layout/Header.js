import styles from "./Header.module.css";
import {Link} from "react-router-dom";

function Header() {
    return (
        <div className={styles.header}>
            <Link to="/">
                <img className={styles.logo} src="img/PoongpaPedia4.png" alt="PoongpaPedia" />
            </Link>
            <Link className={styles.movie} to="/">영화</Link>
        </div>
    );
}

export default Header;