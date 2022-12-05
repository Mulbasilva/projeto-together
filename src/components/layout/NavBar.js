import { Link } from "react-router-dom"
import styles from "./navbar.module.css"
import carinho from "./carinho.svg"

function NavBar(){
    return(
      <nav className={styles.listnav}>
         <div> 
          <Link to="/">
            <p className={styles.marca}>KellyShopp</p>
          </Link>
          </div>

          <div>
          <form action="">
            <input className={styles.input} type="text"  placeholder="Pesquisar"/>
          </form>
          </div>

          <ul className={styles.list}>
            <li className={styles.item}>
              <Link to="/" className={styles.link}>Inicio</Link>
            </li>
            <li className={styles.item}>
              <Link to="/sobre" className={styles.link}>Sobre</Link>
            </li>
            <li className={styles.item}>
              <Link to="/doacao" className={styles.link}>Doação</Link>
            </li>
            <li className={styles.item}>
              <Link to="/produtos" className={styles.link}>Produtos</Link>
            </li>
            <li className={styles.item}>
              <Link to="/contato" className={styles.link}>Contato</Link>
            </li>
          </ul>
          <div>
            <img className={styles.carinho} src={carinho} alt="carinho"/>
          </div>
       </nav>
    )
}
export default NavBar