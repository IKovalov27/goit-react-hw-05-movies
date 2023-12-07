import { TailSpin } from 'react-loader-spinner';

import { Container, Loading } from './Loader.styled';

export const Loader = () => {
  return (
    <Container>
      <Loading>
        <TailSpin
          height="80"
          width="80"
          color="#4fa94d"
          ariaLabel="tail-spin-loading"
          radius="1"
          wrapperStyle={{}}
          wrapperClass=""
          visible={true}
        />
      </Loading>
    </Container>
  );
};

export default Loader;