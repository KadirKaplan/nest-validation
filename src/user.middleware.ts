import { Injectable, NestMiddleware, Post, Req, Res } from '@nestjs/common';
import { Request,Response } from 'express';
import * as bcrypt from 'bcrypt';
@Injectable()
export class UserMiddleware implements NestMiddleware {
  async use(req: any, res: any, next: () => void) {

    const saltOrRounds = 10;
   
    const password = req.body.password;
   
    const hash = await bcrypt.hash(password, saltOrRounds);
  
return hash;
    next();
  }


}
