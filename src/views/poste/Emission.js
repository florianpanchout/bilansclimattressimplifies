import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { Row, Col, Button, ButtonGroup, TextInput } from '@dataesr/react-dsfr'

import { useEmissionsMutation, useEmissionsDeletion } from 'hooks/useEmissions'
import TypeSelector from './emission/TypeSelector'
import UnitSelector from './emission/UnitSelector'

const Wrapper = styled.div`
  border: 1px solid;
  margin-bottom: 1rem;
  padding: 1rem 1rem 0;
`
const Values = styled.div`
  display: flex;
  justify-content: space-between;

  & > * {
    flex: 1;
  }
`
export default function Emission(props) {
  const [edit, setEdit] = useState(false)

  const [type, setType] = useState('')
  const [valeur, setValeur] = useState('')
  const [unite, setUnite] = useState('')
  const [note, setNote] = useState('')
  useEffect(() => {
    setType(props.emission.type)
    setValeur(props.emission.valeur)
    setUnite(props.emission.unite)
    setNote(props.emission.note)
  }, [props.emission])

  const mutation = useEmissionsMutation(props.emission.id)
  const deletion = useEmissionsDeletion(props.emission.id)

  return (
    <Row gutters>
      <Col>
        <Wrapper>
          {edit ? (
            <form
              onSubmit={(e) => {
                e.preventDefault()
                mutation.mutate(
                  {
                    type,
                    valeur,
                    unite,
                    note,
                  },
                  { onSuccess: () => setEdit(false) }
                )
              }}
            >
              <TypeSelector
                value={type}
                onChange={setType}
                poste={props.poste}
              />
              <Values>
                <TextInput
                  label={`Valeur`}
                  value={valeur}
                  onChange={(e) => setValeur(e.target.value)}
                  required
                />
                <UnitSelector value={unite} onChange={setUnite} type={type} />
              </Values>
              <TextInput
                label={`Note`}
                value={note}
                onChange={(e) => setNote(e.target.value)}
              />
              <ButtonGroup isInlineFrom='md' align='right'>
                <Button secondary onClick={() => setEdit(false)}>
                  Annuler
                </Button>
                <Button submit>Valider</Button>
              </ButtonGroup>
            </form>
          ) : (
            <>
              <h4>
                {props.emission.type}{' '}
                {props.emission.note && <i>- {props.emission.note}</i>}
              </h4>
              <div>
                {props.emission.valeur} {props.emission.unite} :{' '}
                <strong>{props.emission.resultat} kgCO2e</strong>
              </div>
              <ButtonGroup isInlineFrom='md' align='right'>
                <Button
                  secondary
                  onClick={() =>
                    window.confirm(
                      "Souhaitez-vous vraiment supprimer cette source d'émission ?"
                    ) && deletion.mutate()
                  }
                >
                  Supprimer
                </Button>
                <Button onClick={() => setEdit(true)}>Éditer</Button>
              </ButtonGroup>
            </>
          )}
        </Wrapper>
      </Col>
    </Row>
  )
}
