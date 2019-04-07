import 'reflect-metadata';
import { Container } from 'inversify';
import { ConcreteA } from './concretea';
import { IDepA } from './idepa';
import { TYPES } from './types';
import { IDepB } from './idepb';
import { ConcreteB } from './concreteb';
import { IDepC } from './idepc';
import { ConcreteC } from './concretec';

let container = new Container();
container.bind<IDepA>(TYPES.IDepA).to(ConcreteA).inSingletonScope();

container.bind<IDepB>(TYPES.IDepB).to(ConcreteB).inTransientScope();

container.bind<IDepC>(TYPES.IDepC).to(ConcreteC).inRequestScope();

export default container;