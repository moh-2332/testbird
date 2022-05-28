import React, { useState, useCallback } from 'react'
import { useDispatch } from "react-redux"

import { membersActions } from "../../../store/members"

import Card from '../../UI/Card'
import Icon from '../../UI/Icon'
import DropDown from '../../UI/DropDown'

import '../styles.scss'
import members from "../../../assets/data.json"

const AddMember = () => {
  const dispatch = useDispatch();
  const [showMembersList, setShowMembersList] = useState(false);
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
    setShowMembersList(true);
    setHovered(false);
  }, []);

  const closeHandler = () => {
    setShowMembersList(false);
  }

  return (
    <Card>
      {!showMembersList && <div className="team-member" onMouseOver={mouseOverHandler} onMouseOut={mouseOutHandler}>
        <div className="team-member__avatar">
          <Icon className={`team-member__avatar--add ${hovered && "hovered"}`} onClick={addClickHandler}><span className="material-icons">add</span></Icon>
        </div>
        <div className="team-member__description">
          <span className="team-member__description--summary add">Add team member to this test</span>
        </div>
      </div>}
      {showMembersList && <DropDown
        options={members}
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
