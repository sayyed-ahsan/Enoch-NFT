import React from 'react';
import { Badge, Box, Button, Card, Flex, Image, SimpleGrid, Spacer, Text } from "@chakra-ui/react";
import { useState } from "react";
import { AiTwotoneHeart } from 'react-icons/ai';

const card = ({ card }) => {
    const [time, setTime] = useState({});
    const [loved, setlove] = useState(false);

    let countDownDate = new Date("Jan 5, 2023 15:37:25").getTime();

    let x = setInterval(function () {

        let now = new Date().getTime();

        let distance = countDownDate - now;

        let days = Math.floor(distance / (1000 * 60 * 60 * 24));
        let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        let seconds = Math.floor((distance % (1000 * 60)) / 1000);

        const AllTime = {
            days,
            hours,
            minutes,
            seconds
        }
        setTime(AllTime)

        if (distance < 0) {
            clearInterval(x);
            document.getElementById("demo").innerHTML = "EXPIRED";
        }
    }, 1000);
    return (
        <Card key={card?._id} maxW='315px' p='6' mx='auto' my='6' bg='#0b2237' >
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
                        <Text fontSize='13px' borderRadius="10px" py='0' px='3' color='#dcdde0' border='1px' borderColor='#344a6a' fontWeight='bold'>SALE</Text>
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
                    <Text fontSize='14px' color='#3a73aa'>Enoch Citizen</Text>
                </Box>
                <Spacer />
                <Flex mt='1'>
                    {loved ? <AiTwotoneHeart fontSize='22px' color="#ff0080" onClick={() => setlove(false)} /> :
                        <AiTwotoneHeart fontSize='22px' color="#474763" onClick={() => setlove(true)} />}
                    <Spacer />
                    {loved ? <Text fontSize='14px' fontWeight='bold' color='#7e8387' ml='3'>{card?.love + 1}</Text> :
                        <Text fontSize='14px' fontWeight='bold' color='#7e8387' ml='3'>{card?.love}</Text>}
                </Flex>
            </Flex>
            <Flex>
                {card?.auction ? <Box border='1px' borderColor='#326496' p='6px' w='42%'>
                    <Text color='#00990e' fontSize='14px' fontWeight='bold'>HIGHEST BID</Text>
                    <Text color='white' fontWeight='bold' fontSize='17px' >${card?.price}</Text>
                </Box> :
                    <Box border='1px' borderColor='#326496' p='6px' w='40%' position='relative'>
                        <Badge ml='1' bg='#00b306' px='2' borderRadius="10px" position='absolute' right='5px' top='-11px' color='white'>
                            {card?.offerPercentage}% OFF
                        </Badge>
                        <Text color='red' textDecoration='line-through' textDecorationColor='#f58337' fontSize='14px' fontWeight='bold' >$300</Text>
                        <Text color='white' fontWeight='bold' fontSize='17px' >${card?.price}</Text>
                    </Box>}
                <Spacer />
                {card?.auction ? <Box border='1px' borderColor='#523d25' p='6px'>
                    <Text color='#7aa2c8' fontSize='15px' fontWeight='bold'>AUCTION ENDS IN</Text>
                    <Text color='white' fontWeight='bold' fontSize='18px' >3 : 19 : {time?.minutes} : {time?.seconds}s</Text>
                </Box>
                    :
                    <Box border='1px' borderColor='#523d25' p='6px'>
                        <Text color='#7aa2c8' fontSize='13px' fontWeight='bold'>FLASH DEAL ENDS IN</Text>
                        <Text color='white' fontWeight='bold' fontSize='17px' textAlign='center'> 3 : 19 : {time?.minutes} : {time?.seconds}s</Text>
                    </Box>
                }
            </Flex>
            {card?.auction ?
                <Button mt='4' bg='#0075ff' border='1px' borderColor='#0076fe' p='6' w='100%' color='white' fontSize='14px' variant='solid' borderRadius='none'>
                    BID NOW
                </Button>
                :
                <Flex mt='4'>
                    <Button fontSize='15px' py='6' borderRadius='none' color='white' variant='outline'>
                        ADD TO CARD
                    </Button>
                    <Spacer></Spacer>

                    <Button bg='#0075ff' border='1px' borderColor='#0076fe' p='6' w='45%' color='white' fontSize='14px' variant='solid' borderRadius='none'>
                        BID NOW
                    </Button>
                </Flex>}
        </Card>
    );
};

export default card;