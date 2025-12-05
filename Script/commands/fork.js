module.exports.config = {
    name: "fork",
    version: "1.0.1",
    hasPermssion: 0,
    credits: "SHAHADAT SAHU",
    description: "Send YouTube channel and GitHub fork link with intro text",
    commandCategory: "other",
    usages: "fork",
    cooldowns: 0,
};

module.exports.run = async function({ api, event }) {
    const message = 
        "🌟 আসসালামু আলাইকুম সম্মানিত বট ইউজার 🌟\n\n" +
        "আপনি যদি তৈরি করতে চান, তাহলে চলে যেতে পারেন আমাদের টেলিগ্রাম চ্যানেলে। " +
        "সেখানে গিয়ে ভিডিও দেখে আপনি খুব সহজে বট তৈরি করে নিতে পারবেন। " +
        "তাহলে আর দেরি না করে এখনি চলে যান আমাদের টেলিগ্রাম চ্যানেলে।\n\n" +
        "➤ YouTube Channel: https://t.me/sumonvpn\n\n" +
        "🔗 Facebook id Link: https://www.facebook.com/profile.php?id=61556298365773";

    return api.sendMessage(message, event.threadID, event.messageID);
};
