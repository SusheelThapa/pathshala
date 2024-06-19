const { Permit } = require('permitio');


const permit = new Permit({
    pdp: 'YOUR-PDP-URL',
    token: 'YOUR_TOKEN',
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

module.exports = checkPermissions