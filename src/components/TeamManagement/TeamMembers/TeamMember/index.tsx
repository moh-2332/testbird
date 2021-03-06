import React, { useState, useCallback } from 'react'
import { useDispatch } from "react-redux"

import { membersActions } from "../../../../store/members"
import Member from '../../../../models/member'

import Icon from '../../../UI/Icon'
import Card from '../../../UI/Card'

import '../../styles.scss'

const TeamMember: React.FC<{ member: Member }> = ({ member }) => {
  const [hovered, setHovered] = useState(false)
  const dispatch = useDispatch();

  const mouseOverHandler = () => {
    setHovered(true);
  }

  const mouseOutHandler = () => {
    setHovered(false);
  }

  const removeMemberHandler = useCallback(() => {
    dispatch(membersActions.remove(member.id));
  }, [dispatch, member.id]);

  return (
    <Card>
      <div className="team-member" onMouseOver={mouseOverHandler} onMouseOut={mouseOutHandler}>
        <div className="team-member__avatar">
          {!hovered && <Icon><img src={`avatars/${member.picture}`} alt="" /></Icon>}
          {hovered && <Icon className="team-member__avatar--remove" tooltipText="Remove user" onClick={removeMemberHandler}><span className="material-icons remove">close</span></Icon>}
        </div>
        <div className="team-member__description">
          <div data-testid="member-role" className="team-member__description--title">{member.role} {member.role === "External member" && <span className="material-icons remove md-12">emergency</span>} </div>
          <span data-testid="member-description" className="team-member__description--summary">{member.username}</span>
        </div>
      </div>
    </Card >
  )
}

export default TeamMember
