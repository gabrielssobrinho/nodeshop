import styles from './Nav.module.css';

export default function Nav() {
    return (
      <nav className={styles.menu}>
        <ul>
          <li><a href='#home'>Home</a></li>
          <li><a href='#produtos'>Produtos</a></li>
          <li><a href='#servicos'>Serviços</a></li>
          <li><a href='#contatos'>Contatos</a></li>
        </ul>
        <div className={styles.social_icons}>
          <a href='#facebook' className={styles.btn_facebook}><i className='fa-brands fa-facebook-f'></i></a>
          <a href='#twitter'className={styles.btn_twitter}><i className='fa-brands fa-twitter'></i></a>
          <a href='#google+' className={styles.btn_google}><i className='fa-brands fa-google'></i></a>
        </div>
      </nav>
    );
}