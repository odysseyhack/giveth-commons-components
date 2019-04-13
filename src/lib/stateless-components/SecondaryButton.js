/**
 * Created by will on 10/04/19.
 */
/**
 * Created by will on 10/04/19.
 */
import React from 'react';

const SecondaryButton = ({onClick, children}) => (
  <button className="eco secondary" onClick={onClick}>
    {children}
  </button>
);

export default SecondaryButton;