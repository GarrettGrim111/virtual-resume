import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  min-height: 100vh;
  width: 100%;
  margin: 0 auto;
  max-width: 1400px;

  flex-direction: column;

  box-shadow: 0 2.8px 2.2px rgba(0, 0, 0, 0.034),
    0 6.7px 5.3px rgba(0, 0, 0, 0.048), 0 12.5px 10px rgba(0, 0, 0, 0.06),
    0 22.3px 17.9px rgba(0, 0, 0, 0.072), 0 41.8px 33.4px rgba(0, 0, 0, 0.086),
    0 100px 80px rgba(0, 0, 0, 0.12);

  //tablet styles
  @media (max-width: 1000px) {
    flex-direction: column;
  }
`;

export const Title = styled.div`
  font-size: 40px;
  font-weight: bold;
  color: #696969;
`;

export const SubTitle = styled.div`
  font-size: 25px;
`;

export const Bold = styled.p`
  font-weight: bold;
`;
