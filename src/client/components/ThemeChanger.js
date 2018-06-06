import React, { Component } from 'react';
import { connect } from 'react-redux';

import { changeTheme } from '../utils/redux/actions/ThemeActions'

class ThemeChanger extends Component {
    onChangeTheme = e => this.props.onChangeTheme(e.target.value);

    render() {
        return (
            <div className="is-pulled-right">
                Change Theme:
                <select onChange={this.onChangeTheme}>
                    <option value="default">Default</option>
                    <option value="green">Green</option>
                    <option value="red">Red</option>
                    <option value="yellow">Yellow</option>
                </select>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    theme: state.theme
})

const mapActionsToProps = {
    onChangeTheme: changeTheme
}

export default connect(
    mapStateToProps,
    mapActionsToProps
)(ThemeChanger)

// class ThemeChanger extends Component {
//     render() {
//         return (
//             <div className="is-pulled-right">
//                 Change Theme:
//                 <select onChange={this.props.theme.actions.changeTheme}>
//                     <option value="default">Default</option>
//                     <option value="green">Green</option>
//                     <option value="red">Red</option>
//                     <option value="yellow">Yellow</option>
//                 </select>
//             </div>
//         );
//     }
// }

// export default ThemeChanger