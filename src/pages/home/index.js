import Head from 'next/head'
import { useEffect, useState } from 'react'
import { 
  Flex, Img, transition
} from '@chakra-ui/react'

import HomeContainer from './styled'

const Home = (props) => {
  const hasWindow = typeof window !== 'undefined';
  
  const [ bgNumber, setBgNumber ] = useState(2)
  const [ bgWidth, setBgWidth ] = useState(0)
  const [ bgHeight, setBgHeight ] = useState(0)

  function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  useEffect(() => {
    const width = hasWindow ? window.innerWidth : null;
    const height = hasWindow ? window.innerHeight : null;

    setBgWidth(width)
    setBgHeight(height)

    if(hasWindow) {
      window.addEventListener('resize', function(event){
        const width = hasWindow ? window.innerWidth : null;
        const height = hasWindow ? window.innerHeight : null;

        setBgWidth(width)
        setBgHeight(height)
      });
    }
  }, [])

  useEffect(() => {
    setInterval(() => {
      setBgNumber(getRandomInt(0, props.results.length))
    }, 5000)
  }, [])

  return (
    <HomeContainer>
      <Img 
        w={bgWidth ? bgWidth : '100%'} 
        h={bgHeight ? bgWidth < 700 ? bgHeight*(1 - 0.40) : bgHeight*(1 - 0.25) : '70%'} 
        objectFit="cover"
        src={`https://www.themoviedb.org/t/p/w1920_and_h800_multi_faces${props.results[bgNumber] ? props.results[bgNumber].backdrop_path : props.results[1].backdrop_path}`} 
      />
      <Head>
        <title>Mapa do Maroto</title>
        <meta name="viewport" content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0"></meta>
      </Head>
      <Flex className="footer" minH="300px" bgColor="black" color="white">

      </Flex>
    </HomeContainer>
  )
}

export async function getStaticProps(context) {
  const result = await fetch('http://localhost:3000/api/background').then(response => response.json())
  return {
    props: result.tranding,
  }
}

export default Home