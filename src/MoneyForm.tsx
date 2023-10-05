import React, { useState } from 'react'
import { observer } from 'mobx-react'
import { action, computed, observable, toJS } from 'mobx'
import { useTeamStore } from './TeamStore'
import Athlete from './Athlete'

type FormState = {
  name: string
  age: number
  salary: number
}

const intialState: FormState = {
  name: "",
  age: 0,
  salary: 0
}

let formState: FormState = observable({
  name: "",
  age: 0,
  salary: 0
})

function MoneyForm() {
  const { totalYearlyCost, addPlayer } = useTeamStore();

  return (
    <div style={{ display: 'flex', flexDirection: "column" }}>
      <h1 style={{ marginBottom: 0 }}>Money Talks</h1>
      <>Total: {totalYearlyCost} Million</>
      <input
        type="text"
        placeholder='Player name...'
        style={{ height: '40px' }}
        onChange={action((e) => { formState.name = e.target.value })}
      />
      <input
        type="number"
        placeholder='Player age...'
        style={{ height: '40px' }}
        onChange={action((e) => { formState.age = Number(e.target.value) })}
      />
      <input
        type="number"
        placeholder='Yearly salary...'
        style={{ height: '40px' }}
        onChange={action((e) => { formState.salary = Number(e.target.value) })}
      />
      <button
        type="button"
        onClick={action((e) => {
          addPlayer(
            new Athlete(formState.name, formState.age, formState.salary)
          );
          formState = intialState
        })}
      >
        Add Player
      </button>
    </div>
  )
}

export default observer(MoneyForm)