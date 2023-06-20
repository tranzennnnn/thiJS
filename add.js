const btnAdd = document.querySelector("#btn-submit");
btnAdd.addEventListener("click", () => {
    fetch(`http://localhost:3000/product`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"},
        body: JSON.stringify({
            "name": document.querySelector("#prdName").value,
            "description": document.querySelector("#desc").value,
            "image": document.querySelector("#image").value
        }),
            // alert("Thêm thành công");
            
        })
                                                                                                                                                                                                                                                                                                                                                                                                                                                     
})