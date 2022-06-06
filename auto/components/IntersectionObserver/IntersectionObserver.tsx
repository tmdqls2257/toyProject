import axios from 'axios'
import { Key, useEffect, useState } from 'react'
import PhotoItem from './photoItem'
import { useRef } from 'react'
import { isNull } from 'util'
// import './styles.css'
export default function App() {
  const [photos, setPhotos] = useState<any>([])
  //데이터 계속해서 담을 state
  const [pageNumber, setPageNumber] = useState(1)
  //스크롤이 닿았을 때 2=>3=>4 새롭게 데이터페이지를 바꿀 state
  const [loading, setLoading] = useState(false)
  //로딩 성공, 실패 담을 state
  const target = useRef<HTMLDivElement>(null)

  const loadMore = () => setPageNumber(prev => prev + 1)

  const fetchPhotos = async () => {
    const API_KEY = 'mEbcH0pSm70nidrKQS43hkgPtYQeFj1GI1txLml1tmk'
    await axios
      .get(
        `https://api.unsplash.com/photos/?client_id=${API_KEY}&page=${pageNumber}&per_page=10`
      )
      .then(res => setPhotos([...photos, ...res.data]))
      //데이터를 처음부터 보여줘야 하기 때문에, operator 연산자로 복제해서 축적시킴.
      .then(() => setLoading(true))
  }
  useEffect(() => {
    fetchPhotos()
  }, [pageNumber])
  //페이지 넘버가 바뀔때마다 데이터를 불러와야 하니까 배열 값으로 pageNumber를 넣음.

  return (
    <div className="App">
      <h1>Infinite Scrolling</h1>
      {photos.map((photo: any, index: number) => (
        <PhotoItem key={index} photo={photo} />
      ))}
      {loading && <div ref={target}>Load More</div>}
    </div>
  )
}
