const httpStatus = require('http-status');
const { User } = require('../models');
const ApiError = require('../utils/ApiError');

//Create a user
const createUser = async (userBody) => {
  if (await User.isCpfTaken(userBody.cpf)) {
    throw new ApiError(httpStatus.BAD_REQUEST, 'CPF already taken');
  }
  return User.create(userBody);
};

//Query for Users
const queryUsers = async (filter, options) => {
  const users = await User.paginate(filter, options);
  return users;
};

//Get user by id
const getUserById = async (id) => {
  return User.findById(id);
};

//Get user by cpf
const getUserByCpf = async (cpf) => {
  return User.findOne({ cpf });
};

//Get user by email
const getUserByEmail = async (email) => {
  return User.findOne({ email });
};

//update user by id
const updateUserById = async (userId, updateBody) => {
  const user = await getUserById(userId);
  if (!user) {
    throw new ApiError(httpStatus.NOT_FOUND, 'User not found');
  }
  if (updateBody.cpf && (await User.isCpfTaken(updateBody.cpf, userId))) {
    throw new ApiError(httpStatus.BAD_REQUEST, 'CPF already taken');
  }
  Object.assign(user, updateBody);
  await user.save();
  return user;
};

//Delete user by id
const deleteUserById = async (userId) => {
  const user = await getUserById(userId);
  if (!user) {
    throw new ApiError(httpStatus.NOT_FOUND, 'User not found');
  }
  user.deletado = true;
  Object.assign(user);
  await user.save();
  return user;
};

module.exports = {
  createUser,
  queryUsers,
  getUserById,
  getUserByCpf,
  getUserByEmail,
  updateUserById,
  deleteUserById,
}