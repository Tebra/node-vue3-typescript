import { expect } from 'chai';
import sinon from 'sinon';
import UserService from 'api/src/modules/user/user.service';
import UserController from 'api/src/modules/user/user.controller';
import { User } from 'api/src/modules/user/user.model';
import MockDb from 'api/src/infrastructure/infrastructure.mockdb';

describe('User controller test', () => {
  let res: any;
  let req: any;
  let json: any;
  let status: any;

  beforeEach(() => {
    status = sinon.stub();
    json = sinon.spy();
    req = { body: {} };
    res = { json, status };
    status.returns(res);
    MockDb.getInstance([User]);
  });

  it('should list given users', async () => {
    const userService = new UserService();
    const stub = sinon.stub(userService, 'findAll' as any).resolves([]);
    const userController = new UserController(userService);

    await userController.listAllUsers(req, res);
    expect(stub.calledOnce).to.be.true;
  });

  it('should create the user', async () => {
    const user = new User({
      id: 1,
      username: 'username',
      password: 'password',
      email: 'a@b.ch',
      role: 1,
    });

    req.body = {
      username: user.username,
      password: user.password,
      email: user.email,
      role: user.role,
    };

    const userService = new UserService();
    const userServiceStub = sinon
      .stub(userService, 'create' as any)
      .resolves(user);
    const userController = new UserController(userService);

    await userController.createUser(req, res);
    expect(userServiceStub.calledOnce).to.be.true;
    expect(res.json.calledOnce).to.be.true;
    expect(res.json.firstCall.args[0]).to.equal(user.id);
  });

  it('should create the user', async () => {
    const user = new User({
      id: 1,
      username: 'username',
      password: 'password',
      email: 'a@b.ch',
      role: 1,
    });

    req.body = {
      username: user.username,
      password: user.password,
      email: user.email,
      role: user.role,
    };

    const userService = new UserService();
    const userServiceStub = sinon
      .stub(userService, 'create' as any)
      .resolves(user);
    const userController = new UserController(userService);

    await userController.createUser(req, res);
    expect(userServiceStub.calledOnce).to.be.true;
    expect(res.json.calledOnce).to.be.true;
    expect(res.json.firstCall.args[0]).to.equal(user.id);
  });
});
