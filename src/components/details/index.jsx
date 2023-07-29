import React from 'react'
import {useParams} from 'react-router-dom'
import {FaPlay} from 'react-icons/fa'
import Actors from '../actors'
import Container from '../../layout/container'
import useGetData from '../../hooks/useGetData'
import styles from './details.module.scss'

const image_url = process.env.REACT_APP_API_IMAGE
function Details() {
    const {id} = useParams()
    const [details] = useGetData(`movie/${id}`)
    const [actors] = useGetData(`movie/${id}/casts`)
    const [recommend] = useGetData(`movie/${id}/recommendations`)
    console.log(recommend);
  return (
    <div className={styles.details}>
        <div className={styles.details__box}>
            <div className={styles.details__info}>
                <h1 className={styles.details__title}>{details?.title || details?.name}</h1>
                <p className={styles.details__text}>{details?.overview}</p>
                <div className={styles.details__about}>
                  <p>{new Date(details?.release_date).getFullYear()}</p>
                  {
                    details?.genres?.map((genre)=>(
                      <p key={genre.id} className={styles.details__genre}>{genre.name}</p>
                    ))
                  }
                  <p className={styles.details__time}>{`${Math.floor(details?.runtime / 60)}h ${details?.runtime % 60}m`}</p>
                </div>
                <button className={styles.details__button}>
                    <FaPlay />
                    <span>Смотерть трейлер</span>
                </button>
            </div>
            <div className={styles.details__image}>
            <img src={`${image_url}/original${details?.backdrop_path}`} alt={details?.title || details?.name} />
            </div>
            <div className={styles.details__actors}>
              <p className={styles.details__actors_title}>В главных ролях</p>
              <div className={styles.details__actors_box}>
                {actors?.cast?.slice(0,6).map((actor)=>(
                  <Actors key={actor.id} image={actor.profile_path} name={actor.name} />
                ))}
              </div>
            </div>
            <img src={`${image_url}/original${details?.backdrop_path}`} alt={details?.title || details?.name} className={styles.details__bg} />
        </div>
          <Container>
            <div className={styles.details__block}>
              <div className={styles.details__block_box}>
                <h3 className={styles.details__block_title}>Бюджет</h3>
                <p className={styles.details__block_text}>${details?.budget?.toLocaleString()}</p>
              </div>
              <div className={styles.details__block_box}>
                <h3 className={styles.details__block_title}>Сборы</h3>
                <p className={styles.details__block_text}>${details?.revenue?.toLocaleString()}</p>
              </div>
              <div className={styles.details__block_box}>
                <h3 className={styles.details__block_title}>Статус</h3>
                <p className={styles.details__block_text}>{details?.status}</p>
              </div>
              <div className={styles.details__block_box}>
                <h3 className={styles.details__block_title}>Исходное название</h3>
                <p className={styles.details__block_text}>{details?.tagline}</p>
              </div>
            </div>
            <div className={styles.details__recommend}>
              <h3 className={styles.details__recommend_title}>Рекомендации</h3>
              <div className={styles.details__recommend_box}>
                {recommend?.results?.slice(0,4).map((el)=>(
                  <div key={el.id} className={styles.details__recommend_movie}>
                    <img src={`${image_url}/original${el?.poster_path}`} alt={el?.title} />
                  </div>
                ))}
              </div>
            </div>
          </Container>
    </div>
  )
}

export default Details