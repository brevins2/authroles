const authUser = (users) => {
    return (req, res, next) => {
        const user = req.body.name;
        if(users.include(user)){
            res.send('Welcome back, '. user)
            next()
        }
        else {
            res.send('User does not exist')
        }
    }
}

const authRole = (roles) => {
    return (req, res, next) => {
        if(roles.includes(req.body.role)) {
            next()
        }
        else {
            res.send('Cannot access this because of invalid role')
        }
    }
}

const authBusinessUnit = (bua, user) => {
    return(req, res, next) => {
        if(bua.includes(req.body.bu) && authRole(user)) {
            next()
        }
        else {
            res.send('Cannot access the business unit attributes')
        }
    }
}

module.exports = {authRole, authBusinessUnit, authUser}