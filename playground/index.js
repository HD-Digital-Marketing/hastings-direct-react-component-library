import React from 'react';
import {render} from 'react-dom';
import Header from '../components/atoms/header/Header';

const Playground = () => {

    return (
        <>

            <div className="playground-container">
                <div className="playground-container__item">
                    <Header headerType="h1" theme="primary-dark-xl">Lorem ipsum dolor sit amet, consectetur adipiscing elit</Header>
                    <Header headerType="h1" theme="secondary-dark-xl">Lorem ipsum dolor sit amet, consectetur adipiscing elit</Header>
                    <Header headerType="h1" theme="primary-dark">Lorem ipsum dolor sit amet, consectetur adipiscing elit</Header>
                    <Header headerType="h1" theme="secondary-dark">Lorem ipsum dolor sit amet, consectetur adipiscing elit</Header>
                    <Header headerType="h2" theme="primary-dark">Lorem ipsum dolor sit amet, consectetur adipiscing elit</Header>
                    <Header headerType="h2" theme="secondary-dark">Lorem ipsum dolor sit amet, consectetur adipiscing elit</Header>
                    <Header headerType="h3" theme="primary-dark">Lorem ipsum dolor sit amet, consectetur adipiscing elit</Header>
                    <Header headerType="h3" theme="secondary-dark">Lorem ipsum dolor sit amet, consectetur adipiscing elit</Header>
                    <Header headerType="h4" theme="primary-dark">Lorem ipsum dolor sit amet, consectetur adipiscing elit</Header>
                    <Header headerType="h4" theme="secondary-dark">Lorem ipsum dolor sit amet, consectetur adipiscing elit</Header>
                </div>
                <div className="playground-container__item">
                    <Header headerType="h1" theme="primary-xl">Lorem ipsum dolor sit amet, consectetur adipiscing elit</Header>
                    <Header headerType="h1" theme="secondary-xl">Lorem ipsum dolor sit amet, consectetur adipiscing elit</Header>
                    <Header headerType="h1" theme="primary">Lorem ipsum dolor sit amet, consectetur adipiscing elit</Header>
                    <Header headerType="h1" theme="secondary">Lorem ipsum dolor sit amet, consectetur adipiscing elit</Header>
                    <Header headerType="h2" theme="primary">Lorem ipsum dolor sit amet, consectetur adipiscing elit</Header>
                    <Header headerType="h2" theme="secondary">Lorem ipsum dolor sit amet, consectetur adipiscing elit</Header>
                    <Header headerType="h3" theme="primary">Lorem ipsum dolor sit amet, consectetur adipiscing elit</Header>
                    <Header headerType="h3" theme="secondary">Lorem ipsum dolor sit amet, consectetur adipiscing elit</Header>
                    <Header headerType="h4" theme="primary">Lorem ipsum dolor sit amet, consectetur adipiscing elit</Header>
                    <Header headerType="h4" theme="secondary">Lorem ipsum dolor sit amet, consectetur adipiscing elit</Header>
                </div>
            </div>
        </>
    )
}

render(
    <Playground />,
    document.getElementById('root')
);