import React from "react"
import { FaGithub, FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa"
import styles from "./footer.module.css"

function Footer(){
    return(
        <footer className={styles.footer}>
           
            <div className={styles.parceiros}>
                <h3>Parceiros</h3>
                <p>TOTI</p>
            </div>

            <div className={styles.parceiros}>
                <p>Desenvolvido por: Together-Group</p>
                <p className={styles.copy_right}><span className={styles.span}>Animais</span> &copy; 2022</p>
            </div>
 
            <div>
                <p className={styles.companhe}>Aconpanhe-nos:</p>
                
                <ul className={styles.social_list}>
                    <li className={styles.item_list}>
                        <FaGithub className={styles.image}/>
                    </li>
                    <li className={styles.item_list}>
                        <FaFacebook className={styles.image}/>
                    </li>
                    <li className={styles.item_list}>
                        <FaInstagram className={styles.image}/>
                    </li>
                    <li className={styles.item_list}>
                        <FaLinkedin className={styles.image}/>
                    </li>
                </ul>
           </div>

        </footer>
        
    )
}
export default Footer