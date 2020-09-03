$("#save-card").click(function () {
   $("#overlay-success").toggleClass("d-flex d-none");
});

let imageryCharsCount = 0;

$("#create-imagery-input").keydown(function (e) {
   const key = e.which;
   console.log("Key inputted: ", key);

   // If the key the user has pressed is backspace, decrement the count
   if (key === 8) {
      console.log("The user has pressed backspace!");
      imageryCharsCount = imageryCharsCount - 1;
      if (imageryCharsCount < 0) {
         console.log("You have entered negative territory!");
         imageryCharsCount = 0;
      }
   } else if (key === 16) {
      console.log("Shift was pressed.");
   } else if (key === 18) {
      console.log("Alt was pressed.");
   } else {
      //Else, increment the count
      console.log("The user has pressed any other key!");
      imageryCharsCount = imageryCharsCount + 1;
   }

   console.log("Total inputted chars: ", imageryCharsCount);
   $("#imagery-char-count").html(imageryCharsCount);
});

// startingCharCount
