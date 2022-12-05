import React from "react"
import styles from "./produtos.module.css"
import imagepro2 from "../imagens/pro2.webp"
import image2 from "../imagens/bri1.png"
import imagepro from "../imagens/pro.jpg"
import image3 from "../imagens/brin3.jpg"
import image4 from "../imagens/brin4.jpg"
import imagep from "../imagens/prodd.jpg"
import imagepro1 from "../imagens/pro1.jpg"
import imagepeixe from "../imagens/peixe.webp"
import imagetarr from "../imagens/tarr.jpg"
import imageroi from "../imagens/roi.webp"
import imagelo9 from "../imagens/lo9.jpg"
import imagelo10 from "../imagens/lo10.webp"
import imagebrin2 from "../imagens/brin2.jpg"

function Produtos(){
    return(
        <section>
       
            <h3 className={styles.title}>Confira nossos produtos</h3>
       <div className={styles.prod}>
            <img src={imagep} alt="" width={1300} height={300}/>
           
        </div>

        <div>
            <img src={imagepro1} alt="" width={400} height={400}/>
            <img src={imagepro2} alt="" width={400} height={400}/>
            <img src={imagepro} alt="" width={400} height={400}/>

            <img src={imagepeixe} alt="" width={500} height={500}/>
            <img src={imagetarr} alt="" width={400} height={400}/>
            <img src={imageroi} alt="" width={400} height={400}/>

            <img src={image2} alt="" width={500} height={500}/>
            <img src={image3} alt="" width={400} height={400}/>
            <img src={image4} alt="" width={400} height={400}/>

            <img src={imagelo9} alt="" width={500} height={500}/>
            <img src={imagelo10} alt="" width={400} height={400}/>
            <img src={imagebrin2} alt="" width={400} height={400}/>
            
        </div>

        </section>
       
    )
}
export default Produtos