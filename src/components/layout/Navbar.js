import Container from 'react-bootstrap/Container';
import {Link} from 'react-router-dom'
import styles from './Navbar.module.css'
import logo from './../assets/img/Trips.png'

function Navbar() {
    return (

      <Navbar className={styles.navbar}>
          <Container>
              <Link to="/">
                  <img src={logo} alt="Trips" />
              </Link>
              <ul className={styles.list}>
                  <li className={styles.item}>
                      <Link to='/'>Home</Link>
                  </li>
                  <li className={styles.item}>
                      <Link to='/promocoes'>Promoções</Link>
                  </li>
                  <li className={styles.item}>
                      <Link to='/destinos'>Destinos</Link>
                  </li>
                  <li className={styles.item}>
                      <Link to='/contato'>Contato</Link>
                  </li>
                  <li className={styles.item}>
                      <Link to='/login'>Login</Link>
                  </li>
              </ul>
          </Container>
      </Navbar>

      

    )
}

export default Navbar