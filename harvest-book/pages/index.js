import Image from 'next/image'
import { Inter } from 'next/font/google'
import Navbar from '@/components/Navbar'
import Layout from '@/components/Layout'
import styles from '../styles/home.module.css'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Layout />
      <div className={styles.titlebox}>
          <Image src='/../public/home_background.jpg' width="1500" height="1000"></Image>
          <div className={styles.titlebg}></div>
          <h1 className={styles.titleText}>Harvest Book</h1>
          <div className={styles.titlebg2}></div>
          <p id={styles.titleInfo}>From farm to table to those in need: <strong id={styles.titleColor}>Harvest Book</strong></p>
      </div>
      <div className={styles.perksRow}>
          <h1 id={styles.perkInfoTitle}>What we do?</h1>
          <div className={styles.perk1}>
            <Image src='/../public/food_tax.png' width="300" height="300"></Image>
            <h1 className={styles.perkText}>Save on Taxes</h1>
          </div>
          <div className={styles.perk2}>
            <Image src='/../public/food_waste.png' width="300" height="300"></Image>
            <h1 className={styles.perkText}>Minimize Food Waste</h1>
          </div>
          <div className={styles.perk3}>
            <Image src='/../public/food_sharing_icon.png' width="300" height="300"></Image>
            <h1 className={styles.perkText}>Combat Food Scarity</h1>
          </div>
      </div>
      <div className={styles.whitespace}></div>
    </>
  )
}
