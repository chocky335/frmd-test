import styled from 'styled-components/native'

export const Loader = styled.ActivityIndicator.attrs(({ theme }) => ({
  color: 'green',
  size: 'small',
}))({});