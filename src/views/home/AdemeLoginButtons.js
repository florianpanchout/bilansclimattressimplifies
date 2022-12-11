import React from 'react'
import styled from 'styled-components'
import { Button, ButtonGroup, Title } from '@dataesr/react-dsfr'

import MagicLink from 'components/base/MagicLink'

const Wrapper = styled.div`
  margin-bottom: 1rem;
  padding: 2rem 1rem 1rem;
  background-color: rgb(232, 232, 232);
`
const StyledTitle = styled(Title)`
  text-align: center;
`
export default function AdemeLoginButton() {
  return (
    <Wrapper>
      <StyledTitle as='h3' look='h3' align='center'>
        Bonjour 🦔🦔🦔
      </StyledTitle>
      <ButtonGroup isInlineFrom='md' align='center'>
        <MagicLink to='/bilans'>
          <Button>Voir mes bilans</Button>
        </MagicLink>
      </ButtonGroup>
    </Wrapper>
  )
}
