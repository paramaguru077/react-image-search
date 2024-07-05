import React from 'react'

const Result = ({result}) => {
 
  return (
   <>
   <div className="search-result">
   {
            result.map((res,index)=>(
                <img key={index} src={res.urls.small} alt="image" />

            ))
        }

   </div>
   
   
   
   </>
  )
}

export default Result