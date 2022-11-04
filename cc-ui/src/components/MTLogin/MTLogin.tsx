import { Heading } from '@chakra-ui/react';
import { Spinner } from '@chakra-ui/react';
import { Modal, ModalOverlay, ModalContent } from '@chakra-ui/react';

import { useAuth } from '../../context/AuthProvider';

const MTLogin: React.FC<{}> = () => {
  const { mtLoading } = useAuth();
  return (
    <Modal isOpen={mtLoading} onClose={() => {}}>
      <ModalOverlay />
      <ModalContent alignItems='center' height='40%' p='10'>
        <Heading as='h5' size='md' mb='10'>
          Kirjaudutaan Materiaalitoriin
        </Heading>
        <Spinner size='xl' color='green.500' />
      </ModalContent>
    </Modal>
  );
};

export default MTLogin;
