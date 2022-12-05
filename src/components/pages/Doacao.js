import React from "react"
import styles from "./sobre.module.css"
import selo from "../imagens/selo.png"

function Doacao(){
    return(
        <section className={styles.profile_photo}>

                <div>
                    <img src={selo} alt="" width={500} heitgh={500}/>
                </div>

                <div>
                    <h2 className={styles.title}>Faça a sua doação</h2>
                    <p className={styles.phrase}>Você gostaria de ajudar os animais, então essa é sua oportunidade!
                    Qualquer quantia doada é muito importante!
                    Conta Bancária: A chave do nosso Pix  é o nosso CNPJ: 00.000.000.0000-00. 
                    Por isso reiteramos nosso apelo para ajudar os animais.:</p>
                </div>
        </section>
    )
}
export default Doacao