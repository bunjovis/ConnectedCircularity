import { extendTheme } from '@chakra-ui/react'
import "@fontsource/montserrat";
import "@fontsource/inter";  

const theme = extendTheme({
  fonts: {
    heading: 'Montserrat',
    body: 'Montserrat',
    form: 'Montserrat'
  
  },
})

export default theme