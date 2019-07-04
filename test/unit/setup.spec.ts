import 'reflect-metadata';
import 'mocha';
import * as dotenv from 'dotenv';
import { LIB_TYPES } from '../../src/lib/util/lib-ioc-types';
import main from '../../src/index';
dotenv.config({ path: './.env.test' });
