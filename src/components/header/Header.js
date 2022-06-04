import styles from './Header.module.css';

export default function Header() {
    return (
      <header className={styles.cabecalho}>
        <h1 className={styles.logo}>
            <a href='#index.html' title='Loja de Informática do Alves'>Loja de Informática - Alves</a>
        </h1>
        <form method='post'>
            <input type='text' name='Pesquisa' id='pesquisa' placeholder='Pesquise aqui' />
            <button><i className='fa-solid fa-magnifying-glass'></i></button>
        </form>
      </header>
    );
}