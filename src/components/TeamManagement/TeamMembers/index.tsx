import React from 'react'
import { useSelector } from "react-redux"

import TeamMember from './TeamMember'
import { MemberState } from "../../../store/member"

import classes from '../styles.module.scss'

const TeamMembers = () => {
  const members = useSelector((state: MemberState) => state.members)

  return (
    <React.Fragment>
      {members.map(member => <TeamMember key={member.id} member={member} />)}
      {members.length > 5 && <div className={classes.all}> <span>SHOW ALL</span> <span className="material-icons">expand_more</span></div>}
    </React.Fragment>
  )
}

export default TeamMembers
