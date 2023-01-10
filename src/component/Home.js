import styles from "../styles/Home.module.css";
import { HiOutlineDotsHorizontal } from "react-icons/hi";

export const Home =() =>{
    return(
        <div>
            <div></div>
            <div className={styles.dot}><HiOutlineDotsHorizontal/></div>
        </div>
    )
}