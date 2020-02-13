import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
    const styles = {
        backgroundColor: '#e03636',
        fontFamily: 'Roboto',
        color: 'white',
        textAlign: 'center',
        margin: '0',
        height: '8vh',
        fontSize: '6vh',
        lineHeight: '8vh',
    };
    return (
      <div>
        <h1 style={styles}>Queue</h1>
        <Link to ="/">Home</Link> | <Link to="/newticket">Create Ticket</Link>
      </div>
    );
}

export default Header;
