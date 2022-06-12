import { Test } from "@nestjs/testing";
import { UserController } from "./user.controller";
import { UserService } from "src/services/user/user.service";
import { User } from "src/schema/user/user.schema";

describe('UserController', () => {
    let userController: UserController;
    let userService: UserService;

    beforeEach(async () => {
        const moduleRef = await Test.createTestingModule({
            controllers: [UserController],
            providers: [UserService],
        }).compile();

        userService = moduleRef.get<UserService>(UserService);
        userController = moduleRef.get<UserController>(UserController);

    });
    describe('findAll', () => {
        it('should return an array of users', async () => {
            const result = ['test'];
            // jest.spyOn(userService, 'findAll').mockImplementation(() => result);
            // expect(await userController.findAll()).toBe(result)
        });
    });
});