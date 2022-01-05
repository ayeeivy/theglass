let i=0,imgArr=new Array(); //宣告使用變數i 及 陣列imArr
imgArr[0] = "https://i.pinimg.com/originals/3d/61/4b/3d614bf16c38754a6fe8d7e3cb60a65d.jpg"
imgArr[1] = "https://i.imgur.com/KkvBYE5.jpg"
imgArr[2] = "https://lh3.googleusercontent.com/proxy/82YkLkPciMQATSZ3LVJvIP2Lpa21ux1swBO3CeAxyWNg0kRwGcpQ0suFERb0IhQPu-p5TxOgNdFsFWN8HyeriHSWcphwpnVawyE3MLLYipRBM-A40x-pmFSujMZof5V7_ltLKmZnOU6xKuKEH5TrhiLfbqY=w1200-h630-p-k-no-nu"

function showImg() {
  document.getElementById("ico").src= imgArr[i]; //指定 img 的 src
  i = (i+1) % 3; //把i加1之後，除以3(因有三張圖輪播)，將餘數再放 數 i 裡
}

function show() {
  setInterval(showImg,2000); //每隔2秒呼叫一次showImg函數
}


let title = document.getElementById("title");
let content = document.getElementById("content");
let btn = document.getElementById("btn");
let list = document.getElementById("list");
btn.addEventListener("click",news);
function news(){
  list.innerHTML = list.innerHTML +`
  <div class = "news">
    <h2>${title.value}</h2>
    <p>${content.value}</p><hr>
  </div>
  `;
}