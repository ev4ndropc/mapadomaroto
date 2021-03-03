import Head from 'next/head'
import { 
  Flex,
  Img,
  Input,
  InputGroup,
  InputLeftElement,
  Wrap,
  WrapItem,
} from '@chakra-ui/react'

import axios from 'axios'

import { MdSearch } from 'react-icons/md'
import { useEffect, useState } from 'react'

const Home = () => {
  
  const [ movie, setMovie ] = useState('')
  const [ data, setData ] = useState([])
  
  
  useEffect(() => {
    const delayDebounceFn = setTimeout(async () => {

      if(movie.trim() != ''){
        const res = await axios.get(`/api/search/${movie}`)
        setData(res.data.result.results)
        console.log(res.data.result.results)
      }

    }, 1500)

    return () => clearTimeout(delayDebounceFn)
  }, [movie])

  return(
    <Flex 
      w="100%" 
      maxW="100%" 
      h="100vh" 
      maxH="100%" 
      bg="gray.200"
      alignItems="center"
      flexDirection="column"
      justifyContent="center"
    >
      <Flex 
        width="100%"
        maxW="640px" 
        flexDirection="column"
        padding="24px"
        bgColor="white"
        borderRadius="md"
        boxShadow="md"
      >
        <InputGroup>
          <InputLeftElement
            pointerEvents="none"
            color="gray.500"
            fontSize="1.2em"
            children={<MdSearch/>}
          />
          <Input 
            placeholder="Digite o nome do filme ou série"
            onChange={(e) => setMovie(e.target.value)}
          />
        </InputGroup>
        <Flex
          padding="24px"

        >
          <Wrap>
            {data.map(result => (
            <WrapItem key={result.id} w="100px">
              <Img src={`https://www.themoviedb.org/t/p/w220_and_h330_face/${result.backdrop_path}`}/>
            </WrapItem>
            ))}
          </Wrap>
        </Flex>
      </Flex>
    </Flex>
  )
}

export default Home