const Discord = require('discord.js')
const db = require('quick.db')

exports.run = async (client, message, args) => {

 if(!['769159408834838546', '', ''].some(role => message.member.roles.cache.get(role)) && !message.member.hasPermission('ADMINISTRATOR')) return message.reply(`Bu Komut İçin Yetkiniz Bulunmamaktadır.`) 
  
let tag = "☤ "
const kayıtlı = message.guild.roles.cache.find(r => r.id === '769159408834838544')
const kayıtsız = message.guild.roles.cache.find(r => r.id === '769159408834838542')

if(!kayıtlı) return message.reply('Kayıtlı Rolü Ayarlanmamış.') 
if(!kayıtsız) return message.reply('Kayıtsız Rolü Ayarlanmamış.') 
  
let member = message.mentions.users.first() || client.users.cache.get(args.join(' '))
if(!member) return message.channel.send('Kimi Kayıt Etmem Gerekiyor ?')
let stg = message.guild.member(member)
let isim = args[1]
let yas = args[2]
if(!isim) return message.reply('İsim Belirt.')
if(!yas) return message.reply('Yaş Belirt.')

stg.setNickname(`${tag} ${isim} | ${yas}`)  
stg.roles.add(kayıtlı)
stg.roles.remove(kayıtsız)

db.add(`kayıtSayi.${message.author.id}`, 1)
db.add(`kadinUye.${message.author.id}`, 1)
let kadın = db.get(`kadinUye.${message.author.id}`);
let kayıtlar = db.fetch(`kayıtSayi.${message.author.id}`); 
  
const embed = new Discord.MessageEmbed()
.setTitle(`Kayıt İşlemi Tamamlandı`)
    .addField(`<a:kelebek:773457417345171497>・Kayıt Eden:`, `<@${message.author.id}> Tarafından Kayıt Edildi`) 
    .addField(`<a:brave:772190684698509343>・Kayıt Edilen:`, `<@${stg.user.id}> Kayıt Oldu`)
    .addField(`<a:space:772191285914239070>・Verilen Rol:`, `<@&${kayıtlı.id}> Rolleri Verildi`) 
    .addField(`<a:yldz:772191409893146635>・Alınan Rol:`, `<@&${kayıtsız.id}> Rolleri Alındı`)
    .addField(`<a:elmass:772190425213435965>・Yeni İsmin:`, `\`${tag} ${isim} | ${yas}\` Olarak Güncellendi`) 
    .addField(`<a:raptiye:772190934556606537>・Yetkili Toplam:`, `\`${kayıtlar}\` Kayıtlara Sahip.`)
.setFooter(`Razor #Code`)
.setColor('GREEN')
client.channels.cache.get('769159409380622356').send(embed)
  
}

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['kadın','k','woman','girl', 'kız'],
    permLevel: 0
};

exports.help = {
    name: 'kadın',
};