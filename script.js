async function imagegen() {
  document.getElementById("load").innerHTML = "<p>Loading...</p>";
    let text=document.getElementById("name").value;
    const res=await fetch("key.json");
    const data= await res.json();
    const api =data.api;
    const response = await fetch(`https://openairestapi.vercel.app/image?text=${text}&api=${api}`);
    const datas = await response.json();
    if(datas.status==401){
      var img = new Image();
    document.getElementById("imagehere").appendChild(img)
    img.src = "./error.png";
    console.log("bhai Error!!");
    }else{
    var img = new Image();
    document.getElementById("imagehere").appendChild(img)
    img.src = datas.image_url;
    console.log(img.src);
    }
  }

  var animateButton = function(e) {

    e.preventDefault;
    
    e.target.classList.remove('animate');
    
    e.target.classList.add('animate');
    setTimeout(function(){
      e.target.classList.remove('animate');
    },700);
  };
  
  var bubblyButtons = document.getElementsByClassName("bubbly-button");
  
  for (var i = 0; i < bubblyButtons.length; i++) {
    bubblyButtons[i].addEventListener('click', animateButton, false);
  }


  function dev(){
    window.open("https://github.com/awesome-tofu");
  }