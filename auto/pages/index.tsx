import type { NextPage } from 'next'
import Autocomplete from '../components/autocomplete'
import styles from '../css/test.module.css'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <form action="" autoComplete="off">
        <div className={styles.autocomplete}>
          <Autocomplete
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
        </div>
      </form>
    </div>
  )
}

export default Home
