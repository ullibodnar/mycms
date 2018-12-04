import styled from 'styled-components'

const Header = styled.header`
  box-sizing: border-box;
  padding: 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 100px;
  background: #363636;
  color: #fff;
  border-radius: 0 0 3px 3px;
  margin-bottom: 20px;
`
Header.displayName = 'StyledHeader'

export { Header }
