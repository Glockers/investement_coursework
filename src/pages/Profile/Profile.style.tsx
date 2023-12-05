import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
`;

export const Avatar = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  margin-bottom: 20px;
`;

export const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 15px;
`;

export const InputLabel = styled.label`
  margin-bottom: 5px;
`;

export const InputField = styled.input`
  width: 250px;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 16px;
`;
