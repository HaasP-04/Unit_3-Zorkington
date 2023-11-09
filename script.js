/* 
    TODO for students
        General Setup:
            - This object is framed for you to fill out the values to help customize your game.
            - This will alter the browser to display your game title. The "Quick Notes" modal will also detail your information along with the description (desc) of what your game is about. It is important to highlight key commands that you want the player to use.
            - The startingRoomDescription will display what the player sees upon coming to your project.

        Do NOT alter the name of this object.

        Both exports are required in order for this project to run.

        - index.html should be running in your browser through the build process.
            - use your browsers console throughout testing.
*/

export const gameDetails = {
  title: "Unit 3 Zorkington Project",
  desc: "Welcome to the world of... here are some quick rules & concepts...",
  author: "Hasan Pringle",
  cohort: "SBPT-2023",
  startingRoomDescription: "Game started, you are now in the Hallway, from here you can enter the office",
  playerCommands: [
    // replace these with your games commands as needed
    "inspect",
    "view",
    "look",
    "pickup",
    "enter",
  ],
  // Commands are basic things that a player can do throughout the game besides possibly moving to another room. This line will populate on the footer of your game for players to reference.
  // This shouldn't be more than 6-8 different commands.
};

// Your code here
class Room {
  constructor({description, view, items, exits}) {
    this.description = description;
    this.view = view;
    this.items = items;
    this.exits = exits;
  }
}

const hallway = new Room({
  description:
    "You are in a long hallway. There is a door to the south and east.",
  items: ["candel", "light switch"],
  exits: ["office"],
});

const office = new Room({
  description: "You found the office!",
  items: ["pen", "desk"],
  exits: ["hallway"],
});

const bedroom = new Room({
  description: "You found the bedroom!",
  items: ["bed", "pillow"],
  exits:["hallway, bathroom"],
});

const bathroom = new Room({
  description: "You found the bathroom",
  items: ["toothrush, toliet"],
  exits: ["bedroom"],
});

const roomDict = {
  "office": office,
  "hallway": hallway,
  "bedroom": bedroom,
  "bathroom": bathroom,
}

// Creating Item Class
class Item {
  constructor({itemDescription, move}) {
    this.itemDescription = itemDescription;
    this.move = move;
  }
}

const candel = new Item({
  itemDescription: "You picked up a candel",
  move: true,
})

const pen =new Item({
  itemDescription: "You picked up a pen",
  move: true,
})
const desk =new Item({
  itemDescription: "You found the desk",
  move: false,
})
const bed =new Item({
  itemDescription: "You found the bed",
  move: false,
})
const pillow =new Item({
  itemDescription: "You picked up a piilow",
  move: true,
})
const toothbrush =new Item({
  itemDescription: "You picked up a toothbrush",
  move: true,
})
const toliet =new Item({
  itemDescription: "You found a toliet",
  move: false,
})

// Creating Items
const itemDict = {
  "candel": candel,
  "pen": pen, 
  "desk": desk,
  "bed" : bed,
  "pillow": pillow,
  "toothbrush": toothbrush,
  "toliet": toliet,
}
console.log(itemDict)
let currentLocation = hallway;
console.log(currentLocation.description);

export const domDisplay = (playerInput) => {
    let input = playerInput.split(" ");
    let command = input[0];
    let option = input[1];
  
  //* check player command
  //* if player command is possible check option 
  //* if option is possible excucute some code 
console.log(currentLocation);
  if (command === "enter" && currentLocation.exits.includes(option)){
      currentLocation = roomDict[option] 
      
    return(currentLocation.description)
  } else {
    return (" No where to go")
  }


  /* 
        TODO: for students
        - This function must return a string. 
        - This will be the information that is displayed within the browsers game interface above the users input field.

        - This function name cannot be altered. 
        - "playerInput" is whatever text the user is typing within the input field in the browser after hitting the ENTER key.
            - test this out with a console log.

        What your player should be able to do (checklist):
            - move between rooms
            - view current room
            - pickup moveable items
                - there should be at least 2 items that cannot be moved.
            - view player inventory
        
        Stretch Goals:
            - drop items in "current room" (if a player picks up an item in one room and moves to another, they should be able to remove it from their inventory)
            - create win/lose conditions.
                - this could be a puzzle that may require an item to be within the players inventory to move forward, etc.

        HINTS:
            - consider the various methods that are available to use.
            - arrays are a great way to hold "lists".
            - You are not limited to just the exported function. Build additional functions and don't forget to hold the return within a variable.
            - Review notes!
                - Have them open as you build.
                - break down each problem into small chunks
                    - What is the process of picking up an item exactly? ex: Look. Pick from a list of items. Put into players list of items... 
    */

  // Your code here
};

//! Start of gameplay function
// const domDisplay = (playerInput) => {
//   let input = playerInput;
//   let command = input[0];
//   let option = input[1];

//   switch (command) {
//     case "look":
//       if (gameDetails.rooms[gameDetails.currentRoom].exits[option]) {
//         gameDetails.currentRoom =
//           gameDetails.rooms[gameDetails.currentRoom].exits[option];
//         return;
//         gameDetails.rooms[gameDetails.currentRoom].description;
//       } else {
//         return "You cannot go that way.";
//       }
//     case "inspect":
//       return;
//       gameDetails.rooms[gameDetails.currentRoom].description;
//     case "pickup":
//       if (gameDetails.rooms[gameDetails.currentRoom].items.includes(option)) {
//         gameDetails.inventory.push(option);
//         gameDetails.rooms[gameDetails.currentRoom].items = gameDetails.rooms[
//           gameDetails.currentRoom
//         ].items.filter((item) => item !== option);
//         return `You picked up the ${option}.`;
//       } else {
//         return "That item is not here.";
//       }
//     case "inventory":
//       return `You are holding: ${gameDetails.inventory.join(", ")}`;
//     default:
//       return "Invalid command.";
//   };
// };