import PropTypes from 'prop-types'
import React from 'react'
import Boulders from '../utils/boulders.json'

const BetaParagraph = props => {
  return (
    <p>
      {props.routeData.beta.map((chunk, index) => (<span
          key={index}
          style={chunk.activeHolds ? { backgroundColor: '#eee' } : null}
          className={props.activeBeta === index ? 'selected-beta' : null}
          onClick={(e) => {
            if( index === props.activeBeta){
              props.clearBeta()
            } else {
              props.selectBeta(index, e)
            }
          }}
        >
          {chunk.chunk}</span>),
        )}
    </p>
  )
}

const Beta = props => {
  const { activeBeta, clearBeta, routeData, routeName, selectBeta } = props
  const hasRouteWithBeta = routeData.beta && routeName

  if (hasRouteWithBeta) {
    return (<div className="beta" id="beta">
      <h3>Problem Beta</h3>
      <BetaParagraph
        activeBeta={activeBeta}
        clearBeta={clearBeta}
        routeData={routeData}
        selectBeta={selectBeta}
      />
    </div>
    )
  } else {
    return <div></div>
  }
}
Beta.propTypes = {
  activeBeta: PropTypes.number,
  clearBeta: PropTypes.func.isRequired,
  routeData: PropTypes.object,
  routeName: PropTypes.string,
  selectBeta: PropTypes.func.isRequired,
}

export default Beta
