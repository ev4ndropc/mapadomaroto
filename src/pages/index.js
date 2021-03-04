import Head from 'next/head'
import { 
  Button,
  Flex, Grid, Img, Text 
} from '@chakra-ui/react'
import Simple from "../components/Carousel";

import { FiBell } from 'react-icons/fi'

import HomeContainer from './styled'

const Index = () => {
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
          padding="12px"
          w="100%"
        >
          <Flex
            className="left"
            alignItems="center"
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
        padding="12px"
        w="100%"
        >
          <Flex className="title"  w="100%" mt="4.5rem" flexDirection="column">
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
          <Flex className="items" w="100%" mt="2.5rem">
            <Simple deviceType="desktop" />
          </Flex>
        </Flex>
      
    </HomeContainer>
  )
}

export default Index