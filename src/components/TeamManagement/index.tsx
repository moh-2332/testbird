import React from 'react'
import AddMember from './AddMember'
import TeamMembers from './TeamMembers'

import classes from './styles.module.scss'

const TeamManagement = () => {
  return (
    <div className={classes.container}>
      <div className={classes.header}>
        <h1>YOUR TEAM FOR THIS TEST</h1>
        <a href='#'><span className={classes.title}>TEAM PAGE</span> <span className="material-icons md-18"> groups </span></a>
      </div>
      <div className={classes.cards}>
        <AddMember />
        <TeamMembers />
      </div>
    </div>
  )
}

export default TeamManagement
