import React from 'react';
import { Link } from 'react-router-dom';
import { ReactComponent as Logo } from '../../assets/4.3 crown.svg';
import { auth } from '../../firebase/firebase.utils';
import { connect } from 'react-redux';
import CartIcon from '../cart-icon/cart-icon.component';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';
import {createStructuredSelector} from 'reselect';
import { selectCartHidden } from '../../redux/cart/cart.selector';
import { selectCurrentUser } from '../../redux/user/user.selector';
import { HeaderContainer,LogoContainer,OptionsContainer,OptionDiv,OptionLink } from './header.styles';
function Header({ currentUser,hidden }) {
  return (
    <HeaderContainer>
      <LogoContainer to='/'>
        <Logo className='logo'></Logo>
      </LogoContainer>
      <OptionsContainer>
        <OptionLink  to='/shop'>
          SHOP
        </OptionLink>
        <OptionLink  to='/shop'>
          CONTACT
        </OptionLink>
        {currentUser ? (
          <OptionDiv  onClick={() => auth.signOut()}>
            SIGN OUT
          </OptionDiv>
        ) : (
          <OptionLink  to='/signin'>
            SIGN IN
          </OptionLink>
        )}
        <CartIcon/>
        </OptionsContainer>
      {
        hidden?(null):( <CartDropdown></CartDropdown>)
      }
    </HeaderContainer>
  );
  }

const mapStateToProps =  createStructuredSelector({
  currentUser: selectCurrentUser,  
  hidden:selectCartHidden
});

export default connect(mapStateToProps)(Header);
