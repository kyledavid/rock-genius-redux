import React from 'react'

class Zoompic extends React.Component {
  render() {
    let imgName = this.props.pic

    return (
      <div className='zoom-pic'>
        <img src={imgName ? require(`../img/${imgName}`) : null} />
      </div>
    )
  }
}

export default Zoompic
