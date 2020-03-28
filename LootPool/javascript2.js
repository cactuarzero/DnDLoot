function newLoot2()
{
	var x = document.getElementById("treasureSelect").value; 
	var y = document.getElementById("lairSelect").value;

	var gold = Math.floor(Math.random()*(5));
	var silver = Math.floor(Math.random()*50);
	var copper = Math.floor(Math.random()*99);

switch(x)
{
	case "Encounter Level 1":
	{
		switch(y)
		{
			case "Plains":
			//loot pool for Plains
			var loot = 
			[
				'Level 1 Plains Common 1',
				'Level 1 Plains Common 2',
				'Level 1 Plains Common 3',
				'Level 1 Plains Common 4',
			]
			var loot2 = 
			[
				'Level 1 Plains Uncommon 1',
				'Level 1 Plains Uncommon 2',
				'None',
				'None',
			]
			var loot3 = 
			[
				'Level 1 Plains Rare 1',
				'None',
				'None',
				'None',
			]
			break;

			//loot pool for Forest
			case "Forest":
			var loot = 
			[
				'Level 1 Forest Common 1',
				'Level 1 Forest Common 2',
				'Level 1 Forest Common 3',
				'Level 1 Forest Common 4',
			]
			var loot2 = 
			[
				'Level 1 Forest Uncommon 1',
				'Level 1 Forest Uncommon 2',
				'None',
				'None',
			]
			var loot3 = 
			[
				'Level 1 Forest Rare 1',
				'None',
				'None',
				'None',
			]
			break;
		
			//loot pool for Island
			case "Island":
			var loot = 
			[
				'Level 1 Island Common 1',
				'Level 1 Island Common 2',
				'Level 1 Island Common 3',
				'Level 1 Island Common 4',
			]
			var loot2 = 
			[
				'Level 1 Island Uncommon 1',
				'Level 1 Island Uncommon 2',
				'None',
				'None',
			]
			var loot3 = 
			[
				'Level 1 Island Rare 1',
				'None',
				'None',
				'None',
			]
			break;
		
			//loot pool for Swamp
			case "Swamp":
			var loot = 
			[
				'Level 1 Swamp Common 1',
				'Level 1 Swamp Common 2',
				'Level 1 Swamp Common 3',
				'Level 1 Swamp Common 4',
			]
			var loot2 = 
			[
				'Level 1 Swamp Uncommon 1',
				'Level 1 Swamp Uncommon 2',
				'None',
				'None',
			]
			var loot3 = 
			[
				'Level 1 Swamp Rare 1',
				'None',
				'None',
				'None',
			]
			break;
		}
		break;
	}	

//Loot Pool for Encounterounter Level 2
case "Encounter Level 2":
{
		switch(y)
		{
			case "Plains":
			//loot pool for Plains
			var loot = 
			[
				'Level 2 Plains Common 1',
				'Level 2 Plains Common 2',
				'Level 2 Plains Common 3',
				'Level 2 Plains Common 4',
			]
			var loot2 = 
			[
				'Level 2 Plains Uncommon 1',
				'Level 2 Plains Uncommon 2',
				'None',
				'None',
			]
			var loot3 = 
			[
				'Level 2 Plains Rare 1',
				'None',
				'None',
				'None',
			]
			break;

			//loot pool for Forest
			case "Forest":
			var loot = 
			[
				'Level 2 Forest Common 1',
				'Level 2 Forest Common 2',
				'Level 2 Forest Common 3',
				'Level 2 Forest Common 4',
			]
			var loot2 = 
			[
				'Level 2 Forest Uncommon 1',
				'Level 2 Forest Uncommon 2',
				'None',
				'None',
			]
			var loot3 = 
			[
				'Level 2 Forest Rare 1',
				'None',
				'None',
				'None',
			]
			break;
		
			//loot pool for Island
			case "Island":
			var loot = 
			[
				'Level 2 Island Common 1',
				'Level 2 Island Common 2',
				'Level 2 Island Common 3',
				'Level 2 Island Common 4',
			]
			var loot2 = 
			[
				'Level 2 Island Uncommon 1',
				'Level 2 Island Uncommon 2',
				'None',
				'None',
			]
			var loot3 = 
			[
				'Level 2 Island Rare 1',
				'None',
				'None',
				'None',
			]
			break;
		
			//loot pool for Swamp
			case "Swamp":
			var loot = 
			[
				'Level 2 Swamp Common 1',
				'Level 2 Swamp Common 2',
				'Level 2 Swamp Common 3',
				'Level 2 Swamp Common 4',
			]
			var loot2 = 
			[
				'Level 2 Swamp Uncommon 1',
				'Level 2 Swamp Uncommon 2',
				'None',
				'None',
			]
			var loot3 = 
			[
				'Level 2 Swamp Rare 1',
				'None',
				'None',
				'None',
			]
			break;
		}
		break;
	}
//Loot Pool for Encounterounter Level 3
case "Encounter Level 3":
{
		switch(y)
		{
			case "Plains":
			//loot pool for Plains
			var loot = 
			[
				'Level 3 Plains Common 1',
				'Level 3 Plains Common 2',
				'Level 3 Plains Common 3',
				'Level 3 Plains Common 4',
			]
			var loot2 = 
			[
				'Level 3 Plains Uncommon 1',
				'Level 3 Plains Uncommon 2',
				'None',
				'None',
			]
			var loot3 = 
			[
				'Level 3 Plains Rare 1',
				'None',
				'None',
				'None',
			]
			break;

			//loot pool for Forest
			case "Forest":
			var loot = 
			[
				'Level 3 Forest Common 1',
				'Level 3 Forest Common 2',
				'Level 3 Forest Common 3',
				'Level 3 Forest Common 4',
			]
			var loot2 = 
			[
				'Level 3 Forest Uncommon 1',
				'Level 3 Forest Uncommon 2',
				'None',
				'None',
			]
			var loot3 = 
			[
				'Level 3 Forest Rare 1',
				'None',
				'None',
				'None',
			]
			break;
		
			//loot pool for Island
			case "Island":
			var loot = 
			[
				'Level 3 Island Common 1',
				'Level 3 Island Common 2',
				'Level 3 Island Common 3',
				'Level 3 Island Common 4',
			]
			var loot2 = 
			[
				'Level 3 Island Uncommon 1',
				'Level 3 Island Uncommon 2',
				'None',
				'None',
			]
			var loot3 = 
			[
				'Level 3 Island Rare 1',
				'None',
				'None',
				'None',
			]
			break;
		
			//loot pool for Swamp
			case "Swamp":
			var loot = 
			[
				'Level 3 Swamp Common 1',
				'Level 3 Swamp Common 2',
				'Level 3 Swamp Common 3',
				'Level 3 Swamp Common 4',
			]
			var loot2 = 
			[
				'Level 3 Swamp Uncommon 1',
				'Level 3 Swamp Uncommon 2',
				'None',
				'None',
			]
			var loot3 = 
			[
				'Level 3 Swamp Rare 1',
				'None',
				'None',
				'None',
			]
			break;
		}
		break;
	}
//Loot Pool for Encounterounter Level 4
case "Encounter Level 4":
{
		switch(y)
		{
			case "Plains":
			//loot pool for Plains
			var loot = 
			[
				'Level 4 Plains Common 1',
				'Level 4 Plains Common 2',
				'Level 4 Plains Common 3',
				'Level 4 Plains Common 4',
			]
			var loot2 = 
			[
				'Level 4 Plains Uncommon 1',
				'Level 4 Plains Uncommon 2',
				'None',
				'None',
			]
			var loot3 = 
			[
				'Level 4 Plains Rare 1',
				'None',
				'None',
				'None',
			]
			break;

			//loot pool for Forest
			case "Forest":
			var loot = 
			[
				'Level 4 Forest Common 1',
				'Level 4 Forest Common 2',
				'Level 4 Forest Common 3',
				'Level 4 Forest Common 4',
			]
			var loot2 = 
			[
				'Level 4 Forest Uncommon 1',
				'Level 4 Forest Uncommon 2',
				'None',
				'None',
			]
			var loot3 = 
			[
				'Level 4 Forest 1 Rare 1',
				'None',
				'None',
				'None',
			]
			break;
		
			//loot pool for Island
			case "Island":
			var loot = 
			[
				'Level 4 Island Common 1',
				'Level 4 Island Common 2',
				'Level 4 Island Common 3',
				'Level 4 Island Common 4',
			]
			var loot2 = 
			[
				'Level 4 Island Uncommon 1',
				'Level 4 Island Uncommon 2',
				'None',
				'None',
			]
			var loot3 = 
			[
				'Level 4 Island Rare 1',
				'None',
				'None',
				'None',
			]
			break;
		
			//loot pool for Swamp
			case "Swamp":
			var loot = 
			[
				'Level 4 Swamp Common 1',
				'Level 4 Swamp Common 2',
				'Level 4 Swamp Common 3',
				'Level 4 Swamp Common 4',
			]
			var loot2 = 
			[
				'Level 4 Swamp Uncommon 1',
				'Level 4 Swamp Uncommon 2',
				'None',
				'None',
			]
			var loot3 = 
			[
				'Level 4 Swamp Rare 1',
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
	document.getElementById('treasureDisplay').innerHTML = loot[randomNumber];
	var randomNumber2 = Math.floor(Math.random()*(loot2.length));
	document.getElementById('treasureDisplay2').innerHTML = loot2[randomNumber2];
	var randomNumber3 = Math.floor(Math.random()*(loot3.length));
	document.getElementById('treasureDisplay3').innerHTML = loot3[randomNumber3];
	document.getElementById('goldTDisplay').innerHTML = gold;	
	document.getElementById('silverTDisplay').innerHTML = silver;
	document.getElementById('copperTDisplay').innerHTML = copper;	
}
