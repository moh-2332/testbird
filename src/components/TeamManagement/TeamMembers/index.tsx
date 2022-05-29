import React, { useState, useEffect } from 'react'
import { useSelector } from "react-redux"

import Member from '../../../models/member'

import TeamMember from './TeamMember'

import '../styles.scss'

const TeamMembers = () => {
  const [showAll, setShowAll] = useState(false);
  const members = useSelector((state: any) => state.members.members);

  useEffect(() => {
    if (showAll && Object.keys(members).length <= 5) {
      setShowAll(false);
    }
  }, [showAll, members]);

  const display = (members: { [key: string]: Member }) => {
    return showAll ? Object.keys(members) : Object.keys(members).slice(0, 5);
  }

  const showAllHandler = () => {
    setShowAll(true)
  }

  return (
    <React.Fragment>
      {display(members).map(member => <TeamMember key={member} member={members[member]} />)}
      {!showAll && Object.keys(members).length > 5 && <div className="spacer"></div>}
      {!showAll && Object.keys(members).length > 5 && <div className="show-all" onClick={showAllHandler}> <span>SHOW ALL</span> <span className="material-icons">expand_more</span></div>}
    </React.Fragment>
  )
}

export default TeamMembers
