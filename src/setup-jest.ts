import 'jest-preset-angular/setup-jest';
import '@testing-library/jest-dom';
import 'core-js';
// import 'core-js/es/reflect';
// import 'core-js/proposals/reflect-metadata';

import './test/jestGlobalMocks';
import { setupTime } from './my-config/setup-time';

setupTime();

// @ts-ignore
jest.setTimeout(3000);
