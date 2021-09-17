export const join = (req, res) => res.send("Join");
export const login = (req, res) => res.send("Login");
export const users = (req, res) => res.send("Users list view");
export const see = (req, res) => res.send(`See User #${req.params.id}`);
export const edit = (req, res) => res.send("Edit User profile");
