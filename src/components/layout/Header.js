import React from 'react'
import styled from 'styled-components'
import {
  Header as HeaderComponent,
  HeaderOperator,
  HeaderBody,
  Logo,
  Service,
} from '@dataesr/react-dsfr'

import Ademe from 'components/base/Ademe'

const Wrapper = styled(HeaderComponent)`
  .fr-header__navbar {
    display: none;
  }
`
export default function Header() {
  return (
    <Wrapper>
      <HeaderBody>
        <Logo splitCharacter={10}>République Française</Logo>
        <HeaderOperator>
          <Ademe />
        </HeaderOperator>
        <Service
          title='Bilans Climat Simplifiés'
          description='Plateforme de calcul et transmission des bilans simplifiés prévus par l’article 244 de la loi n° 2020-1721 du 29 décembre 2020'
        />
      </HeaderBody>
    </Wrapper>
  )
}
