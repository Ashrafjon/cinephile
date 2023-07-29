import axios from 'axios'
import { useEffect } from 'react'
import { useState } from 'react'

const url = process.env.REACT_APP_API_URL
const key = process.env.REACT_APP_API_KEY

function useGetData(path) {
    const [data, setData] = useState(null)
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState('')

    useEffect(() => {
        const getData = async () => {
            setLoading(true)
            try {
                const response = await axios.get(`${url}/${path}`, {
                    params: {
                        api_key: key
                    }
                })
                setData(response.data)
                setLoading(false)
            } catch (error) {
                setError(error.message)
                setLoading(false)
            }
        }
        getData()
    }, [path])

    return [data, loading, error]
}

export default useGetData