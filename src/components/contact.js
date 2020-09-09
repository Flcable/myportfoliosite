import React, { Component } from 'react';
import { Grid, Cell, List, ListItem, ListItemContent } from 'react-mdl';
import avatar from "../img/avatar.png"

class Contact extends Component {
    render() {
        return (
            <div className="contact-body">
                <Grid className="contact-grid">
                    <Cell col={6}>
                        <h2>Flavio Cruz</h2>
                        <img
                            alt="avatar" src={avatar}
                            style={{ height: '250px' }}
                        />

                        <p style={{ width: '75%', margin: 'auto', paddingTop: '1em' }}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            Nam hendrerit nisi sed sollicitudin pellentesque.
                            Nunc posuere purus rhoncus pulvinar aliquam.
                            Ut aliquet tristique nisl vitae volutpat.
                            Nulla aliquet porttitor venenatis.
                            Donec a dui et dui fringilla consectetur id nec massa.
                            Aliquam erat volutpat. Sed ut dui ut lacus dictum fermentum vel tincidunt neque
                        </p>

                    </Cell>

                    <Cell col={6}>
                        
                        <h2>Contact Me</h2>
                        <hr />

                    <div className="contact-list">
                       

                        <List>
                            <ListItem>
                                <ListItemContent style={{fontSize: '25px', fontFamily: 'Anton'}}>
                                    <i className="fa fa-phone-square" aria-hidden="true"/>
                                    (351) 936-458-996
                                </ListItemContent>
                            </ListItem>

                            <ListItem>
                                <ListItemContent style={{fontSize: '25px', fontFamily: 'Anton'}}>
                                    <i className="fa fa-envelope" aria-hidden="true"/>
                                    flcable@mail.com 
                                </ListItemContent>
                            </ListItem>

                            <ListItem>
                                <ListItemContent style={{fontSize: '25px', fontFamily: 'Anton'}}>
                                    <i className="fa fa-skype" aria-hidden="true"/>
                                    Flcable1
                                </ListItemContent>
                            </ListItem>
                            
                        </List>
                    </div>    
                       
                    </Cell>
                </Grid>
            </div>

        )
    }
}

export default Contact;