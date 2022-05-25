import React from 'react'

import classes from '../styles.module.scss'
import Card from '../../UI/Card'
import Icon from '../../UI/Icon'

const AddMember = () => {
  return (
    <Card>
      <div className={classes['card-content']}>
        <div className={classes['card-avatar']}>
          <Icon className={classes.add}><span className="material-icons">add</span></Icon>
        </div>
        <div className={classes['card-text']}>
          <span className={`${classes.summary} ${classes.add}`}>Add team member to this test</span>
        </div>
      </div>
    </Card >
  )
}

export default AddMember
