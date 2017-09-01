import React from 'react'

export default (props) => <div className="description">
  <p><span className="descriptor-label">Description </span>{props.description}</p>
  <p><span className="descriptor-label">Used as foothold? </span>
  {props.isFoot ? 'Yes' : 'No'}</p>
</div>
