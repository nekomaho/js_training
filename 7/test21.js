window.addEventListener('DOMContentLoaded',function(){
    document.getElementById('file').addEventListener('change',function(e){
       let input = document.getElementById('file').files[0];
       let reader = new FileReader();
      
       reader.addEventListener('load', function(){
           document.getElementById('result').src = reader.result;
       }, true);

       reader.addEventListener('error', function(){
           console.log(reader.error.message);
       }, true);
       console.log(input);
        reader.readAsDataURL(input);
    }, true);
})