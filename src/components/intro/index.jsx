import React, { useEffect, useState } from 'react'
import { HiMenuAlt2 } from 'react-icons/hi'
import styles from './intro.module.scss'
import { useNavigate } from 'react-router-dom'

const image_url = process.env.REACT_APP_API_IMAGE

function Intro({ data }) {
    const navigate = useNavigate()
    const { results } = data
    const [num, setNum] = useState(0)
    const [anime, setAnime] = useState(false)

    useEffect(() => {
        setAnime(true)
        let interval = setInterval(() => {
            if (num > results.length - 2) {
                setNum(0)
            } else {
                setNum((prev) => prev + 1)
            }
            setAnime(false)
        }, 15000)
        return () => clearInterval(interval)
    }, [num,results.length])

    const handleNextMovie = () => {
        setAnime(false)
        if (num > results.length - 2) {
            setNum(0)
        } else {
            setNum((prev) => prev + 1)
        }
    }

    return anime ? (
        <section className={styles.intro}>
            <img src={`${image_url}/original/${results[num].backdrop_path}`} alt="background" className={styles.intro__bg} />
            <div className={styles.intro__info}>
                <h1 className={styles.intro__title}>{results[num].title}</h1>
                <p className={styles.intro__text}>{results[num].overview}</p>
                <button className={styles.intro__button} onClick={()=>navigate(`/details/${results[num].id}`)}>
                    <HiMenuAlt2 />
                    <span>Подробнее</span>
                </button>
            </div>
            <div className={styles.intro__next} onClick={handleNextMovie}>
                <div className={styles.intro__next_info}>
                    <img src={`${image_url}/w300/${results.length <= num + 1 ? results[0].backdrop_path  : results[num + 1].backdrop_path}`} alt="next movie" className={styles.intro__next_bg} />
                    <p className={styles.intro__next_text}>Следующий</p>
                    <h3 className={styles.intro__next_title}>{results.length <= num + 1 ? results[0].title  : results[num + 1].title}</h3>
                </div>
                <div className={styles.intro__next_bottom}>
                    <span></span>
                </div>
            </div>
        </section>
    ) : <section className={styles.intro}></section>
}

export default Intro