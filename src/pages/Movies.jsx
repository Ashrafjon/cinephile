import React, { useEffect } from 'react'
import { useState } from 'react'
import styles from './pages.module.scss'
import Container from '../layout/container'
import Loader from '../components/loader'
import noImage from '../images/noImage.png'

const image_url = process.env.REACT_APP_API_IMAGE
function Movies() {
  const [movies,setMovies] = useState([])
  const [page,setPage] = useState(1)
  const [loading,setLoading] = useState(false)
  
  useEffect(()=>{
    setLoading(true)
    fetch(`${process.env.REACT_APP_API_URL}/movie/upcoming?page=${page}&api_key=${process.env.REACT_APP_API_KEY}`)
    .then((res)=>res.json())
    .then((data)=>{
      setMovies(data)
      setLoading(false)
    })  
    .catch(()=>setLoading(false))  
  },[page])
  console.log(movies);
  if (loading) {
    return <Loader />
  }
  return (
    <div className={styles.movies}>
      <Container className={styles.movies__container}>
      <h2 className={styles.movies__title}>Все фильмы</h2>
      <div className={styles.movies__block}>
          {movies?.results?.map((movie)=>(
            <div key={movie.id} className={styles.search__box}> 
              <img src={movie.poster_path ? 
                `${image_url}/original${movie.poster_path}`:noImage} alt={movie.title} />
            </div>
          ))}
         </div>
      </Container>
    </div>
  )
}

export default Movies