var Discord = require('discord.io');
var logger = require('winston');
var auth = require('./auth.json');
// Configure logger settings
logger.remove(logger.transports.Console);
logger.add(logger.transports.Console, {
    colorize: true

});
logger.level = 'debug';
// Initialize Discord Bot
var bot = new Discord.Client({
   token: auth.token,
   autorun: true
});
bot.on('ready', function (evt) {
    logger.info('Connected');
    logger.info('Logged in as: ');
    logger.info(bot.username + ' - (' + bot.id + ')');
});
bot.on('message', function (user, userID, channelID, message, evt) {
    // Our bot needs to know if it will execute a command
    // It will listen for messages that will start with `^`
    if (message.substring(0, 1) == '^') {
        var args = message.substring(1).split(' ');
        var cmd = args[0];
        bot.sendMessage({
		to: channelID,
		
	}); 
        args = args.splice(1);
        switch(cmd) {










	/* CHEMISTRY MODULE */
	/* Credit goes to   */
	/* Jake Marchese    */

            // ^units
            case 'units':
                bot.sendMessage({
                    to: channelID,
                    message: 'UNITS UNITS UNITS UNITS UNITS UNITS UNITS UNITS UNITS UNITS UNITS UNITS UNITS UNITS UNITS UNITS UNITS UNITS UNITS UNITS UNITS UNITS UNITS UNITS UNITS UNITS UNITS UNITS UNITS UNITS UNITS UNITS'
		});
		break;
	    case 'cal':
                bot.sendMessage({
                    to: channelID,
                    message: 'q=mc(Tf-Ti)\nm=q/(c(Tf-Ti))\nc=q/(m(Tf-Ti))\nTf-Ti=q/(c(m))\nTf=(q/(c(m)))+Ti\nTi=-(q/(c(m)))+Tf\n-Qo=Qw+Qc'
		});
		break;

            case 'pai':
                bot.sendMessage({
                    to: channelID,
                    message: 'Polyatomic Ions:\nAmmonium NH4^+\nHydroxide OH^-\nChlorate ClO3^-\nChlorite ClO2^-\nNitrate NO3^-\nNitrite NO2^-\nAcetate C2H3O2^-\nCyanide CN^-\nCarbonate CO3^2-\nChromate CrO4^2-\nDichromate Cr2O7^2-\nSulfate SO4^2-\nSulfite SO3^2-\nPhosphate PO4^3-'
                });
	        break;
            case 'CH4':
                bot.sendMessage({
                    to: channelID,
                    message: 'MOLES EMIT CH4, #KILLTHEMOLES'
                });
	        break;
	    case 'mole':
                bot.sendMessage({
                    to: channelID,
                    message: 'Avogadros number, we need the number:  6.022140857x10^23 mol^-1'
                });
		break;
 	    case 'HDA':
                bot.sendMessage({
                    to: channelID,
                    message: 'Homonuclear Diatomic Atoms: Hydrogen, Nitrogen, Oxygen, Fluorine, Chlorine, Iodine, Bromine'
                });
	        break;

	    case 'hda':
                bot.sendMessage({
                    to: channelID,
                    message: 'Homonuclear Diatomic Atoms: Hydrogen, Nitrogen, Oxygen, Fluorine, Chlorine, Iodine, Bromine'
                });
	        break;





	    case 'Element':
                bot.sendMessage({
                    to: channelID,
                    message: 'Format:\nAtomic Number, Atomic Weight, Name, Abreveation, Electron Configuration'
                });
	    	break;
	    case 'Hydrogen':
                bot.sendMessage({
                    to: channelID,
                    message: '1 1.008 Hydrogen H s1'
                });
		break;
	    case 'Helium':
                bot.sendMessage({
                    to: channelID,
                    message: '2 4.003 Helium He s2'
                });
		break;
	    case 'Lithium':
                bot.sendMessage({
                    to: channelID,
                    message: '3 6.941 Lithium Li [He] 2s1'
                });
		break;
	    case 'Beryllium':
                bot.sendMessage({
                    to: channelID,
                    message: '4 9.012 Beryllium Be [He] 2s2'
                });
		break;
	    case 'Boron':
                bot.sendMessage({
                    to: channelID,
                    message: '5 10.811 Boron B [He] 2s2 2p1'
                });
		break;
	    case 'Carbon':
                bot.sendMessage({
                    to: channelID,
                    message: '6 12.011 Carbon C [He] 2s2 2p2'
                });
		break;
	    case 'Nitrogen':
                bot.sendMessage({
                    to: channelID,
                    message: '7 14.007 Nitrogen N [He] 2s2 2p3'
                });
		break;
	    case 'Oxygen':
                bot.sendMessage({
                    to: channelID,
                    message: '8 15.999 Oxygen O [He] 2s2 2p4 '
                });
		break;
	    case 'Flourine':
                bot.sendMessage({
                    to: channelID,
                    message: '9 18.998 Fluorine F [He] 2s2 2p5 '
                }); 
		break;
	    case 'Neon':
                bot.sendMessage({
                    to: channelID,
                    message: '10 20.180 Neon Ne [He] 2s2 2p6'
                }); 
		break;
	    case 'Sodium':
                bot.sendMessage({
                    to: channelID,
                    message: '11 22.990 Sodium Na [Ne] 3s1'
                }); 
		break;
	    case 'Magnesium':
                bot.sendMessage({
                    to: channelID,
                    message: '12 24.305 Magnesium Mg [Ne] 3s2'
                }); 
		break;
	    case 'Aluminum':
                bot.sendMessage({
                    to: channelID,
                    message: '13 26.982 Aluminum Al [Ne] 3s2 3p1'
                }); 
		break;
	    case 'Silicon':
                bot.sendMessage({
                    to: channelID,
                    message: '14 28.086 Silicon Si [Ne] 3s2 3p2 '
                }); 
		break;
	    case 'Phosphorus':
                bot.sendMessage({
                    to: channelID,
                    message: '15 30.974 Phosphorus P [Ne] 3s2 3p3 '
                }); 
		break;
	    case 'Sulfur':
                bot.sendMessage({
                    to: channelID,
                    message: '16 32.065 Sulfur S [Ne] 3s2 3p4 '
                }); 
		break;
	    case 'Chlorine':
                bot.sendMessage({
                    to: channelID,
                    message: '17 35.453 Chlorine Cl [Ne] 3s2 3p5'
                }); 
		break;
	    case 'Argon':
                bot.sendMessage({
                    to: channelID,
                    message: '18 39.948 Argon Ar [Ne] 3s2 3p6'
                }); 
		break;
	    case 'Potassium':
                bot.sendMessage({
                    to: channelID,
                    message: '19 39.098 Potassium K [Ar] 4s1 '
                }); 
		break;
	    case 'Calcium':
                bot.sendMessage({
                    to: channelID,
                    message: '20 40.078 Calcium Ca [Ar] 4s2 '
                }); 
		break;
	    case 'Scandium':
                bot.sendMessage({
                    to: channelID,
                    message: '21 44.956 Scandium Sc [Ar] 3d1 4s2 '
                }); 
		break;
	    case 'Titanium':
                bot.sendMessage({
                    to: channelID,
                    message: '22 47.867 Titanium Ti [Ar] 3d2 4s2'
                }); 
		break;
	    case 'Vanadium':
                bot.sendMessage({
                    to: channelID,
                    message: '23 50.942 Vanadium V [Ar] 3d3 4s2 '
                }); 
		break;
	    case 'Chromium':
                bot.sendMessage({
                    to: channelID,
                    message: '24 51.996 Chromium Cr [Ar] 3d5 4s1 '
                }); 
		break;
	    case 'Manganese':
                bot.sendMessage({
                    to: channelID,
                    message: '25 54.938 Manganese Mn [Ar] 3d5 4s2 '
                }); 
		break;
	    case 'Iron':
                bot.sendMessage({
                    to: channelID,
                    message: '26 55.845 Iron Fe [Ar] 3d6 4s2'
                }); 
		break;
	    case 'Cobalt':
                bot.sendMessage({
                    to: channelID,
                    message: '27 58.933 Cobalt Co [Ar] 3d7 4s2'
                }); 
		break;
	    case 'Nickel':
                bot.sendMessage({
                    to: channelID,
                    message: '28 58.693 Nickel Ni [Ar] 3d8 4s2'
                }); 
		break;
	    case 'Copper':
                bot.sendMessage({
                    to: channelID,
                    message: '29 63.546 Copper Cu [Ar] 3d10 4s1'
                }); 
		break;
	    case 'Zinc':
                bot.sendMessage({
                    to: channelID,
                    message: '30 65.390 Zinc Zn [Ar] 3d10 4s2'
                }); 
		break;
	    case 'Gallium':
                bot.sendMessage({
                    to: channelID,
                    message: '31 69.723 Gallium Ga [Ar] 3d10 4s2 4p1 '
                }); 
		break;
	    case 'Germanium':
                bot.sendMessage({
                    to: channelID,
                    message: '32 72.640 Germanium Ge [Ar] 3d10 4s2 4p2 '
                }); 
		break;
	    case 'Arsenic':
                bot.sendMessage({
                    to: channelID,
                    message: '33 74.922 Arsenic As  [Ar] 3d10 4s2 4p3'
                }); 
		break;
	    case 'Selenium':
                bot.sendMessage({
                    to: channelID,
                    message: '34 78.960 Selenium Se [Ar] 3d10 4s2 4p4'
                }); 
		break;
	    case 'Bromine':
                bot.sendMessage({
                    to: channelID,
                    message: '35 79.904 Bromine Br [Ar] 3d10 4s2 4p5'
                }); 
		break;
	    case 'Krypton':
                bot.sendMessage({
                    to: channelID,
                    message: '36 83.800 Krypton Kr [Ar] 3d10 4s2 4p6'
                }); 
		break;
	    case 'Rubidium':
                bot.sendMessage({
                    to: channelID,
                    message: '37 85.468 Rubidium Rb [Kr] 5s1'
                }); 
		break;
	    case 'Strontium':
                bot.sendMessage({
                    to: channelID,
                    message: '38 87.620 Strontium Sr [Kr] 5s2'
                }); 
		break;
	    case 'Yttrium':
                bot.sendMessage({
                    to: channelID,
                    message: '39 88.906 Yttrium Y [Kr] 4d1 5s2'
                }); 
		break;
	    case 'Zirconium':
                bot.sendMessage({
                    to: channelID,
                    message: '40 91.224 Zirconium Zr [Kr] 4d2 5s2'
                }); 
		break;
	    case 'Niobium':
                bot.sendMessage({
                    to: channelID,
                    message: '41 92.906 Niobium Nb [Kr] 4d4 5s1'
                }); 
		break;
	    case 'Molybdenum':
                bot.sendMessage({
                    to: channelID,
                    message: '42 95.940 Molybdenum Mo [Kr] 4d5 5s1'
                }); 
		break;
	    case 'Technetium':
                bot.sendMessage({
                    to: channelID,
                    message: '43 98.000 Technetium Tc [Kr] 4d5 5s2'
                }); 
		break;
	    case 'Ruthenium':
                bot.sendMessage({
                    to: channelID,
                    message: '44 101.070 Ruthenium Ru [Kr] 4d7 5s1'
                }); 
		break;
	    case 'Rhodium':
                bot.sendMessage({
                    to: channelID,
                    message: '45 102.906 Rhodium Rh [Kr] 4d8 5s1'
                }); 
		break;
	    case 'Palladium':
                bot.sendMessage({
                    to: channelID,
                    message: '46 106.420 Palladium Pd [Kr] 4d10'
                }); 
		break;
	    case 'Silver':
                bot.sendMessage({
                    to: channelID,
                    message: '47 107.868 Silver Ag [Kr] 4d10 5s1'
                }); 
		break;
	    case 'Cadmium':
                bot.sendMessage({
                    to: channelID,
                    message: '48 112.411 Cadmium Cd [Kr] 4d10 5s2 '
                }); 
		break;
	    case 'Indium':
                bot.sendMessage({
                    to: channelID,
                    message: '49 114.818 Indium In [Kr] 4d10 5s2 5p1'
                }); 
		break;
	    case 'Tin':
                bot.sendMessage({
                    to: channelID,
                    message: '50 118.710 Tin Sn [Kr] 4d10 5s2 5p2 '
                }); 
		break;












	/*   Useful Module  */
	/* Credit goes to   */
	/* Jake Marchese    */

	    case 'HelpMe':
                bot.sendMessage({
                    to: channelID,
                    message: '@here someone ples help this boi, he need some help :cry:'
                });
	        break;

	     case 'bye':
		bot.sendMessage({
                   to: channelID,	
		   message: 'Bye bye my guy'
		});
		break;

	     case 'hi':
		bot.sendMessage({
                   to: channelID,	
		   message: 'Hello my dood'
		});
		break;


















	/* FUNCTION MODULE  */
	/* Credit goes to   */
	/* Jake Marchese    */


	    case 'online':
                bot.sendMessage({
                    to: channelID,
                    message: 'I am online and at your service :smiley:\nTo get started, use ^help'
		});
		break;

	    case 'help':
                bot.sendMessage({
                    to: channelID,
                    message: 'List of Modules:\nMeme Module is ^helpmeme\nUseful Module is ^helpuse\nChemistry Module is ^helpchem'
                });
	        break;
	
	    case 'helpmeme':
                bot.sendMessage({
                    to: channelID,
                    message: 'List of Meme Commands:\n1. childrensprogam\n2. findmylodge\n3. yas\n4. careples\n5. tendies\n6. boi\n7. roastme\n8. dad?\n9. stop\n10. GibbLubb/GL\n11. oof\n12. omae'
                });
	        break;
	
	    case 'helpuse':
                bot.sendMessage({
                    to: channelID,
                    message: 'List of Useful Commands:\n1. HelpMe\n2. bye\n3. hi\n4. commandrequest'
                });
	        break;
	    case 'helpchem':
                bot.sendMessage({
                    to: channelID,
                    message: 'List of Chemistry Commands:\n1. pai\n2. hda/HDA\n3. units\n4. CH4\n5. moles\n6. cal\n7. Element'
                });
	        break;
	    case 'commandrequest':
                bot.sendMessage({
                    to: channelID,
                    message: 'If you would like to request a command, please email jake.marchese1@gmail.com, or message him on discord VinallaXtract#6693, at  he will get back to you as soon as possible.'
                });
	        break;
















	/*   MEMES MODULE   */
	/* Credit goes to   */
	/* Jake Marchese    */


	    case 'clinicalautism':
                bot.sendMessage({
                    to: channelID,
                    message: 'Did you mean @VinallaXtract#6693?'
		});

		break;		
	    case 'mentalretardation':
                bot.sendMessage({
                    to: channelID,
                    message: 'Did you mean @VinallaXtract#6693?'
		});
		break;

	    case 'yas':
                bot.sendMessage({
                    to: channelID,
                    message: '**OH** :clap: **YEA** :clap: **Mr** :clap: **CRABS**'
		});
		break;

	    case 'careples':
                bot.sendMessage({
                    to: channelID,
                    message: 'I care my boi :heart:'
		});
		break;

	    case 'tendies':
                bot.sendMessage({
                    to: channelID,
                    message: '**CHICKEN       GIVE ME TENDIES\n\tREEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEE**\n\nhttps://www.youtube.com/watch?v=Yp_DydcUPNI'
		});
		break;

            case 'boi':
                bot.sendMessage({
                    to: channelID,
                    message: '**B-B-B-BOI** *stop*'
                });
	        break;

            case 'roastme':
                bot.sendMessage({
                    to: channelID,
                    message: 'roast me, more like, ur gay **OWNED**'
                });
	        break;

            case 'dad?':
                bot.sendMessage({
                    to: channelID,
                    message: '*I tink mai dadz gone crazeh!*'
                });
	        break;


	    case 'stop':
                bot.sendMessage({
                    to: channelID,
                    message: '***STOP IT*** **get some help**'
                });
	        break;


	    case ('GibbLubb' || 'GL'):
                bot.sendMessage({
                    to: channelID,
                    message: 'Here is exactly 10 lubbs, enjoy'
                });
	    	break;

	     case 'oof':
		bot.sendMessage({
                   to: channelID,	
		   message: '***oooooooooooooooooooooooooooooooooooooooofffffffffff***'
			
		});
		break;

	     case 'omae':
		bot.sendMessage({
                   to: channelID,	
		   message: 'Omae wa mou shindeiru\n\n\nn a n i ? !\n\n\nREEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEE\n\n\nhttps://i.ytimg.com/vi/ozyuwxalWO8/hqdefault.jpg'	
		});
		break;

	     case 'findmylodge':
		bot.sendMessage({
                   to: channelID,	
		   message: 'A close freemason lodge is in Winchester, VA! Here is the link to Masonic Lodge #21\nhttp://www.winchesterhiram21.org/index.htm\n118 N Loudoun St, Winchester, VA 22601'	
		});
		break;

	     case 'childrensprogram':
		bot.sendMessage({
                   to: channelID,	
		   message: 'The Masonic Service Association of North America has many different childrens programs, include ones for daughters!\nhttp://www.msana.com/youth.asp\n These include The Order of DeMolay, The International Order of Rainbow for Girls\nThe International Order of Jobs Daughters'	
		});
		break;











 	     default :
		bot.sendMessage({
                   to: channelID,	
		   message: 'I do not know that command: ^' + cmd
		});
		break;




            // Just add any case commands if you want to..
	    

	}
     }
});
