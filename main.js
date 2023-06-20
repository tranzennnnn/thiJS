const app = document.querySelector('#app');

//xoa
const removeProduct = (id) => {
    fetch(`http://localhost:3000/product/${id}`,{
        method: 'DELETE',
    })
}

// hien thi 
const listProduct = () => {
    // call API va hien thi
    fetch(`http://localhost:3000/product`)
    // chuyen doi data tu  dang json sang kieu trinh duyet doc dc
    .then((response)=> response.json())
    // nhan data ve
    .then((data)=>{
        app.innerHTML = data.map((product, index) => {
            return `
            <tr>
                <td>${index + 1}</td>
                <td>${product.name}</td>
                <td>${product.description}</td>
                <td><img src="${product.image}"></td>
                <td>
                   <button class="btn-remove" data-id="${product.id}">Remove</button>
                    <a href="update.html?id=${product.id}">
                   <button class="btn-update" >Update</button>
                    </a>

                </td>
             </tr>
            `
        }).join("") //join cac pt trong array thanh string de bo dau phay
        const btnRemove = document.querySelectorAll(".btn-remove")
        for(let btn of btnRemove) {
                let id = btn.dataset.id
                btn.addEventListener('click', () => {
                        // return removeProduct(id)
                        if (confirm('Are you sure you want to remove')) {
                            removeProduct(id).then(() => {
                                product.filter((product) => product.id =! id)
                            })
                        }
                })
            }

    })
    // mang ra de hien thi
}

listProduct()