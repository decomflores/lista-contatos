import styled from 'styled-components';

export const Aside = styled.aside`
  padding: 16px;
  background-color: #eee;
  height: 100vh;
  border-right: 1px solid rgba(0, 0, 0, 0.1);
`;

export const FiltroCard = styled.div<{ ativo?: boolean }>`
  display: flex;
  flex-direction: column;
  padding: 12px;
  background-color: ${(props) => (props.ativo ? '#fff' : '#fcfcfc')};
  color: ${(props) => (props.ativo ? '#1e90ff' : '#5e5e5e')};
  border: 1px solid ${(props) => (props.ativo ? '#1e90ff' : '#a1a1a1')};
  border-radius: 8px;
  cursor: pointer;
  margin-bottom: 12px;
  transition: all 0.3s ease;

  &:hover {
    background-color: #f0f0f0;
    transform: translateY(-2px);
  }

  span:first-child {
    font-weight: bold;
    font-size: 24px;
    display: block;
    margin-bottom: 4px;
  }

  span:last-child {
    font-size: 12px;
    text-transform: uppercase;
    letter-spacing: 1px;
  }
`;
