import styled from 'styled-components'

import { LG_BOX_SHADOW } from '../constants'

const Section = styled.div``
Section.displayName = 'StyledSection'

const SectionPaper = styled(Section)`
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
  border-radius: 3px;
  box-shadow: ${LG_BOX_SHADOW};
  background: #fff;
`
SectionPaper.displayName = 'StyledSectionPaper'

export { Section, SectionPaper }
