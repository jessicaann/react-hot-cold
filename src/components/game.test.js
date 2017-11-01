import React from 'react';
import {shallow} from 'enzyme';

import Game from './game';

describe('<Game />', () => {
    let seedGuesses = [];
    beforeAll(() => {
        for (let i = 0; i < 10; i++) {
            seedGuesses.push(i);
        }
    })
    it('Renders without crashing', () => {
        shallow(<Game />);
    });

    it('Can add guesses to state', () => {
        const wrapper = shallow(<Game />);
        const instance = wrapper.instance();
        console.log(instance.state.guesses);
        expect(instance.state.guesses.length).toEqual(seedGuesses.length);
    });
    {/*it('Can set state for new game', () => {
        //create a fake setting for the state including a number
        //simulate an instance of using newGame
        const wrapper = shallow(<Game />);
        const instance = wrapper.instance();
        seedGuesses.forEach(instance.guess);
        wrapper.update();
        const beforeNewState = wrapper.state;
        instance.newGame;
        wrapper.update();
        //compare the resulting state to the correct state & make sure the number is different than the previous number & is between 1 and 100
        expect(wrapper.state).toNotEqual(beforeNewState);
        expect(wrapper.state('correctAnswer')).//is between 1 & 100?
    })*/}
});

//Tests
//can set state to create a new game?

//start with all the renders for all the componenets
//then start with the DOM(stateless) components