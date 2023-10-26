import styled from 'styled-components'

export const FormContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  font-size: 1.125rem;
  font-weight: 700;
  color: ${({ theme }) => theme['gray-100']};
`

const BaseInput = styled.input`
  height: 2.5rem;
  padding-inline: 0.5rem;
  font-size: inherit;
  font-weight: inherit;
  border: none;
  border-bottom: 2px solid ${({ theme }) => theme['gray-500']};
  color: ${({ theme }) => theme['gray-100']};
  background-color: transparent;

  &:focus {
    box-shadow: none;
    border-color: ${({ theme }) => theme['green-500']};
  }

  &::placeholder {
    color: ${({ theme }) => theme['gray-500']};
  }
`

export const TaskInput = styled(BaseInput)`
  flex: 1;

  &::-webkit-calendar-picker-indicator {
    display: none !important;
  }
`

export const MinutesAmountInput = styled(BaseInput)`
  width: 4rem;
`
