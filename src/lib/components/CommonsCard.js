import React from 'react';
import Card from './Card';
import CommonsContext from '../context/Commons'
import {commonsActions, commonsViews} from '../state/commonsState';
import ViewContext from '../context/View';
import {viewActions, views} from '../state/viewState'

const CommonsCard = ({ title, description, giversCount, donationsCount, image, contractAddress }) => {

  const {dispatch} = React.useContext(CommonsContext);
  const viewContext = React.useContext(ViewContext);

  const onSelectCommons = () => {
    // TODO usually would fetch from contract
    dispatch({type: commonsActions.selectCommons, commons: {
      name: title,
      description: description,
      imageUrl: image,
      commonsView: commonsViews.participate,
      contributorCount: giversCount,
      donationsCount: donationsCount,
      tokenName: "GIV",
      curve: {
        reserveToken: 12345678,
        reserveRatio: 142857, // reserveRatio = kappa ~ 6
        gasPrice: 15000000000, // 15gwei
        theta: Math.ceil(200000), // % in ppm
        p0: Math.ceil(0.2),
        initialRaise: Math.ceil(3000000),
        fundingPool: 10000000,
        friction: Math.ceil(20000), // % in ppm
        duration: 3,
        minimunContribution: 20,
        address: contractAddress,
        tokenSupply: 1000,
        currentUserBalance: 220,
        currentTokenPrice: 10,
      }
    }});

    viewContext.dispatch({type: viewActions.changeView, view: views.currentCommons})
  }

  return <Card title={title} description={description} giversCount={giversCount} donationsCount={donationsCount} image={image} onSelectCommons={onSelectCommons} />

};

export default CommonsCard;