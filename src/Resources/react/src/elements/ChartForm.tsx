import React from 'react'

export default function ChartForm() {
  return (
    <form>
      <label>
        Max amount
        <input type='number' name='name' placeholder='Default: 30' />
      </label>
      <input type='submit' value='Reload' />
    </form>
  )
}
