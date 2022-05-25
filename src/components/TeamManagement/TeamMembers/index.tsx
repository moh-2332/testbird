import React from 'react'
import TeamMember from './TeamMember'

import classes from '../styles.module.scss'

const TeamMembers = () => {
  return (
    <React.Fragment>
      <TeamMember />
      <TeamMember />
      <TeamMember />
      <TeamMember />
      <TeamMember />
      <div className={classes.all}> <span>SHOW ALL</span> <span className="material-icons">expand_more</span></div>
    </React.Fragment>
  )
}

export default TeamMembers
