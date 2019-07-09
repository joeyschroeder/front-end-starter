import Adapter from 'enzyme-adapter-react-16';
import Enzyme from 'enzyme';
import React from 'react';
import { create } from 'react-test-renderer';

Enzyme.configure({ adapter: new Adapter() });

global.React = React;
global.create = create;
