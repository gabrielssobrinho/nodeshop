import styles from './Main.module.css';

export default function Main() {
  const iframe = 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14632.496606563933!2d-46.70056347151956!3d-23.528036655189258!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94cef8775663b04f%3A0x923835e9005f8309!2sSenac%20Lapa%20Tito!5e0!3m2!1spt-BR!2sbr!4v1647286156883!5m2!1spt-BR!2sbr'
    return (
      <main className={styles.principal}>
        <article className={styles.sobre}>
          <h2>Sobre Nós</h2>
            <img src='img/loja.jpg' alt='Essa imagem retrata um vendedor sorrindo e ofertando um notebook para um casal. O vendedor está vestido com camisa social branca, o homem está vestido com uma camisa social azul, e a mulher está vestida com uma camisa social azul com uma tonalidade muito clara. E ao fundo da imagem é possível ver alguns monitores.' />
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio officiis in non. Rerum quo tenetur molestias laborum, in suscipit accusantium provident ab vel, inventore eligendi, delectus est molestiae tempore odit! Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis doloribus iusto quidem ratione fugiat, aperiam error minus quia, minima veniam nostrum quaerat, in numquam maxime pariatur? Natus a nostrum sunt.</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quia blanditiis earum rem architecto reprehenderit quidem nostrum harum, nisi ad distinctio. Veniam numquam, impedit libero nulla explicabo autem eius adipisci perferendis? Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut, amet. Deleniti laborum maiores modi incidunt excepturi, expedita error delectus rem in laudantium dolor, nesciunt neque perferendis tenetur molestiae placeat! Tempore.</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo officia ratione magnam veniam tempore. Quos cumque libero veritatis. Nihil, enim temporibus! Reiciendis at qui rem modi ipsum dolorem fugit laudantium.</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem dignissimos labore, cumque maxime delectus vitae earum vel eius, nobis aspernatur, enim ullam fugiat! Fugiat laudantium veritatis quis laboriosam magnam provident.</p>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quam asperiores reiciendis voluptas aperiam, quaerat inventore id consequatur nulla ducimus placeat accusamus sunt quasi natus dolorum. Sint aperiam cum rem fuga?</p>
        </article>
        <aside className={styles.onde_estamos}>
          <h2> Onde estamos </h2>
            <p>Rua Tito, nº 54 - Vila Romana - São Paulo - SP</p>
            <iframe src={iframe} title={iframe}></iframe>
          <h2>Contatos</h2>
          <ul>
            <li><i className='fa-solid fa-phone'></i> (11) 91234-5678</li>
            <li><i className='fa-brands fa-whatsapp'></i> (11) 98765-4321</li>
            <li><i className='fa-solid fa-at'></i>  abcdefghijk@email.com</li>
          </ul>
        </aside>
      </main>
    );
}