import React, {Component} from 'react';
import {Link} from 'react-router';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import {withStyles as withMaterialStyles} from '@mui/material/styles';
import Navigation from './HeaderNavigation';
import {Icon} from '../../controls/Icons/Icon';
import PropTypes, {withViewport} from '../../PropTypes';
import {Viewport} from '../../../models/model-interfaces';
import {IUser} from '../../../models/UserModel';

require('./Header.css');

const styles = {
  root: {
    flexGrow: 1,
  },
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
};

const HeaderButton = ({label, href}: {label: string, href: string}) => (
  <Link to={href}>
    <Button style={{color: 'white'}}>
      {label}
    </Button>
  </Link>
);


type HeaderProps = {
  viewport: Viewport;
  user: IUser;
  classes: any;
}

type HeaderState = {
  navOpen: boolean;
  isNavOpening: boolean;
}


export default withViewport(withMaterialStyles(styles)(class Header extends Component<HeaderProps, HeaderState> {
  static contextTypes = PropTypes.contextTypes;

  constructor(props) {
    super(props);
    this.state = {navOpen: false, isNavOpening: false};
  }

  render() {
    const {t} = this.context;
    const showExtraNavigationButtons = this.props.viewport.width > 700;
    const {classes} = this.props;

    return (
      <div className={classes.root}>
        <AppBar position="sticky">
          <Toolbar variant="dense">
            <IconButton
              className={classes.menuButton}
              color="inherit"
              aria-label="Menu"
              onClick={() => this.setState(prevState => ({navOpen: !prevState.navOpen}))}
            >
              <MenuIcon />
            </IconButton>

            <Typography variant="title" color="inherit" className={classes.grow}>
              <Link className="Header-link" to="/">{this.state.navOpen ? null : t('clubName')}</Link>
            </Typography>

            <div>
              {showExtraNavigationButtons ? (
                <div style={{display: 'inline-block', textAlign: 'center', width: 300}}>
                  <HeaderButton label={t('common.vttl')} href={t.route('teams', {competition: 'Vttl'})} />
                  <HeaderButton label={t('common.sporta')} href={t.route('teams', {competition: 'Sporta'})} />
                  <HeaderButton label={t('nav.players')} href={t.route('players')} />
                </div>
              ) : null}

              {!this.props.user.playerId ? (
                <HeaderButton label={t('nav.login')} href={t.route('login')} />
              ) : (
                <Link className="Header-link Header-icon-right" to={t.route('profile')}>
                  <Icon fa="fa fa-2x fa-user" translate tooltip="profile.tooltip" tooltipPlacement="left" />
                </Link>
              )}
            </div>
          </Toolbar>
        </AppBar>

        <Navigation
          navOpen={this.state.navOpen}
          isNavOpening={this.state.isNavOpening}
          toggleNav={newState => this.setState({navOpen: newState})}
        />
      </div>
    );
  }

  _openNav() {
    this.setState({navOpen: true, isNavOpening: true});

    // onTouchStart vs onClick:
    // Scenario: Use clicks on the bars to open the Nav
    // First onTouchStart which opened the Navigation
    // Immediately followed by onOutsideClick which closed the Nav

    // TODO: creates bug on mobile that has visual 'selection' of first item in the navigation...
    // (solution: put some sort of icon at the top of the navigation so its non-clickabel?:)
    setTimeout(() => this.setState({isNavOpening: false}), 1000);
  }
}));
