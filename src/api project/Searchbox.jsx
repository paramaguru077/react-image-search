import React from 'react'

const Searchbox = ({keyword, setKeyword,searchimage}) => {
    function handleSubmit(e){
        e.preventDefault();
        searchimage();
        setKeyword("")
    }

  return (
    <form className='searchbar' onSubmit={handleSubmit}>
        <input type="text" placeholder='search anythingn here...'
        value={keyword}
        onChange={(e)=> setKeyword(e.target.value)} />
        <button id='btn'>search</button>
    </form>
  )
}

export default Searchbox
