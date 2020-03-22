function newLoot()
{
	var x = document.getElementById("lootSelect").value; 
	
	var gold = Math.floor(Math.random()*(5));
	var silver = Math.floor(Math.random()*50);
	var copper = Math.floor(Math.random()*99);

switch(x)
{
//loot pool for Encounter Level 1
case "Encounter Level 1":
var loot = 
[
	'Encounter Level 1 Loot 1',
	'Encounter Level 1 Loot 2',
	'Encounter Level 1 Loot 3',
	'Encounter Level 1 Loot 4',
]
var loot2 = 
[
	'Encounter Level 1 Uncommon Loot 1',
	'Encounter Level 1 Uncommon Loot 2',
	'Encounter Level 1 Uncommon Loot 3',
	'Encounter Level 1 Uncommon Loot 4',
]
var loot3 = 
[
	'Encounter Level 1 Rare Loot 1',
	'Encounter Level 1 Rare Loot 2',
	'Encounter Level 1 Rare Loot 3',
	'Encounter Level 1 Rare Loot 4',
]
break;

//Loot Pool for' Encounter Level 2
case "Encounter Level 2":
var loot = 
[
	' Encounter Level 2 Loot 1',
	' Encounter Level 2 Loot 2',
	' Encounter Level 2 Loot 3',
	' Encounter Level 2 Loot 4',
]
var loot2 = 
[
	' Encounter Level 2 Uncommon Loot 1',
	' Encounter Level 2 Uncommon Loot 2',
	' Encounter Level 2 Uncommon Loot 3',
	' Encounter Level 2 Uncommon Loot 4',
]
var loot3 = 
[
	' Encounter Level 2 Rare Loot 1',
	' Encounter Level 2 Rare Loot 2',
	' Encounter Level 2 Rare Loot 3',
	' Encounter Level 2 Rare Loot 4',
]
break;

//Loot Pool for Encounter Level 3
case "Encounter Level 3":
var loot = 
[
	'Encounter Level 3 Loot 1',
	'Encounter Level 3 Loot 2',
	'Encounter Level 3 Loot 3',
	'Encounter Level 3 Loot 4',
]
var loot2 = 
[
	'Encounter Level 3 Uncommon Loot 1',
	'Encounter Level 3 Uncommon Loot 2',
	'Encounter Level 3 Uncommon Loot 3',
	'Encounter Level 3 Uncommon Loot 4',
]
var loot3 = 
[
	'Encounter Level 3 Rare Loot 1',
	'Encounter Level 3 Rare Loot 2',
	'Encounter Level 3 Rare Loot 3',
	'Encounter Level 3 Rare Loot 4',
]
break;

//Loot Pool for Encounter Level 4
case "Encounter Level 4":
var loot = 
[
	'Encounter Level 4 Loot 1',
	'Encounter Level 4 Loot 2',
	'Encounter Level 4 Loot 3',
	'Encounter Level 4 Loot 4',
]
var loot2 = 
[
	'Encounter Level 4 Uncommon Loot 1',
	'Encounter Level 4 Uncommon Loot 2',
	'Encounter Level 4 Uncommon Loot 3',
	'Encounter Level 4 Uncommon Loot 4',
]
var loot3 = 
[
	'Encounter Level 4 Rare Loot 1',
	'Encounter Level 4 Rare Loot 2',
	'Encounter Level 4 Rare Loot 3',
	'Encounter Level 4 Rare Loot 4',
]
break;

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
