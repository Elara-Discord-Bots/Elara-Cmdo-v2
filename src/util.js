const perm = {
	ADMINISTRATOR: 'Administrator',
	VIEW_AUDIT_LOG: 'View Audit Log',
	MANAGE_GUILD: 'Manage Server',
	MANAGE_ROLES: 'Manage Roles',
	MANAGE_CHANNELS: 'Manage Channels',
	KICK_MEMBERS: 'Kick Members',
	BAN_MEMBERS: 'Ban Members',
	CREATE_INSTANT_INVITE: 'Create Instant Invite',
	CHANGE_NICKNAME: 'Change Nickname',
	MANAGE_NICKNAMES: 'Manage Nicknames',
	MANAGE_EMOJIS: 'Manage Emojis',
	MANAGE_WEBHOOKS: 'Manage Webhooks',
	VIEW_CHANNEL: 'Read Text & Voice Channels',
	SEND_MESSAGES: 'Send Messages',
	SEND_TTS_MESSAGES: 'Send TTS Messages',
	MANAGE_MESSAGES: 'Manage Messages',
	EMBED_LINKS: 'Embed Links',
	ATTACH_FILES: 'Attach Files',
	READ_MESSAGE_HISTORY: 'Read Message History',
	MENTION_EVERYONE: 'Mention Everyone',
	USE_EXTERNAL_EMOJIS: 'Use External Emojis',
	ADD_REACTIONS: 'Add Reactions',
	CONNECT: 'Connect',
	SPEAK: 'Speak',
	MUTE_MEMBERS: 'Mute Members',
	DEAFEN_MEMBERS: 'Deafen Members',
	MOVE_MEMBERS: 'Move Members',
	USE_VAD: 'Use Voice Activity',
	STREAM: "Stream"
}
module.exports = {
	escapeRegex: str => str.replace(/[|\\{}()[\]^$+*?.]/g, '\\$&'),
	disambiguation: (items, label, property = "name") => {
		const itemList = items.map(item => `"${(property ? item[property] : item).replace(/ /g, '\xa0')}"`).join(',   ');
		return `Multiple ${label} found, please be more specific: ${itemList}`;
	},
	paginate: (items, page = 1, pageLength = 10) => {
		const maxPage = Math.ceil(items.length / pageLength);
		if(page < 1) page = 1;
		if(page > maxPage) page = maxPage;
		const startIndex = (page - 1) * pageLength;
		return {
			items: items.length > pageLength ? items.slice(startIndex, startIndex + pageLength) : items,
			page,
			maxPage,
			pageLength
		};
	},
	permissions: perm,
	perms: perm,
	permbits: {
		CREATE_INSTANT_INVITE: 1,
		KICK_MEMBERS: 2,
		BAN_MEMBERS: 4,
		ADMINISTRATOR: 8,
		MANAGE_CHANNELS: 16,
		MANAGE_GUILD: 32,
		ADD_REACTIONS: 64,
		VIEW_AUDIT_LOG: 128,
		PRIORITY_SPEAKER: 256,
		VIEW_CHANNEL: 1024,
		READ_MESSAGES: 1024,
		SEND_MESSAGES: 2048,
		SEND_TTS_MESSAGES: 4096,
		MANAGE_MESSAGES: 8192,
		EMBED_LINKS: 16384,
		ATTACH_FILES: 32768,
		READ_MESSAGE_HISTORY: 65536,
		MENTION_EVERYONE: 131072,
		EXTERNAL_EMOJIS: 262144,
		USE_EXTERNAL_EMOJIS: 262144,
		CONNECT: 1048576,
		SPEAK: 2097152,
		MUTE_MEMBERS: 4194304,
		DEAFEN_MEMBERS: 8388608,
		MOVE_MEMBERS: 16777216,
		USE_VAD: 33554432,
		CHANGE_NICKNAME: 67108864,
		MANAGE_NICKNAMES: 134217728,
		MANAGE_ROLES: 268435456,
		MANAGE_ROLES_OR_PERMISSIONS: 268435456,
		MANAGE_WEBHOOKS: 536870912,
		MANAGE_EMOJIS: 1073741824 
	},
	SystemJoinMessages: [
		"%user% just joined the server - glhf!",
		"%user% just joined. Everyone, look busy!",
		"%user% just joined. Can I get a heal?",
		"%user% joined your party.",
		"%user% joined. You must construct additional pylons.",
		"Ermagherd. %user% is here.",
		"Welcome, %user%. Stay awhile and listen.",
		"Welcome, %user%. We were expecting you ( ͡° ͜ʖ ͡°)",
		"Welcome, %user%. We hope you brought pizza.",
		"Welcome %user%. Leave your weapons by the door.",
		"A wild %user% appeared.",
		"Swoooosh. %user% just landed.",
		"Brace yourselves. %user% just joined the server.",
		"%user% just joined... or did they?",
		"%user% just arrived. Seems OP - please nerf.",
		"%user% just slid into the server.",
		"A %user% has spawned in the server.",
		"Big %user% showed up!",
		"Where’s %user%? In the server!",
		"%user% hopped into the server. Kangaroo!!",
		"%user% just showed up. Hold my beer.",
		"Challenger approaching - %user% has appeared!",
		"It's a bird! It's a plane! Nevermind, it's just %user%.",
		"It's %user%! Praise the sun! \\\\[T]/",
		"Never gonna give %user% up. Never gonna let %user% down.",
		"%user% has joined the battle bus.",
		"Cheers, love! %user%'s here!",
		"Hey! Listen! %user% has joined!",
		"We've been expecting you %user%",
		"It's dangerous to go alone, take %user%!",
		"%user% has joined the server! It's super effective!",
		"Cheers, love! %user% is here!",
		"%user% is here, as the prophecy foretold.",
		"%user% has arrived. Party's over.",
		"Ready player %user%",
		"%user% is here to kick butt and chew bubblegum. And %user% is all out of gum.",
		"Hello. Is it %user% you're looking for?",
		"%user% has joined. Stay a while and listen!",
		"Roses are red, violets are blue, %user% joined this server with you"
	],
	emojis: {
    
		// Full Emojis
		"semoji": "✅",
		"eplan": "💾",
		"nemoji": "❌",
		"eload": "⏱️",
		"robot": "🤖",
		"eminus": "➖",
		"eplus": "➕",
		"en": "✅",
		"ed": "❌",
	
		// Reactions
		"rminus": "➖",
		"rplus": "➕",
		"rn": "✅",
		"rd": "❌",
		"sreact": "✅",
		"nreact": "❌",
		"rload": "⏱️",
		"rplan": "💾",
	},
	status: {
		"online": "🟢",
		"idle": "🟡",
		"dnd": "🔴",
		"offline": "⚫",
		"invisible": "⚫"
	},
	colors: {
		"red": 0xFF0000,
		"green": 0xFF000,
		"yellow": 0xFAFF00,
		"orange": 0xFF8300,
		"cyan": 0x00ffe9,
		"default": 0x36393E
	},
	verifLevels: [
		"None", "Low: must have verified email on account", "Medium: must be registered on Discord for longer than 5 minutes", "High: (╯°□°）╯︵ ┻━┻ - must be a member of the server for longer than 10 minutes", "Very High: ┻━┻ミヽ(ಠ益ಠ)ﾉ彡┻━┻ - must have a verified phone number"
	],
	throws: [
	"Car", "Bus", "Elara", "Plane", "Poop", "Heart", "Hearts", "Love", "Hate", "Developer", "Scams", "Train", "Trains", "Yourself", "Cat", "Cats", "Dog", "Dogs", "Groovy", "Chicken", "A Building", "Tea", "Lemons", "Lemon", "Coins", "Money", "Coffee", "Chips", "Crisps", "Cake", "Pringles", "Black Hole", "Chair", "House", "iPhone", "Banana", "Meme", "Memes", "Staff", "Truck", "SpongeBob", "Gummy Bears", "Toys", "kitten", "kittens", "puppy", "puppies", "o.o", "Speakers", "Amp", "Microphone", "Piano", "Drum", "Drum Kit", "Drum Sticks","Fruit", "Tennis Ball", "Rugby Ball", "Tennis Racket", "Guitar","Hockey Stick","Car tire","Horse Shoe", "Cricket Bat","Music","Flower","Cricket Ball", "Soccer Ball","Football","Insults","Paper Plane", "Eggs","Grass","Stones","Dirt","Flower Pot","Sprouts", "Music","Bulb","Coat Hanger","Desk","Computer","Laptop", "Cabbage","Bucket","Ball","Fan","Fork","Spoon","Cow","Horse", "Mug","Chicken","Plate","Tree","Pig","Glass"
	],
	jobs: [
		`You worked at Mcdonalds`, `You worked at the local shop`, `You worked at Amazon`, `You worked at Target`,
		`You worked at Walmart`, `You worked at Subway`, `You worked as a pilot`, `You worked as a FireFighter`, `You worked as a Police Officer`,
		`You worked as a Doctor`, `You worked at Discord`, `You worked at the local coffee shop`, `You worked at the local pizza resturant`,
		`You worked as a Time Traveler`
	],
};
