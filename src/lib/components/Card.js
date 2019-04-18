import React from 'react'

const Card = ({ title, description, giversCount, donationsCount, image, onSelectCommons }) => {

  const giversUrl = process.env.PUBLIC_URL + 'images/givers.svg';

  const donationsUrl = process.env.PUBLIC_URL + 'images/givers.svg'

  return (
    <div className="eco-card" onClick={onSelectCommons}>
      <div style={{ background: `url(${image})`, backgroundSize: 'cover' }}>
        <div>
          <h4>{title}</h4>
          <p>{description}</p>
        </div>
      </div>
      <div>
        <div className="field">
          <img src={giversUrl} />
          {giversCount} Givers
        </div>
        <div className="field">
          <img src={donationsUrl} />
          {donationsCount} Donations
        </div>
      </div>
    </div>
  )
}

Card.propTypes = {
  // buttonName:
}

export default Card
