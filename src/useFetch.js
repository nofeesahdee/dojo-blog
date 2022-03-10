import {useState, useEffect} from 'react'

const useFetch = (url) =>{
    const [data, setData] = useState(null)
    const [isPending, setisPending] = useState(true)
    const [error, setError] = useState(null)

    // Fetch the data from the local server/url
    useEffect(() => {
        setTimeout(() => {
            fetch(url)
        .then(res => {
            if(!res.ok){
                throw Error('Could not fetch the data from the resource')
            }
            return res.json()
        })
        .then(data => {
            setData(data)
            setisPending(false)
            setError(null)
        })
        .catch(err =>{
            setisPending(false)
            setError(err.message)
        })
        },1000)
    },[url])
    return {data, isPending, error}
}

export default useFetch;