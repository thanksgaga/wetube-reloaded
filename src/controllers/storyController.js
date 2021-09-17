export const home = (req, res) => res.send("Home page stories");
export const trending = (req, res) => res.send("Trending stories");
export const newStory = (req, res) => res.send("New story");
export const see = (req, res) => {
  return res.send(`Watch Story #${req.params.id}`);
};
export const edit = (req, res) => res.send("Edit");
export const deleteStory = (req, res) => res.send("Delete story");
