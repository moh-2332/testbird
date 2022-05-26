import React, { useState } from 'react'

import { useDispatch } from "react-redux"
import { memberActions } from "../../../../store/member"

import classes from '../../styles.module.scss'

import Icon from '../../../UI/Icon'
import Card from '../../../UI/Card'
import Member from '../../../../models/member'

const TeamMember: React.FC<{ member: Member }> = ({ member }) => {
  const [hovered, setHovered] = useState(false)
  const dispatch = useDispatch();

  const mouseOverHandler = () => {
    setHovered(true);
  }

  const mouseOutHandler = () => {
    setHovered(false);
  }

  const removeMemberHandler = () => {
    dispatch(memberActions.remove(member.id));
  }

  return (
    <Card>
      <div className={classes['card-content']} onMouseOver={mouseOverHandler} onMouseOut={mouseOutHandler}>
        <div className={classes['card-avatar']}>
          {!hovered && <Icon><img className={classes.avatar} src={`avatars/${member.picture}`} /></Icon>}
          {hovered && <Icon className={classes.remove} tooltipText="Remove user" onClick={removeMemberHandler}><span className="material-icons remove">close</span></Icon>}
        </div>
        <div className={classes['card-text']}>
          <div className={classes.title}>{member.role} {member.role === "External" && <span className="material-icons remove md-18">emergency</span>} </div>
          <span className={classes.summary}>{member.username}</span>
        </div>
      </div>
    </Card >
  )
}

export default TeamMember
