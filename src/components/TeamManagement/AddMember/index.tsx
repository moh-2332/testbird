import React, { useState } from 'react'

import classes from '../styles.module.scss'
import Card from '../../UI/Card'
import Icon from '../../UI/Icon'
import DropDown from '../../UI/DropDown'
import Member from "../../../models/member"

import members from "../../../assets/data.json"

const AddMember = () => {
  const [selectedMember, setSelectedMember] = useState<Member | null>(null);
  const [showMembersList, setShowMembersList] = useState(false);

  const memberSelectedHandler = (selectedOption: any): void => {
    console.log(selectedOption);
    setSelectedMember(selectedOption);
  }

  const closeHandler = () => {
    setShowMembersList(false);
  }

  return (
    <Card>
      {!showMembersList && <div className={classes['card-content']} onClick={() => setShowMembersList(true)}>
        <div className={classes['card-avatar']}>
          <Icon className={classes.add}><span className="material-icons">add</span></Icon>
        </div>
        <div className={classes['card-text']}>
          <span className={`${classes.summary} ${classes.add}`}>Add team member to this test</span>
        </div>
      </div>}
      {showMembersList && <DropDown
        options={members}
        id="id"
        label="username"
        value={selectedMember?.username || ""}
        title="Select a member ..."
        onOptionSelected={memberSelectedHandler}
        onClose={closeHandler} />}
    </Card >
  )
}

export default AddMember
