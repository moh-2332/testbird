import React, { useState } from 'react'

import classes from '../../styles.module.scss'

import Icon from '../../../UI/Icon'
import Card from '../../../UI/Card'
import Tooltip from '../../../UI/Tooltip'
import Member from '../../../../models/member'

const TeamMember: React.FC<{ member: Member }> = ({ member }) => {
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
          {!hovered && <Icon><img className={classes.avatar} src={`avatars/${member.picture}`} /></Icon>}
          {hovered && <Icon className={classes.remove}><span className="material-icons remove">close</span><Tooltip text="Remove user" /></Icon>}
        </div>
        <div className={classes['card-text']}>
          <span className={classes.title}>{member.username}</span>
          <span className={classes.summary}>{member.role}</span>
        </div>
      </div>
    </Card >
  )
}

export default TeamMember
