import Application from 'test-array-proxy/app';
import config from 'test-array-proxy/config/environment';
import { setApplication } from '@ember/test-helpers';
import { start } from 'ember-qunit';

setApplication(Application.create(config.APP));

start();
