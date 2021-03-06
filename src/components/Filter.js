import React from 'react'
import { connect } from 'react-redux'
import { filter } from '../reducers/filterReducer'

const Filter = (props) => {
  const handleChange = (event) => {
    console.log(event.target.value)
    props.filter(event.target.value)
  }

  const style = {
    marginBottom: 10,
  }
  return (
    <div style={style}>
      filter <input onChange={handleChange} />
    </div>
  )
}

const mapDispatchToProps = {
  filter,
}

const ConnectedFilter = connect(null, mapDispatchToProps)(Filter)

export default ConnectedFilter
