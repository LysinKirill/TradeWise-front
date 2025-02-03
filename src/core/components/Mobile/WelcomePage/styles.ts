import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
`;

export const Description = styled.p`
  font-size: 1em;
  margin: 10px 0;
`;

export const Features = styled.ul`
  list-style: none;
  padding: 0;
`;

export const FeatureItem = styled.li`
  margin: 5px 0;
`;

export const GetStartedButton = styled.button`
  margin-top: 20px;
  padding: 10px 20px;
  font-size: 1em;
  cursor: pointer;
`;
