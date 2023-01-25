import { Application } from 'express';
import healthcheck from './api/healthcheck';
import user from './api/user';

function routes(app: Application):void{
    console.log('in routes');
    app.use('/api/healthcheck', healthcheck);
    app.use('/api/users', user);
}
  
export default routes;