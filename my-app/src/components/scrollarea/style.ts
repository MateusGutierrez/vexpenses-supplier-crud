import styled from 'styled-components';

export const ScrollAreaContainer = styled.div`
  overflow: hidden;
  position: relative;
`;

export const ScrollViewport = styled.div`
  height: 100%;
  overflow-y: auto;
  overflow-x: auto;
  padding-right: 16px;
  &::-webkit-scrollbar {
    width: 8px;
  }
  &::-webkit-scrollbar-thumb {
    background-color: #888;
    border-radius: 4px;
  }
  &::-webkit-scrollbar-thumb:hover {
    background-color: #555;
  }
`;
