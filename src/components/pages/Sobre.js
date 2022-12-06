import React from "react"
import styles from "./sobre.module.css"
import imagem from "../imagens/sobre1.jpg"



function Sobre(){
    return(
        <section className={styles.profile_photo}>
    
            <div>
                <img  src={imagem} alt="" width={500} heigth={500}/>
            </div>
            
            <div>
                <h3 className={styles.title}>Sobre nós</h3>
                    <p className={styles.phrase}>A KellyShopp vem oferecendo os melhores serviços para seu pet, sempre buscando novidades em estética animal, acessórios e medicina veterinária. Você e seus melhores amigos contam com nossa loja online e todas possuem assistência virtual completa. Diversos itens para o seu pet, disponíveis em todas as unidades. Um shopping completo para estética, saúde e lazer do seu melhor amigo.
                    </p>
            </div>
            
        </section>
    )
}
export default Sobre