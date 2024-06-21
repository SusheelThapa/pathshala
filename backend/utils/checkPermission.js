const { Permit } = require('permitio');


const permit = new Permit({
    pdp: 'http://localhost:7766',
    token: 'permit_key_CMsXae8FSaocUJipFWAGrV5VazIjfV4VhALRHSd08TBWi03sPK7gMk17ehij5NKADbMJUVku6N4kGPHkZBSTYs',
});



const checkPermissions = async (username, resource) => {
    const checkPermission = async (action) => {
        const status = await permit.check(username, action, resource + "-post")
        return status

    }
    const createPermission = await checkPermission("create")
    const readPermission = await checkPermission("read")
    const deletePermission = await checkPermission("delete")

    return {
        create: createPermission,
        read: readPermission,
        delete: deletePermission
    }
}

const checkRole = async (username) => {
    const role = await permit.api.getAssignedRoles(username)
    const roles = role.map(record => record.role);
    return roles
}

module.exports = { checkPermissions, checkRole }