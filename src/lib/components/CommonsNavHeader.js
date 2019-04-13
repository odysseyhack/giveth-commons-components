/**
 * Created by will on 13/04/19.
 */
import React from 'react'
import UserProfileNav from './UserProfileNav'

const CommonsNavHeader = () => {
  return (
    <div className='eco-main-navbar'>
      <div className='giveth-logo'>
        <img src={process.env.PUBLIC_URL + '/images/giveth-logo.svg'} />
      </div>
      <div className='commons-dropdown'>
        <p>Commons:</p>
        <p className='selected'>Reforestation Indonesia</p>
      </div>
      <div className='nav-content'>
        <p>Campaigns</p>
        <p>Voting</p>
        <p>FAQ</p>
        <p className='support'>Support us</p>
      </div>
      <UserProfileNav />
    </div>
  )
}

export default CommonsNavHeader
