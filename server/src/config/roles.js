const allRoles = {
  user: ["criarValorInput"],
  admin: ["criarValorInput", "getUsers", "manageUsers", "getRegisters"],
}

const roles = Object.keys(allRoles)
const roleRights = new Map(Object.entries(allRoles))

module.exports = {
  roles,
  roleRights,
}
