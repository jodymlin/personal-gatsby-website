import React from "react"
import { MuiThemeProvider, createMuiTheme, responsiveFontSizes } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';

import FactList from '../components/About/FactList'

const themes = createMuiTheme({
    typography: {

    }
});

export default () => <div>
    <FactList/>
</div>
