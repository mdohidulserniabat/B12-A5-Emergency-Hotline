// heart button function
const heartButtons = document.getElementsByClassName("heart-button");
const availableBalance = document.getElementById("heart-balance")
let countHeart = 0;
for(const heartButton of heartButtons){
 heartButton.addEventListener("click", function(){
    countHeart++;
    availableBalance.innerText = countHeart;
 })
}
// copy  count button function

const copyButtons = document.getElementsByClassName("copy-btn");
const availableCopyBalance = document.getElementById("copy-balance")
let countCopy = 0;
for(const copyButton of copyButtons){
 copyButton.addEventListener("click", function(){
    countCopy++;
    availableCopyBalance.innerText = countCopy;

      const cardContainer = copyButton.closest('.card');
        const textToCopy = cardContainer.querySelector('.copy-text').innerText;

        navigator.clipboard.writeText(textToCopy)
            .then(() => {
                alert("কপি হয়েছে: " + textToCopy);
            })
            .catch(err => {
                console.error("কপি করতে ব্যর্থ: ", err);
            });
 })
}



