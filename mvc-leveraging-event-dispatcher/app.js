import Model from './Model.js';
import View from './View.js';
import Controller from './Controller.js';
import EventEmitter from '../utility/EventEmitter.js';

const eventEmitter = new EventEmitter();
const model = new Model(eventEmitter);
const controller = new Controller(model, eventEmitter);
const view = new View(eventEmitter, model);
