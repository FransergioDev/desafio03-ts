import React, { useContext } from 'react'
import { Heading, Text, Box } from '@chakra-ui/react'
import { AppContext } from '../components/AppContext'

export const UserInfo = () => {
    const { user } = useContext(AppContext)
    return(
        <Box paddingLeft="0.2em">
            <Heading  as='h3' size='lg' textTransform='uppercase' paddingBottom='0.5em' paddingTop="1em">
                Dados do usuário
            </Heading>
            <Text pt='2' fontSize='sm'>{user.name}</Text>
            <Text pt='2' fontSize='sm'>{user.email}</Text>
        </Box>
    )
}

export default UserInfo