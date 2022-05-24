import React from 'react'
import AddMember from './AddMember'
import TeamMembers from './TeamMembers'

import classes from './styles.module.scss'

const TeamManagement = () => {
  return (
    <div className={classes.container}>
      <div className={classes.header}>
        <h1>YOUR TEAM FOR THIS TEST</h1>
        <a href='#'>Team Page</a>
      </div>
      <AddMember />
      <TeamMembers />
    </div>
  )
}

export default TeamManagement
