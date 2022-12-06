class steamAuthenticationController {
    
    authenticate(req, res, next) {
        try {
            return res.json(req.user);
        } catch (error) {
            next(error);
        }
    }

    verify(req, res, next) {
        try {
            return res.json(req.user);
        } catch (error) {
            next(error);
        }
    }
}

module.exports = {
    steamAuthenticationController: new steamAuthenticationController()
}