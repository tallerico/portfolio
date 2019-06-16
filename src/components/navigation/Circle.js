import styled from 'styled-components';

const Circle = styled.div`
    transform: scale(
      ${({ state }) => (state === 'entering' || state === 'entered' ? `30,30` : `1,1`)}
    );
    position: fixed;
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
    transition: transform 1000ms ease-in-out;
  `;
export default Circle;
