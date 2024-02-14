import Image from 'next/image'
import styles from './page.module.css'
import Link from 'next/link'

export default function Home() {
  return (
    <main className={styles.main}>
     <h2>Hello Rakshu</h2>
     <Link href= "/about"><p>About</p></Link>
     <Link href= "/users"><p>Users</p></Link>
    </main>
  )
}
