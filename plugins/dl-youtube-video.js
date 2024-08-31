const handler = async (m, { conn, text, command, usedPrefix }) => {
    try {
        if (!text) return m.reply(`يرحى اضافة السؤال بعد الخاصية\n\n*مثال* : ${usedPrefix + command} مرحبا`);
        

        const videoLink = `https://api.hardybot.site/api/v2/ytmp4?url=${text}&apikey=HardyBot`;
        const videoFileName = "ytmp4.mp4";
        await conn.sendMessage(m.chat, { video: { url: videoLink }, fileName: videoFileName, mimetype: 'video/mp4', caption: '> © 2024, by GX004' }, { quoted: m });
    } catch (error) {
        console.error(error);
        throw "فشل في إرسال الفيديو.";
    }
}

handler.tags = ['download'];
handler.command = /^(ytv|ytmp4)$/i;

export default handler;
