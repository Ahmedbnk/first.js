
var productBtn = document.querySelector("#product_btn");
var productContainer = document.querySelector("#product_container");
var productInput = document.querySelector("#product_input");
var data = [
{id:1,item:"product1",desc:"bla bla bla"},
{id:2,item:"product2",desc:"bla bla bla"},
{id:3,item:"product3",desc:"bla bla bla"},
{id:4,item:"product4",desc:"bla bla bla"}
];
function drawUi(items){
    productContainer.innerHTML="";
    items.forEach(function(ele){
      productContainer.innerHTML +=`
      <div onclick='deleteitem(${ele.id})'>
      ${ele.item}
    </div>
  `;
    
    });
}
window.onload =function(){
    drawUi(data);
};
productBtn.addEventListener("click",additem);

function additem (){
    if(productInput.value =="") alert("You Should Enter Product");
    var lastid = data.length? data[data.length-1].id:0;
    data.push({id:++lastid ,item: productInput.value, desc:"bla bla bla"});
    console.log(data); 
    var addeditem =data[data.length-1];
    productContainer.innerHTML+=`
    <div onclick='deleteitem(${addeditem.id})'>
    ${addeditem.item}
  </div>
`;
    productInput.value ="";}
    function deleteitem(id){
        var index =data.map(function(i){
            return i.id;
        }).indexOf(id);
        
        if(index !== -1){
            data.splice(index,1);
            
        }
        drawUi(data);
    }

