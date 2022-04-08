import styles from './styles.module.scss'

export function Header() {

  return (
    <div className={styles.container}>
      <h1 className={styles.logo}>ShowsFlix</h1>

      <nav className={styles.nav}>
        <ul className={styles.nav_ul}>
          <li className={styles.nav_li}>
            <a className={styles.nav_link} href='/'>Início</a>
            <div className={styles.nav_row} />
          </li>
          <li className={styles.nav_li}>
            <a className={styles.nav_link} href='/'>Rock</a>
            <div className={styles.nav_row} />
          </li>
          <li className={styles.nav_li}>
            <a className={styles.nav_link} href='/'>Pop</a>
            <div className={styles.nav_row} />
          </li>
          <li className={styles.nav_li}>
            <a className={styles.nav_link} href='/'>Sertanejo</a>
            <div className={styles.nav_row} />
          </li>
          <li className={styles.nav_li}>
            <a className={styles.nav_link} href='/'>Todos</a>
            <div className={styles.nav_row} />
          </li>
        </ul>
      </nav>

    </div>
  )
}