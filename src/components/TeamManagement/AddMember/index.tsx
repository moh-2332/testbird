import React, { useState, useCallback } from 'react'
import { useDispatch } from "react-redux"

import { membersActions } from "../../../store/members"

import Card from '../../UI/Card'
import Icon from '../../UI/Icon'
import DropDown from '../../UI/DropDown'

import '../styles.scss'
import users from "../../../assets/data.json"

const AddMember = () => {
  const dispatch = useDispatch();
  const [showUsersList, setShowUsersList] = useState(false);
  const [hovered, setHovered] = useState(false);

  const mouseOverHandler = () => {
    setHovered(true);
  }

  const mouseOutHandler = () => {
    setHovered(false);
  }

  const memberSelectedHandler = (selectedOption: any): void => {
    dispatch(membersActions.add(selectedOption));
  }

  const addClickHandler = useCallback(() => {
    setShowUsersList(true);
    setHovered(false);
  }, []);

  const closeHandler = () => {
    setShowUsersList(false);
  }

  return (
    <Card>
      {!showUsersList && <div className="team-member" onMouseOver={mouseOverHandler} onMouseOut={mouseOutHandler}>
        <div className="team-member__avatar">
          <Icon className={`team-member__avatar--add ${hovered && "hovered"}`} onClick={addClickHandler}><span className="material-icons">add</span></Icon>
        </div>
        <div className="team-member__description">
          <span className="team-member__description--summary add">Add team member to this test</span>
        </div>
      </div>}
      {showUsersList && <DropDown
        options={users}
        id="id"
        label="username"
        avatar="picture"
        value="Select a member ..."
        notFoundFilter={
          {
            title: "Team member not found.",
            description: "Maybe she/he is not yet in your team?"
          }
        }
        onOptionSelected={memberSelectedHandler}
        onClose={closeHandler} />}
    </Card >
  )
}

export default AddMember
