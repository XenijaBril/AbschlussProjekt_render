import React from 'react'
import s from './index.module.css'
import {RxInstagramLogo} from 'react-icons/rx'
import {FaWhatsapp} from 'react-icons/fa'

export default function Footer() {
  return (
    <section className={s.footer_block} id="contacts">
      <div className={s.contacts_block}>
        <h2>Contact</h2>
        <p>+49 99999999999</p>
        <div className={s.icon_block}>
          <RxInstagramLogo />
          <FaWhatsapp />
        </div>
      </div>
      <div className={s.address_block}>
        <h2>Address</h2>
        <p> 72250, Freudenstadt, Marktplatz, 19</p>
        <h3>Working Hours:</h3>
        <p>24 hours a day</p>
      </div>
       
    </section>
  )
}
