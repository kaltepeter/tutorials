import container from './inversify.config';
import { TYPES } from './types';
import { IDepC } from './idepc';

let c = container.get<IDepC>(TYPES.IDepC);
c.doC();