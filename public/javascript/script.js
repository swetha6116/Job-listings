function myFunction() {
  var x = document.getElementById("myLinks");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}

document.addEventListener('DOMContentLoaded', function() {
    const sortableList = document.querySelector(".sortable-list");
    const items = sortableList.querySelectorAll("ul li.item");
  
    items.forEach(item => {
        item.addEventListener("dragstart", () => {
            // Adding dragging class to item after a delay
            setTimeout(() => item.classList.add("dragging"), 0);
        });
        // Removing dragging class from item on dragend event
        item.addEventListener("dragend", () => item.classList.remove("dragging"));
    });
  
    const initSortableList = (e) => {
        e.preventDefault();
        const draggingItem = document.querySelector(".dragging");
        // Getting all items except currently dragging and making array of them
        let siblings = [...sortableList.querySelectorAll("ul li.item:not(.dragging)")];
  
        // Finding the sibling after which the dragging item should be placed
        let nextSibling = siblings.find(sibling => {
            return e.clientY <= sibling.offsetTop + sibling.offsetHeight / 2;
        });
  
        // Inserting the dragging item before the found sibling
        sortableList.insertBefore(draggingItem, nextSibling);
    }
  
    sortableList.addEventListener("dragover", initSortableList);
    sortableList.addEventListener("dragenter", e => e.preventDefault());
  
  
  });


  const cardColors = {
    green: "rgb(119, 214, 119)",
    yellow: "rgb(255, 255, 157)",
    red: "rgb(248, 115, 115)"
  };
  
  const calculateDaysLeft = (date) => {
    const oneDay = 24 * 60 * 60 * 1000;
    const today = new Date();
    return Math.round((date - today) / oneDay);
  };

  
  const getColor = (daysLeft) => {
    if (daysLeft > 21) {
      return cardColors.green;
    } else if (daysLeft > 3) {
      return cardColors.yellow;
    } else {
      return cardColors.red;
    }
  };


 
  var elements = document.getElementById("item")
  for (var i = 0; i < elements.length; i++) {
        const daysLeft = calculateDaysLeft(listing.deadline);
        const color = getColor(daysLeft);
      elements[i].style.background=color;
  }