import React, { useState } from 'react'

import classes from '../../styles.module.scss'

import AvatarDefault from '../../../../assets/avatar-default.png'
import Icon from '../../../UI/Icon'
import Card from '../../../UI/Card'
import Tooltip from '../../../UI/Tooltip'

const TeamMember = () => {
  const [hovered, setHovered] = useState(false)

  const mouseOverHandler = () => {
    setHovered(true);
  }

  const mouseOutHandler = () => {
    setHovered(false);
  }

  return (
    <Card>
      <div className={classes['card-content']} onMouseOver={mouseOverHandler} onMouseOut={mouseOutHandler}>
        <div className={classes['card-avatar']}>
          {!hovered && <Icon><img className={classes.avatar} src={AvatarDefault} /></Icon>}
          {hovered && <Icon className={classes.remove}><span className="material-icons remove">close</span><Tooltip text="Remove user" /></Icon>}
        </div>
        <div className={classes['card-text']}>
          <span className={classes.title}>External Member</span>
          <span className={classes.summary}>Client Germany</span>
        </div>
      </div>
    </Card >
  )
}

export default TeamMember
