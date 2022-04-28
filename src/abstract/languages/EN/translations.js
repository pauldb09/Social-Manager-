module.exports = {
    language: "EN",
    aliases: ["en", "english", "anglais"],
    mainName: "English",
    keys: {
        LANGUAGE_SET: "The bot language has been succesfully set to ** :flag_gb: English**",
        LANGUAGE_INVALID: "The language you provided is not supported by the bot.\nSupported languages: English, French",
        USER_NOT_FOUND: "The user you provided is not found in the server.",
        HELP_SENT_DM: "The help message has been sent to your DMs.",
        HELP_SENT_DM_FAILED: "The help message could not be sent to your DMs.\nPlease open your DMs and try again.",
        HELP_MAIN: `You can use my commands by pressing the "/" key! You will get a list of all available commands!\nIf you want more information about a command, just type \`/help <command>\`!\n\nIf you need any help or want to suggest something, feel free to [join the support server](https://social-manager/support) and ask for help!`,
        SUPPORT_SERVER: "Support Server",
        USER_GUIDE: "User Guide",
        USER_NOT_BANABLE: "This user can't be banned from the server.",
        USER_NOT_WARNABLE: "This user can't be warned.",

        USER_HIGHER_ROLE: "This user has a higher role than you.",
        BOT_CANT_BAN: "I can't ban this user because his higest role is above my higest role.",
        NO_REASON: "No reason provided by {user}.",
        BANNED_DM: "You have been banned from ",
        BANNED_SUCCESS: "Successfully banned **{user}** from the server and deleted his messages from the last *{days}* days.",
        CHANNEL_NOT_FOUND: "The channel you provided is not found in the server.",
        CHANNEL_NO_PERMISSIONS: "The bot doesn't have the required permissions to send messages in this channel.\n Please make sure the bot has the following permissions: `Send messages`, `Embed Links`, `View channels`",
        CHANNEL_NOT_TEXT: "The channel you provided is not a text channel.",
        PLUGIN_NOT_ENABLED: "The plugin you want to disable is not enabled.",
        CHANNEL_ALREADY_SET: "The channel you provided is already the channel set for this plugin.",
        SAME_SETTINGS: "The settings you provided are the same as the current settings.",
        SET_THREAD_MODLOGS: "The modlogs plugin has been set to send a thread for each case.",
        SET_NO_THREAD_MODLOGS: "The modlogs plugin has been set to not send a thread for each case.",
        SET_MODLOGS: "The modlogs plugin has been successfully configured in {channel}.",
        KICKED_DM: "You have been kicked from ",
        KICKED_SUCCESS: "Successfully kicked **{user}** from the server.",
        REASON: "Reason",
        CASE_ID: "Case ID",
        BAN_CASE_TEXT: "**{user}** has been banned from the server by **{mod}**.",
        KICK_CASE_TEXT: "**{user}** has been kicked from the server by **{mod}**.",
        CREATE_THREAD_REASON: "Created the thread because modlogs plugin is active",
        BANNED_DM_BODY: `You have been banned by **{mod}** for the reason: **{reason}**`,
        KICKED_DM_BODY: `You have been kicked by **{mod}** for the reason: **{reason}**`,
        CHANNEL_NUKED: "<:unknown43:968885935204872202> The channel has been successfuly nuked.",
        NUKED_BY: "Nuked by {user}",
        SET_AUTOPOST: "The Auto-Publish plugin has been successfully configured in {channel}.\nThe bot will now automatically publish every single message from this channel.",
        PLUGIN_DISABLED: "Successfuly disabled this plugin!",
        REMOVE_CASE: "Remove case",
        CASE_DELETED: "Successfully deleted case `{case}`.",
        CASE_ERROR: "The case has been removed from the database but i'm not able to unpunish the user.",
        UNEXPECTED_ERROR: "An unexpected error has occured while running your interaction! Please report this error in [Social Manager's server](https://social-manager.net/support)",
        CASE_NOT_FOUND: "No case found with this Id.",
        CASE_REMOVED: `Case deleted by {user}`,
        NUKE_CASE_TEXT: `**{user}** just nuked the {channel} channel`
    }
}