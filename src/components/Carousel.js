import React, { Component } from 'react'

import AgeGame from '../assets/AgeGame.PNG';
import Me from '../assets/me.jpg';
import Natours from '../assets/natours.PNG';

import Card from './Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

export default class Carousel extends Component {

    constructor(props){
        super(props);
        this.state = {
            items: [
                {
                    id: 0,
                    title: "Age Game",
                    subTitle: "A fun game that takes your age.",
                    imgSrc: AgeGame,
                    link: "https://codepen.io/mxrcochxvez/pen/zYOKdpo",
                    selected: false
                },
                {
                    id: 1,
                    title: "Dev.to",
                    subTitle: "My public Dev profile where I write articles.",
                    imgSrc: Me,
                    link: "https://dev.to/mxrcochxvez",
                    selected: false
                },
                {
                    id: 2,
                    title: "Natours",
                    subTitle: "A website for a fake tour company.",
                    imgSrc: Natours,
                    link: "https://mxrcochxvez.github.io/natours/",
                    selected: false
                }
            ]
        }
    }

    handleCardClick = (id, card) => {
        let items = [...this.state.items];

        items[id].selected = items[id].selected ? false : true;

        items.forEach(item => {
            if(item.id !== id) {
                item.selected = false;
            }
        })

        this.setState({
            items
        })
    }

    makeItems = (items) => {
        return items.map(item => {
            return <Card item={item} click={(e) => this.handleCardClick(item.id, e)} key={item.id} />
        })
    }

    render() {
        return (
            <div>
                <Container fluid={true}>
                    <Row className="justify-content-around">
                        {this.makeItems(this.state.items)}
                    </Row>
                </Container>
            </div>
        )
    }
}

