let taReview=document.getElementById('taReview');
let radiousLT=document.getElementById('radiousLT');
let radiousLB=document.getElementById('radiousLB');
let radiousRB=document.getElementById('radiousRB');
let radiousRT=document.getElementById('radiousRT');
let inputLT=document.getElementById('inputLT');
let inputLB=document.getElementById('inputLB');
let inputRB=document.getElementById('inputRB');
let inputRT=document.getElementById('inputRT');
let allRadious=document.getElementById('allRadious');
let widthBorder=document.getElementById('widthBorder');
let border1=document.getElementById('border1');

let borderSolid=document.getElementById('borderSolid');
let borderDotted=document.getElementById('borderDotted');
let borderDashed=document.getElementById('borderDashed');
let borderDouble=document.getElementById('borderDouble');
let borderGroove=document.getElementById('borderGroove');
let borderRidge=document.getElementById('borderRidge');
let borderInset=document.getElementById('borderInset');
let borderOutset=document.getElementById('borderOutset');
let borderHidden=document.getElementById('borderHidden');
let borderNone=document.getElementById('borderNone');

let borderColor=document.getElementById('borderColor');
let alphaBorder=document.getElementById('alphaBorder');
let alphaBtn=document.getElementById('alphaBtn');
let inputWidth=document.getElementById('inputWidth');
let inputColor=document.getElementById('inputColor');


let allBorder=document.getElementById('allBorder');
let topBorder=document.getElementById('topBorder');
let rightBorder=document.getElementById('rightBorder');
let bottomBorder=document.getElementById('bottomBorder');
let leftBorder=document.getElementById('leftBorder');

var borderS='';
/* var borderW; */

/* ! Sección de Arriba */

/* radiousLT */
radiousLT.oninput = function(){
    inputLT.value = radiousLT.value;

    if(allRadious.checked){
        taReview.style.borderRadius = radiousLT.value + 'px';
        inputLB.value = radiousLB.value;
        inputRB.value = radiousRB.value;
        inputRT.value = radiousRT.value;
    }
    else
      taReview.style.borderTopLeftRadius = radiousLT.value + 'px' ;

}

allRadious.oninput=function(e){
    if(!allRadious.checked){            /* ! - False */
    taReview.style.borderRadius = '0px 0px 0px' ;
    inputLB.value = 0;
    inputRB.value = 0;
    inputRT.value = 0;
 }
};


/* radiousLB */

radiousLB.oninput = function(){
    inputLB.value = radiousLB.value;

    if(allRadious.checked){
        taReview.style.borderRadius = radiousLB.value + 'px';
        inputLT.value = radiousLT.value;
        inputRB.value = radiousRB.value;
        inputRT.value = radiousRT.value;
    }
    else
      taReview.style.borderBottomLeftRadius = radiousLB.value + 'px' ;

};

/* radiousRT */
radiousRT.oninput = function(){
    inputRT.value = radiousRT.value;

    if(allRadious.checked){
        taReview.style.borderRadius = radiousRT.value + 'px';
        inputLT.value = radiousLT.value;
        inputRB.value = radiousLT.value;
        inputLB.value = radiousLT.value;
    }
    else
      taReview.style.borderTopRightRadius = radiousRT.value + 'px' ;

};

/* radiousRB */

radiousRB.oninput = function(){
    inputRB.value = radiousRB.value;

    if(allRadious.checked){
        taReview.style.borderRadius = radiousRB.value + 'px';
        inputLT.value = radiousLT.value;
        inputLB.value = radiousLT.value;
        inputRT.value = radiousLT.value;
    }
    else
      taReview.style.borderBottomRightRadius = radiousRB.value + 'px' ;

};


/* ! ----------- Sección de Abajo ----------*/


widthBorder.oninput= function(e){
/* borderW=widthBorder.value; */
inputWidth.value = widthBorder.value;
taReview.style.borderWidth=widthBorder.value + 'px';

};
border1.onclick=function(e){
    taReview.style.borderWidth= '1px';
    widthBorder.value= 1;
    inputWidth.value=1;
};
/* Styles */

borderSolid.onclick=function(e){
    taReview.style.borderStyle='solid';
    borderS='solid';
};

borderDotted.onclick=function(e){
    taReview.style.borderStyle='dotted';
    borderS='dotted';
};
borderDashed.onclick=function(e){
    taReview.style.borderStyle='dashed';
    borderS='dashed';
};
borderDouble.onclick=function(e){
    taReview.style.borderStyle='double';
    borderS='double';
};
borderGroove.onclick=function(e){
    taReview.style.borderStyle='groove';
    borderS='groove';
};
borderRidge.onclick=function(e){
    taReview.style.borderStyle='ridge';
    borderS='ridge';
};
borderInset.onclick=function(e){
    taReview.style.borderStyle='inset';
    borderS='inset';
};
borderOutset.onclick=function(e){
    taReview.style.borderStyle='outset';
    borderS='outset';
};
borderHidden.onclick=function(e){
    taReview.style.borderStyle='hidden';
    borderS='hidden';
};
borderNone.onclick=function(e){
    taReview.style.borderStyle='none';
    borderS='none';
};

/* Color */
borderColor.oninput=function(e){
    taReview.style.borderColor = borderColor.value;
};

/* Transparencia */
alphaBorder.oninput = function(){
    var r=parseInt(borderColor.value.substring(1,3), 20);
    var g=parseInt(borderColor.value.substring(3,5), 20);
    var b=parseInt(borderColor.value.substring(5,7), 20);
    inputColor.value = alphaBorder.value;
    taReview.style.borderColor = "rgb("+r+", "+g+", "+b+", "+alphaBorder.value/100+")"
};


alphaBtn.onclick=function(e){
    taReview.style.borderColor=borderColor.value;
    alphaBorder.value= 100;
    inputColor.value = 100;
};

/* Position */

allBorder.onclick = function(e){
    console.log(borderS);
    taReview.style.borderStyle=borderS;
    /* taReview.style.borderWidth =  borderW + "px"; */
};
topBorder.onclick = function(e){
/*     taReview.style.borderWidth = borderS + "px 0px 0px 0px"; */
taReview.style.borderStyle='hidden';
taReview.style.borderTopStyle=borderS;
     
 };
 rightBorder.onclick = function(e){
    /*  taReview.style.borderWidth =  "0px "+borderS+"px 0px 0px"; */
    taReview.style.borderStyle='hidden';
taReview.style.borderRightStyle=borderS;
 };
 bottomBorder.onclick = function(e){
     /* taReview.style.borderWidth =  "0px 0px "+borderS+"px 0px"; */
     taReview.style.borderStyle='hidden';
taReview.style.borderBottomStyle=borderS;
 };
 leftBorder.onclick = function(e){
     /* taReview.style.borderWidth =  "0px 0px 0px "+borderS+"px"; */
     taReview.style.borderStyle='hidden';
    taReview.style.borderLeftStyle=borderS;
 };
 
