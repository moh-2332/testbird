import React from 'react'

import AddMember from './AddMember'
import TeamMembers from './TeamMembers'

import './styles.scss'

const TeamManagement = () => {
  return (
    <div className="team-management-container">
      <div className="team-management-container__header">
        <h1>YOUR TEAM FOR THIS TEST</h1>
        <a href='#' className="team-management-container__header--link">
          <span className="team-management-container__header--link__title">TEAM PAGE</span>
          <span className="material-icons md-18"> groups </span>
        </a>
      </div>
      <div className="team-management-container__content">
        <AddMember />
        <TeamMembers />
      </div>
    </div>
  )
}

export default TeamManagement
