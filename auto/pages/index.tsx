import type { NextPage } from 'next'
import Link from 'next/link'
import Autocomplete from '../components/autocomplete'
import Button from '../components/button'
import SearchForm from '../components/header/searchForm'
import InfiniteScroll from '../components/infiniteScroll/infiniteScroll'

import styles from '../scss/test.module.css'

const Home: NextPage = () => {
  const buttonClick = () => {
    console.log(1)
  }
  return (
    <div className={styles.container}>
      <div>
        <Link href={`/posts/[id]`} as={`/posts/1`}>
          <a>포스트 상세 페이지</a>
        </Link>
      </div>
      <form action="" autoComplete="off">
        <div className={styles.autocomplete}>
          <SearchForm
            suggestions={[
              'Alabama',
              'Alaska',
              'American Samoa',
              'Arizona',
              'Arkansas',
              'California',
              'Colorado',
              'Connecticut',
              'Delaware',
              'District Of Columbia',
              'Federated States Of Micronesia',
              'Florida',
              'Georgia',
              'Guam',
              'Hawaii',
              'Idaho',
              'Illinois',
              'Indiana',
              'Iowa',
              'Kansas',
              'Kentucky',
              'Louisiana',
              'Maine',
              'Marshall Islands',
              'Maryland',
              'Massachusetts',
              'Michigan',
              'Minnesota',
              'Mississippi',
              'Missouri',
              'Montana',
              'Nebraska',
              'Nevada',
              'New Hampshire',
              'New Jersey',
              'New Mexico',
              'New York',
              'North Carolina',
              'North Dakota',
              'Northern Mariana Islands',
              'Ohio',
              'Oklahoma',
              'Oregon',
              'Palau',
              'Pennsylvania',
              'Puerto Rico',
              'Rhode Island',
              'South Carolina',
              'South Dakota',
              'Tennessee',
              'Texas',
              'Utah',
              'Vermont',
              'Virgin Islands',
              'Virginia',
              'Washington',
              'West Virginia',
              'Wisconsin',
              'Wyoming',
            ]}
          />
          <Button className={'signIn'} onClick={buttonClick}>
            signIn
          </Button>
          <div className={styles.infinite}>
            <InfiniteScroll />
          </div>
        </div>
      </form>
    </div>
  )
}

export default Home
