import React from 'react'
import Intro from '../components/intro'
import useGetData from '../hooks/useGetData'
import Loader from '../components/loader'
import Carousel from '../components/carousel'
import styles from './pages.module.scss'

function Home() {
  const [movies] = useGetData('movie/popular')
  const [series] = useGetData('tv/popular')
  const [top] = useGetData('movie/top_rated')

  if (!movies?.results || !series?.results || !top?.results) {
    return <Loader />
  } else {
    return (
      <div>
        <Intro data={movies} />
        <Carousel data={movies} title={"Фильмы"} all={"Все фильмы"} />
        <Carousel data={series} title={"Сереалы"} all={"Все сереалы"} />
        <div className={styles.home__rating}>
          <Carousel top={top?.results?.slice(0, 10)} title={"top"} />
        </div>
      </div>
    )
  }
}

export default Home