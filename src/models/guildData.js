const mongoose = require("mongoose"),
    model = new mongoose.Schema({
        serverId: { type: String, required: true },
        modlogs: { type: Object, required: false },
    });
module.exports = mongoose.model("guildData", model);