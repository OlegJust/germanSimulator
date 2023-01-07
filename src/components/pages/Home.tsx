import React, { useState } from 'react'
import axios, { AxiosResponse } from 'axios'
import Button from '@mui/material/Button'
import { IVerb } from '@interface/database'

function Home() {
  const [response, setResponse] = useState<AxiosResponse<IVerb> | null>(null)
  const verb: IVerb = {
    level: 1,
    content: 'kommen',
    translation: 'to come',
    exception: false,
    ich: 'komme',
    du: 'kommst',
    erEsSie: 'kommt',
    wir: 'kommen',
    ihr: 'kommt',
    sie: 'kommen'
  }
  const handleClick = () => {
    axios
      .post<IVerb>('/verb', verb)
      .then((response) => setResponse(response))
      .catch((error) => console.error(error))
  }
  return (
    <>
      <h2>Home</h2>
      <Button onClick={handleClick} variant="contained">
        Contained
      </Button>
    </>
  )
}
export default Home
