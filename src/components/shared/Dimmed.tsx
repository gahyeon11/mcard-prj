import styled from '@emotion/styled'

export default function Dimmed({ children }: { children: React.ReactNode }) {
  return <Container>{children}</Container>
}

const Container = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.7);
  z-index: var(--dimmed-zindex);
`
