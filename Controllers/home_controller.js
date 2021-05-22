//action bunch of action is called controller
module.exports.home = function (req, res)
{
    return res.end('<h1>Express is up for connect</h1>');
}