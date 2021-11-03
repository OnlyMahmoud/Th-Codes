require
            ("dotenv")
                    .config()
const { Client, 
                     Intents, 
                                                      MessageEmbed, 
                                    MessageAttachment , 
                                                                   MessageActionRow ,
                    
                                                                            MessageButton} 
                                        = 
                require('discord.js');
const 
client          
            = 
                        new                             Client
                            (
                                        
                                { intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] 
                                   });
const 
    { REST } 
        = 
                    require
                                ('@discordjs/rest');
const 
    { Routes } 
            =      
                require
                                ('discord-api-types/v9');
const 
                prefix 
                            = 
                            
            "/"
const 
        emojj         
                = 
"<:programmer:889427070671798292>"
//Codes
client.on("ready", () => {
var _0xc8e4=["\x68\x65\x6C\x70","\x43\x6F\x6D\x6D\x61\x6E\x64\x73\x4C\x69\x73\x74","\x75\x70\x64\x61\x74\x65","\x55\x70\x64\x61\x74\x65\x20\x43\x6F\x64\x65\x73","\x64\x6A\x73","\x44\x69\x73\x63\x6F\x72\x64\x2E\x6A\x73\x20\x43\x6F\x64\x65\x73","\x64\x70\x79","\x44\x69\x73\x63\x6F\x72\x64\x2E\x50\x79\x20\x43\x6F\x64\x65\x73","\x70\x69\x6E\x67","\x53\x68\x6F\x77\x20\x50\x69\x6E\x67","\x64\x6A\x73\x2D\x76\x31\x32","\x44\x69\x73\x63\x6F\x72\x64\x2E\x4A\x73\x76\x31\x32\x20\x43\x6F\x64\x65\x73","\x64\x6A\x73\x2D\x76\x31\x32\x2D\x31","\x63\x6F\x64\x65\x31","\x64\x6A\x73\x2D\x76\x31\x32\x2D\x32","\x63\x6F\x64\x65\x32","\x64\x6A\x73\x2D\x76\x31\x32\x2D\x33","\x63\x6F\x64\x65\x33","\x64\x6A\x73\x2D\x76\x31\x32\x2D\x34","\x63\x6F\x64\x65\x34","\x64\x6A\x73\x2D\x76\x31\x32\x2D\x36","\x63\x6F\x64\x65\x36","\x64\x6A\x73\x2D\x76\x31\x32\x2D\x37","\x63\x6F\x64\x65\x37","\x64\x6A\x73\x2D\x76\x31\x32\x2D\x38","\x63\x6F\x64\x65\x38","\x64\x6A\x73\x2D\x76\x31\x32\x2D\x39","\x63\x6F\x64\x65\x39","\x64\x6A\x73\x2D\x76\x31\x32\x2D\x31\x30","\x63\x6F\x64\x65\x31\x30","\x64\x6A\x73\x2D\x76\x31\x32\x2D\x31\x31","\x63\x6F\x64\x65\x31\x31","\x64\x6A\x73\x2D\x76\x31\x32\x2D\x31\x32","\x63\x6F\x64\x65\x31\x32","\x64\x6A\x73\x2D\x76\x31\x32\x2D\x31\x33","\x63\x6F\x64\x65\x31\x33","\x64\x6A\x73\x2D\x76\x31\x32\x2D\x31\x34","\x63\x6F\x64\x65\x31\x34","\x64\x6A\x73\x2D\x76\x31\x32\x2D\x31\x35","\x63\x6F\x64\x65\x31\x35","\x64\x6A\x73\x2D\x76\x31\x32\x2D\x31\x36","\x63\x6F\x64\x65\x31\x36","\x64\x6A\x73\x2D\x76\x31\x32\x2D\x31\x37","\x63\x6F\x64\x65\x31\x37","\x64\x6A\x73\x2D\x76\x31\x32\x2D\x31\x38","\x63\x6F\x64\x65\x31\x38","\x64\x6A\x73\x2D\x76\x31\x32\x2D\x31\x39","\x63\x6F\x64\x65\x31\x39","\x64\x6A\x73\x2D\x76\x31\x32\x2D\x32\x30","\x63\x6F\x64\x65\x32\x30","\x64\x6A\x73\x2D\x76\x31\x32\x2D\x32\x31","\x63\x6F\x64\x65\x32\x31","\x64\x6A\x73\x2D\x76\x31\x32\x2D\x32\x32","\x63\x6F\x64\x65\x32\x32","\x64\x6A\x73\x2D\x76\x31\x32\x2D\x32\x33","\x63\x6F\x64\x65\x32\x33","\x64\x6A\x73\x2D\x76\x31\x32\x2D\x32\x34","\x63\x6F\x64\x65\x32\x34","\x64\x6A\x73\x2D\x76\x31\x32\x2D\x32\x35","\x63\x6F\x64\x65\x32\x35","\x64\x6A\x73\x2D\x76\x31\x32\x2D\x32\x36","\x63\x6F\x64\x65\x32\x36","\x64\x6A\x73\x2D\x76\x31\x32\x2D\x32\x37","\x63\x6F\x64\x65\x32\x37","\x64\x6A\x73\x2D\x76\x31\x32\x2D\x32\x38","\x63\x6F\x64\x65\x32\x38","\x64\x6A\x73\x2D\x76\x31\x32\x2D\x32\x39","\x63\x6F\x64\x65\x32\x39","\x64\x6A\x73\x2D\x76\x31\x32\x2D\x33\x30","\x63\x6F\x64\x65\x33\x30","\x64\x70\x79\x2D\x31","\x63\x6F\x64\x65\x70\x79\x31","\x64\x70\x79\x2D\x32","\x63\x6F\x64\x65\x70\x79\x32","\x64\x70\x79\x2D\x33","\x63\x6F\x64\x65\x70\x79\x33","\x64\x70\x79\x2D\x34","\x63\x6F\x64\x65\x70\x79\x34","\x64\x70\x79\x2D\x35","\x63\x6F\x64\x65\x70\x79\x35","\x64\x70\x79\x2D\x36","\x63\x6F\x64\x65\x70\x79\x36","\x64\x70\x79\x2D\x37","\x63\x6F\x64\x65\x70\x79\x37","\x64\x70\x79\x2D\x39","\x63\x6F\x64\x65\x70\x79\x39","\x64\x70\x79\x2D\x31\x30","\x63\x6F\x64\x65\x70\x79\x31\x30","\x64\x70\x79\x2D\x31\x31","\x63\x6F\x64\x65\x70\x79\x31\x31","\x64\x70\x79\x2D\x31\x32","\x63\x6F\x64\x65\x70\x79\x31\x32","\x64\x70\x79\x2D\x31\x33","\x63\x6F\x64\x65\x70\x79\x31\x33","\x64\x6A\x73\x2D\x76\x31\x32\x2D\x33\x32","\x63\x6F\x64\x65\x33\x32","\x64\x6A\x73\x2D\x76\x31\x32\x2D\x33\x33","\x63\x6F\x64\x65\x33\x33","\x64\x6A\x73\x2D\x76\x31\x32\x2D\x33\x34","\x63\x6F\x64\x65\x33\x34","\x64\x6A\x73\x2D\x76\x31\x32\x2D\x33\x35","\x63\x6F\x64\x65\x33\x35","\x64\x6A\x73\x2D\x76\x31\x32\x2D\x33\x36","\x63\x6F\x64\x65\x33\x36","\x64\x6A\x73\x2D\x76\x31\x32\x2D\x33\x37","\x63\x6F\x64\x65\x33\x37","\x64\x6A\x73\x2D\x76\x31\x32\x2D\x33\x38","\x63\x6F\x64\x65\x33\x38","\x64\x6A\x73\x2D\x76\x31\x32\x2D\x33\x39","\x63\x6F\x64\x65\x33\x39","\x64\x6A\x73\x2D\x76\x31\x32\x2D\x34\x30","\x63\x6F\x64\x65\x34\x30","\x64\x6A\x73\x2D\x76\x31\x32\x2D\x34\x31","\x63\x6F\x64\x65\x34\x31","\x64\x6A\x73\x2D\x76\x31\x32\x2D\x34\x32","\x63\x6F\x64\x65\x34\x32","\x64\x6A\x73\x2D\x76\x31\x32\x2D\x34\x33","\x63\x6F\x64\x65\x34\x33","\x64\x6A\x73\x2D\x76\x31\x32\x2D\x34\x34","\x63\x6F\x64\x65\x34\x34","\x64\x6A\x73\x2D\x76\x31\x32\x2D\x34\x35","\x63\x6F\x64\x65\x34\x35","\x64\x6A\x73\x2D\x76\x31\x32\x2D\x34\x36","\x63\x6F\x64\x65\x34\x36","\x64\x6A\x73\x2D\x76\x31\x32\x2D\x34\x37","\x63\x6F\x64\x65\x34\x37","\x64\x6A\x73\x2D\x76\x31\x32\x2D\x34\x38","\x63\x6F\x64\x65\x34\x38","\x64\x6A\x73\x2D\x76\x31\x32\x2D\x34\x39","\x63\x6F\x64\x65\x34\x39","\x64\x6A\x73\x2D\x76\x31\x32\x2D\x35\x30","\x63\x6F\x64\x65\x35\x30","\x64\x6A\x73\x2D\x76\x31\x32\x2D\x35\x31","\x63\x6F\x64\x65\x35\x31","\x64\x6A\x73\x2D\x76\x31\x32\x2D\x35\x32","\x63\x6F\x64\x65\x35\x32","\x64\x6A\x73\x2D\x76\x31\x32\x2D\x35\x33","\x63\x6F\x64\x65\x35\x33","\x64\x6A\x73\x2D\x76\x31\x32\x2D\x35\x34","\x63\x6F\x64\x65\x35\x34","\x64\x6A\x73\x2D\x76\x31\x32\x2D\x35\x35","\x63\x6F\x64\x65\x35\x35","\x64\x6A\x73\x2D\x76\x31\x32\x2D\x35\x36","\x63\x6F\x64\x65\x35\x36","\x64\x6A\x73\x2D\x76\x31\x32\x2D\x35\x37","\x63\x6F\x64\x65\x35\x37","\x64\x6A\x73\x2D\x76\x31\x32\x2D\x35\x38","\x63\x6F\x64\x65\x35\x38","\x64\x6A\x73\x2D\x76\x31\x32\x2D\x35\x39","\x63\x6F\x64\x65\x35\x39","\x64\x6A\x73\x2D\x76\x31\x32\x2D\x36\x30","\x63\x6F\x64\x65\x36\x30","\x64\x6A\x73\x2D\x76\x31\x32\x2D\x36\x31","\x63\x6F\x64\x65\x36\x31","\x64\x6A\x73\x2D\x76\x31\x32\x2D\x36\x32","\x63\x6F\x64\x65\x36\x32","\x64\x6A\x73\x2D\x76\x31\x32\x2D\x36\x33","\x63\x6F\x64\x65\x36\x33","\x64\x6A\x73\x2D\x76\x31\x32\x2D\x36\x34","\x63\x6F\x64\x65\x36\x34","\x64\x6A\x73\x2D\x76\x31\x32\x2D\x36\x35","\x63\x6F\x64\x65\x36\x35","\x64\x6A\x73\x2D\x76\x31\x33","\x63\x6F\x64\x65\x36\x36","\x64\x6A\x73\x2D\x76\x31\x33\x2D\x31","\x63\x6F\x64\x65\x36\x37","\x64\x6A\x73\x2D\x76\x31\x33\x2D\x32","\x63\x6F\x64\x65\x36\x38","\x64\x6A\x73\x2D\x76\x31\x33\x2D\x33","\x63\x6F\x64\x65\x36\x39","\x62\x64\x66\x64","\x63\x6F\x64\x65\x73\x62\x64\x66\x64","\x69\x6E\x76\x69\x74\x65","\x69\x6E\x76\x69\x74\x65\x20\x6D\x65","\x64\x6A\x73\x2D\x76\x31\x33\x2D\x34","\x63\x6F\x64\x65\x37\x30","\x64\x6A\x73\x2D\x76\x31\x33\x2D\x35","\x63\x6F\x64\x65\x37\x31","\x64\x6A\x73\x2D\x76\x31\x33\x2D\x36","\x63\x6F\x64\x65\x37\x32","\x64\x6A\x73\x2D\x76\x31\x33\x2D\x37","\x63\x6F\x64\x65\x37\x33","\x64\x6A\x73\x2D\x76\x31\x33\x2D\x38","\x63\x6F\x64\x65\x37\x34","\x64\x6A\x73\x2D\x76\x31\x33\x2D\x39","\x63\x6F\x64\x65\x37\x35","\x64\x6A\x73\x2D\x76\x31\x33\x2D\x31\x30","\x63\x6F\x64\x65\x37\x36","\x64\x6A\x73\x2D\x76\x31\x33\x2D\x31\x31","\x63\x6F\x64\x65\x37\x37","\x64\x6A\x73\x2D\x76\x31\x32\x2D\x36\x36","\x63\x6F\x64\x65\x37\x38","\x64\x70\x79\x2D\x76\x31\x34","\x63\x6F\x64\x65\x37\x39","\x64\x70\x79\x2D\x76\x31\x35","\x63\x6F\x64\x65\x38\x30","\x62\x6F\x74","\x62\x6F\x74\x20\x69\x6E\x66\x6F\x72\x6D\x61\x74\x69\x6F\x6E\x73"];const commands=[{name:_0xc8e4[0],description:_0xc8e4[1]},{name:_0xc8e4[2],description:_0xc8e4[3]},{name:_0xc8e4[4],description:_0xc8e4[5]},{name:_0xc8e4[6],description:_0xc8e4[7]},{name:_0xc8e4[8],description:_0xc8e4[9]},{name:_0xc8e4[10],description:_0xc8e4[11]},{name:_0xc8e4[12],description:_0xc8e4[13]},{name:_0xc8e4[14],description:_0xc8e4[15]},{name:_0xc8e4[16],description:_0xc8e4[17]},{name:_0xc8e4[18],description:_0xc8e4[19]},{name:_0xc8e4[20],description:_0xc8e4[21]},{name:_0xc8e4[22],description:_0xc8e4[23]},{name:_0xc8e4[24],description:_0xc8e4[25]},{name:_0xc8e4[26],description:_0xc8e4[27]},{name:_0xc8e4[28],description:_0xc8e4[29]},{name:_0xc8e4[30],description:_0xc8e4[31]},{name:_0xc8e4[32],description:_0xc8e4[33]},{name:_0xc8e4[34],description:_0xc8e4[35]},{name:_0xc8e4[36],description:_0xc8e4[37]},{name:_0xc8e4[38],description:_0xc8e4[39]},{name:_0xc8e4[40],description:_0xc8e4[41]},{name:_0xc8e4[42],description:_0xc8e4[43]},{name:_0xc8e4[44],description:_0xc8e4[45]},{name:_0xc8e4[46],description:_0xc8e4[47]},{name:_0xc8e4[48],description:_0xc8e4[49]},{name:_0xc8e4[50],description:_0xc8e4[51]},{name:_0xc8e4[52],description:_0xc8e4[53]},{name:_0xc8e4[54],description:_0xc8e4[55]},{name:_0xc8e4[56],description:_0xc8e4[57]},{name:_0xc8e4[58],description:_0xc8e4[59]},{name:_0xc8e4[60],description:_0xc8e4[61]},{name:_0xc8e4[62],description:_0xc8e4[63]},{name:_0xc8e4[64],description:_0xc8e4[65]},{name:_0xc8e4[66],description:_0xc8e4[67]},{name:_0xc8e4[68],description:_0xc8e4[69]},{name:_0xc8e4[70],description:_0xc8e4[71]},{name:_0xc8e4[72],description:_0xc8e4[73]},{name:_0xc8e4[74],description:_0xc8e4[75]},{name:_0xc8e4[76],description:_0xc8e4[77]},{name:_0xc8e4[78],description:_0xc8e4[79]},{name:_0xc8e4[80],description:_0xc8e4[81]},{name:_0xc8e4[82],description:_0xc8e4[83]},{name:_0xc8e4[84],description:_0xc8e4[85]},{name:_0xc8e4[86],description:_0xc8e4[87]},{name:_0xc8e4[88],description:_0xc8e4[89]},{name:_0xc8e4[90],description:_0xc8e4[91]},{name:_0xc8e4[92],description:_0xc8e4[93]},{name:_0xc8e4[94],description:_0xc8e4[95]},{name:_0xc8e4[96],description:_0xc8e4[97]},{name:_0xc8e4[98],description:_0xc8e4[99]},{name:_0xc8e4[100],description:_0xc8e4[101]},{name:_0xc8e4[102],description:_0xc8e4[103]},{name:_0xc8e4[104],description:_0xc8e4[105]},{name:_0xc8e4[106],description:_0xc8e4[107]},{name:_0xc8e4[108],description:_0xc8e4[109]},{name:_0xc8e4[110],description:_0xc8e4[111]},{name:_0xc8e4[112],description:_0xc8e4[113]},{name:_0xc8e4[114],description:_0xc8e4[115]},{name:_0xc8e4[116],description:_0xc8e4[117]},{name:_0xc8e4[118],description:_0xc8e4[119]},{name:_0xc8e4[120],description:_0xc8e4[121]},{name:_0xc8e4[122],description:_0xc8e4[123]},{name:_0xc8e4[124],description:_0xc8e4[125]},{name:_0xc8e4[126],description:_0xc8e4[127]},{name:_0xc8e4[128],description:_0xc8e4[129]},{name:_0xc8e4[130],description:_0xc8e4[131]},{name:_0xc8e4[132],description:_0xc8e4[133]},{name:_0xc8e4[134],description:_0xc8e4[135]},{name:_0xc8e4[136],description:_0xc8e4[137]},{name:_0xc8e4[138],description:_0xc8e4[139]},{name:_0xc8e4[140],description:_0xc8e4[141]},{name:_0xc8e4[142],description:_0xc8e4[143]},{name:_0xc8e4[144],description:_0xc8e4[145]},{name:_0xc8e4[146],description:_0xc8e4[147]},{name:_0xc8e4[148],description:_0xc8e4[149]},{name:_0xc8e4[150],description:_0xc8e4[151]},{name:_0xc8e4[152],description:_0xc8e4[153]},{name:_0xc8e4[154],description:_0xc8e4[155]},{name:_0xc8e4[156],description:_0xc8e4[157]},{name:_0xc8e4[158],description:_0xc8e4[159]},{name:_0xc8e4[160],description:_0xc8e4[161]},{name:_0xc8e4[162],description:_0xc8e4[163]},{name:_0xc8e4[164],description:_0xc8e4[165]},{name:_0xc8e4[166],description:_0xc8e4[167]},{name:_0xc8e4[168],description:_0xc8e4[169]},{name:_0xc8e4[170],description:_0xc8e4[171]},{name:_0xc8e4[172],description:_0xc8e4[173]},{name:_0xc8e4[174],description:_0xc8e4[175]},{name:_0xc8e4[176],description:_0xc8e4[177]},{name:_0xc8e4[178],description:_0xc8e4[179]},{name:_0xc8e4[180],description:_0xc8e4[181]},{name:_0xc8e4[182],description:_0xc8e4[183]},{name:_0xc8e4[184],description:_0xc8e4[185]},{name:_0xc8e4[186],description:_0xc8e4[187]},{name:_0xc8e4[188],description:_0xc8e4[189]},{name:_0xc8e4[190],description:_0xc8e4[191]},{name:_0xc8e4[192],description:_0xc8e4[193]},{name:_0xc8e4[194],description:_0xc8e4[195]},{name:_0xc8e4[196],description:_0xc8e4[197]}]

    const rest = new REST({ version: '9' }).setToken(process.env.token);
    
    (async () => {
        try {
            await rest.put(
                Routes.applicationCommands(client.user.id),
                { body: commands },
            );
    
            console.log('Successfully registered application commands.');
        } catch (error) {
            console.error(error);
        }
    })();
})
var _0x1fc1=["\x3C\x3A\x72\x69\x67\x68\x74\x61\x72\x72\x6F\x77\x3A\x38\x33\x32\x30\x37\x34\x33\x36\x35\x34\x31\x30\x36\x30\x37\x31\x34\x34\x3E","\x3C\x3A\x6C\x65\x66\x74\x61\x72\x72\x6F\x77\x3A\x38\x33\x32\x30\x37\x34\x36\x39\x30\x34\x31\x38\x39\x36\x36\x35\x36\x33\x3E","\x3C\x3A\x4C\x49\x53\x54\x3A\x38\x33\x31\x39\x33\x35\x39\x34\x38\x31\x36\x35\x32\x31\x38\x33\x32\x34\x3E","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x64\x69\x73\x63\x6F\x72\x64\x2E\x67\x67\x2F\x37\x58\x62\x44\x45\x74\x41\x4A\x78\x38","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x63\x64\x6E\x2E\x64\x69\x73\x63\x6F\x72\x64\x61\x70\x70\x2E\x63\x6F\x6D\x2F\x61\x76\x61\x74\x61\x72\x73\x2F\x38\x33\x36\x36\x39\x37\x39\x30\x32\x39\x33\x30\x39\x38\x35\x30\x30\x31\x2F\x64\x63\x37\x30\x62\x36\x66\x32\x39\x61\x61\x35\x36\x38\x33\x38\x35\x64\x30\x61\x30\x64\x66\x34\x64\x61\x30\x31\x66\x36\x34\x30\x2E\x77\x65\x62\x70"];const emj=_0x1fc1[0];const emj2=_0x1fc1[1];const emj3=_0x1fc1[2];const support=_0x1fc1[3];const Thumbnail=_0x1fc1[4]
client.on('interactionCreate', async interaction => {
if (!interaction.isCommand()) return;
await interaction.deferReply()
  if(interaction.commandName == "help"){
var _0x6ae5=["\x3C\x3A\x4E\x75\x6C\x6C\x5F\x32\x37\x30\x3A\x38\x39\x36\x37\x37\x34\x31\x38\x38\x36\x33\x33\x38\x34\x31\x36\x37\x34\x3E\x20\x5C\x60\x2F\x62\x6F\x74\x5C\x60","\x62\x6F\x74\x20\x69\x6E\x66\x6F\x72\x6D\x61\x74\x69\x6F\x6E\x73","\x61\x64\x64\x46\x69\x65\x6C\x64","\x3C\x3A\x49\x6E\x76\x69\x74\x65\x62\x6F\x74\x3A\x38\x36\x31\x37\x31\x34\x32\x33\x32\x33\x39\x34\x36\x34\x35\x35\x37\x34\x3E\x20\x5C\x60\x2F\x69\x6E\x76\x69\x74\x65\x5C\x60","\x49\x6E\x76\x69\x74\x65\x4D\x65","\x3C\x3A\x75\x70\x64\x61\x74\x65\x3A\x38\x33\x31\x39\x34\x32\x31\x31\x34\x35\x39\x33\x32\x31\x30\x34\x33\x39\x3E\x20\x5C\x60\x2F\x75\x70\x64\x61\x74\x65\x5C\x60","\x55\x70\x64\x61\x74\x65\x20\x44\x69\x73\x63\x6F\x72\x64\x2E\x6A\x73\x20\x43\x6F\x64\x65\x73","\x3A\x70\x69\x6E\x67\x5F\x70\x6F\x6E\x67\x3A\x20\x5C\x60\x2F\x70\x69\x6E\x67\x5C\x60","\x53\x68\x6F\x77\x20\x54\x68\x65\x20\x50\x69\x6E\x67","\x3C\x3A\x4E\x75\x6C\x6C\x5F\x35\x34\x32\x3A\x38\x39\x32\x34\x31\x39\x33\x35\x32\x39\x37\x39\x32\x31\x30\x33\x32\x30\x3E\x20\x5C\x60\x2F\x62\x64\x66\x64\x5C\x60","\x42\x64\x66\x64\x20\x43\x6F\x64\x65\x73","\x3C\x3A\x70\x79\x31\x3A\x38\x38\x34\x38\x34\x33\x39\x39\x36\x33\x38\x36\x35\x37\x34\x34\x31\x36\x3E\x20\x5C\x60\x2F\x64\x70\x79\x5C\x60","\x44\x69\x73\x63\x6F\x72\x64\x2E\x70\x79\x20\x43\x6F\x64\x65\x73","\x3C\x3A\x6E\x6F\x64\x65\x6A\x73\x3A\x38\x38\x34\x38\x34\x33\x38\x36\x38\x32\x33\x37\x39\x38\x37\x38\x34\x31\x3E\x20\x5C\x60\x2F\x64\x6A\x73\x5C\x60","\x44\x69\x73\x63\x6F\x72\x64\x2E\x4A\x73\x20\x43\x6F\x64\x65\x73","\x73\x65\x74\x54\x68\x75\x6D\x62\x6E\x61\x69\x6C","\x48\x65\x6C\x70\x4C\x69\x73\x74","\x73\x65\x74\x54\x69\x74\x6C\x65","\x73\x65\x74\x54\x69\x6D\x65\x73\x74\x61\x6D\x70","\x23\x32\x66\x33\x31\x33\x36","\x73\x65\x74\x43\x6F\x6C\x6F\x72"];let embed= new MessageEmbed()[_0x6ae5[20]](`${_0x6ae5[19]}`)[_0x6ae5[18]]()[_0x6ae5[17]](_0x6ae5[16])[_0x6ae5[15]](Thumbnail)[_0x6ae5[2]](`${_0x6ae5[13]}`,`${_0x6ae5[14]}`,true)[_0x6ae5[2]](`${_0x6ae5[11]}`,`${_0x6ae5[12]}`,true)[_0x6ae5[2]](`${_0x6ae5[9]}`,`${_0x6ae5[10]}`,true)[_0x6ae5[2]](`${_0x6ae5[7]}`,`${_0x6ae5[8]}`,true)[_0x6ae5[2]](`${_0x6ae5[5]}`,`${_0x6ae5[6]}`,true)[_0x6ae5[2]](`${_0x6ae5[3]}`,`${_0x6ae5[4]}`,true)[_0x6ae5[2]](`${_0x6ae5[0]}`,`${_0x6ae5[1]}`,true)
            await interaction.editReply({embeds: [embed]})
          } else
          if(interaction.commandName == "update"){

            await interaction.editReply(`
Update You'r Codes V11 To V12
> https://discord.convert-codes.tk
For V13
> https://discordjs.guide/additional-info/changes-in-v13.html#before-you-start
`)
                } else 
                if(interaction.commandName == "djs"){
                    let 
                    embed =                         
                                    new 
                MessageEmbed
                                    ()
                        .                       setColor
                        (`#0068ff`)
                                                .                           
                                                                setThumbnail
            (`https://cdn.discordapp.com/attachments/826824454415056946/831921986950922270/logo-square.png`)
                                        .                                           setTitle
            (`Discord.js Codes.`)
                                                                  .                 
                                        setURL
            (`${support}`)
                        .                               setTimestamp
            ()      
                                  .                               setDescription(`
            ${emj3} \`Discord.js v12\` ${emj} /djs-v12
            ${emj3} \`Discord.js v13\` ${emj} /djs-v13`)
        await 
                    interaction 
                                                            .                  
                                    editReply
                                                        (
                                                            {embeds: [embed]
                                        })

   } else
      if(interaction.commandName == "dpy"){
        const 
        row                       
                                          = 
        
        new 
                    MessageActionRow()
.                                     addComponents        
        (
new 
                MessageButton
                                    ()
                                            .
                                                        setCustomId
                                                        ('primary')
  .                             setLabel
('👈')

  .                 
                  setStyle
                                            
('PRIMARY'),
)
.                                 
            addComponents
                    (
new                                   MessageButton
            ()
  .
            setCustomId                          
                            ("primary11")
  .                         
  
                setLabel
('👉')
                                  .
setStyle
                    ('PRIMARY'),
);
                                                                                                                     let 
        

                                            pages 
= 
[`
            ${emj3} \`/dpy-1\` ${emj} Code suggestions
            ${emj3} \`/dpy-2\` ${emj} Code say
            ${emj3} \`/dpy-3\` ${emj} Code info bot
            ${emj3} \`/dpy-4\` ${emj} Code Roles-Count
            ${emj3} \`/dpy-5\` ${emj} Code Source 
            ${emj3} \`/dpy-6\` ${emj} Code Anti Bad-Word
            ${emj3} \`/dpy-7\` ${emj} Code Vote Link
            ${emj3} \`/dpy-8\` ${emj} Code IQ Rate
            ${emj3} \`/dpy-9\` ${emj} Code avatar
            ${emj3} \`/dpy-10\` ${emj} Code 8 ball
            `,`
            ${emj3} \`/dpy-11\` ${emj} Code nick name
            ${emj3} \`/dpy-12\` ${emj} Code If You Ping The Bot He Will Send The Prefix
            ${emj3} \`/dpy-13\` ${emj} Code lock-unlock Channel
            ${emj3} \`/dpy-14\` ${emj} ban code
            ${emj3} \`/dpy-15\` ${emj} bot info code
            `]
            ;
      
            let 
                                                                  page = 
                                                                                  1;
            let                           
                                      pagess 
                                                              = 
                                          new 
                  MessageEmbed
                                      ()
                        .                                
                                      setTitle
                                                          (`Discord.Py Codes`)
                        .                                     
                                      setTimestamp
                                                      ()
                        .                                
                                  setColor
                                              ('#0068ff')
                        .                                   
                                      
                          setThumbnail
                              ('https://cdn.discordapp.com/emojis/889528505476481025.png?v=1')
                        .                           
                                        setDescription
      
                                                      (pages[page - 1]);
      await 
                      interaction.                  
                                          editReply
                              
                  ({ content: '_ _', ephemeral: true, embeds: [pagess], components: [row] });
      const                               filter 
                                                  = i => i.user.id === 
      interaction             
              .                user                           
                                          .                         
                                                               id;
      
      const 
                                              collector 
                                                                      =       
                  interaction                       
                                          .channel.                                   
                                                                  createMessageComponentCollector 
                              ({ filter, time: 2000000 });
      
      collector                       .                        on('collect', 
                          async i => {
      if                                   (i.customId                                                                  
          === 'primary11')         {
      if                                                  (page === 
                                  pages.length) 
                          return;
      
                                  page++
                                      ;
                    pagess                .                       
                                      setDescription
                                                              (pages[page - 1])
                                                                  ;
                    pagess                                        
                    
                    
                    
                    
                                  .
                                  
                  setFooter
                              (`Page ${page} / ${pages.length}`);
                    interaction                   
                                  .                  
                                  
                                                                    editReply       
                                    ({ embeds : [pagess] }
                                                        );
      }
      });
      
      collector.                              on
                                          ('collect', 
                                                                  async i => {
      if                                                                       (i.customId
                           === 'primary') {
      if                                          (page === 1) return;
      
                                          page--;
                    pagess                        
                                           .                         
                                   setDescription(pages[page - 1]);
                    pagess            .                       
                                          setFooter       
                                                      (`Page ${page} / ${pages.length}`);
                    interaction       
                                      .
                        editReply
                                                          (
                                       { embeds : [pagess] 
                                                                  });
      }
      })
      
} else 
if(interaction.commandName == "ping"){

await interaction.editReply(`Ping \`${client.ws.ping}Ms!\``)
} else
if(interaction.commandName == "djs-v12"){
  const 
                    row                       
                                                      = 
                    
                    new 
                                MessageActionRow()
      .                                     addComponents        
                    (
          new 
                            MessageButton
                                                ()
                                                        .
                                                                    setCustomId
                                                                    ('primary')
              .                             setLabel
            ('👈')

              .                 
                              setStyle
                                                        
        ('PRIMARY'),
      )
      .                                 
                        addComponents
                                (
          new                                   MessageButton
                        ()
              .
                        setCustomId                          
                                        ("primary11")
              .                         
              
                            setLabel
        ('👉')
                                              .
        setStyle
                                ('PRIMARY'),
      );
                                                                                                                                 let 
                    
      
                                                        pages 
= 
[`
      ${emj3} \`${prefix}djs-v12-1\` ${emj} Corona statistics code
      ${emj3} \`${prefix}djs-v12-2\` ${emj} Information server code such as ProBot
      ${emj3} \`${prefix}djs-v12-3\` ${emj} User code
      ${emj3} \`${prefix}djs-v12-4\` ${emj} Code Show How Many Boosts In The Server
      ${emj3} \`${prefix}djs-v12-5\` ${emj} Code Send Message To You When Someone Leave Your Server
      ${emj3} \`${prefix}djs-v12-6\` ${emj} Help Code In DM (Direct Messages)
      ${emj3} \`${prefix}djs-v12-7\` ${emj} Ban Code Like ProBot
      ${emj3} \`${prefix}djs-v12-8\` ${emj} Imposter Code
      ${emj3} \`${prefix}djs-v12-9\` ${emj} Translate code
      ${emj3} \`${prefix}djs-v12-10\` ${emj} Code set-line , line
      `,`
      ${emj3} \`${prefix}djs-v12-11\` ${emj} Applications Code
      ${emj3} \`${prefix}djs-v12-12\` ${emj} Code Give You Server Link (Link Never Expire)
      ${emj3} \`${prefix}djs-v12-13\` ${emj} Anti Share Code
      ${emj3} \`${prefix}djs-v12-14\` ${emj} Applications Code
      ${emj3} \`${prefix}djs-v12-15\` ${emj} Code Give You Any Bot Link Using Bot ID
      ${emj3} \`${prefix}djs-v12-16\` ${emj} Voice-Kick Code Command Handler
      ${emj3} \`${prefix}djs-v12-17\` ${emj} Code embed say
      ${emj3} \`${prefix}djs-v12-18\` ${emj} Top Code Link Probot
      ${emj3} \`${prefix}djs-v12-19\` ${emj} Code Set Suggestions
      ${emj3} \`${prefix}djs-v12-20\` ${emj} When Your Bot Added To New Server (Bot Will Give You Added Server Information)
      `,`
      ${emj3} \`${prefix}djs-v12-21\` ${emj} Top-role Code
      ${emj3} \`${prefix}djs-v12-22\` ${emj} Temp-role Code
      ${emj3} \`${prefix}djs-v12-23\` ${emj} Roles Code
      ${emj3} \`${prefix}djs-v12-24\` ${emj} Rep Code
      ${emj3} \`${prefix}djs-v12-25\` ${emj} Member Status Code
      ${emj3} \`${prefix}djs-v12-26\` ${emj} Member Count Code
      ${emj3} \`${prefix}djs-v12-27\` ${emj} Un-Ban Code
      ${emj3} \`${prefix}djs-v12-28\` ${emj} Ban Code
      ${emj3} \`${prefix}djs-v12-29\` ${emj} Bots Count Code
      ${emj3} \`${prefix}djs-v12-30\` ${emj} Emojis Code
      `,`
      ${emj3} \`${prefix}djs-v12-31\` ${emj} Server-Roles Code
      ${emj3} \`${prefix}djs-v12-32\` ${emj} Code Lock - Unlock Channel
      ${emj3} \`${prefix}djs-v12-33\` ${emj} Muslim Prayer Code
      ${emj3} \`${prefix}djs-v12-34\` ${emj} Nick-Name Code
      ${emj3} \`${prefix}djs-v12-35\` ${emj} Pin The Bot In Voice Channel
      ${emj3} \`${prefix}djs-v12-36\` ${emj} Code ping Like ProBot
      ${emj3} \`${prefix}djs-v12-37\` ${emj} Pin Your Account In Voice Channel
      ${emj3} \`${prefix}djs-v12-38\` ${emj} Code say
      ${emj3} \`${prefix}djs-v12-39\` ${emj} Say Embed Code
      ${emj3} \`${prefix}djs-v12-40\` ${emj} Code luke
      `,`
      ${emj3} \`${prefix}djs-v12-41\` ${emj} Code warn
      ${emj3} \`${prefix}djs-v12-42\` ${emj} Code rules
      ${emj3} \`${prefix}djs-v12-43\` ${emj} Report Code
      ${emj3} \`${prefix}djs-v12-44\` ${emj} Uptime Code
      ${emj3} \`${prefix}djs-v12-45\` ${emj} Anime Code
      ${emj3} \`${prefix}djs-v12-46\` ${emj} Code Server info
      ${emj3} \`${prefix}djs-v12-47\` ${emj} Code tax
      ${emj3} \`${prefix}djs-v12-48\` ${emj} Code welcome
      ${emj3} \`${prefix}djs-v12-49\` ${emj} Code spank
      ${emj3} \`${prefix}djs-v12-50\` ${emj} Code mute
      `,`
      ${emj3} \`${prefix}djs-v12-51\` ${emj} Code unban
      ${emj3} \`${prefix}djs-v12-52\` ${emj} Code Bans
      ${emj3} \`${prefix}djs-v12-53\` ${emj} Code info bot
      ${emj3} \`${prefix}djs-v12-54\` ${emj} Code User
      ${emj3} \`${prefix}djs-v12-55\` ${emj} Status Code + Bot Info In Console
      ${emj3} \`${prefix}djs-v12-56\` ${emj} Code vmute
      ${emj3} \`${prefix}djs-v12-57\` ${emj} Code vkick
      ${emj3} \`${prefix}djs-v12-58\` ${emj} Code role
      ${emj3} \`${prefix}djs-v12-59\` ${emj} Code log
      ${emj3} \`${prefix}djs-v12-60\` ${emj} Code random namber
      `,`
      ${emj3} \`${prefix}djs-v12-61\` ${emj} Code slow mod
      ${emj3} \`${prefix}djs-v12-62\` ${emj} Code Iq
      ${emj3} \`${prefix}djs-v12-63\` ${emj} Code Avatar Mention User/No Mention User
      ${emj3} \`${prefix}djs-v12-64\` ${emj} Code Server Avatar like Probot
      ${emj3} \`${prefix}djs-v12-65\` ${emj} Code Clear Messages
      ${emj3} \`${prefix}djs-v12-66\` ${emj} suggestions code
      `]
      ;

      let 
                                                            page = 
                                                                            1;
      let                           
                                pagess 
                                                        = 
                                    new 
            MessageEmbed
                                ()
                  .                                
                                setTitle
                                                    (`Discord.Js Codes`)
                  .                                     
                                setTimestamp
                                                ()
                  .                                
                            setColor
                                        ('#0068ff')
                  .                                   
                                
                    setThumbnail
                        ('https://cdn.discordapp.com/attachments/826824454415056946/831921986950922270/logo-square.png')
                  .                           
                                  setDescription

                                                (pages[page - 1]);
await 
                interaction.                  
                                    editReply
                        
            ({ content: '_ _', ephemeral: true, embeds: [pagess], components: [row] });
const                               filter 
                                            = i => i.user.id === 
interaction             
        .                user                           
                                    .                         
                                                         id;

const 
                                        collector 
                                                                =       
            interaction                       
                                    .channel.                                   
                                                            createMessageComponentCollector 
                        ({ filter, time: 2000000 });

collector                       .                        on('collect', 
                    async i => {
if                                   (i.customId                                                                  
    === 'primary11')         {
if                                                  (page === 
                            pages.length) 
                    return;

                            page++
                                ;
              pagess                .                       
                                setDescription
                                                        (pages[page - 1])
                                                            ;
              pagess                                        
              
              
              
              
                            .
                            
            setFooter
                        (`Page ${page} / ${pages.length}`);
              interaction                   
                            .                  
                            
                                                              editReply       
                              ({ embeds : [pagess] }
                                                  );
}
});

collector.                              on
                                    ('collect', 
                                                            async i => {
if                                                                       (i.customId
                     === 'primary') {
if                                          (page === 1) return;

                                    page--;
              pagess                        
                                     .                         
                             setDescription(pages[page - 1]);
              pagess            .                       
                                    setFooter       
                                                (`Page ${page} / ${pages.length}`);
              interaction       
                                .
                  editReply
                                                    (
                                 { embeds : [pagess] 
                                                            });
}
})
} else
if(interaction.commandName == "djs-v12-1"){

await interaction.editReply(`
CodeName: ${emojj} | Corona statistics code
Code: ${emojj} - https://pastebin.com/C4V6zv6r`)
} else
if(interaction.commandName == "djs-v12-2"){

    await interaction.editReply(`
CodeName: ${emojj} | Information server code such as ProBot
Code: ${emojj} - https://pastebin.com/g8FG6Dhn`)
}else
if(interaction.commandName == "djs-v12-3"){

    await interaction.editReply(`
CodeName: ${emojj} | User code
Code: ${emojj} - https://pastebin.com/BGVCFPXe`)
}else
if(interaction.commandName == "djs-v12-4"){

    await interaction.editReply(`
CodeName: ${emojj} | Code Show How Many Boosts In The Server
Code: ${emojj} - https://pastebin.com/QeFUEWgm`)
}else
if(interaction.commandName == "djs-v12-6"){

    await interaction.editReply(`
CodeName: ${emojj} | Help Code In DM (Direct Messages)
Code: ${emojj} - https://pastebin.com/keAamsBh`)
}else
if(interaction.commandName == "djs-v12-7"){

    await interaction.editReply(`
CodeName: ${emojj} | Ban Code Like ProBot
Code: ${emojj} - https://pastebin.com/22ZbPx1h`)
}else
if(interaction.commandName == "djs-v12-8"){

    await interaction.editReply(`
CodeName: ${emojj} | Imposter Code
Code: ${emojj} - https://pastebin.com/sj392ixi`)
}else
if(interaction.commandName == "djs-v12-9"){

    await interaction.editReply(`
CodeName: ${emojj} | Translate code
Code: ${emojj} - https://pastebin.com/tYSpgYJ5`)
}else
if(interaction.commandName == "djs-v12-10"){

    await interaction.editReply(`
CodeName: ${emojj} | Code set-line , line
Code: ${emojj} - https://pastebin.com/xf28HnRh`)
}else
if(interaction.commandName == "djs-v12-11"){

    await interaction.editReply(`
CodeName: ${emojj} | Applications Code
Code: ${emojj} - https://pastebin.com/rpNm7E9J`)
}else
if(interaction.commandName == "djs-v12-12"){

    await interaction.editReply(`
CodeName: ${emojj} | Code Give You Server Link (Link Never Expire)
Code: ${emojj} - https://pastebin.com/UqtSraxd`)
}else
if(interaction.commandName == "djs-v12-13"){

    await interaction.editReply(`
CodeName: ${emojj} | Anti Share Code
Code: ${emojj} - https://pastebin.com/nUwyAgEa`)
}else
if(interaction.commandName == "djs-v12-14"){

    await interaction.editReply(`
CodeName: ${emojj} | Applications2 Code
Code: ${emojj} - https://pastebin.com/MtiPU2nJ`)
}else
if(interaction.commandName == "djs-v12-15"){

    await interaction.editReply(`
CodeName: ${emojj} | Code Give You Any Bot Link Using Bot ID
Code: ${emojj} - https://pastebin.com/uuph18p1`)
}else
if(interaction.commandName == "djs-v12-16"){

    await interaction.editReply(`
CodeName: ${emojj} | Voice-Kick Code Command Handler
Code: ${emojj} - https://pastebin.com/Tc08fe3J`)
}else
if(interaction.commandName == "djs-v12-17"){

    await interaction.editReply(`
CodeName: ${emojj} | Code embed say
Code: ${emojj} - https://pastebin.com/DhdA6p7X`)
}else
if(interaction.commandName == "djs-v12-18"){

    await interaction.editReply(`
CodeName: ${emojj} | Top Code Link Probot
Code: ${emojj} - https://pastebin.com/3jnghD4a`)
}else
if(interaction.commandName == "djs-v12-19"){

    await interaction.editReply(`
CodeName: ${emojj} | Code Set Suggestions
Code: ${emojj} - https://pastebin.com/qhgzxkKr`)
}else
if(interaction.commandName == "djs-v12-20"){

    await interaction.editReply(`
CodeName: ${emojj} | When Your Bot Added To New Server (Bot Will Give You Added Server Information)
Code: ${emojj} - https://sourceb.in/DfBOa2D2oq`)
}else
if(interaction.commandName == "djs-v12-21"){

    await interaction.editReply(`
CodeName: ${emojj} | Top-role Code
Code: ${emojj} - https://sourceb.in/5JugmOI1bK`)
}else
if(interaction.commandName == "djs-v12-22"){

    await interaction.editReply(`
CodeName: ${emojj} | Temp-role Code
Code: ${emojj} - https://sourceb.in/7xVwTpiQ0e`)
}else
if(interaction.commandName == "djs-v12-23"){

    await interaction.editReply(`
CodeName: ${emojj} | Roles Code
Code: ${emojj} - https://sourceb.in/VblXMpXOaa`)
}else
if(interaction.commandName == "djs-v12-24"){

    await interaction.editReply(`
CodeName: ${emojj} | Rep Code
Code: ${emojj} - https://sourceb.in/QZFpkAZw42`)
}else
if(interaction.commandName == "djs-v12-25"){

    await interaction.editReply(`
CodeName: ${emojj} | Member Status Code
Code: ${emojj} - https://sourceb.in/xHurBMs3vz`)
}else
if(interaction.commandName == "djs-v12-26"){

    await interaction.editReply(`
CodeName: ${emojj} | Member Count Code
Code: ${emojj} - https://sourceb.in/BWebLvKesB`)
}else
if(interaction.commandName == "djs-v12-27"){

    await interaction.editReply(`
CodeName: ${emojj} | Un-Ban Code
Code: ${emojj} - https://sourceb.in/RE9ZFePJ2b`)
}else
if(interaction.commandName == "djs-v12-28"){

    await interaction.editReply(`
CodeName: ${emojj} | Ban Code
Code: ${emojj} - https://sourceb.in/9NmhkZudzT`)
}else
if(interaction.commandName == "djs-v12-29"){

    await interaction.editReply(`
CodeName: ${emojj} | Bots Count Code
Code: ${emojj} - https://sourceb.in/i3WT0rdzSZ`)
}else
if(interaction.commandName == "djs-v12-30"){

    await interaction.editReply(`
CodeName: ${emojj} | Emojis Code
Code: ${emojj} - https://sourceb.in/n6tRjoExBY`)
}else
if(interaction.commandName == "dpy-1"){

    await interaction.editReply(`
CodeName: ${emojj} | Code suggestions
Code: ${emojj} - https://pastebin.com/QqsJdAfa`)
}else
if(interaction.commandName == "dpy-2"){

    await interaction.editReply(`
CodeName: ${emojj} | Code say
Code: ${emojj} - https://pastebin.com/WZGiXVD4`)
}else
if(interaction.commandName == "dpy-3"){

    await interaction.editReply(`
CodeName: ${emojj} | Code info bot
Code: ${emojj} - https://pastebin.com/HT6KLBHA`)
}else
if(interaction.commandName == "dpy-4"){

    await interaction.editReply(`
CodeName: ${emojj} | Roles-Count Code
Code: ${emojj} - https://pastebin.com/HjTejaFE `)
}else
if(interaction.commandName == "dpy-5"){

    await interaction.editReply(`
CodeName: ${emojj} | Source Code
Code: ${emojj} - https://pastebin.com/9vx1h2Mu`)
}else
if(interaction.commandName == "dpy-6"){

    await interaction.editReply(`
CodeName: ${emojj} | Anti Bad-Word Code
Code: ${emojj} - https://pastebin.com/XtsruNYt`)
}else
if(interaction.commandName == "dpy-7"){

    await interaction.editReply(`
CodeName: ${emojj} | Vote Link
Code: ${emojj} - https://pastebin.com/0HpSMy3b`)
}else
if(interaction.commandName == "dpy-9"){

    await interaction.editReply(`
CodeName: ${emojj} | Code avatar
Code: ${emojj} - https://pastebin.com/8QuAXD2b`)
}else
if(interaction.commandName == "dpy-10"){

    await interaction.editReply(`
CodeName: ${emojj} | Code 8 ball
Code: ${emojj} - https://pastebin.com/0fX6ZpNN`)
}else
if(interaction.commandName == "dpy-11"){

    await interaction.editReply(`
CodeName: ${emojj} | Code nick name
Code: ${emojj} - https://sourceb.in/ug83dwPddq`)
}else
if(interaction.commandName == "dpy-12"){

    await interaction.editReply(`
CodeName: ${emojj} | If You Ping The Bot He Will Send The Prefix
Code: ${emojj} - https://sourceb.in/7gnNxRSqvW`)
}else
if(interaction.commandName == "dpy-13"){

    await interaction.editReply(`
CodeName: ${emojj} | lock-unlock Channel Code
Code: ${emojj} - https://sourceb.in/b4vdyAP076`)
}else
if(interaction.commandName == "djs-v12-32"){

    await interaction.editReply(`
CodeName: ${emojj} | Code Lock - Unlock Channel
Code: ${emojj} - https://sourceb.in/yEoIIirYAU`)
}else
if(interaction.commandName == "djs-v12-33"){

    await interaction.editReply(`
CodeName: ${emojj} | Muslim Prayer Code
Code: ${emojj} - https://sourceb.in/L5nQxVQqt6`)
}else
if(interaction.commandName == "djs-v12-34"){

    await interaction.editReply(`
CodeName: ${emojj} | Nick-Name Code
Code: ${emojj} - https://sourceb.in/V0V5whYwCh`)
}else
if(interaction.commandName == "djs-v12-35"){

    await interaction.editReply(`
CodeName: ${emojj} | Pin The Bot In Voice Channel
Code: ${emojj} - https://sourceb.in/3iS86D8aw4`)
}else
if(interaction.commandName == "djs-v12-36"){

    await interaction.editReply(`
CodeName: ${emojj} | Code ping Like ProBot
Code: ${emojj} - https://sourceb.in/WJvGTLt4lq`)
}else
if(interaction.commandName == "djs-v12-37"){

    await interaction.editReply(`
CodeName: ${emojj} | Pin Your Account In Voice Channel
Code: ${emojj} - https://sourceb.in/yYFCAqYfJF`)
}else
if(interaction.commandName == "djs-v12-38"){

    await interaction.editReply(`
CodeName: ${emojj} | Code say
Code: ${emojj} - https://sourceb.in/Km2DPrROGX`)
}else
if(interaction.commandName == "djs-v12-39"){

    await interaction.editReply(`
CodeName: ${emojj} | Say Embed Code
Code: ${emojj} - https://sourceb.in/xYcsZV1oax`)
}else
if(interaction.commandName == "djs-v12-40"){

    await interaction.editReply(`
CodeName: ${emojj} | Code luke
Code: ${emojj} - https://sourceb.in/GGd89aWpEH`)
}else
if(interaction.commandName == "djs-v12-41"){

    await interaction.editReply(`
CodeName: ${emojj} | Code warn
Code: ${emojj} - https://sourceb.in/7fqOnyKK25`)
}else
if(interaction.commandName == "djs-v12-42"){

    await interaction.editReply(`
CodeName: ${emojj} | Code rules
Code: ${emojj} - https://sourceb.in/yGnn5jCnvN`)
}else
if(interaction.commandName == "djs-v12-43"){

    await interaction.editReply(`
CodeName: ${emojj} | Report Code
Code: ${emojj} - https://sourceb.in/efUlYd6H2U`)
}else
if(interaction.commandName == "djs-v12-44"){

    await interaction.editReply(`
CodeName: ${emojj} | Uptime Code
Code: ${emojj} - https://sourceb.in/za4WdREfPP`)
}else
if(interaction.commandName == "djs-v12-45"){

    await interaction.editReply(`
CodeName: ${emojj} | Anime Code
Code: ${emojj} - https://sourceb.in/aulSYEsUal`)
}else
if(interaction.commandName == "djs-v12-46"){

    await interaction.editReply(`
CodeName: ${emojj} | Code Server info
Code: ${emojj} - https://sourceb.in/c82t5ahybY`)
}else
if(interaction.commandName == "djs-v12-47"){

    await interaction.editReply(`
CodeName: ${emojj} | Code tax
Code: ${emojj} - https://sourceb.in/nfK3kVNlPX`)
}else
if(interaction.commandName == "djs-v12-48"){

    await interaction.editReply(`
CodeName: ${emojj} | Code welcome
Code: ${emojj} - https://sourceb.in/x4b1EwH3aE`)
}else
if(interaction.commandName == "djs-v12-49"){

    await interaction.editReply(`
CodeName: ${emojj} | Code spank
Code: ${emojj} - https://sourceb.in/2pIaEcVoVh`)
}else
if(interaction.commandName == "djs-v12-50"){

    await interaction.editReply(`
CodeName: ${emojj} | Code mute
Code: ${emojj} - https://sourceb.in/M965cXqgCN`)
}else
if(interaction.commandName == "djs-v12-51"){

    await interaction.editReply(`
CodeName: ${emojj} | Code unban
Code: ${emojj} - https://sourceb.in/UT9J0CbCoT`)
}else
if(interaction.commandName == "djs-v12-52"){

    await interaction.editReply(`
CodeName: ${emojj} | Code Bans
Code: ${emojj} - https://sourceb.in/qkGncWrzuf`)
}else
if(interaction.commandName == "djs-v12-53"){

    await interaction.editReply(`
CodeName: ${emojj} | Code info bot
Code: ${emojj} - https://sourceb.in/4GfHxiSBIn`)
}else
if(interaction.commandName == "djs-v12-54"){

    await interaction.editReply(`
CodeName: ${emojj} | Code User
Code: ${emojj} - https://sourceb.in/5LFtRjOU7v`)
}else
if(interaction.commandName == "djs-v12-55"){

    await interaction.editReply(`
CodeName: ${emojj} | Status Code + Bot Info In Console
Code: ${emojj} - https://sourceb.in/r5ecgc1KiO`)
}else
if(interaction.commandName == "djs-v12-56"){

    await interaction.editReply(`
CodeName: ${emojj} | Code vmute

Code: ${emojj} - https://sourceb.in/FeMw3fUSsA`)
}else
if(interaction.commandName == "djs-v12-57"){

    await interaction.editReply(`
CodeName: ${emojj} | Code vkick
Code: ${emojj} - https://sourceb.in/4Msgo3kjhI`)
}else
if(interaction.commandName == "djs-v12-58"){

    await interaction.editReply(`
CodeName: ${emojj} | Code role
Code: ${emojj} - https://sourceb.in/reuCNgf0vQ`)
}else
if(interaction.commandName == "djs-v12-59"){

    await interaction.editReply(`
CodeName: ${emojj} | Code log
Code: ${emojj} - https://sourceb.in/oVdNUY0LYV`)
}else
if(interaction.commandName == "djs-v12-60"){

    await interaction.editReply(`
CodeName: ${emojj} | Code random namber
Code: ${emojj} - https://sourceb.in/nLDhPYK8br`)
}else
if(interaction.commandName == "djs-v12-61"){

    await interaction.editReply(`
CodeName: ${emojj} | Code slow mod
Code: ${emojj} - https://pastebin.com/fCvDmKf4`)
}else
if(interaction.commandName == "djs-v12-62"){

    await interaction.editReply(`
CodeName: ${emojj} | Code Iq
Code: ${emojj} - https://pastebin.com/ed2WcTTy`)
}else
if(interaction.commandName == "djs-v12-63"){

    await interaction.editReply(`
CodeName: ${emojj} | Code Avatar Mention User/No Mention User
Code: ${emojj} - https://sourceb.in/84ZRsTVpus`)
}else
if(interaction.commandName == "djs-v12-64"){

    await interaction.editReply(`
CodeName: ${emojj} | Code Server Avatar like Probot
Code: ${emojj} - https://sourceb.in/dCeMnH3DA9`)
}else
if(interaction.commandName == "djs-v12-65"){

    await interaction.editReply(`
CodeName: ${emojj} | Code Clear Messages
Code: ${emojj} - https://sourceb.in/vfGFggORlf`)
}else
if(interaction.commandName == "djs-v13-1"){

    await interaction.editReply(`
CodeName: ${emojj} | source code
Code: ${emojj} - https://sourceb.in/wdETncYIk7`)
}else
if(interaction.commandName == "djs-v13-2"){

    await interaction.editReply(`
CodeName: ${emojj} | code ping
Code: ${emojj} - https://sourceb.in/TLT0MlrXnh`)
}else
if(interaction.commandName == "djs-v13"){
  const     
                                row = new       
                                                    MessageActionRow
                                                                                        ()
      .                             addComponents
        (
          new       
                    MessageButton
                                                    ()
              .                 setCustomId 
                                            ('primary')
                            .           
                                setLabel    
                                                ('👈')
              . 
              setStyle          
                            ('PRIMARY'),
      )
      .                         addComponents(
          new                                       MessageButton   
                ()
              .            
                            setCustomId
            ("primary11")
              .             
                        setLabel
              ('👉')
              .             
              setStyle      
                    ('PRIMARY'),
      );
      let 
                pages 
    = [`
      ${emj3} \`${prefix}djs-v13-1\` ${emj} source code
      ${emj3} \`${prefix}djs-v13-2\` ${emj} ping code
      ${emj3} \`${prefix}djs-v13-3\` ${emj} code help
      ${emj3} \`${prefix}djs-v13-4\` ${emj} hide all | show all
      ${emj3} \`${prefix}djs-v13-5\` ${emj} warn system
      ${emj3} \`${prefix}djs-v13-6\` ${emj} user code
      ${emj3} \`${prefix}djs-v13-7\` ${emj} invite bot code
      ${emj3} \`${prefix}djs-v13-8\` ${emj} slowmode channel code
      ${emj3} \`${prefix}djs-v13-9\` ${emj} kick code
      ${emj3} \`${prefix}djs-v13-10\` ${emj} change bot name code
      `,`
      ${emj3} \`${prefix}djs-v13-11\` ${emj} ban code
      `];
      let       
                    page    
= 1;
      let 
                    pagess =
                             new 
                                MessageEmbed
                                    ()
                  .         
                  setTitle 
                                (`Discord.Js Codes`)
                  .             
                            setTimestamp
             ()
                            
                        .   
            setColor
                            ('#0068ff')
                  .         
                  setThumbnail         
                            ('https://cdn.discordapp.com/attachments/826824454415056946/831921986950922270/logo-square.png')
                  .            
                   setDescription   
                                (pages[page - 1]);
await 
interaction           .     
 editReply          
            ({ content: '_ _', ephemeral: true, embeds: [pagess], components: [row] });
const       
                filter = i => 
             i.user.id 
    === 
                interaction.       
                 user.          
                  id;

const 
        collector 
            =       
            interaction         .           
                    channel        
                     .        
                        createMessageComponentCollector     
                        
                                    (   
                        { filter, time: 2000000 }       
                                    );

collector           .       on        
            ('collect', 
                        async i => {
if      
            (i.customId     
                    === 
                            'primary11') {
if 
                (page === 
                                        pages.length          
                            ) return;

                            page++;

              pagess     
                   .       
              setDescription        
                        (pages[page - 1]);
              pagess        .  
setFooter       
                        (`Page ${page} / ${pages.length}`
                                        );

interaction           
                    .          
                        editReply       (      
                                    { embeds : 
                    [pagess] 
                             });
}
});

collector           
.              
        on    
            
            ('collect', 
                        async i => {
if                  
        (i.customId 
                    === 'primary') {
if          
           (page === 1) return;

                             page--;
              pagess        .               
                            setDescription  
    (pages      
                    [page - 1]);
              pagess            .       
              
              setFooter     
                        (`Page ${page} / ${pages.length}`);
                        
                    interaction             .
 editReply({            
                embeds : [pagess]   
             });
}
})
}else
if(interaction.commandName == "djs-v13-3"){

    await interaction.editReply(`
CodeName: ${emojj} | code help
Code: ${emojj} - https://sourceb.in/D3dHFbblws`)
} else 
if(interaction.commandName == "bdfd"){

await interaction.editReply(`
For bdfd codes go to <#892420268054687754>
${support}`)
} else 
if(interaction.commandName == "invite"){

await interaction.editReply(`> Invite: https://discord.com/api/oauth2/authorize?client_id=836697902930985001&permissions=8&scope=bot%20applications.commands`)
}else
if(interaction.commandName == "djs-v13-4"){

    await interaction.editReply(`
CodeName: ${emojj} | hide all | show all
Code: ${emojj} - https://pastebin.com/BnAgkQ2n`)
}else
if(interaction.commandName == "djs-v13-5"){

    await interaction.editReply(`
CodeName: ${emojj} | warn system
Code: ${emojj} - https://pastebin.com/i7YZbYJY`)
}else
if(interaction.commandName == "djs-v13-6"){

    await interaction.editReply(`
CodeName: ${emojj} | user code
Code: ${emojj} - https://pastebin.com/k9FKfqp1 `)
}else
if(interaction.commandName == "djs-v13-7"){

    await interaction.editReply(`
CodeName: ${emojj} | invite bot code
Code: ${emojj} - https://pastebin.com/6mLKNTSe `)
}else
if(interaction.commandName == "djs-v13-8"){

    await interaction.editReply(`
CodeName: ${emojj} | slowmode channel code
Code: ${emojj} - https://pastebin.com/9T3UuLLN `)
}else
if(interaction.commandName == "djs-v13-9"){

    await interaction.editReply(`
CodeName: ${emojj} | kick code
Code: ${emojj} - https://pastebin.com/S1unAZTn `)
}else
if(interaction.commandName == "djs-v13-10"){

    await interaction.editReply(`
CodeName: ${emojj} | change bot name code
Code: ${emojj} - https://pastebin.com/JZvjaWtK `)
}else
if(interaction.commandName == "djs-v13-11"){

    await interaction.editReply(`
CodeName: ${emojj} | ban code
Code: ${emojj} - https://pastebin.com/HMfrndU6 `)
}else
if(interaction.commandName == "djs-v12-66"){

    await interaction.editReply(`
CodeName: ${emojj} | suggestions code
Code: ${emojj} - https://pastebin.com/cSptwr4T `)
}else
if(interaction.commandName == "dpy-v14"){

    await interaction.editReply(`
CodeName: ${emojj} | ban code
Code: ${emojj} - https://pastebin.com/3UcHxF2h `)
}else
if(interaction.commandName == "dpy-v15"){

    await interaction.editReply(`
CodeName: ${emojj} | bot info code
Code: ${emojj} - https://pastebin.com/pW1vQ54a `)
}else
if(     interaction.         
                            commandName == 
    "bot"){
  	let days =                      Math.floor
                (client.        
                        uptime / 86400000);
    let hours =                 Math.                   
            floor(          
                    client.           uptime / 3600000) % 24;
    let minutes                 = Math.floor            
                        (client.uptime / 60000) % 60;
    let                                                 seconds =       Math.floor                
                (client.uptime / 1000) % 60;
  const     
embed = 
                new     
                        MessageEmbed()
  .         setColor        
            ("#0068ff")
  .setDescription       
        (
`
TotalServers: \`${client.guilds.cache.size}\`
TotalUsers: \`${client.guilds.cache.reduce((a, g) => a + g.memberCount, 0)}\`
TotalChannels: \`${client.channels.cache.size}\`
Uptime: 
\`\`\`${seconds}S, ${minutes}M, ${hours}H, ${days}D,\`\`\`
`)
  .setThumbnail             
                (Thumbnail)
  .setTimestamp                 
  ()
    await           
                                        interaction.          
                    editReply(      
                                    {embeds: [embed]}       
                         )
}
})
client.on("guildCreate", async server => {
	let 
    channel     
                     = await         
            client.         channels     
                        .cache.         get      
                                ("902922619551113318");
	const               embed     
     = new           
                MessageEmbed
       ()
		.                               
            setAuthor      
                        (`Th | Codes#8780 join new server!`)
		.                       
                    setDescription     
                    (`
Server name: \`${server.name}\`
Server id: \`${server.id}\`
MemberCount: \`${server.memberCount}\`
Guild owner: <@${server.ownerId}>
ServersCount: \`${client.guilds.cache.size}\``)
		.       
        setColor           
                    (`#0068ff`)
	await 
    channel  
                .          send
                (   
                                    {embeds: [embed]}           
                                            )
})

process                                 .
                                                                    on
                ("unhandledRejection", 
                        error => {
                                                                    
                                            return;
});
client                              .                                       
             login                            
(process.env.token)
