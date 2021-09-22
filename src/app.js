//Progression 1 - create a Manager array and return it
let managerName = "Alex Ferguson";
let managerAge = 78;
let currentTeam = "Manchester FC";
let trophiesWon = 27;

//Write your function here

function createManager(managerName, managerAge, currentTeam, trophiesWon)
{
  let createManager = [managerName, managerAge, currentTeam, trophiesWon]
  return createManager
}

// Don't edit the following code
try {
  var manager = createManager(
    managerName,
    managerAge,
    currentTeam,
    trophiesWon
  );
} catch (e) {
  // do nothing - expected error
}



// -----------------------------------------------------------------------------


//Progression 2 - create a formation object and return it
var formation = [4, 4, 3];

//write your function here
function createFormation(formation)
{
  if (formation.length < 1)
  {
    return null
  }
  let plan_of_action =
  {
    'defender': formation[0],
    'midfield': formation[1],
    'forward': formation[2]
  }
  return plan_of_action
}
// Dont edit the following code
try {
  var formationObject = createFormation(formation);
} catch (e) {
  //do nothing
}


// -----------------------------------------------------------------------------

//Progression 3 - Filter players that debuted in ___ year
function filterByDebut(year)
{
  var array1=[]
  let x=0
  for (let i of players) 
  {
    if (i['debut'] === year)
    {
      array1[x++] = i
    }
  }
  return array1
}


// -----------------------------------------------------------------------------
//Progression 4 - Filter players that play at the position _______

function filterByPosition(position)
{
  let array=[]
  let x=0
  for (let i of players)
  {
    if (i['position'] === position)
    {
      array[x++] = i
    }
  }
  return array
}



// -----------------------------------------------------------------------------
//Progression 5 - Filter players that have won ______ award

function filterByAward(award)
{
  let array=[]
  let x=0
  for(let i=0; i<players.length ;i++)
  {
    for( let j=0; j<players[i]["awards"].length; j++ )
    {
      if (players[i]["awards"][j]["name"] === award)
        {
          array[x++]=players[i]
        }
    }
  }
  return array;
}


// -----------------------------------------------------------------------------
//Progression 6 - Filter players that won ______ award ____ times

function filterByAwardxTimes(award,times)
{
  let array=[]
  let x=0
  for(let i=0;i<players.length;i++)
  {
    let count=0
    for(let j=0;j<players[i]["awards"].length;j++)
    {
      if(players[i]["awards"][j]["name"]===award)
      {
        count++
      }
    }
    if(count===times)
    {
      array[x++]=players[i]
      
    }
  }
  return array
}



// -----------------------------------------------------------------------------
//Progression 7 - Filter players that won ______ award and belong to ______ country


function filterByAwardxCountry(award, country)
{
  let array=[]
  let x=0
  for(let i=0;i<players.length;i++)
  {
   let count=0
    for(let j=0;j<players[i]["awards"].length;j++)
    {
      if(players[i]["awards"][j]["name"]===award)
      {
        count++
      }
    }
    if(count!=0 && players[i]["country"]===country)
    {
      array[x++]=players[i]
    }
  }
  return array;
}




// -----------------------------------------------------------------------------
//Progression 8 - Filter players that won atleast ______ awards, belong to ______ team and are younger than ____



function filterByNoOfAwardsxTeamxAge(times, team, age)
{
  let array=[]
  let x=0
  for(let i=0;i<players.length;i++)
  {
    if(players[i]["awards"].length>=times && players[i]["team"]===team && players[i]["age"]<age)
    {
      array[x++]=players[i]
    }
  }
  return array
}

// -----------------------------------------------------------------------------
//Progression 9 - Sort players in descending order of their age





// -----------------------------------------------------------------------------
//Progression 10 - Sort players beloging to _____ team in descending order of awards won





// -----------------------------------------------------------------------------
//Challenge 1 - Sort players that have won _______ award _____ times and belong to _______ country in alphabetical order of their names



// -----------------------------------------------------------------------------
//Challenge 2 - Sort players that are older than _____ years in alphabetical order



// -----------------------------------------------------------------------------
//Sort the awards won by them in reverse chronological order
