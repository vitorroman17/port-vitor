import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.scss'
import fotoPrincipal from '../public/foto.jpeg'
import nfc from '../public/nfc.jpg'
import formatar from '../public/formatar.jpg'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Vitor Roman | Tags NFC e Formatação de computadores</title>
        <meta name="description" content="Duplicação de Tags NFC e formatação de computadores" />
      </Head>

      <header className={styles.header}>
        <h1>Vitor Roman</h1>
        <nav>
          <ul>
            <li><a href="#inicio">Inicio</a></li>
            <li><a href="#sobre">Sobre mim</a></li>
            <li><a href="#servico">Meus Serviços</a></li>
          </ul>
          <button>
            <a target="__blank" href="https://wa.me/554984115363">Me contrate agora</a>
          </button>
        </nav>
      </header>

      <section id="inicio" className={styles.inicio}>
        <div className={styles.content}>
          <h4>Olá, eu sou</h4>
          <h1>Vitor <br/> Roman</h1>
          <h3>Duplicação de <strong>tags NFC</strong> | <strong>Formatação</strong> de computadores</h3>
          <button>
            <a target="__blank" href="https://wa.me/554984115363">Comprar Agora</a>
          </button>
        </div>
        <div className={styles.areaImage}>
          <Image src={fotoPrincipal} alt="Foto de perfil | Vitor Roman" />
        </div>
      </section>

      
      <section id="sobre" className={styles.sobreMim}>
        <h2>Sobre Mim</h2>
        <p>Sou Vitor Alexandre Campo Roman. Atualmente moro em Chapecó, SC. <br/>
        Desde criança, sou apaixonado por tecnologias.  Era sempre chamado para programar  e ajeitar celulares e computadores da família.</p>
        <button>
            <a target="__blank" href="https://wa.me/554984115363">Comprar Agora</a>
        </button>
      </section>

      <section id="servico" className={styles.meusServicos}>
        <h2>Meus serviços</h2>
        <div className={styles.servico}>
          <div className={styles.imageServico}>
            <Image src={nfc} alt="Imagen de Tag NFC"/>
          </div>
          <div className={styles.infos}>
            <h3>Duplicação NFC</h3>
            <p>Faço a duplicação da sa tag NFC de modo que por um preço acessivél, te entrego uma nova tag om base na anterior!</p>
            <button>
              <a target="__blank" href="https://wa.me/554984115363">Contratar Agora</a>
            </button>
          </div>
        </div>
        <div className={styles.servico}>
          <div className={styles.imageServico}>
            <Image src={formatar} alt="Imagen de Tag NFC"/>
          </div>
          <div className={styles.infos}>
            <h3>Formatação de computadores</h3>
            <p>Preto serviços  de formatação de computadores, com backup completo dos arquivos do cliente e entrega do computador(ou notebook) em até 48 horas.</p>
            <button>
              <a target="__blank" href="https://wa.me/554984115363">Contratar Agora</a>
            </button>
          </div>
        </div>
      </section>

      <footer className={styles.footer}>
        <a
          href="https://instagram.com/pedrohhcunha"
          target="_blank"
          rel="noopener noreferrer"
        >Criado por PEDROHHCUNHA</a>
      </footer>
    </div>
  )
}
