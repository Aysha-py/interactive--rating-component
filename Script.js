const ratings = document.querySelectorAll(".one")
const submit_button = document.querySelector("#submit")
const interactionContainer = document.querySelector(".interaction-container")
const submissionContainer = document.querySelector(".submission-container")
const appreciation = document.querySelector("#appreciation")
const rateAgain = document.querySelector("#rate-again")
let selectedRatingValue="";




for ( const rating of ratings){

  rating.addEventListener("click",(e)=>{
    const ratingValue = e.target.innerText;
    for (const rating of ratings){
        if (rating.innerText !== ratingValue) {
            rating.style.backgroundColor = "grey"
            
        }
        else{
            rating.style.backgroundColor = "hsl(25, 97%, 53%)"
        }
           
        selectedRatingValue = ratingValue; 
        submit_button.style.backgroundColor="white"
        submit_button.style.color="black"
        console.log(selectedRatingValue)
    }
   
 
  })

}


submit_button.addEventListener("click", (e) => {
    e.preventDefault()
    let text = document.querySelector("#text")
  if (selectedRatingValue === "1") {
   text.textContent=`You rated us ${selectedRatingValue} out of 5`
  } else if (selectedRatingValue === "2") {
    text.textContent=`You rated us ${selectedRatingValue} out of 5`
  } else if (selectedRatingValue === "3") {
    text.textContent=`You rated us ${selectedRatingValue} out of 5`
  } else if (selectedRatingValue === "4") {
    text.textContent=`You rated us ${selectedRatingValue} out of 5`
  } else if (selectedRatingValue === "5") {
    text.textContent=`You rated us ${selectedRatingValue} out of 5`
  }
  else if (selectedRatingValue === "" ){
    text.textContent=`We love feedbacks! Kindly click a rating.`
    appreciation.classList.add("hidden")
  }
  submit_button.style.backgroundColor = "hsl(25, 97%, 53%)";
  submit_button.style.color = "white";
  submissionContainer.classList.remove("hidden")
  interactionContainer.classList.add("hidden")

  for (const rating of ratings) {
    rating.style.backgroundColor = "black";
  }
});

rateAgain.addEventListener("click", (e) => {
    e.preventDefault()
    interactionContainer.classList.remove("hidden")
    submissionContainer.classList.add("hidden")
})