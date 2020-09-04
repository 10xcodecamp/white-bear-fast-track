$("#save-card").click(function () {
   $("#overlay-success").toggleClass("d-flex d-none");
});

$("#create-imagery-input").keyup(function (e) {
   console.log("Event: ", e);

   // get the text from the textarea
   const text = e.target.value;
   const username = `Mike`;
   console.log(`${username} inputted: ${text}`);

   // check the length of the text
   const textLength = text.length;
   console.log(`Today's total inputted chars: ${textLength}`);

   // update the character counter on the page
   $("#imagery-char-count").html(textLength);
});
