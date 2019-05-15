var infiniteScrolling = document.querySelector('#infiniteScrolling');
let k=0;

function LoadMore(){
  for(var i=0;i<10;i++){
    var cardRow= document.createElement('div');
    cardRow.className="row";

    for(var j=0;j<6;j++){
      k++;
      var card= document.createElement('div');
      card.className="card-radio col-2";
      card.innerHTML=k;
      cardRow.appendChild(card);
    }
    infiniteScrolling.appendChild(cardRow);
  }
}

infiniteScrolling.onwheel=function(event){
  console.log(event);
  console.log(infiniteScrolling.scrollTop);
  console.log(infiniteScrolling.clientHeight);
  console.log(infiniteScrolling.scrollHeight);
  if(infiniteScrolling.scrollTop+infiniteScrolling.clientHeight>=infiniteScrolling.scrollHeight) console.log(infiniteScrolling.scrollHeight)
    LoadMore();
}

LoadMore();
