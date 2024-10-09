//Dom Elements
let productName=document.getElementById('productName');
let productCategory=document.getElementById('productCategory');
let productPrice=document.getElementById('productPrice');
let productDescription=document.getElementById('productDescription');
let serach =document.getElementById('search');
let tbody=document.getElementById('tbody');
let update=document.getElementById('update');

if(localStorage.getItem("dataProducts")==null){
  var products=[];
}else{
  var products=JSON.parse(localStorage.getItem("dataProducts"));
}


function createProduct(){
  let product={
    pname:productName.value,
    pcategory:productCategory.value,
    pPrice:productPrice.value,
    pDesc:productDescription.value
  }
products.push(product);
localStorage.setItem("dataProducts",JSON.stringify(products));
console.log(products);
displayData();
clearProduct();
}
displayData();
function displayData(){
  box='';
  for(let i=0; i<=products.length-1; i++){
    box +=`<tr>
      <td>${i+1}</td>
      <td>${products[i].pname}</td>
      <td>${products[i].pcategory}</td>
      <td>${products[i].pPrice}</td>
      <td>${products[i].pDesc}</td>
      <td><button class="btn btn-warning" onclick="updateProduct(${i})">Update</button></td>
      <td><button class="btn btn-danger" >Delete</button></td>
    </tr>`
  }
  tbody.innerHTML=box;
}

function clearProduct(){
  productName.value='';
  productCategory.value='';
  productPrice.value='';
  productDescription.value='';
}

//localStorage 
//json //java script object notation

function updateProduct(index){
  productName.value=products[index].pname;
  productCategory.value=products[index].pcategory;
  productPrice.value=products[index].pPrice;
  productDescription.value=products[index].pDesc;
  update.classList.add('bg-success');
  update.innerHTML='Update Product';
update.onclick=function(){
  products=JSON.parse(localStorage.getItem('dataProducts'));
 products[index].pname= productName.value;
  products[index].pcategory=productCategory.value;
 products[index].pPrice= productPrice.value;
products[index].pDesc= productDescription.value;
localStorage.setItem('dataProducts',JSON.stringify(products));
displayData();
clearProduct();
update.classList.remove('bg-success');
update.innerHTML='add Product';
update.onclick=function(){
  createProduct();
}
}
}



