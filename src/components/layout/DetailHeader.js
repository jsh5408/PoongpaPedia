import styles from "./DetailHeader.module.css";
import {Link} from "react-router-dom";
import { useState } from "react";
import { useHistory } from "react-router-dom";

function DetailHeader() {
    const history = useHistory();
    const [value, setValue] = useState("");

    const onChange = (event) => {
        setValue(event.target.value);
    }

    const onSubmit = (event) => {
        event.preventDefault();
        history.push(`/search/${value}`);
        setValue("");
    }

    return (
        <div className={styles.headerContainer}>
            <div className={styles.containerList}>
                <Link to="/">
                    <img className={styles.logo} src="img/PoongpaPedia4.png" alt="PoongpaPedia" />
                </Link>
                <Link className={styles.movie} to="/">영화</Link>
                <Link className={styles.tv} to="/">TV프로그램</Link>
                <form className={styles.search} onSubmit={onSubmit}>
                    <label className={styles.searchLabel}>
                        <input className={styles.searchInput} value={value} type="text" placeholder="검색해보세요." onChange={onChange} />
                    </label>
                </form>
            </div>
        </div>
    );
}

export default DetailHeader;