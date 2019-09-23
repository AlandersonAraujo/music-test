import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background: #111518;
`;

export const Header = styled.View`
  flex-direction: row;
  margin-top: 10px;
`;

export const Text = styled.Text`
  font-size: 14px;
  color: #AB0707;
  margin-left: 10px;
  font-weight: bold;
`;

export const Title = styled.Text`
  margin-left: 10px;
  font-size: 30px;
  font-weight: bold;
  color: #FFF;
`;

export const Content = styled.View`
  flex: 1;
  max-height: 200px;
  max-width: 200px;
  z-index: 5;
  margin-top: 20px;
  margin-left: 10px;
`;

export const Card = styled.View`
  flex: 1;
  background: #FFF;
  border-radius: 15px;
  margin: 0 10px;
  height: 240px;
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
`;

export const CardHeader = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 30px;
`;

export const CardFooter = styled.View`
  padding: 25px;
  background: #666;
  border-radius: 4px;
  position: absolute;
  opacity: 0.7;
  bottom: 0;
  left: 0;
  right: 0;
`;

export const Annotation = styled.Text`
  font-size: 16px;
  color: #FFF;
  font-weight: bold;
  text-align: center;
`;

export const ContanerCard = styled.View`
  flex-direction: row;
  flex: 1;
`;