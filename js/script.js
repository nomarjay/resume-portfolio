const resumeDownload = document.getElementById("resumeDownload");
resumeDownload.addEventListener("click", () => {
  
})

document.querySelectorAll(".toggleBtn").forEach((button) => {
  button.addEventListener("click", () => {
    const wrapper = button.closest(".content"); 
    const toggleContent = wrapper.querySelector(".toggleContent");

    const isHidden = toggleContent.classList.toggle("hide");
    button.textContent = isHidden ? "More" : "Less";
  });
});
