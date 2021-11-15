import React, { useState } from 'react';
import MenuItem from '../menu-item/menu-item.component';
import './directory.styles.scss';
import { connect } from 'react-redux';
import { selectDirectorySections } from '../../redux/directory/directory.selector';
import { createStructuredSelector } from 'reselect';


function Directory({sections}) {
  return (
    <div className='directory-menu'>
      {sections.map(({ id, ...othersectionprops }) => {
        return <MenuItem key={id} {...othersectionprops}></MenuItem>;
      })}
    </div>
  );
}

const mapStateToProps=()=>createStructuredSelector({
  sections:selectDirectorySections
})
export default connect(mapStateToProps)(Directory);
