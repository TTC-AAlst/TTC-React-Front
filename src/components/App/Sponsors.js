import React, { Component } from 'react';
import PropTypes from '../PropTypes.js';
import Location from '../controls/Location.js';
import Paper from 'material-ui/Paper';

const topSponsorPaperStyle = {
  height: 100,
  width: 250,
  padding: 15,
  display: 'inline-block',
};

const topSponsorsOnBottomPaperStyle = {
  padding: 15,
  width: 220,
  margin: 'auto',
};

export class BakkerijVanLierde extends Component {
  static contextTypes = PropTypes.contextTypes;
  static propTypes = {
    big: PropTypes.bool.isRequired,
  };

  render() {
    const loc = {
      description: 'Brood & banket Van Lierde',
      address: 'Hogeweg 113',
      postalCode: 9320,
      city: 'Erembodegem',
      mobile: '053212720',
    };

    return (
      <Paper style={this.props.big ? {...topSponsorPaperStyle, width: 220} : topSponsorsOnBottomPaperStyle}>
        <Location loc={loc} t={this.context.t} />
      </Paper>
    );
  }
}

export class SlagerijGuy extends Component {
  static contextTypes = PropTypes.contextTypes;
  static propTypes = {
    big: PropTypes.bool.isRequired,
  };

  render() {
    const loc = {
      description: 'Slagerij Guy',
      address: 'Erembodegem Dorp 72',
      postalCode: 9320,
      city: 'Erembodegem',
      mobile: '053211359',
    };

    const style = this.props.big ? {...topSponsorPaperStyle, float: 'right', width: 200} : topSponsorsOnBottomPaperStyle;
    return (
      <Paper style={style}>
        <Location loc={loc} t={this.context.t} />
      </Paper>
    );
  }
}



export const StoneDesign = props => <ImageSponsor url="http://www.stonedesign.be" img="stonedesign.png" {...props} />;
export const Vdhkeukens = props => <ImageSponsor url="http://vdhkeukens.be" img="vdhkeukens.png" {...props} />;
export const Symphony = props => <ImageSponsor url="http://doopsuikersymphony.be" img="symphony.png" {...props} />;
export const pongit = props => <ImageSponsor img="pongit.jpg" {...props} />;
export const Nostech = props => <ImageSponsor url="http://www.nostech.be" img="nostech.jpg" {...props} />;
export const KachelsTfe = props => <ImageSponsor url="http://www.kachels-tfe.be/" img="kachels-tfe.png" {...props} />;

class ImageSponsor extends Component {
  static propTypes = {
    big: PropTypes.bool.isRequired,
    url: PropTypes.string,
    img: PropTypes.string.isRequired,
    style: PropTypes.object,
  };
  static defaultProps = {
    style: {},
  };

  render() {
    const style = this.props.big ? bottomSponsorsStyleBig : bottomSponsorsStyleSmall;
    const img = <img src={'/img/sponsors/' + this.props.img} />;
    return (
      <Paper style={{...style, ...this.props.style}}>
        {this.props.url ? <a href={this.props.url} target="_blank">{img}</a> : img}
      </Paper>
    );
  }
}

const bottomSponsorsStyleBig = {
  padding: 5,
  textAlign: 'center',
  display: 'inline-block'
};

const bottomSponsorsStyleSmall = {
  padding: 15,
  width: '100%',
  textAlign: 'center',
  margin: 'auto',
};