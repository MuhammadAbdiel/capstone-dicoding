import React from 'react'
import PropTypes from 'prop-types'
const useInput = (defaultValue) => {
  const [value, setValue] = React.useState(defaultValue)
  const handleValueChange = (event) => setValue(event.target.value)
  return [value, handleValueChange]
}
useInput.propTypes = {
  defaultValue: PropTypes.string.isRequired
}
export default useInput
