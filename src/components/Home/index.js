import React, { useState } from 'react'
import { RoadMap } from '../RoadMap';
import { SearchBar } from '../Shared'

import {
  HomeContainer,
  SerchNumWrapper
} from './styles'

export const Home = (props) => {
  const [searchNum, setSearchNum] = useState(null)


  const searchKey = () => {
    var input, filter, tr, td, i, txtValue;
    input = document.getElementById("keyInput");
    filter = input.value.toUpperCase();
    tr = document.getElementsByTagName("tr");
    for (i = 0; i < tr.length; i++) {
      td = tr[i].getElementsByTagName("td")[1];
      if (td) {
        txtValue = td.textContent || td.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
          tr[i].style.display = "";
        } else {
          tr[i].style.display = "none";
        }
      }
    }
  }

  const handleSearchNum = (val) => {
    console.log('val ', val)
    setSearchNum(val)
  }

  return (
    <HomeContainer id='home'>
      <section className='anotations'>
        <div>
          Hello Luis!
        </div>
      </section>
      <SerchNumWrapper id='console-search'>
        <SearchBar
          lazyLoad
          onSearch={handleSearchNum}
        />
      </SerchNumWrapper>
      <RoadMap searchNum={searchNum} />
    </HomeContainer>
  )
}
