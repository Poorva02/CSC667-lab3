const myLogic = (req,res) => {
res.send("My Logic");
};

module.exports = myLogic;

/*

It is similar to above:

module.exports = (req,res) => {
    res.send("My Logic");

}

*/