import React from "react"
import styles from "./contato.module.css"
import fale from "../imagens/fale.webp"
import { FaWhatsapp } from "react-icons/fa"

function Contato(){
    return(
        <section className={styles.container}>
            <div> 
                <div>
                    <img className={styles.photo} src={fale} alt="" width={1300} height={400}/>
                </div>

                <div className={styles.contact}>
                    <p className={styles.title}>Envie sua mensagem:</p>
                <ul>
                    <li className={styles.image}><FaWhatsapp/></li>
                </ul>
                    
                </div>
            </div>

         
        </section>
    )
}
export default Contato