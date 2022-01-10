import React from 'react'
import styles from '../components/LoginForm.module.css'


export default function LoginForm(){

    return(
         <form className={styles.form}>
               <label className={styles.label} for="name" >Name</label>
               <input className={styles.input} id="name" type="text" />
               <label className={styles.label} for="password">Password</label>
               <input className={styles.input} id="password" type="password" />
               <input className={styles.submit} type="submit" value="Submit" />
           </form>
    )
}