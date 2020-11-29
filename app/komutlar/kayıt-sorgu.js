const Discord = require('discord.js')
const db = require('quick.db')

exports.run = async (client, message, args) => {

    if(!message.member.roles.cache.some(r => ["769159408834838546", ""].includes(r.id)) && (!message.member.hasPermission("ADMINISTRATOR")))
    return message.reply("Bu Komutu Kullanmak İçin Yetkiniz Bulunmamakta.")
 
 let kullanıcı = message.mentions.users.first()
    
 
if(!kullanıcı) {

let erkek = db.fetch(`erkekUye.${message.author.id}`);
let kadın = db.fetch(`kadinUye.${message.author.id}`);
let kayıtlar = db.fetch(`kayıtSayi.${message.author.id}`); 
if(erkek === null) erkek = "0"  
if(erkek === undefined) erkek = "0"
if(kadın === null) kadın = "0"
if(kadın === undefined) kadın = "0"
if(kayıtlar === null) kayıtlar = "0"
if(kayıtlar === undefined) kayıtlar = "0"
  
const sorgu1 = new Discord.MessageEmbed()
.setThumbnail(message.author.avatarURL ({ dynamic: true}))
.setAuthor(message.author.username, message.author.avatarURL)
.setDescription(`<a:sonsuz:773462601610559499>・Toplam Kayıtların: \`${kayıtlar}\`
<a:kelebek:773457417345171497>・Toplam Erkek Kayıtların: \`${erkek}\`
<a:elmass:772190425213435965>・Toplam Kadın Kayıtların: \`${kadın}\``)
.setFooter(`Razor #Code`) // evet bilerek kaldırmadım ayriyetten sıfırdan yazdım :)
 return message.channel.send(sorgu1)
};
  
if(kullanıcı) {  
let erkek1 = db.fetch(`erkekUye.${kullanıcı.id}`);
let kadın1 = db.fetch(`kadinUye.${kullanıcı.id}`);
let kayıtlar1 = db.fetch(`kayıtSayi.${kullanıcı.id}`); 
if(erkek1 === null) erkek1 = "0"  
if(erkek1 === undefined) erkek1 = "0"
if(kadın1 === null) kadın1 = "0"
if(kadın1 === undefined) kadın1 = "0"
if(kayıtlar1 === null) kayıtlar1 = "0"
if(kayıtlar1 === undefined) kayıtlar1 = "0"
  
const sorgu2 = new Discord.MessageEmbed()
.setThumbnail(kullanıcı.avatarURL ({ dynamic: true})) 
.setAuthor(`${kullanıcı.username}`)
.setDescription(`<a:sonsuz:773462601610559499>・Toplam Kayıtların: \`${kayıtlar1}\`
<a:kelebek:773457417345171497>・Toplam Erkek Kayıtların: \`${erkek1}\`
<a:elmass:772190425213435965>・Toplam Kadın Kayıtların: \`${kadın1}\``)
.setFooter(`Razor #Code`) // evet bilerek kaldırmadım ayriyetten sıfırdan yazdım :)
 return message.channel.send(sorgu2)
  
};
  
  };

exports.conf = {
    enabled: true,
    guildOnly: true,
    aliases: ["stat", "kayıtlar", "kayıt-kontrol"],
    permLvl: 0,
}
  
exports.help = {  
  name: "stat"
}