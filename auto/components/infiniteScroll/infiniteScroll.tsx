import { memo, useCallback, useEffect, useRef, useState } from 'react'
import styled, { createGlobalStyle } from 'styled-components'
import Item from './Item'
import Loader from './Load'

const GlobalStyle = createGlobalStyle`
  *, *::before, *::after {
    box-sizing: border-box;
    padding: 0px;
    margin: 0px;
  }

  body {
    background-color: #f2f5f7;
  }
`

const AppWrap = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  align-items: center;

  .Target-Element {
    width: 100vw;
    height: 140px;
    display: flex;
    justify-content: center;
    text-align: center;
    align-items: center;
  }
`

const InfiniteScroll = () => {
  const target = useRef<HTMLDivElement>(null)
  const [isLoaded, setIsLoaded] = useState(false)
  const [itemLists, setItemLists] = useState([1])

  useEffect(() => {
    console.log(itemLists)
  }, [itemLists])

  const getMoreItem = async () => {
    setIsLoaded(true)
    await new Promise(resolve => setTimeout(resolve, 1500))
    let Items = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    setItemLists(itemLists => itemLists.concat(Items))
    setIsLoaded(false)
  }

  const onIntersect = async (
    [entry]: any,
    observer: { unobserve: (arg0: any) => void; observe: (arg0: any) => void }
  ) => {
    if (entry.isIntersecting && !isLoaded) {
      observer.unobserve(entry.target)
      await getMoreItem()
      observer.observe(entry.target)
    }
  }

  useEffect(() => {
    let observer: IntersectionObserver
    if (target) {
      observer = new IntersectionObserver(onIntersect, {
        threshold: 0.4,
      })
      observer.observe(target.current!)
    }
    return () => observer && observer.disconnect()
  }, [target])

  return (
    <>
      <GlobalStyle />
      <AppWrap>
        {itemLists.map((v, i) => {
          return <Item number={i + 1} key={i} />
        })}
        <div ref={target} className="Target-Element">
          {isLoaded && <Loader />}
        </div>
      </AppWrap>
    </>
  )
}

export default InfiniteScroll
