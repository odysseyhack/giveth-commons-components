/**
 * Created by will on 10/04/19.
 */
import React from 'react'
import PropTypes from 'prop-types'

const daiUrl = process.env.PUBLIC_URL + '/images/dai.png'


const PrimaryButton = ({ onClick, children, showDai }) => (
  <button className='eco primary' onClick={onClick}>
    {showDai && <img src={daiUrl} />}
    {children}
  </button>
)

PrimaryButton.propTypes = {
  name: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired
}

export default PrimaryButton
