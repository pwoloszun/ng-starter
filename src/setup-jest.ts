import '@testing-library/jest-dom';
import 'jest-preset-angular/setup-jest';

import './test/jestGlobalMocks';

import { setupTime } from './my-config/setup-time';

// import 'core-js';
// import 'core-js/es/reflect';
// import 'core-js/proposals/reflect-metadata';

setupTime();

// @ts-ignore
jest.setTimeout(3000);
