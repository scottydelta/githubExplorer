function fetchData(currentObject){
  var tempHTML="";
  $("#loader").show();
  if(currentObject.text=="Most Starred on Github"){
    $.getJSON("https://api.github.com/search/repositories?q=language:python&sort=stars&order=desc", function(data){
      $.each(data,function(key,items){
        //console.log(items);
        for(i=0;i<items.length;i++){
          tempHTML+="<p><a href='"+items[i].html_url+"'>"+items[i].name+"</a></p>";
        }
        $("#dataViewer").append(tempHTML);
      });
      $("#loader").hide();;
    });
  }
  if(currentObject.text=="Most Forked on Github"){
    $.getJSON("https://api.github.com/search/repositories?q=language:python&sort=forks&order=desc", function(data){
      $.each(data,function(key,items){
        //console.log(items);
        for(i=0;i<items.length;i++){
          tempHTML+="<p><a href='"+items[i].html_url+"'>"+items[i].name+": "+items[i].forks+"</a></p>";
        }
        $("#dataViewer").html(tempHTML);
      });
      $("#loader").hide();;
    });
  }
}
