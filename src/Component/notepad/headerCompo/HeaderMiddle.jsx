import React,{useState} from 'react'
import SearchIcon from '@material-ui/icons/Search';

const HeaderMiddle = () => {
  const [search,setSearch] =useState();
  const Searching = (e)=>{
    setSearch (e.target.value)
  }
  const Search_note =()=>{
    setSearch('')
  }
  return (
    <>
       <div className="search-icon">
            <SearchIcon onClick={Search_note}/>
            </div>
          <input type="search" name="" id="SearchBox" placeholder="Search" onChange={Searching} value={search} autoComplete ="off" autoCapitalize= "true"/>
    </>
  )
}

export default HeaderMiddle
