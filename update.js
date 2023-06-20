const updateForm = document.querySelector("#update-form");
const params = new URLSearchParams(document.location.search);
const id = params.get("id");
fetch(`http://localhost:3000/product`)
.then((response)=> response.json())
.then( data =>{
    const currentProduct = data.find((product) => { 
        return product.id == id
    })
    updateForm.innerHTML = `
    <form action="index.html">
    <div class="mb-3">
      <label for="exampleInputEmail1" class="form-label">Product Name</label>
      <input type="text" class="form-control" id="prdName" aria-describedby="emailHelp" value="${currentProduct.name}">
    </div>
    <div class="mb-3">
      <label for="exampleInputPassword1" class="form-label">Product Description</label>
      <input type="text" class="form-control" id="desc" value="${currentProduct.description}">
    </div>
    <div class="mb-3">
      <label for="exampleInputPassword1" class="form-label">Product Image</label>
      <input type="text" class="form-control" id="image" value="${currentProduct.image}">
      <!-- <label class="form-check-label" for="exampleCheck1">Check me out</label> -->
    </div>
    <button type="submit" class="btn btn-primary" id="btn-submit">Update Product</button>
  </form>
    `
    const btnSubmit = document.querySelector('#btn-submit');
    btnSubmit.addEventListener('click', () => {
        fetch(`http://localhost:3000/product/${id}`, {
            method: "PUT",
            headers: { "Content-Type": "application/json"},
            body: JSON.stringify({
                "id": id,
                "name": document.querySelector("#prdName").value,
                "desc": document.querySelector("#desc").value,
                "image": document.querySelector("#image").value,
            }),
            // update(newProductList).then(() => {
            //     router.navigate('/')
            //     alert("Cập nhật thành công")
            // })
            //  alert('Update thanh cong')

        })
    })
})