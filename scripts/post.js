let count = 0;
getDetails();

function getDetails(){
    let title = sessionStorage.getItem("title");
    let content = sessionStorage.getItem("content");    
    let username = sessionStorage.getItem("username");    
    document.getElementById('titlecontent').innerHTML = title;
    document.getElementById('contentparagraph').innerHTML = content;
    document.getElementById('userNameContent').innerHTML = username; 
}


function EditPost(){

    let buttonvalue = document.getElementById('btnEdit').value;
    if(buttonvalue == 'Edit')    {
        //code for editing the TITLE
        let titlecontent = document.getElementById("titlecontent");
        let titleText = titlecontent.innerHTML;
        titlecontent.style.display = 'none';
        let x = document.createElement("INPUT");
        x.setAttribute("id", "txtedittitle");
        x.setAttribute("type", "text");
        x.setAttribute("value", titleText);
        x.setAttribute('size', '150');
        x.style.borderColor = "red";
        document.getElementById("title").appendChild(x);
        
        

        //Code for editing the CONTENT
        let contentParagraph=document.getElementById("contentparagraph");
        let contenttext = contentParagraph.innerHTML;
        contentParagraph.style.display = 'none';
        let y = document.createElement("TEXTAREA");
        y.setAttribute("id", "txtcontentarea");
        y.setAttribute("type", "text");
        y.setAttribute("rows",10);
        y.setAttribute("cols",250);
        y.style.borderColor = "red";
        let t = document.createTextNode(contenttext);
        y.appendChild(t);
        document.body.appendChild(y);
        document.getElementById("contentedit").appendChild(y);
        //End Edit Content



        document.getElementById('btnEdit').innerHTML = 'Save <i class="fa fa-pencil-square-o" aria-hidden="true">';
        document.getElementById('btnEdit').value = 'Save';
    }
    else if(buttonvalue == 'Save'){
        //start validaton
        let txtedittitleobj = document.getElementById("txtedittitle");
        let txtcontentareaobj = document.getElementById("txtcontentarea");
        if(txtedittitleobj.value == ""){
            alert("Please add title here.");
            document.getElementById("txtedittitle").focus();
        }
        else if(txtcontentareaobj.value == ""){
            alert("Please add content here.");
            document.getElementById("txtcontentarea").focus();
        }        
        else{
             //Set button Edit
        document.getElementById('btnEdit').innerHTML = 'EDIT <i class="fa fa-pencil-square-o" aria-hidden="true">';
        document.getElementById('btnEdit').value = 'Edit';
        //End button value


        //Start Title        
        document.getElementById("titlecontent").innerHTML = document.getElementById("txtedittitle").value;
        document.getElementById('titlecontent').style.display = 'block';
        //End Title

        document.getElementById("contentparagraph").innerHTML = document.getElementById("txtcontentarea").value;
        document.getElementById('contentparagraph').style.display = 'block';

        //Remove objs
        let myobj = document.getElementById("txtedittitle");
        myobj.remove();
        let txtcontentareaobj = document.getElementById("txtcontentarea");
        txtcontentareaobj.remove();        
        //End objs
        }               
    }
}


function AddLike(){
    count++;
    if(count == 1)
    {
        document.getElementById('likedstatus').innerHTML = count + ' Person likes this !';
    }
    if(count > 1)
    {
        document.getElementById('likedstatus').innerHTML = count + ' Persons liked this !';
    }
    document.getElementById('btnLiked').innerHTML = '<i class="fa fa-thumbs-up" aria-hidden="true"></i> Liked';
}

// AddComment add comment use to add comment section
function AddComment(){
    var commenttext = document.getElementById("commentbox").value;
    if(commenttext.trim() === ''){
        alert("Please enter some comment");
        document.getElementById("commentbox").focus();
    }
    else {
        var liObj = document.createElement("LI");
        var commentobj = document.createTextNode(commenttext);
        liObj.appendChild(commentobj);
        document.getElementById("commentsList").prepend(liObj);
        document.getElementById("commentbox").value = '';
    }
}