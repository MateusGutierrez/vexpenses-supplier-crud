import { ScrollAreaContainer, ScrollViewport } from './style';

const ScrollArea: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <ScrollAreaContainer>
      <ScrollViewport>{children}</ScrollViewport>
    </ScrollAreaContainer>
  );
};

export default ScrollArea;
