import { Application } from 'express';
import healthcheck from './api/healthcheck';
import user from './api/user';
import authLocal from './auth/local';
import list from './api/list';
import fav from './api/fav'


function routes(app: Application):void{
    app.use('/api/healthcheck', healthcheck);
    app.use('/api/users', user);
    app.use('/api/lists', list);
    app.use('/api/favs', fav)

    //auth routes
    app.use('/auth/local', authLocal);
}
  
export default routes;