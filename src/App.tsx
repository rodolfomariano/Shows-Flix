import { FormEvent, useState } from 'react'
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';

import logo from './assets/logo.svg'
import styles from './styles/App.module.scss'

import { Emphasis } from './components/Emphasis'
import { Header } from './components/Header'


import imgUrl from './assets/images/queen.jpg'


function App() {

  function handleDragStart(e: FormEvent) {
    e.preventDefault();
  }

  const rock_items = [
    <div className={styles.show}>
      <img src="https://ligadoamusica.com.br/wp-content/uploads/2020/07/acdc-river-plate-youtube.jpg" onDragStart={handleDragStart} role="presentation" />
      <div className={styles.details}>
        <h3 className={styles.show_title}>AC/DC</h3>

        <button className={styles.btn_watch}>Assitir</button>
      </div>
    </div>,
    <div className={styles.show}>
      <img src="https://www.srzd.com/wp-content/uploads/2016/11/axl-rose-divulgacao-840x440.jpg" onDragStart={handleDragStart} role="presentation" />,

      <div className={styles.details}>
        <h3 className={styles.show_title}>Guns N' Roses</h3>

        <button className={styles.btn_watch}>Assitir</button>
      </div>
    </div>,
    <div className={styles.show}>
      <img src="https://s3-sa-east-1.amazonaws.com/lets.events-production/events/photos/137/c8e/f9-/cover/data?1552656815" onDragStart={handleDragStart} role="presentation" />,

      <div className={styles.details}>
        <h3 className={styles.show_title}>Segunda do Rock</h3>

        <button className={styles.btn_watch}>Assitir</button>
      </div>
    </div>,

    <div className={styles.show}>
      <img src="https://img.elo7.com.br/product/600x380/CA6BE2/mini-banner-nirvana-5-quadro-decorativo.jpg" onDragStart={handleDragStart} role="presentation" />,

      <div className={styles.details}>
        <h3 className={styles.show_title}>Nirvana</h3>

        <button className={styles.btn_watch}>Assitir</button>
      </div>
    </div>,
    <div className={styles.show}>
      <img src="https://i.ytimg.com/vi/g5W4k6vD2WY/maxresdefault.jpg" onDragStart={handleDragStart} role="presentation" />,

      <div className={styles.details}>
        <h3 className={styles.show_title}>Rolling Stone</h3>

        <button className={styles.btn_watch}>Assitir</button>
      </div>
    </div>,
    <div className={styles.show}>
      <img src="https://www.arterede.com.br/wp-content/uploads/2019/10/CAZUZA-BANNER-3-300x300.jpg" onDragStart={handleDragStart} role="presentation" />,

      <div className={styles.details}>
        <h3 className={styles.show_title}>Cazuza</h3>

        <button className={styles.btn_watch}>Assitir</button>
      </div>
    </div>,
    <div className={styles.show}>
      <img src="https://i.pinimg.com/originals/17/50/2b/17502b91b254c980171321f8027d02a1.jpg" onDragStart={handleDragStart} role="presentation" />,

      <div className={styles.details}>
        <h3 className={styles.show_title}>Legião Urbana</h3>

        <button className={styles.btn_watch}>Assitir</button>
      </div>
    </div>,
    <div className={styles.show}>
      <img src="https://i.ytimg.com/vi/DMyQZmoBALY/maxresdefault.jpg" onDragStart={handleDragStart} role="presentation" />,

      <div className={styles.details}>
        <h3 className={styles.show_title}>Acústico POP</h3>

        <button className={styles.btn_watch}>Assitir</button>
      </div>
    </div>,
    <div className={styles.show}>
      <img src="https://img.r7.com/images/show-e-interrompido-em-ny-por-chegada-de-furacao-21082021222459033?dimensions=771x420" onDragStart={handleDragStart} role="presentation" />,

      <div className={styles.details}>
        <h3 className={styles.show_title}>AC/DC</h3>

        <button className={styles.btn_watch}>Assitir</button>
      </div>
    </div>,
  ];

  const pop_items = [
    <div className={styles.show}>
      <img src="https://costaesmeraldaonline.com.br/wp-content/uploads/2019/08/anita-em-balneario.jpg" onDragStart={handleDragStart} role="presentation" />
      <div className={styles.details}>
        <h3 className={styles.show_title}>Anitta</h3>

        <button className={styles.btn_watch}>Assitir</button>
      </div>
    </div>,
    <div className={styles.show}>
      <img src="https://www.diariodepernambuco.com.br/static/app/noticia_127983242361/2020/02/01/817864/20200201122927223141o.jpg" onDragStart={handleDragStart} role="presentation" />,

      <div className={styles.details}>
        <h3 className={styles.show_title}>Madona</h3>

        <button className={styles.btn_watch}>Assitir</button>
      </div>
    </div>,
    <div className={styles.show}>
      <img src="https://s2.glbimg.com/VF2AVx9GA-1eMHVGT3d4768uFOU=/0x0:1700x1062/984x0/smart/filters:strip_icc()/s.glbimg.com/jo/g1/f/original/2015/10/26/ariana_grande_g1_9839.jpg" onDragStart={handleDragStart} role="presentation" />,

      <div className={styles.details}>
        <h3 className={styles.show_title}>Ariana Grande</h3>

        <button className={styles.btn_watch}>Assitir</button>
      </div>
    </div>,

    <div className={styles.show}>
      <img src="https://arc-anglerfish-arc2-prod-tronc.s3.amazonaws.com/public/D5QOJLU6X5B3HLY6KSSTQ6ZSA4.jpg" onDragStart={handleDragStart} role="presentation" />,

      <div className={styles.details}>
        <h3 className={styles.show_title}>Katy Perry</h3>

        <button className={styles.btn_watch}>Assitir</button>
      </div>
    </div>,
    <div className={styles.show}>
      <img src="https://f.i.uol.com.br/fotografia/2021/12/16/163969014561bbafa16b9b9_1639690145_3x2_md.jpg" onDragStart={handleDragStart} role="presentation" />,

      <div className={styles.details}>
        <h3 className={styles.show_title}>Maroon 5</h3>

        <button className={styles.btn_watch}>Assitir</button>
      </div>
    </div>,
    <div className={styles.show}>
      <img src="https://taylorswift.com.br/wp-content/uploads/2020/07/1lee2tb5adwf3ye6o96mr22a3.jpg" onDragStart={handleDragStart} role="presentation" />,

      <div className={styles.details}>
        <h3 className={styles.show_title}>Taylor Swift</h3>

        <button className={styles.btn_watch}>Assitir</button>
      </div>
    </div>,
    <div className={styles.show}>
      <img src="https://portalfamosos.com.br/wp-content/uploads/2020/07/4-Imagens-1.png" onDragStart={handleDragStart} role="presentation" />,

      <div className={styles.details}>
        <h3 className={styles.show_title}>Lady Gaga</h3>

        <button className={styles.btn_watch}>Assitir</button>
      </div>
    </div>,
    <div className={styles.show}>
      <img src="https://www.vagalume.com.br/dynimage/news34792-big.jpg" onDragStart={handleDragStart} role="presentation" />,

      <div className={styles.details}>
        <h3 className={styles.show_title}>Michael Jackson</h3>

        <button className={styles.btn_watch}>Assitir</button>
      </div>
    </div>,
    <div className={styles.show}>
      <img src="https://vcfaz.tv/wp-content/uploads/2020/01/Shakira.jpg" onDragStart={handleDragStart} role="presentation" />,

      <div className={styles.details}>
        <h3 className={styles.show_title}>Shakira</h3>

        <button className={styles.btn_watch}>Assitir</button>
      </div>
    </div>,
  ];

  const sertanejo_items = [
    <div className={styles.show}>
      <img src="https://s2.glbimg.com/mocDyCO9xQm8ViUwrFDyOzGT1Tc=/e.glbimg.com/og/ed/f/original/2020/02/27/marilia-mendonca.jpg" onDragStart={handleDragStart} role="presentation" />
      <div className={styles.details}>
        <h3 className={styles.show_title}>Marília Mendonça</h3>

        <button className={styles.btn_watch}>Assitir</button>
      </div>
    </div>,
    <div className={styles.show}>
      <img src="https://diaonline.ig.com.br/aproveite/wp-content/uploads/2021/06/live-simone-e-simaria-cantoras-fazem-show-em-plataforma-on-line.jpeg" onDragStart={handleDragStart} role="presentation" />,

      <div className={styles.details}>
        <h3 className={styles.show_title}>Simone & Simaria</h3>

        <button className={styles.btn_watch}>Assitir</button>
      </div>
    </div>,

    <div className={styles.show}>
      <img src="https://cdn.violashow.com.br/img/eventos/flyers/2388.jpg" onDragStart={handleDragStart} role="presentation" />,

      <div className={styles.details}>
        <h3 className={styles.show_title}>Zé Neto & Cristiano</h3>

        <button className={styles.btn_watch}>Assitir</button>
      </div>
    </div>,

    <div className={styles.show}>
      <img src="http://www.workshow.com.br/uploads/conteudos/73b70baeb000f0fc6ae39e21cbfcc7c1.JPG" onDragStart={handleDragStart} role="presentation" />,

      <div className={styles.details}>
        <h3 className={styles.show_title}>Henrique & Juliano</h3>

        <button className={styles.btn_watch}>Assitir</button>
      </div>
    </div>,
    <div className={styles.show}>
      <img src="https://3.bp.blogspot.com/-kReCM3PkrPg/WECe2lIrpzI/AAAAAAAAZRs/Sxc0L4x6PucP7VeVDv1LlgCe7HsYIu6agCLcB/s1600/Thaeme%2B%2526%2BThiago%2B-%2B16%2B12%2B2016%2B-%2BAmericana%2Bshowscampinas.jpg" onDragStart={handleDragStart} role="presentation" />,

      <div className={styles.details}>
        <h3 className={styles.show_title}>Thaeme & Thiago</h3>

        <button className={styles.btn_watch}>Assitir</button>
      </div>
    </div>,
    <div className={styles.show}>
      <img src="https://s2.glbimg.com/sC-nYd3m4NOT-56tEa70PB9Qvn0=/0x0:6000x4000/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_59edd422c0c84a879bd37670ae4f538a/internal_photos/bs/2020/U/r/mz0HqeTeSkIXgqMmyOLw/jm-alc-0736.jpg" onDragStart={handleDragStart} role="presentation" />,

      <div className={styles.details}>
        <h3 className={styles.show_title}>Jorge & Mateus</h3>

        <button className={styles.btn_watch}>Assitir</button>
      </div>
    </div>,
    <div className={styles.show}>
      <img src="https://www.ofuxico.com.br/wp-content/uploads/2022/03/maiara-e-maraisa-show-2-1.jpg" onDragStart={handleDragStart} role="presentation" />,

      <div className={styles.details}>
        <h3 className={styles.show_title}>Maiara & Maraisa</h3>

        <button className={styles.btn_watch}>Assitir</button>
      </div>
    </div>,
    <div className={styles.show}>
      <img src="https://i.uai.com.br/LPak03GjMFM1lucVyPcAY-ly3-I=/750x0/imgsapp2.uai.com.br/app/noticia_133890394703/2019/06/06/247140/20190606162751630787i.jpg" onDragStart={handleDragStart} role="presentation" />,

      <div className={styles.details}>
        <h3 className={styles.show_title}>Zezé de Camargo & Luciano</h3>

        <button className={styles.btn_watch}>Assitir</button>
      </div>
    </div>,
    <div className={styles.show}>
      <img src="https://static.portaldacidade.com/unsafe/https://s3.amazonaws.com/pontaldoparana.portaldacidade.com/img/news/2021-12/confirmado-show-de-munhoz-e-mariano-no-centro-de-eventos-de-pontal-do-parana-61b2885229bb3.jpg" onDragStart={handleDragStart} role="presentation" />,

      <div className={styles.details}>
        <h3 className={styles.show_title}>Munhoz & Mariano</h3>

        <button className={styles.btn_watch}>Assitir</button>
      </div>
    </div>,
  ];

  return (
    <>
      <Header />
      <main className={styles.container}>
        <Emphasis />

        <section className={styles.shows}>
          <h3 className={styles.shows_type_title}>Rock em destaque</h3>

          <AliceCarousel
            mouseTracking items={rock_items}
            autoWidth={true}
            disableButtonsControls={true}
            // disableDotsControls={true}
            paddingLeft={24}
            swipeExtraPadding={300}
            keyboardNavigation={true}
          />
        </section>

        <section className={styles.shows}>
          <h3 className={styles.shows_type_title}>Pop em destaque</h3>

          <AliceCarousel
            mouseTracking items={pop_items}
            autoWidth={true}
            disableButtonsControls={true}
            // disableDotsControls={true}
            paddingLeft={24}
            swipeExtraPadding={300}
            keyboardNavigation={true}
          />
        </section>

        <section className={styles.shows}>
          <h3 className={styles.shows_type_title}>Sertanejo em destaque</h3>

          <AliceCarousel
            mouseTracking items={sertanejo_items}
            autoWidth={true}
            disableButtonsControls={true}
            // disableDotsControls={true}
            paddingLeft={24}
            swipeExtraPadding={300}
            keyboardNavigation={true}
          />
        </section>

      </main>
    </>
  )
}

export default App
