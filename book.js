// Refferences to DOM elements
        const prevBtn = document.querySelector("#prev-btn");
        const nextBtn = document.querySelector("#next-btn");
        const book = document.querySelector("#book");

        const paper1 = document.querySelector("#p1");
        const paper2 = document.querySelector("#p2");
        const paper3 = document.querySelector("#p3");

        // Business logic
        let currentLocation = 1;
        let numofPapers = 3;
        let maxLocation = numofPapers + 1; // 4

        // Initial state setup: The 'Previous' button should be hidden on the cover (page 1)
        prevBtn.classList.add("hidden-btn"); 
        
        // Event Listener
        prevBtn.addEventListener("click", goPrevpage);
        nextBtn.addEventListener("click", goNextpage);


        function openBook() {
            book.style.transform = "translateX(50%)";
            
            // FIX: Removed fixed translateX so buttons stay visible on screen edges
            prevBtn.style.transform = "translateY(-50%)"; 
            nextBtn.style.transform = "translateY(-50%)";
        }

        function closeBook(isAtBeggining) {
            if (isAtBeggining) {
                book.style.transform = "translateX(0%)";
            } else {
                book.style.transform = "translateX(100%)";
            }

            // FIX: Removed fixed translateX so buttons stay visible on screen edges
            prevBtn.style.transform = "translateY(-50%)";
            nextBtn.style.transform = "translateY(-50%)";
        }

        function goNextpage() {
            if (currentLocation < maxLocation) {
                
                // Show Prev button as soon as we move off page 1
                if (currentLocation === 1) {
                    prevBtn.classList.remove("hidden-btn");
                }
                
                switch (currentLocation) {
                    case 1:
                        openBook();
                        paper1.classList.add("flipped");
                        paper1.style.zIndex = 1;
                        break;
                    case 2:
                        openBook();
                        paper2.classList.add("flipped");
                        paper2.style.zIndex = 2;
                        break;
                    case 3:
                        openBook();
                        paper3.classList.add("flipped");
                        paper3.style.zIndex = 3;
                        closeBook(false);
                        // Hide Next button when we reach the end
                        nextBtn.classList.add("hidden-btn"); 
                        break;
                    default:
                        console.error("Unknown state in goNextpage");
                }
                currentLocation++;
            }
        }

        function goPrevpage() {
            if (currentLocation > 1) {
                
                // Show Next button if it was hidden (i.e., we are moving back from the end)
                if (currentLocation === maxLocation) {
                    nextBtn.classList.remove("hidden-btn");
                }
                
                currentLocation--;
                switch (currentLocation) {
                    case 1:
                        closeBook(true);
                        paper1.classList.remove("flipped");
                        paper1.style.zIndex = 3;
                        // Hide Prev button when we return to the cover
                        prevBtn.classList.add("hidden-btn"); 
                        break;
                    case 2:
                        paper2.classList.remove("flipped");
                        paper2.style.zIndex = 2;
                        break;
                    case 3:
                        openBook();
                        paper3.classList.remove("flipped");
                        paper3.style.zIndex = 1;
                        break;
                    default:
                        console.error("Unknown state in goPrevpage");
                }
            }
        }


    let m = new Map()