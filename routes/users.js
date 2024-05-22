const {
    sendUserCreated,
    sendUserById,
    sendUserUpdated,
    sendUserDeleted,
    sendAllUsers,
    sendMe,
  } = require("../controllers/users");
  const {
    findAllUsers,
    checkIsUserExists,
    checkEmptyNameAndEmailAndPassword,
    createUser,
    findUserById,
    checkEmptyNameAndEmail,
    updateUser,
    deleteUser,
    hashPassword,
    filterPassword,
  } = require("../middlewares/users");
  const { checkAuth } = require('../middlewares/auth');
  
  const usersRouter = require("express").Router();
  
  usersRouter.get("/users", findAllUsers, filterPassword, sendAllUsers);
  
  usersRouter.post(
    "/users",
    findAllUsers,
    checkIsUserExists,
    checkEmptyNameAndEmailAndPassword,
    checkAuth,
    hashPassword,
    createUser,
    sendUserCreated
  );
  
  usersRouter.get("/users/:id", findUserById, filterPassword, sendUserById);

  usersRouter.get("/me", checkAuth, sendMe);
  
  usersRouter.put("/users/:id", checkEmptyNameAndEmail, checkAuth, updateUser, sendUserUpdated);
  
  usersRouter.delete("/users/:id", checkAuth, deleteUser, sendUserDeleted);
  
  module.exports = usersRouter;


