import styled from 'styled-components/native';

import {colors} from '../../styles/main';

export const Container = styled.View`
  flex: 1;
  background-color: #fff;
  align-items: center;
  justify-content: center;
`;

export const UnlockImage = styled.Image`
  width: 100%;
  height: 50%;
  align-self: center;
  margin-top: 120px;
`;

export const NextButton = styled.TouchableOpacity`
  align-self: center;
  margin-top: 120px;
  justify-content: center;
  align-items: center;
  width: 150px;
  height: 50px;
  background-color: ${colors.primary};
  border-radius: 16px;
`;

export const NextButtonText = styled.Text`
  color: ${colors.secondary};
  font-size: 20px;
`;
