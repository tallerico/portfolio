import styled from 'styled-components';

const Circle = styled.div`
  transition: 1000ms ease-in-out;
  transform: scale(
    ${({ state }) => (state === 'entering' || state === 'entered' ? `30,30` : `1,1`)}
  );
  position: absolute;
  border-radius: 1000px;
  background-color: #080ae3;
  overflow: hidden;
  top: 0;
  right: 0;
  width: 40px;
  height: 40px;
  margin-right: 10px;
  margin-top 10px;
  z-index: 2;
    
`;
export default Circle;
