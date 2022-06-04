import styles from './Section.module.css';

export default function Section() {
    return (
      <section className={styles.newsletter}>
        <h3>Newsletter</h3>
        <p>Receba nossas promoções por email</p>
        <form>
          <input type='text' name='' id='' placeholder='Seu nome' />
          <input type='email' name='' id='' placeholder='Seu email' />
          <button> Cadastrar </button>
        </form>
      </section>
    );
}