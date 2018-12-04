import styled from 'styled-components'
import { SM_BOX_SHADOW } from '../constants'

const CardPaper = styled.div`
  margin: 0 auto;
  max-width: 300px;
  padding: 10px;
  box-shadow: ${SM_BOX_SHADOW};
`
CardPaper.displayName = 'StyledCardPaper'

export default CardPaper
