function newLoot()
{
	var x = document.getElementById("lootSelect").value; 
	var y = document.getElementById("creatureSelect").value;

	var gold = Math.floor(Math.random()*(5));
	var silver = Math.floor(Math.random()*50);
	var copper = Math.floor(Math.random()*99);

switch(x)
{
	case "Encounter Level 1":
	{
		switch(y)
		{
			case "Goblin":
			//loot pool for goblin
			var loot = 
			[
				'Level 1 Goblin Common 1',
				'Level 1 Goblin Common 2',
				'Level 1 Goblin Common 3',
				'Level 1 Goblin Common 4',
			]
			var loot2 = 
			[
				'Level 1 Goblin Uncommon 1',
				'Level 1 Goblin Uncommon 2',
				'None',
				'None',
			]
			var loot3 = 
			[
				'Level 1 Goblin Rare 1',
				'None',
				'None',
				'None',
			]
			break;

			//loot pool for Dragon
			case "Dragon":
			var loot = 
			[
				'Level 1 Dragon Common 1',
				'Level 1 Dragon Common 2',
				'Level 1 Dragon Common 3',
				'Level 1 Dragon Common 4',
			]
			var loot2 = 
			[
				'Level 1 Dragon Uncommon 1',
				'Level 1 Dragon Uncommon 2',
				'None',
				'None',
			]
			var loot3 = 
			[
				'Level 1 Dragon Rare 1',
				'None',
				'None',
				'None',
			]
			break;
		
			//loot pool for bandit
			case "Bandit":
			var loot = 
			[
				'Level 1 Bandit Common 1',
				'Level 1 Bandit Common 2',
				'Level 1 Bandit Common 3',
				'Level 1 Bandit Common 4',
			]
			var loot2 = 
			[
				'Level 1 Bandit Uncommon 1',
				'Level 1 Bandit Uncommon 2',
				'None',
				'None',
			]
			var loot3 = 
			[
				'Level 1 Bandit Rare 1',
				'None',
				'None',
				'None',
			]
			break;
		
			//loot pool for beholder
			case "Beholder":
			var loot = 
			[
				'Level 1 Beholder Common 1',
				'Level 1 Beholder Common 2',
				'Level 1 Beholder Common 3',
				'Level 1 Beholder Common 4',
			]
			var loot2 = 
			[
				'Level 1 Beholder Uncommon 1',
				'Level 1 Beholder Uncommon 2',
				'None',
				'None',
			]
			var loot3 = 
			[
				'Level 1 Beholder Rare 1',
				'None',
				'None',
				'None',
			]
			break;
		}
		break;
	}	



//Loot Pool for' Encounter Level 2
case "Encounter Level 2":
{
		switch(y)
		{
			case "Goblin":
			//loot pool for goblin
			var loot = 
			[
				'Level 2 Goblin Common 1',
				'Level 2 Goblin Common 2',
				'Level 2 Goblin Common 3',
				'Level 2 Goblin Common 4',
			]
			var loot2 = 
			[
				'Level 2 Goblin Uncommon 1',
				'Level 2 Goblin Uncommon 2',
				'None',
				'None',
			]
			var loot3 = 
			[
				'Level 2 Goblin Rare 1',
				'None',
				'None',
				'None',
			]
			break;

			//loot pool for Dragon
			case "Dragon":
			var loot = 
			[
				'Level 2 Dragon Common 1',
				'Level 2 Dragon Common 2',
				'Level 2 Dragon Common 3',
				'Level 2 Dragon Common 4',
			]
			var loot2 = 
			[
				'Level 2 Dragon Uncommon 1',
				'Level 2 Dragon Uncommon 2',
				'None',
				'None',
			]
			var loot3 = 
			[
				'Level 2 Dragon Rare 1',
				'None',
				'None',
				'None',
			]
			break;
		
			//loot pool for bandit
			case "Bandit":
			var loot = 
			[
				'Level 2 Bandit Common 1',
				'Level 2 Bandit Common 2',
				'Level 2 Bandit Common 3',
				'Level 2 Bandit Common 4',
			]
			var loot2 = 
			[
				'Level 2 Bandit Uncommon 1',
				'Level 2 Bandit Uncommon 2',
				'None',
				'None',
			]
			var loot3 = 
			[
				'Level 2 Bandit Rare 1',
				'None',
				'None',
				'None',
			]
			break;
		
			//loot pool for beholder
			case "Beholder":
			var loot = 
			[
				'Level 2 Beholder Common 1',
				'Level 2 Beholder Common 2',
				'Level 2 Beholder Common 3',
				'Level 2 Beholder Common 4',
			]
			var loot2 = 
			[
				'Level 2 Beholder Uncommon 1',
				'Level 2 Beholder Uncommon 2',
				'None',
				'None',
			]
			var loot3 = 
			[
				'Level 2 Beholder Rare 1',
				'None',
				'None',
				'None',
			]
			break;
		}
		break;
	}
//Loot Pool for Encounter Level 3
case "Encounter Level 3":
{
		switch(y)
		{
			case "Goblin":
			//loot pool for goblin
			var loot = 
			[
				'Level 3 Goblin Common 1',
				'Level 3 Goblin Common 2',
				'Level 3 Goblin Common 3',
				'Level 3 Goblin Common 4',
			]
			var loot2 = 
			[
				'Level 3 Goblin Uncommon 1',
				'Level 3 Goblin Uncommon 2',
				'None',
				'None',
			]
			var loot3 = 
			[
				'Level 3 Goblin Rare 1',
				'None',
				'None',
				'None',
			]
			break;

			//loot pool for Dragon
			case "Dragon":
			var loot = 
			[
				'Level 3 Dragon Common 1',
				'Level 3 Dragon Common 2',
				'Level 3 Dragon Common 3',
				'Level 3 Dragon Common 4',
			]
			var loot2 = 
			[
				'Level 3 Dragon Uncommon 1',
				'Level 3 Dragon Uncommon 2',
				'None',
				'None',
			]
			var loot3 = 
			[
				'Level 3 Dragon Rare 1',
				'None',
				'None',
				'None',
			]
			break;
		
			//loot pool for bandit
			case "Bandit":
			var loot = 
			[
				'Level 3 Bandit Common 1',
				'Level 3 Bandit Common 2',
				'Level 3 Bandit Common 3',
				'Level 3 Bandit Common 4',
			]
			var loot2 = 
			[
				'Level 3 Bandit Uncommon 1',
				'Level 3 Bandit Uncommon 2',
				'None',
				'None',
			]
			var loot3 = 
			[
				'Level 3 Bandit Rare 1',
				'None',
				'None',
				'None',
			]
			break;
		
			//loot pool for beholder
			case "Beholder":
			var loot = 
			[
				'Level 3 Beholder Common 1',
				'Level 3 Beholder Common 2',
				'Level 3 Beholder Common 3',
				'Level 3 Beholder Common 4',
			]
			var loot2 = 
			[
				'Level 3 Beholder Uncommon 1',
				'Level 3 Beholder Uncommon 2',
				'None',
				'None',
			]
			var loot3 = 
			[
				'Level 3 Beholder Rare 1',
				'None',
				'None',
				'None',
			]
			break;
		}
		break;
	}
//Loot Pool for Encounter Level 4
case "Encounter Level 4":
{
		switch(y)
		{
			case "Goblin":
			//loot pool for goblin
			var loot = 
			[
				'Level 4 Goblin Common 1',
				'Level 4 Goblin Common 2',
				'Level 4 Goblin Common 3',
				'Level 4 Goblin Common 4',
			]
			var loot2 = 
			[
				'Level 4 Goblin Uncommon 1',
				'Level 4 Goblin Uncommon 2',
				'None',
				'None',
			]
			var loot3 = 
			[
				'Level 4 Goblin Rare 1',
				'None',
				'None',
				'None',
			]
			break;

			//loot pool for Dragon
			case "Dragon":
			var loot = 
			[
				'Level 4 Dragon Common 1',
				'Level 4 Dragon Common 2',
				'Level 4 Dragon Common 3',
				'Level 4 Dragon Common 4',
			]
			var loot2 = 
			[
				'Level 4 Dragon Uncommon 1',
				'Level 4 Dragon Uncommon 2',
				'None',
				'None',
			]
			var loot3 = 
			[
				'Level 4 Dragon 1 Rare 1',
				'None',
				'None',
				'None',
			]
			break;
		
			//loot pool for bandit
			case "Bandit":
			var loot = 
			[
				'Level 4 Bandit Common 1',
				'Level 4 Bandit Common 2',
				'Level 4 Bandit Common 3',
				'Level 4 Bandit Common 4',
			]
			var loot2 = 
			[
				'Level 4 Bandit Uncommon 1',
				'Level 4 Bandit Uncommon 2',
				'None',
				'None',
			]
			var loot3 = 
			[
				'Level 4 Bandit Rare 1',
				'None',
				'None',
				'None',
			]
			break;
		
			//loot pool for beholder
			case "Beholder":
			var loot = 
			[
				'Level 4 Beholder Common 1',
				'Level 4 Beholder Common 2',
				'Level 4 Beholder Common 3',
				'Level 4 Beholder Common 4',
			]
			var loot2 = 
			[
				'Level 4 Beholder Uncommon 1',
				'Level 4 Beholder Uncommon 2',
				'None',
				'None',
			]
			var loot3 = 
			[
				'Level 4 Beholder Rare 1',
				'None',
				'None',
				'None',
			]
			break;
		}
		break;
	}
}

	var randomNumber = Math.floor(Math.random()*(loot.length));
	document.getElementById('lootDisplay').innerHTML = loot[randomNumber];
	var randomNumber2 = Math.floor(Math.random()*(loot2.length));
	document.getElementById('lootDisplay2').innerHTML = loot2[randomNumber2];
	var randomNumber3 = Math.floor(Math.random()*(loot3.length));
	document.getElementById('lootDisplay3').innerHTML = loot3[randomNumber3];
	document.getElementById('goldDisplay').innerHTML = gold;	
	document.getElementById('silverDisplay').innerHTML = silver;
	document.getElementById('copperDisplay').innerHTML = copper;	
}
