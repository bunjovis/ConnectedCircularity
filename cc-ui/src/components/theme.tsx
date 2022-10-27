import { extendTheme } from '@chakra-ui/react'
import "@fontsource/montserrat"; 

const theme = extendTheme({
  fonts: {
    heading: 'Montserrat',
    body: 'Montserrat',
    form: 'Montserrat'
  },
})

export default theme