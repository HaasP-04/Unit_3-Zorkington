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
  startingRoomDescription: "Game started, you are now in the Hallway, from here you can enter the office or the bedroom. Items here are a candle and a light switch",
  playerCommands: ["inspect", "view", "look", "pickup", "enter", "drop"],
};
 /* Commands are basic things that a player can do throughout the game besides possibly moving to another room. This line will populate on the footer of your game for players to reference.
  This shouldn't be more than 6-8 different commands.*/

//? Your code here
class Room {
  constructor({description, view, items, exits}) {
    this.description = description;
    this.view = view;
    this.items = items;
    this.exits = exits;
  }

  displayItems() {
    if (this.items.length > 0) {
      return `Items in the room: ${this.items.join(", ")}`;
    } else {
      return "No items in the room.";
    }
    if (this.view.length > 0) {
      return `View ${Room}`;
    }
  }
}

const hallway = new Room({
  description: "You are in the hallway. There is a candel and a light switch You can enter the office or bedroom .",
  items: ["candle", "light switch"],
  exits: ["office", "bedroom"],
});

const office = new Room({
  description: "You found the office! There is pen and a desk. You can enter the hallway or the closet",
  view: ["pen", 'desk'],
  items: ["pen", "desk"],
  exits: ["hallway", " closet"],
});

const bedroom = new Room({
  description: "You found the bedroom! There is a bed and a pillow. You can exit to the hallway and the bathroom" ,
  items: ["bed", "pillow"],
  exits: ["hallway", "bathroom"],
});

const bathroom = new Room({
  description: "You found the bathroom! There is a toothbrush and a sink",
  items: ["toothbrush", "sink"],
  exits: ["bedroom"]
});

const closet = new Room({
  description: "Ypu found the closet! Thers is a hanger and safer here. You can exit to the office",
  items: ["hanger", "safe"],
  exits: ["office"]
})

const roomDict = {
  "office": office,
  "hallway": hallway,
  "bedroom": bedroom,
  "bathroom": bathroom,
  "closet": closet,
};

class Item {
  constructor({itemDescription, move}) {
    this.itemDescription = itemDescription;
    this.move = move;
  }
}

const candle = new Item({
  itemDescription: "You picked up a candle, you can drop the candle",
  move: true,
});

const pen = new Item({
  itemDescription: "You picked up a pen, you can drop the pen",
  move: true,
});

const desk = new Item({
  itemDescription: "You found the desk",
  move: false,
});

const bed = new Item({
  itemDescription: "You found the bed",
  move: false,
});

const pillow = new Item({
  itemDescription: "You picked up a pillow, you can drop the pillow",
  move: true,
});

const toothbrush = new Item({
  itemDescription: "You picked up a toothbrush, you can drop the toothbrush",
  move: true,
});

const sink = new Item({
  itemDescription: "You found a toilet",
  move: false,
});
const hanger = new Item({
  itemDescription: "You found a hanger, you can drop the hanger",
  move: true,
});
const safe = new Item({
  itemDescription: "You found a safe",
  move: false,
});

//? Creating Items
const itemDict = {
  "candle": candle,
  "pen": pen,
  "desk": desk,
  "bed": bed,
  "pillow": pillow,
  "toothbrush": toothbrush,
  "sink": sink,
  "hanger": hanger,
  "safe": safe,
};

console.log(itemDict);

const exitsDict = {
  
}


let playerInventory = [];
const visitedRooms = [];


console.log(itemDict)
let currentLocation = hallway;
console.log(currentLocation.description);

// export const domDisplay = (playerInput) => {
//     let input = playerInput.split(" ");
//     let command = input[0];
//     let option = input[1];
  
// //   //* check player command
// //   //* if player command is possible check option 
// //   //* if option is possible excucute some code 
// console.log(currentLocation);
//   if (command === "enter" && currentLocation.exits.includes(option)){
//       currentLocation = roomDict[option] 
      
//     return(currentLocation.description)
//   } else {
//     return (" No where to go")
//   }


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

  //? Your code here
// };

//! Start of gameplay function
 export const domDisplay = (playerInput) => {
  let input = playerInput.split(" ");
  let command = input[0];
  let option = input[1];

  if (!playerInput) {
    return "Welcome to Zorkington! Explore and have fun!";
  }

  // if (visitedRooms.length === Object.keys(roomDict).length) {
  //   return "Congratulations! You have completed the game.";
  // }

  if (command === "enter" && currentLocation.exits.includes(option)) {
    currentLocation = roomDict[option];
    // visitedRooms.push(option);
    return currentLocation.description;
  } else if (command === "look") {
    return `${currentLocation.description}\n${currentLocation.displayItems()}`;
  } else if (command === "pickup" && currentLocation.items.includes(option)) {
    if (itemDict[option].move == true){
      playerInventory.push(option);
      return (`You picked up the ${option}`)
    } else {
      return (` You can not pick up the ${option}`)
    }
    return `${item.itemDescription}\n${currentLocation.displayItems()}`;
  } else if (command === "inspect" && option === "exits") {
    return `Available exits: ${currentLocation.exits.join(", ")}`;
  } else if (command === "drop" && currentLocation.items.includes(option)) {
    const item = itemDict[option];
    currentLocation.items.push(option);
    playerInventory = playerInventory.filter((i) => i !== option);
    return (`You dropped ${option}`);
  } else {
    return "Invalid command or option.";
  }
};

// your-game-file.js

// function initializeGame() {
//   // Set the initial room when the game starts
//   currentLocation = hallway;

// }

// initializeGame();
// // Import necessary functions and variables from your game logic

// function processInput() {
//   const userInput = document.getElementById('user-input').value;
//   const outputElement = document.getElementById('room-display-container');
//   const result = domDisplay(userInput);
//   outputElement.textContent = result;

//   // You might want to clear the input field after processing
//   document.getElementById('user-input').value = '';
// }

// processInput();
