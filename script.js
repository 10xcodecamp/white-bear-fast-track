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
      imageryCharsCount--;
      if (imageryCharsCount < 0) {
         console.log("You have entered negative territory!");
         imageryCharsCount = 0;
      }
   } else if (key === 16 || 18 || 46 || 35 || 36 || 20) {
      console.log("This doesn't count in the character counter.");
   } else {
      //Else, increment the count
      console.log("The user has pressed any other key!");
      imageryCharsCount = imageryCharsCount + 1;
   }

   console.log("Total inputted chars: ", imageryCharsCount);
   $("#imagery-char-count").html(imageryCharsCount);
});
