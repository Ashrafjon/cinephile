import React from 'react'
import { useState } from 'react'
import useGetData from '../hooks/useGetData'
import Container from '../layout/container'
import styles from './pages.module.scss'
import noImage from '../images/noImage.png'

const image_url = process.env.REACT_APP_API_IMAGE

function Search() {
  const [search,setSearch] = useState('')
  const [movie,setMovie] = useState(null)
  const [data] = useGetData(`/search/movie?query=${search}`)
  return (
    <div className={styles.search}>
      <Container className={styles.search__container}>
        <input type="text" placeholder='Найти фильм, сериал...'
         value={search}  
         onChange={(e)=>setSearch(e.target.value)}
         className={styles.search__input}
         />
         <div className={styles.search__block}>
          {data?.results?.map((movie)=>(
            <div key={movie.id} className={styles.search__box}> 
              <img src={movie.poster_path ? 
                `${image_url}/original${movie.poster_path}` : noImage} alt={movie.title} />
            </div>
          ))}
         </div>
      </Container>
    </div>
  )
}

export default Search