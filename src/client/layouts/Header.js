import React, { Component } from 'react';

import { connect } from 'react-redux';

import WelcomeLogin from '../components/WelcomeLogin';
import ThemeChanger from '../components/ThemeChanger';
import HeaderMenu from '../components/HeaderMenu';

import { Consumer as ThemeContextConsumer } from '../utils/providers/ThemeContext';

class Header extends Component {

    render() {
        const { theme } = this.props;

        const headerColor = () => {
            switch (theme) {
                case 'default' : return 'has-background-primary'
                case 'green' : return 'has-background-success'
                case 'red' : return 'has-background-danger'
                case 'yellow' : return 'has-background-warning'
                default: return 'has-background-primary'
            }
        }

        return (

            <div id="header" className={`section ${headerColor()}`}>
                <div className="column"></div>
                <div className="column">
                    <div className="column">
                        <h1 className="title has-text-black">The Book List</h1>
                        <p className="subtitle"></p>
                    </div>
                    <div className="column">
                        <WelcomeLogin />
                    </div>
                </div>
                <HeaderMenu />
                <ThemeChanger />
            </div>
            
            // <ThemeContextConsumer>
            //     { value => {
            //         const { theme } = value;

            //         const headerColor = () => {
            //             switch (theme) {
            //                 case 'default' : return 'has-background-primary'
            //                 case 'green' : return 'has-background-success'
            //                 case 'red' : return 'has-background-danger'
            //                 case 'yellow' : return 'has-background-warning'
            //                 default: return 'has-background-primary'
            //             }
            //         }

            //         return (

            //             <div id="header" className={`section ${headerColor()}`}>
            //                 <div className="column"></div>
            //                 <div className="column">
            //                     <div className="column">
            //                         <h1 className="title has-text-black">The Book List</h1>
            //                         <p className="subtitle"></p>
            //                     </div>
            //                     <div className="column">
            //                         <WelcomeLogin />
            //                     </div>
            //                 </div>
            //                 <HeaderMenu />
            //                 <ThemeChanger theme={value} />
            //             </div>
            //         );

            //     }}
            // </ThemeContextConsumer>
        )
    }
}

const mapStateToProps = state => ({
    theme: state.theme,
})

//export default Header;
//'connect' is a higher function that imports other components with extra features
//mapStateToProps - all data are made as props
export default connect(mapStateToProps)(Header);