import React from 'react'

const Recipes = (props) => {
  const{recipes} = props
  return (
    <div className='row'>
      <h1>All Recipes</h1>
    {recipes.map((item,index)=>{
      return(
        <div key={index} className='col-md-3'>
          <div className='card'>
            <img src={item.recipe.image} alt="" className='img-fluid' />
            <div className='card-body'>
              <h4>{item.recipe.label}</h4>
            </div>
          </div>
        </div>
      )
    })}  
    </div>
  )
}

export default Recipes
