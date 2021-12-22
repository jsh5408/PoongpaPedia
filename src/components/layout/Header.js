import styles from "./Header.module.css";
import {Link} from "react-router-dom";
import { useState } from "react";
import { useHistory } from "react-router-dom";

function Header() {
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
        <div className={styles.header}>
            <Link to="/">
                <img className={styles.logo} src="img/PoongpaPedia4.png" alt="PoongpaPedia" />
            </Link>
            <Link className={styles.movie} to="/">영화</Link>
            <Link className={styles.tv} to="/">TV프로그램</Link>
            <form onSubmit={onSubmit}>
                <input value={value} type="text" onChange={onChange} />
            </form>
        </div>
    );
}

export default Header;