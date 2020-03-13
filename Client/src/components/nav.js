import React from "react";
import {Link} from "react-router-dom";
import "../styles/nav.css";
import { Grid, Cell, Menu, MenuItem } from 'react-foundation';

function Nav() {
    return (
        <nav aria-label="You are here." role="navigation">
            <Grid>
                <Cell>
                    <h2>Google Books</h2>
                </Cell>
                <Cell>
                    <Menu>
                        <MenuItem><Link to="/">Search</Link></MenuItem>
                        <MenuItem><Link to="/saved">Saved</Link></MenuItem>
                    </Menu>
                </Cell>
            </Grid>
        </nav>
    )
}

export default Nav;