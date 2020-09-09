import React, { Component } from 'react';
import { Tabs, Tab, Grid, Cell, Card, CardTitle, CardActions, Button, CardMenu, IconButton, CardText } from 'react-mdl';


class Projects extends Component {
    constructor(props) {
        super(props);
        this.state = { activeTab: 0};
    }

    toggleCategories() {
        if(this.state.activeTab === 0) {
            return(
                /* Peoject 1 - For add more project card, just copy and paste all content of the card tag and make the changes.*/
                <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                    <CardTitle style={{color: 'black', height: '176px', background: 
                    'url(https://cdn.worldvectorlogo.com/logos/react.svg) center / cover'}}>React Projects</CardTitle>
                    <CardText>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    </CardText>
                    <CardActions border>
                        <Button colored>GitHub</Button> 
                        <Button colored>CodePen</Button>
                        <Button colored>LiveDemo</Button>
                    </CardActions>
                    <CardMenu style={{color: '#fff'}}>
                        <IconButton name="share" />
                    </CardMenu>
                </Card>
            )
        }else if(this.state.activeTab === 1){
            return(
                <div><h1>This is Angular</h1></div>
            )
        }else if(this.state.activeTab === 2){
            return(
                <div><h1>This is VuesJS</h1></div>
            )
        }else if(this.state.activeTab ===3){
            return (
                <div><h1>This is MongoDB</h1></div>
            )
        }

    }
    render() {
        return(
            <div className="category-tabs">
                <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({ activeTab: tabId })} ripple>
                    <Tab>React</Tab>
                    <Tab>Angular</Tab>
                    <Tab>VueJS</Tab>
                    <Tab>MongoDB</Tab>
                </Tabs>

                <section className="projects-grid">
                    <Grid className="projects-grid">
                        <Cell col={12}>
                            <div className="content">{this.toggleCategories()}</div>
                        </Cell>
                    </Grid>
                </section>

            </div>
        )
    }
}

export default Projects;