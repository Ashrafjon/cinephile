import React from 'react'
import styles from './actors.module.scss'

const image_url = process.env.REACT_APP_API_IMAGE
function Actors({image,name}) {
  return (
    <div className={styles.actors}>
        <img src={`${image_url}/w500${image}`} alt={name} className={styles.actors__image} />
        <p className={styles.actors__name}>{name}</p>
    </div>
  )
}

export default Actors