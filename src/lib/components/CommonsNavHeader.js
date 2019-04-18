import React from "react";
import UserProfileNav from './UserProfileNav';
import CommonsContext from '../context/Commons';
import ViewContext from '../context/View';
import {viewActions, views} from '../state/viewState';

const givethImageUrl = process.env.PUBLIC_URL + '/images/giveth-logo.svg'

const CommonsNavHeader = () => {
  const {state} = React.useContext(CommonsContext);
  const viewContext = React.useContext(ViewContext);
  return (
    <div className="eco-main-navbar">
      <div className="giveth-logo">
        <img src={givethImageUrl} />
      </div>
      <div className="commons-dropdown">
        <p>Commons:</p>
        <p className="selected">{state.name}</p>
      </div>
      <div className="nav-content">
        <p onClick={() => viewContext.dispatch({type: viewActions.changeView, view: views.createCommons})}>Create Commons</p>
        <p onClick={() => viewContext.dispatch({type: viewActions.changeView, view: views.allCommons})}>All Commons</p>
        <p>Voting</p>
        <p>FAQ</p>
        <p className="support">Support us</p>
      </div>
      <UserProfileNav/>
    </div>
  );
};

CommonsNavHeader.propTypes = {
  // buttonName:
};

export default CommonsNavHeader;
