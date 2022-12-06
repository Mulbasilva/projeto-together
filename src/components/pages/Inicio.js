import React from "react"
import styles from "./inicio.module.css"
import imagens from "../imagens/sobre1.jpg"


function Inicio(){
    return(
        <section className={styles.container}>
            
            <div>
                <h2 className={styles.title}>Seja bem vindo ao KellyShopp</h2>
            </div>

            <div className={styles.imagedad}>
                <img className={styles.imagens} src={imagens} alt="" width={100} height={100}/>
                <img className={styles.imagens} src={imagens} alt="" width={100} height={100}/>
                <img className={styles.imagens} src={imagens} alt="" width={100} height={100}/>
                <img className={styles.imagens} src={imagens} alt="" width={100} height={100}/>
                <img className={styles.imagens} src={imagens} alt="" width={100} height={100}/>
                <img className={styles.imagens} src={imagens} alt="" width={100} height={100}/>
                
            </div>

            <div>
                <img src={imagens} alt="" width={1300} height={1000}/>
            </div>
            
        </section>

    )
}
export default Inicio