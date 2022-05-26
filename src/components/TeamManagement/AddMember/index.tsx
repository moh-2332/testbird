import React, { useState } from 'react'
import { useDispatch } from "react-redux"

import { memberActions } from "../../../store/member"

import classes from '../styles.module.scss'
import Card from '../../UI/Card'
import Icon from '../../UI/Icon'
import DropDown from '../../UI/DropDown'

import members from "../../../assets/data.json"

const AddMember = () => {
  const dispatch = useDispatch();
  const [showMembersList, setShowMembersList] = useState(false);

  const memberSelectedHandler = (selectedOption: any): void => {
    dispatch(memberActions.add(selectedOption));
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
        value="Select a member ..."
        onOptionSelected={memberSelectedHandler}
        onClose={closeHandler} />}
    </Card >
  )
}

export default AddMember
