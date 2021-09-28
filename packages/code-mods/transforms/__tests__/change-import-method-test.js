import { defineTest } from 'jscodeshift/dist/testUtils';

jest.autoMockOff();
defineTest(__dirname, 'change-imported-method', {}, 'change-imported-method/basic');