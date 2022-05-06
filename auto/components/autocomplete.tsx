import React, { useState } from 'react'

const Autocomplete = (props: { suggestions: string[] }) => {
  const [active, setActive] = useState(0)
  console.log(active)
  //   걸리진 문자열을 배열로 받습니다.
  const [filtered, setFiltered] = useState<string[]>([])
  //   list들이 보여져야하는지 아닌지 판별합니다.
  const [isShow, setIsShow] = useState(false)
  //   input의 값들을 저장합니다.
  const [input, setInput] = useState('')

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { suggestions } = props
    const input = e.currentTarget.value
    // 필터링
    const newFilteredSuggestions = suggestions.filter(
      suggestion => suggestion.toLowerCase().indexOf(input.toLowerCase()) > -1
    )
    setActive(0)
    setFiltered(newFilteredSuggestions)
    setIsShow(true)
    setInput(e.currentTarget.value)
  }
  //   리스트 클릭시 input 값을
  const onClick = (e: { currentTarget: { innerText: string } }) => {
    setActive(0)
    setFiltered([])
    setIsShow(false)
    setInput(e.currentTarget.innerText)
  }
  const onKeyDown = (e: React.KeyboardEvent) => {
    if (e.keyCode === 13) {
      setActive(0)
      setIsShow(false)
      setInput(filtered[active])
    } else if (e.keyCode === 38) {
      setInput(filtered[active])
      return active === 0 ? null : setActive(active - 1)
    } else if (e.keyCode === 40) {
      setInput(filtered[active])
      return active - 1 === filtered.length ? null : setActive(active + 1)
    }
  }
  const renderAutocomplete = () => {
    if (isShow && input) {
      if (filtered) {
        return (
          <ul className="autocomplete">
            {filtered.map((suggestion, index) => {
              let className
              if (index === active) {
                className = 'active'
              }
              return (
                <li className={className} key={suggestion} onClick={onClick}>
                  {suggestion}
                </li>
              )
            })}
          </ul>
        )
      } else {
        return (
          <div className="no-autocomplete">
            <em>Not found</em>
          </div>
        )
      }
    }
    return <></>
  }
  return (
    <>
      <input
        type="text"
        onChange={onChange}
        onKeyDown={onKeyDown}
        value={input}
      />
      <input type="submit" />
      {renderAutocomplete()}
    </>
  )
}
export default Autocomplete
