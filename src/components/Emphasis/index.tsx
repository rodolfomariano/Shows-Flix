import { FaPlay, FaInfoCircle } from "react-icons/fa";

import styles from './styles.module.scss'

export function Emphasis() {

  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>U2 em São Paulo</h1>
        <h2 className={styles.description}>Show de 2017 que aconteceu em São Paulo no Morumbi</h2>

        <div className={styles.actions}>
          <button className={`${styles.button} ${styles.see_now}`} role='button'>
            <FaPlay size={16} />
            Assitir agora
          </button>
          <button className={styles.button} role='button'>
            <FaInfoCircle size={16} />
            Mais informações
          </button>
        </div>
      </div>
    </section>
  )
}