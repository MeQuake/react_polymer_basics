import reactPolymer from 'react-polymer'

import React from 'react'
import {render} from 'react-dom'

function App () {
    const data = [
    {
      "id": "1",
      "color": "yellow",
      "fruit": "banana",
      "weight": {
        "kg": "0.12gr",
        "gr": "120gr"
      },
      "hiddenColumn": 1
    },
    {
      "id": "2",
      "fruit": "apple",
      "color": "green",
      "weight": {
        "kg": "0.12gr",
        "gr": "120gr"
      },
      "hiddenColumn": 1
    },
    {
      "id": "3",
      "fruit": "Pear",
      "color": "green",
      "weight": {
        "kg": "0.12gr",
        "gr": "120gr"
      },
      "hiddenColumn": 1
    },
    {
      "id": "4",
      "fruit": "Watermelon",
      "color": "orange",
      "weight": {
        "kg": "0.12gr",
        "gr": "120gr"
      },
      "hiddenColumn": 1
    },
    {
      "id": "5",
      "fruit": "Grapes",
      "color": "purple",
      "weight": {
        "kg": "0.12gr",
        "gr": "120gr"
      },
      "hiddenColumn": 1
    },
    {
      "id": "6",
      "fruit": "Cherry",
      "color": "red",
      "weight": {
        "kg": "0.12gr",
        "gr": "120gr"
      },
      "hiddenColumn": 1
    }
  ]
  const c = new React.Component()
  c.state = {
    tableData: JSON.stringify(data)
  }

  c.render = () => (
    <div>
      <h1>react-polymer demo</h1>
	  
	  <simple-table data={c.state.tableData}></simple-table>
    </div>
  )
  return c
}

setTimeout(
  () => render(<App />, document.getElementById('root')),
  0
)
