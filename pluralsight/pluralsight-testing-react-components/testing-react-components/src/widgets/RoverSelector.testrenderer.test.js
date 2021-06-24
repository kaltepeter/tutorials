import React from 'react';
import TestRenderer from 'react-test-renderer';
import RoverSelector from './RoverSelector';
import {rovers} from '../pages/ConnectedRoverSearch';

describe('RoverSelector', () => {
    describe('rendering', () => {
        describe('selection', () => {
            describe('all selected', () => {
                it('should select all rovers', () => {
                    const all = {spirit: true, opportunity: true, curiosity: true};
                    const tr = TestRenderer.create(<RoverSelector rovers={rovers} roversActive={all} roverSelection={all} onRoverSelection={() => {}} />);
                    const inputs = tr.root.findAllByProps({
                        "data-testid": 'rover-selected'
                    });
                    inputs.forEach((input) => {
                        expect(input.props.checked).toBe(true);
                    });
                });
            });
            describe('none selected', () => {
                const none = {spirit: false, opportunity: false, curiosity: false};
                const tr = TestRenderer.create(<RoverSelector rovers={rovers} roversActive={none} roverSelection={none} onRoverSelection={() => {}} />);
                const inputs = tr.root.findAllByProps({
                    "data-testid": 'rover-selected'
                });
                inputs.forEach((input) => {
                    expect(input.props.checked).toBe(false);
                });
            })
        });

        describe('activation', () => {
            const inactiveCssClassExpression = /.*RoverSelector-inactive/;
            describe('all active', () => {
                it('should not have the inactive class', () => {
                    const all = {spirit: true, opportunity: true, curiosity: true};
                    const tr = TestRenderer.create(<RoverSelector rovers={rovers} roversActive={all} roverSelection={all} onRoverSelection={() => {}} />);
                    const divs = tr.root.findAll((instance) => {
                        return (instance.props['data-testid'] || '').startsWith('rover-div-');
                    });
                    divs.forEach((div) => {
                        expect(div.props.className).not.toMatch(inactiveCssClassExpression);
                    });
                });
            });

            describe('all inactive', () => {
                it('should have the inactive class', () => {
                    const none = {spirit: false, opportunity: false, curiosity: false};
                    const tr = TestRenderer.create(<RoverSelector rovers={rovers} roversActive={none} roverSelection={none} onRoverSelection={() => {}} />);
                    const divs = tr.root.findAll((instance) => {
                        return (instance.props['data-testid'] || '').startsWith('rover-div-');
                    });
                    divs.forEach((div) => {
                        expect(div.props.className).toMatch(inactiveCssClassExpression);
                    });
                });
            });
        });
    });
});