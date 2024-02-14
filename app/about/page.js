import Link from "next/link"
import styles from "./styles.module.css"

export default function About(){
   
    return(
        <div className= {styles.main}>
            <Link href= "/"><p>About me</p></Link>
        </div>
    )
}