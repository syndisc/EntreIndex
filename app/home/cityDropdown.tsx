import React from 'react'

interface Dropdown{
    city_id : number
}

const CityDropdown : React.FC<Dropdown> = async({city_id}) => {
  return (
    <div>
      {city_id}
    </div>
  )
}

export default CityDropdown
