function dvdCollection(dvds) {
  // eslint-disable-next-line radix
  const numDVDs = parseInt(dvds[0]);
  const collection = dvds.slice(1, numDVDs + 1);

  const commands = dvds.slice(numDVDs + 1);

  for (const command of commands) {
    const commandArgs = command.split(" ");
    const action = commandArgs[0];

    if (action === "Watch") {
      if (collection.length > 0) {
        console.log(`${collection.shift()} DVD watched!`);
      }
    } else if (action === "Buy") {
      const dvdTitle = commandArgs.slice(1).join(" ");
      collection.push(dvdTitle);
    } else if (action === "Swap") {
      const startIndex = parseInt(commandArgs[1]);
      const endIndex = parseInt(commandArgs[2]);

      if (startIndex >= 0 && startIndex < collection.length
                && endIndex >= 0 && endIndex < collection.length) {
        const temp = collection[startIndex];
        collection[startIndex] = collection[endIndex];
        collection[endIndex] = temp;
        console.log("Swapped!");
      }
    } else if (action === "Done") {
      if (collection.length > 0) {
        console.log(`DVDs left: ${collection.join(", ")}`);
      } else {
        console.log("The collection is empty");
      }
      break;
    }
  }
}

// Test the function with the provided example
dvdCollection(["3", "The Matrix", "The Godfather", "The Shawshank Redemption", "Watch", "Done", "Swap 0 1"]);
