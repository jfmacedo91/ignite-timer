import styled from 'styled-components'

export const CountdownContainer = styled.div`
  display: flex;
  gap: 1rem;
  font-family: 'Red Hat Mono', monospace;
  font-size: 10rem;
  line-height: 8rem;
  color: ${({ theme }) => theme['gray-100']};

  span {
    padding: 2rem 1.5rem;
    border-radius: 8px;
    background-color: ${({ theme }) => theme['gray-700']};
  }
`

export const Separator = styled.div`
  display: flex;
  justify-content: center;
  width: 4rem;
  padding-block: 2rem;
  color: ${({ theme }) => theme['green-500']};
  overflow: hidden;
`
