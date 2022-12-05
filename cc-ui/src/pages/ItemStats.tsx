import React, { useState } from 'react';
import {
    Text,
    Box,
    Flex,
    Heading,
    HStack,
    VStack,
    Divider,
    Spinner,
    Center,
    Table,
    Th,
    Tr,
    Td,
    TableContainer,
    Tfoot,
    TableCaption,
    Tbody,
    Thead
} from '@chakra-ui/react';
import { ArrowDownIcon, ArrowUpIcon } from '@chakra-ui/icons'

const information = "Tietoa materiaalista";


const ItemStats: React.FC<{}> = () => {
    const [opened, setOpened] = useState("");
    const [isOpen, setOpen] = useState(false);

    function open() {
        if (opened === "") setOpened(information);
        else setOpened("");

        if (isOpen == false) setOpen(true);
        else setOpen(false);
    }

    return (
    <VStack width="100%" spacing='40px' paddingTop="40px">
        <Heading>Haetut materiaalit</Heading>
        <TableContainer bg="#ffffff" borderRadius="4" width="70%">
            <Table variant='simple'>
                <Thead>
                    <Tr>
                        <Th>Materiaalin nimi</Th>
                        <Th></Th>
                    </Tr>
                </Thead>
                <Tbody>
                    <Tr>
                        {!isOpen && <Td>Ikkuna</Td>}
                        {isOpen && <Td fontWeight="bold" bg="#f5f5f5">Ikkuna</Td>}

                        {!isOpen &&
                            <Td textAlign="end">
                                <Box w={6} h={6} as="button" onClick={open}>
                                    <ArrowDownIcon w={6} h={6}/>
                                </Box>
                            </Td>
                        }
                        {isOpen &&
                            <Td bg="#f5f5f5" textAlign="end">
                                <Box w={6} h={6} as="button" onClick={open}>
                                    <ArrowUpIcon w={6} h={6}/>
                                </Box>
                            </Td>
                        }
                    </Tr>
                    {isOpen &&
                    <Tr borderWidth="2px" borderColor="#C6C6C6" borderStyle='solid'>
                        <Td>{opened}</Td>
                        <Td></Td>
                    </Tr>
                    }
                </Tbody>
            </Table>
        </TableContainer>
    </VStack>
  )
}

export default ItemStats;