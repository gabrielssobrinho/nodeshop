import styles from './Main.module.css';

export default function Main() {
  const iframe = 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14632.496606563933!2d-46.70056347151956!3d-23.528036655189258!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94cef8775663b04f%3A0x923835e9005f8309!2sSenac%20Lapa%20Tito!5e0!3m2!1spt-BR!2sbr!4v1647286156883!5m2!1spt-BR!2sbr'
    return (
      <main className={styles.principal}>
        <article className={styles.sobre}>
          <h2><span></span>Sobre Nós</h2>
            <img src='img/loja.jpg' alt='Essa imagem retrata um vendedor sorrindo e ofertando um notebook para um casal. O vendedor está vestido com camisa social branca, o homem está vestido com uma camisa social azul, e a mulher está vestida com uma camisa social azul com uma tonalidade muito clara. E ao fundo da imagem é possível ver alguns monitores.' />
            <p><h2>Referência no Brasil</h2>
Há mais de 20 anos atuando na venda e distribuição de produtos de Informática, Eletrônicos, Games e Telefonia, o Balão da Informática se tornou referência no Brasil no que se refere à qualidade dos produtos comercializados com o melhor custo benefício.</p>
<br></br>
<p><h2>Montamos uma grande estrutura para você, de verdade.</h2>
Atualmente trabalhamos apenas com vendedores homologados, que conhecem a operação e apoiam a satisfação de nossos consumidores em primeiro lugar. Nós trabalhamos com um mix de 5000 produtos para melhor te atender.</p>
<br></br>
<p><h2>Somente produtos de procedência certificada</h2>
O NodeShop comercializa produtos diretamente provenientes dos fabricantes, dos distribuidores oficiais ou de lojas parceiras, portanto, os clientes encontrarão somente produtos de qualidade e com garantia conjunta de nossa empresa e do canal responsável.</p>
<br></br>
<p><h2>Nosso compromisso é com você</h2>
Em parceria com as maiores marcas da informática mundial, os esforços de nossa empresa estão direcionados para a constante melhoria de atendimento e para o alcance da completa satisfação de nossos clientes.</p>
<br></br>
            
        </article>
        <aside className={styles.onde_estamos}>
          <h2> Onde estamos </h2>
            <p>Rua Tito, nº 54 - Vila Romana - São Paulo - SP</p>
            <iframe src={iframe} title={iframe}></iframe>
          <h2>Contatos</h2>
          <ul>
            <li><i className='fa-solid fa-phone'></i> (11) 99509-6033</li>
            <li><i className='fa-brands fa-whatsapp'></i> (11) 99509-6033</li>
            <li><i className='fa-solid fa-at'></i>gabrielsobrinho.contato@gmail.com</li>
          </ul>
        </aside>
      </main>
    );
}