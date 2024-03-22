import React from 'react';
import _ from 'lodash';
import { create } from 'react-test-renderer';

// Jest can be particularly slow when it needs to import files into test suites.  By importing these common
// pieces here, they can be used globably instead of having to be re-imported in each suite.
global.create = create;
global.React = React;

// This is used to prevent _.uniqueId() from generating new unique IDs that may conflict with Jest snapshots.
_.uniqueId = (value) => value;
