import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import '../Style/Login.css'
import Tabs from '@material-ui/core/Tabs';

import { Tab, AppBar } from '@material-ui/core/';
import { TabPanel, a11yProps } from '../Components/common/TabPanel'
import {Signup} from './Signup'
import {Login} from './Login';
import {Translater} from '../Components/common/Translater'

class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: 0,
        }
    }

    handleChange = (event,newValue) => {
       this.setState({ value: newValue})
    };

    render() {

        return (
            <div>
                {/* <Translater /> */}
                <Card className='logincard'>
                    <CardContent>
                        <AppBar position="static">
                            <Tabs className='tab' value={this.state.value} onChange={this.handleChange} aria-label="simple tabs example">
                                <Tab label="Login" {...a11yProps(0)} />
                                <Tab label="Signup" {...a11yProps(0)} />
                            </Tabs>
                        </AppBar>
                        <TabPanel value={this.state.value} index={0}>
                            <Login/>
                        </TabPanel>
                        <TabPanel value={this.state.value} index={1}>
                            <Signup/>
                        </TabPanel>
                    </CardContent>

                </Card>
            </div>
        )
    }

}
export default Home;