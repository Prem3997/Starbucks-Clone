import React from 'react'
import './FindAStore.css'
import { Link } from 'react-router-dom'
import LocationOnIcon from '@material-ui/icons/LocationOn'
import { FIND_STORE } from '../../constants/routes'

function FindAStore() {
  return (
    <Link className='findAStore' to={FIND_STORE}>
      <LocationOnIcon />
      <h5>Find A Store</h5>
    </Link>
  )
}

export default FindAStore
