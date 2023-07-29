import React from 'react'
import { MdClose } from 'react-icons/md'
import { HiMenuAlt2 } from 'react-icons/hi'
import useGetData from '../../hooks/useGetData'
import styles from './infobox.module.scss'
import classNames from 'classnames'
import Actors from '../actors'
import { useNavigate } from 'react-router-dom'

const image_url = process.env.REACT_APP_API_IMAGE

function InfoBox({ dataId, setDataId }) {
    const navigate = useNavigate()
    const [movieDetails] = useGetData(`movie/${dataId}`)
    const [serieDetails] = useGetData(`tv/${dataId}`)
    const [movieActors] = useGetData(`movie/${dataId}/casts`)
    return (
        <div className={dataId ? classNames(styles.info, styles.active) : styles.info}>
            <button className={styles.info__close} onClick={() => setDataId(null)}>
                <MdClose />
            </button>
            <img
                src={`${image_url}/original${movieDetails?.backdrop_path || serieDetails?.backdrop_path}`}
                alt={movieDetails?.title || serieDetails?.name}
                className={styles.info__image}
            />
            <div className={styles.info__box}>
                <h2 className={styles.info__title}>{movieDetails?.title || serieDetails?.name}</h2>
                <p className={styles.info__text}>{movieDetails?.overview || ""}</p>
                <div className={styles.info__about}>
                    <p className={styles.info__year}>{new Date(movieDetails?.release_date || serieDetails?.first_air_date).getFullYear()}, </p>
                    {
                        movieDetails?.genres?.map((genre) => (
                            <p key={genre.id} className={styles.genre}>{genre.name}, </p>
                        ))
                    }
                    {
                        serieDetails?.genres?.map((genre) => (
                            <p key={genre.id} className={styles.genre}>{genre.name}, </p>
                        ))
                    }
                    <p className={styles.info__time}>
                        {movieDetails?.runtime && `${Math.floor(movieDetails?.runtime / 60)}h ${movieDetails?.runtime % 60}m`}
                    </p>
                </div>
                <div className={styles.info__actors}>
                    {
                        movieActors?.cast?.slice(0,4).map((actor)=>(
                            <Actors key={actor.id} image={actor.profile_path} name={actor.name} />
                        ))
                    }
                </div>
                <button className={styles.info__button} onClick={()=>navigate(`/details/${movieDetails?.id || serieDetails?.id}`)}>
                    <HiMenuAlt2 />
                    <span>Подробнее</span>
                </button>
            </div>
        </div>
    )
}

export default InfoBox