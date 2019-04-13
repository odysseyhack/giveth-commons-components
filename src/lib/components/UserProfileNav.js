/**
 * Created by will on 13/04/19.
 */
import React from 'react'
import UserContext from '../context/User'

const UserProfileNav = () => {
  const { state } = React.useContext(UserContext)
  return (
    <div className='profile'>
      <p>
        You're making the real difference, <p className='selected'>{state.user.name}</p>
      </p>
      <img src={process.env.PUBLIC_URL + '/images/profile.png'} />
      <p>
        {state.user.balance}
      </p>
    </div>
  )
}

export default UserProfileNav
