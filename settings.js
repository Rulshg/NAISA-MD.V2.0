const fs = require('fs')
const chalk = require('chalk')

/*=======================================*/ 
global.lolhuman = 'XTRAM' // Gak Usah Diganti Ini Udah Free
global.dryan = 'dryanbot'
global.zenz = 'akame-chan>_<'
/*=======================================*/
global.namabot = 'Rulzie-𝑴𝑫'
global.namaowner = 'Dryan'
global.owner = ['6285848651208','6283152457580']
global.ownernomer = ['6285848651208','6283152457580']
global.premium = ['6285848651208','6283152457580']
/*=======================================*/
global.saweria = ['-']
global.sessionName = 'session'
global.email = 'uaruld@gmail.com'
global.namaweb = 'My Website'
global.myweb = 'https://joy.link/dryanbot'
global.region = 'Indonesia'
/*=======================================*/
global.github = 'https://github.com/AdrianTzy'
global.mygc = 'https://chat.whatsapp.com/IbewxIjm5Lr6cIvkUPlXwq'
global.mytt = 'https://tiktok.com/@dryanbot'
global.packname = 'Rulzie𝑩𝒚'
global.author = 'Rulz-𝑴𝑫\n𝑫𝒓𝒚𝒂𝒏-𝑴𝑫'
/*=======================================*/
global.jumlha = '999'
global.jumhal = '100000000000000'
global.jumlah = '1000000000'
global.prefa = ['', '!', '.', '🐦', '🐤', '🗿']
global.sp = '⭔'
global.mess = {
    success: 'Done, Kakak Jangan Lupa Donasi 😁',
    admin: 'Perintah Ini Hanya Bisa Digunakan Oleh Admin !',
    botAdmin: 'Perintah Ini Hanya Bisa Digunakan Ketika Bot Menjadi Admin !',
    owner: 'Perintah Ini Hanya Bisa Digunakan Oleh Owner !',
    group: 'Perintah Ini Hanya Bisa Digunakan Di Group Chat !',
    private: 'Perintah Ini Hanya Bisa Digunakan Di Private Chat !',
    bot: 'Fitur Khusus Pengguna Nomor Bot !',
    wait: '⏳ Sedang Di Proses !',
    endLimit: 'Limit Harian Anda Telah Habis, Limit Akan Direset Setiap Jam 12 !',
    error: 'Fitur Sedang Error !',
}

global.limitawal = {
    premium: "Infinity",
    free: 10,
}

global.thumb = fs.readFileSync('./media/image/naisa.jpg')
global.naisa = { url: 'https://telegra.ph/file/365931bc5e09418cef3dc.mp4' }
global.botname = 'RULZIE-𝖬𝖣 𝖵2'
global.akulaku = '𝙱𝙾𝚃 𝙱𝚢 Arul-𝙼𝙳'
global.ttname = '𝚃𝚒𝚔𝚝𝚘𝚔 Rullbot'

global.flaming = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.fluming = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=fluffy-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.flarun = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=runner-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.flasmurf = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=smurfs-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.mehk = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&fillTextType=1&fillTextPattern=Warning!&fillColor1Color=%23f2aa4c&fillColor2Color=%23f2aa4c&fillColor3Color=%23f2aa4c&fillColor4Color=%23f2aa4c&fillColor5Color=%23f2aa4c&fillColor6Color=%23f2aa4c&fillColor7Color=%23f2aa4c&fillColor8Color=%23f2aa4c&fillColor9Color=%23f2aa4c&fillColor10Color=%23f2aa4c&fillOutlineColor=%23f2aa4c&fillOutline2Color=%23f2aa4c&backgroundColor=%23101820&text='
global.awog = 'https://flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=amped-logo&doScale=true&scaleWidth=800&scaleHeight=500&text='
global.mohai = 'https://flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=crafts-logo&fontsize=90&doScale=true&scaleWidth=800&scaleHeight=500&text='
global.mhehe = 'https://flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=water-logo&script=water-logo&fontsize=90&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&fillTextColor=%23000&shadowGlowColor=%23000&backgroundColor=%23000&text='

let file = require.resolve(__filename)
fs.watchFile(file, () => {
    fs.unwatchFile(file)
    console.log(chalk.redBright(`Update'${__filename}'`))
    delete require.cache[file]
    require(file)
})
