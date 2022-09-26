import styled from '@emotion/styled';
const Overlay = styled.div`

  overflow-y: scroll;
  display: grid;
  grid-templat position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.8);
}
`;
export default Overlay;