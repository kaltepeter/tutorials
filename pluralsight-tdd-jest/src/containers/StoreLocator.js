import React, {Component} from 'react';
import Header from '../components/Header';
import Button from '../components/Button';
import Map from '../components/Map';

class StoreLocator extends Component {
    render() {
        return (
            <div>
                <Header />
                <Button location="Portland" />
                <Button location="Astoria" />
                <Button location="" />
                <Map />
            </div>
        );
    }
}

export default StoreLocator;