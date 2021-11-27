import express from 'express';

class UserMiddleware {
  async validateRequiredUserBodyFields(
    req: express.Request,
    res: express.Response,
    next: express.NextFunction
  ) {
    if (
      req.body &&
      req.body.username &&
      req.body.password &&
      req.body.email &&
      req.body.role
    ) {
      next();
    } else {
      res.status(400).send({
        error: `Missing required fields`,
      });
    }
  }

  async extractUserId(
    req: express.Request,
    res: express.Response,
    next: express.NextFunction
  ) {
    req.body.id = req.params.userId;
    next();
  }
}

export default new UserMiddleware();
