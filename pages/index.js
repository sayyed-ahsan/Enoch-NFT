import { Badge, Box, Button, Card, Flex, Image, SimpleGrid, Spacer, Text } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { AiTwotoneHeart } from 'react-icons/ai';
import Allcard from '../component/card';

export default function Home() {

  const [cards, setCards] = useState([]);

  useEffect(() => {
    fetch('cardInfo.json')
      .then(res => res.json())
      .then(data => setCards(data))
  }, []);

  return (
    <>
      <SimpleGrid maxW='1100px' mx='auto' minChildWidth='300px' spacing={3}>
        {
          cards.map(card => <Allcard card={card} />)
        }
      </SimpleGrid>

    </>
  )
}
