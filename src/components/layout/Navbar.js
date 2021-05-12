import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';

//클래스
// class Navbar extends Component {
//   static defaultProps = {
//     title: 'Github Finder',
//     icon: 'fab fa-github',
//   };
//   static propTypes = {
//     title: PropTypes.string.isRequired,
//     icon: PropTypes.string.isRequired,
//   };
//   render() {
//     return (
//       <nav className='navbar bg-primary'>
//         <h1>
//           <i className={this.props.icon} /> {this.props.title}
//         </h1>
//       </nav>
//     );
//   }
// }

//함수1
// const Navbar = (props) => {
//   return (
//     <nav className='navbar bg-primary'>
//       <h1>
//         <i className={props.icon} /> {props.title}
//       </h1>
//     </nav>
//   );
// }
// Navbar.defaultProps = {
//   title: 'Github Finder',
//   icon: 'fab fa-github',
// };
// Navbar.propTypes = {
//   title: PropTypes.string.isRequired,
//   icon: PropTypes.string.isRequired,
// };

const Navbar = ({icon, title}) => {
    return (
        <nav className='navbar bg-primary'>
            <h1>
                <Link to="/">
                    <i className={icon}/> {title}
                </Link>
            </h1>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/about">About</Link>
                </li>
            </ul>
        </nav>
    );
}

Navbar.defaultProps = {
    title: 'Github Finder',
    icon: 'fab fa-github',
};

Navbar.propTypes = {
    title: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired,
};

export default Navbar;


