import jwt from 'jsonwebtoken'

// middleware for handling any operation on /api/zucks/...
function authMiddleware(req, res, next) {
    const token = req.headers['authorization'];

    // no token
    if (!token) {
        return res.status(401).json({ message: "No token provided" });
    }
    
    // verfying token with JWT
    jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
        // invalid token
        if (err) {
            return res.status(401).json({ message: "Invalid token " + token });
        }

        // delegate to real route
        next();
    })
}

export default authMiddleware;