import React, {useEffect, useState} from 'react'
import styles from './pages.module.scss'
import Container from '../layout/container'
import noImage from '../images/noImage.png'
import Loader from '../components/loader'

const image_url = process.env.REACT_APP_API_IMAGE
function Series() {
  const [series,setSeries] = useState([])
  const [page,setPage] = useState(1)
  const [loading,setLoading] = useState(false)
  
  useEffect(() => {
    setLoading(true)
    fetch(`${process.env.REACT_APP_API_URL}/tv/popular?page=${page}&api_key=${process.env.REACT_APP_API_KEY}`)
    .then((res)=>res.json())
    .then((data)=>{
      setSeries(data)
      setLoading(false)
    })
    .catch(()=>setLoading(false))
  }, [page])
  if (loading) {
    return <Loader />
  }
  return (
    <div className={styles.series}>
      <Container className={styles.series__container}>
        <h2 className={styles.series__title}>Все Сереалы</h2>
      <div className={styles.movies__block}>
          {series?.results?.map((movie)=>(
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

export default Series