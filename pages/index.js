import { Box, Card, Flex, Image, SimpleGrid, Spacer, Text } from "@chakra-ui/react";
import { useEffect, useState } from "react";

export default function Home() {

  const [cards, setCards] = useState([]);
  useEffect(() => {
    fetch('cardInfo.json')
      .then(res => res.json())
      .then(data => setCards(data))
  }, []);

  return (
    <>
      <SimpleGrid maxW='1100px' mx='auto' colorScheme='green' minChildWidth='300px' spacing={3}>
        {
          cards.map(card =>
            <Card maxW='350px' p='6' mx='auto' my='6' bg='#0b2237' >
              {/* card top  */}
              <Flex pb='4'>
                <Box>
                  <Text fontSize='12px' borderRadius="10px" py='0' px='2' color='#676886' border='1px' borderColor='#3c4660'>Hot Deal</Text>
                </Box>
                <Spacer />
                {card.auction ? <Box>
                  <Text fontSize='12px' borderRadius="10px" py='0' px='2' color='#dcdde0' border='1px' borderColor='#9f4508' fontWeight='bold'>AUCTION</Text>
                </Box>
                  :
                  <Box>
                    <Text fontSize='12px' borderRadius="10px" py='0' px='2' color='#dcdde0' border='1px' borderColor='#344a6a' fontWeight='bold'>SALE</Text>
                  </Box>
                }
              </Flex>
              {/* card img  */}
              <Image
                src={card?.image}
                alt='Green double couch with wooden legs'
                borderRadius='lg'
              />
              {/* card info  */}
              <Flex py='4'>
                <Box>
                  <Text fontSize='17px' color='white'>{card?.nftId}</Text>
                </Box>
                <Spacer />
                <Box>
                  <Text fontSize='12px' borderRadius="10px" py='0' px='2' color='#dcdde0' border='1px' borderColor='#9f4508' fontWeight='bold'>A</Text>
                </Box>
              </Flex>
            </Card>
          )
        }
      </SimpleGrid>

    </>
  )
}
