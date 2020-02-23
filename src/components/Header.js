//modules
import React from 'react';
import { withTranslation } from 'react-i18next';

class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = { lng: this.props.i18n.languages[0] };

        this.changeLanguage = this.changeLanguage.bind(this);
    };

    changeLanguage(event) {
        this.props.i18n.changeLanguage(event.target.value);
        this.setState(
            { lng: this.props.i18n.languages[0] }
        );
    }
    render() {
        return (
            <header>
                <select value={this.state.lng} onChange={this.changeLanguage}>
                    <option value="en"> English </option>
                    <option value="fr"> Français </option>
                </select>
            </header>
        )
    }
  }

export default withTranslation()(Header)
