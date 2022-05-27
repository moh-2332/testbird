import React, { useState, useEffect } from 'react'
import { useSelector } from "react-redux"

import Member from '../../../models/member'

import TeamMember from './TeamMember'

import '../styles.scss'

const TeamMembers = () => {
  const [showAll, setShowAll] = useState(false);
  const members = useSelector((state: any) => state.member.members);

  useEffect(() => {
    if (showAll && members.length <= 5) {
      setShowAll(false);
    }
  }, [members]);

  const display = (members: Array<Member>) => {
    return showAll ? members : members.slice(0, 5);
  }

  const showAllHandler = () => {
    setShowAll(true)
  }

  return (
    <React.Fragment>
      {display(members).map(member => <TeamMember key={member.id} member={member} />)}
      {!showAll && members.length > 5 && <div className="spacer"></div>}
      {!showAll && members.length > 5 && <div className="show-all" onClick={showAllHandler}> <span>SHOW ALL</span> <span className="material-icons">expand_more</span></div>}
    </React.Fragment>
  )
}

export default TeamMembers
