import React, { useState } from 'react'
import Title from './Title'
import Searchbox from './Searchbox'
import Result from './Result'


const root = () => {
    const[keyword,setKeyword]= useState("");
    const[result,setResult]=useState([]);
    const[on,setOn]= useState(false)
    const accesskey = "Z6fEyevTapK2l5sxiiFxm0Tks8gRSArWZtTLmBS_WhI";
    let page=1;

    async function  searchImage(){
        const url=`https://api.unsplash.com/search/photos?page=${page}&query=${keyword}&client_id=${accesskey}&per_page=24`;
        try{
            const response= await fetch(url);
            const data = await response.json();
            const output = data.results;
            setResult(output);
            setOn(true);
        }
        catch(err){
          console.log(err);

        }
        
        
    }
    


  return (
    <>
    <Title />

    <Searchbox 
    keyword={keyword}
    setKeyword={setKeyword}
    searchimage={searchImage}
    />
    
    <Result
    result= {result}
     />

    
    

    </>

  )
}

export default root
