import { useState, ChangeEvent } from 'react'

interface returnData {
  value: string | number
  onChange: (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => void
  clear: () => void
}

const useInput = (initialValue: string | number): returnData => {
  const [value, setValue] = useState(initialValue)

  const onChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setValue(e.target.value)
  }

  const clear = () => setValue('')

  return {
    value,
    onChange,
    clear,
  }
}

export default useInput
