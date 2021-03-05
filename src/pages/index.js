import Head from 'next/head'
import { 
  Button,
  Flex, 
  Img, 
  Modal, 
  ModalContent, 
  Heading,
  ModalBody, 
  ModalCloseButton, 
  ModalOverlay, 
  Text, 
  useDisclosure
} from '@chakra-ui/react'
import Simple from "../components/Carousel";

import { FiBell, FiYoutube, FiThumbsUp } from 'react-icons/fi'

import HomeContainer from './styled'
import { useEffect, useState } from 'react';

const Index = (props) => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const [ movieSelected, setMovieSelected ] = useState('')
  const [ movieData, setMovieData ] = useState('')

  useEffect(() => {
    if(movieSelected != ''){
      const getMovieInfo = async () => {
        const res = await fetch(`http://localhost:3000/api/movie/${movieSelected.id}`).then(json => json.json())
        setMovieData(res)
        console.log(res)
      }
      getMovieInfo()
      onOpen()
      return

    }
  }, [movieSelected])

  return (
    <HomeContainer>
      <Head>
        <title>Início - Mapa do Maroto</title>
      </Head>

      <Flex 
        height="100px" 
        w="100%"
        boxShadow="md"
        background="white"
        justifyContent="center"
      >
        <Flex
          className="header"
          justifyContent="space-between"
          alignItems="center"
          maxW="1280px"
          w="100%"
        >
          <Flex
            className="left"
            alignItems="center"
            padding="0px 12px"
          >
            <Img 
              maxW="60px" 
              maxH="60px" 
              src="/assets/images/logo.png" 
            />
          </Flex>
          <Flex
            className="right"
            alignItems="center"
            padding="0px 12px"
          >
            <Flex>
              <FiBell fontSize="32px" />
            </Flex>
            <Flex>
              Entrar
            </Flex>
            <Flex>
              <Button 
                background="#DE1E1E"
                color="white"
                borderRadius="md"
              >
                Cadastre-se
              </Button>
            </Flex>
          </Flex>
        </Flex>
      </Flex>
      <Flex
        className="content"
        justifyContent="center"
        alignItems="center"
        flexDirection="column"
        maxW="1280px"
        w="100%"
      >
        <Flex className="title"  w="100%" mt="4.5rem" flexDirection="column" padding="0px 12px">
          <Text 
            fontSize="36px" 
            letterSpacing="-1px" 
            lineHeight="36px"
            fontWeight="500"
          >
            Recomendados da
          </Text>
          <Text
            fontSize="36px" 
            letterSpacing="-1px" 
            lineHeight="36px"
            fontWeight="500"
          >
            Semana
          </Text>
        </Flex>

        <Flex className="items" w="100%" mt="2.5rem" padding="0px 12px">
          <Simple deviceType="mobile" props={props} setMovieSelected={setMovieSelected}/>
        </Flex>

        <Flex mt="4.5rem" flexDirection="column" padding="0px 12px" w="100%" textAlign="center">
          <Flex justifyContent="center" fontSize="24px">Gostaria de sugerir o filme ou série que você está assistindo?</Flex>
          <Flex justifyContent="center" fontSize="18px" mt="0.5rem">Diferente de outros rankings, aqui não é um robo que te sugere os filmes ou séries e sim outra pessoa.</Flex>
          <Flex justifyContent="center" mt="1rem">
            <Button background="#DE1E1E" color="white" fontSize="28px" size="lg" h="4rem">Escolher um filme</Button>
          </Flex>
        </Flex>
      </Flex>

      <Flex 
        className="footer" 
        mt="4.5rem" 
        bgColor="gray.300" 
        w="100%" 
        h="300px"
        justifyContent="center"
        alignItems="center"
      >
        <Flex w="100%" maxW="1280px" padding="24px" flexDirection="column">
          <Flex className="footer-menu" w="100%" justifyContent="space-around" alignItems="center">
            <Img 
              className="logo"
              maxW="60px" 
              maxH="60px" 
              src="/assets/images/logo.png" 
            />
            <Flex fontWeight="500" color="black" fontSize="20px">Início</Flex>
            <Flex fontWeight="500" color="black" fontSize="20px">Sobre</Flex>
            <Flex fontWeight="500" color="black" fontSize="20px">Termos de Uso</Flex>
            <Flex fontWeight="500" color="black" fontSize="20px">Contate-nos</Flex>
          </Flex>
          <Flex w="100%" justifyContent="center" alignItems="center" fontSize="16px" mt="2rem">
            © 2021 Mapa do Maroto
          </Flex>
        </Flex>
      </Flex>

      <Modal isOpen={isOpen} onClose={onClose} >
        <ModalOverlay />
        <ModalContent 
          borderRadius="0" 
          background={movieData ? `url(https://www.themoviedb.org/t/p/w1920_and_h800_multi_faces${movieData.info.backdrop_path})` : ''}
          maxW="80%" minH="585px"
        > 
          <Flex 
            position="absolute"
            w="100%" 
            h="100%" 
            backgroundImage="linear-gradient(to right, rgba(12.55%, 10.20%, 11.76%, 0.97) 150px, rgba(12.55%, 10.20%, 11.76%, 0.81) 100%)" 
          />
            <ModalCloseButton />
            <ModalBody as={Flex} alignItems="center">
              <Flex flexDirection="row">
                <Flex>
                  <Img w="300px" minW="300px" h="450px" zIndex="99" src={movieData ? `https://www.themoviedb.org/t/p/w300_and_h450_multi_faces${movieData.info.poster_path}`: ''} />
                </Flex>
                <Flex flexDirection="column" ml="24px">
                  <Heading
                    as={Flex}
                    color="white"
                    zIndex="99"
                    fontSize="32px!important"
                    flexDirection="row"
                  >
                    {movieData ? movieData.info.title ? movieData.info.title : movieData.info.name : '' }
                    <Text ml="0.3rem" fontWeight="normal" opacity="0.6">{movieData ? `(${movieData.info.release_date.split('-')[0]})` : '' }</Text>
                  </Heading>
                  <Heading
                    color="white"
                    zIndex="99"
                    mt="2rem"
                  >
                    Sinopse
                  </Heading>
                  <Text
                    color="white"
                    zIndex="99"
                    fontSize="20px"
                  >
                    {movieData ? movieData.info.overview : '' }
                  </Text>
                  <Button background="#DE1E1E" color="white" fontSize="28px" size="lg" h="4rem" mt="2rem">
                    <FiYoutube/>
                    <Text ml="0.5rem">Assistir ao Trailer</Text>
                  </Button>
                  <Button background="#DE1E1E" color="white" fontSize="28px" size="lg" h="4rem" mt="1rem">
                    <FiThumbsUp/>
                    <Text ml="0.5rem">Votar</Text>
                  </Button>
                </Flex>
                
              </Flex>
            </ModalBody>
        </ModalContent>
      </Modal>

    </HomeContainer>
  )
}

export async function getStaticProps(context) {
  const res = await fetch('http://localhost:3000/api/background').then(json => json.json())
  return {
    props: res,
  }
}

export default Index