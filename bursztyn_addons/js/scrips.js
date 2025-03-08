let points=0;
let max_points=29;
let additional_points=0;
const attributes = ['str_points', 'dex_points', 'con_points', 'wis_points', 'int_points', 'cha_points'];
document.addEventListener('DOMContentLoaded', function() {
    Total_stats(); 
});
function Total_stats() {
    document.getElementById('str_score').innerHTML= Number(document.getElementById('str_points').innerHTML)+Number(document.getElementById('str_race_bonus').innerText);
    var str_score=document.getElementById('str_score').innerHTML;
    document.getElementById('str_bonus').innerHTML=Math.floor((str_score-10)/2);

    document.getElementById('dex_score').innerHTML= Number(document.getElementById('dex_points').innerHTML)+Number(document.getElementById('dex_race_bonus').innerText);
    var dex_score=document.getElementById('dex_score').innerHTML;
    document.getElementById('dex_bonus').innerHTML=Math.floor((dex_score-10)/2);

    document.getElementById('con_score').innerHTML= Number(document.getElementById('con_points').innerHTML)+Number(document.getElementById('con_race_bonus').innerText);
    var con_score=document.getElementById('con_score').innerHTML;
    document.getElementById('con_bonus').innerHTML=Math.floor((con_score-10)/2);

    document.getElementById('wis_score').innerHTML= Number(document.getElementById('wis_points').innerHTML)+Number(document.getElementById('wis_race_bonus').innerText);
    var wis_score=document.getElementById('wis_score').innerHTML;
    document.getElementById('wis_bonus').innerHTML=Math.floor((wis_score-10)/2);

    document.getElementById('int_score').innerHTML= Number(document.getElementById('int_points').innerHTML)+Number(document.getElementById('int_race_bonus').innerText);
    var int_score=document.getElementById('int_score').innerHTML;
    document.getElementById('int_bonus').innerHTML=Math.floor((int_score-10)/2);

    document.getElementById('cha_score').innerHTML= Number(document.getElementById('cha_points').innerHTML)+Number(document.getElementById('cha_race_bonus').innerText);
    var cha_score=document.getElementById('cha_score').innerHTML;
    document.getElementById('cha_bonus').innerHTML=Math.floor((cha_score-10)/2);

    document.getElementById('spended_points').innerText=points;

    let minValue = Infinity;

for (let attr of attributes) {
    let value = Number(document.getElementById(attr).innerHTML);
    if (value < minValue) {
        minValue = value;
    }
}
if (minValue === 6) {
    max_points = 29;
} else if (minValue === 7) {
    max_points = 28;
} else {
    max_points = 27;
}
    document.getElementById('max_points').innerHTML=max_points;    
    a();
};
function STR_add(){
    var str_p =Number( document.getElementById('str_points').innerHTML);
    if(str_p>12){
        if(str_p>14){

        }
        else{
            if(points<max_points){
                document.getElementById('str_points').innerHTML=str_p+1;
                points=points+2;
    }}}
    else{
        if(points<max_points){
            document.getElementById('str_points').innerHTML=str_p+1;
        if(str_p>7){
            points=points+1;}
    }}
    Total_stats();
}
function STR_subtract(){
    var str_p =Number( document.getElementById('str_points').innerHTML);
    if(str_p<14){
        if(str_p>6){
        document.getElementById('str_points').innerHTML=Number(document.getElementById('str_points').innerHTML)-Number(1);
        if(str_p>8){
            points=points-1;}
    }}
    else{
        document.getElementById('str_points').innerHTML=Number(document.getElementById('str_points').innerHTML)-Number(1);
        points=points-2;
    }
    Total_stats();
}
function DEX_add(){
    var dex_p =Number( document.getElementById('dex_points').innerHTML);
    if(dex_p>12){
        if(dex_p>14){

        }
        else{
            if(points<max_points){
        document.getElementById('dex_points').innerHTML=Number(document.getElementById('dex_points').innerHTML)+Number(1);
        points=points+2;
    }}}
    else{
        if(points<max_points){
        document.getElementById('dex_points').innerHTML=Number(document.getElementById('dex_points').innerHTML)+Number(1);
        if(dex_p>7){
            points=points+1;}
    }}
    Total_stats();
}
function DEX_subtract(){
    var dex_p =Number( document.getElementById('dex_points').innerHTML);
    if(dex_p<14){
        if(dex_p>6){
        document.getElementById('dex_points').innerHTML=Number(document.getElementById('dex_points').innerHTML)-Number(1);
        if(dex_p>8){
            points=points-1;}
    }}
    else{
        document.getElementById('dex_points').innerHTML=Number(document.getElementById('dex_points').innerHTML)-Number(1);
        points=points-2;
    }
    Total_stats();
}
function CON_add(){
    var con_p =Number( document.getElementById('con_points').innerHTML);
    if(con_p>12){
        if(con_p>14){

        }
        else{
            if(points<max_points){
        document.getElementById('con_points').innerHTML=Number(document.getElementById('con_points').innerHTML)+Number(1);
        points=points+2;
    }}}
    else{
        if(points<max_points){
        document.getElementById('con_points').innerHTML=Number(document.getElementById('con_points').innerHTML)+Number(1);
        if(con_p>7){
            points=points+1;}
    }}
    Total_stats();
}
function CON_subtract(){
    var con_p =Number( document.getElementById('con_points').innerHTML);
    if(con_p<14){
        if(con_p>6){
        document.getElementById('con_points').innerHTML=Number(document.getElementById('con_points').innerHTML)-Number(1);
        if(con_p>8){
            points=points-1;}
    }}
    else{
        document.getElementById('con_points').innerHTML=Number(document.getElementById('con_points').innerHTML)-Number(1);
        points=points-2;
    }
    Total_stats();
}

function WIS_add(){
    var wis_p =Number( document.getElementById('wis_points').innerHTML);
    if(wis_p>12){
        if(wis_p>14){

        }
        else{
            if(points<max_points){
        document.getElementById('wis_points').innerHTML=Number(document.getElementById('wis_points').innerHTML)+Number(1);
        points=points+2;
    }}}
    else{
        if(points<max_points){
        document.getElementById('wis_points').innerHTML=Number(document.getElementById('wis_points').innerHTML)+Number(1);
        if(wis_p>7){
            points=points+1;}
    }}
    Total_stats();
}
function WIS_subtract(){
    var wis_p =Number( document.getElementById('wis_points').innerHTML);
    if(wis_p<14){
        if(wis_p>6){
        document.getElementById('wis_points').innerHTML=Number(document.getElementById('wis_points').innerHTML)-Number(1);
        if(wis_p>8){
            points=points-1;}
    }}
    else{
        document.getElementById('wis_points').innerHTML=Number(document.getElementById('wis_points').innerHTML)-Number(1);
        points=points-2;
    }
    Total_stats();
}

function INT_add(){
    var int_p =Number( document.getElementById('int_points').innerHTML);
    if(int_p>12){
        if(int_p>14){

        }
        else{
            if(points<max_points){
        document.getElementById('int_points').innerHTML=Number(document.getElementById('int_points').innerHTML)+Number(1);
        points=points+2;
    }}}
    else{
        if(points<max_points){
        document.getElementById('int_points').innerHTML=Number(document.getElementById('int_points').innerHTML)+Number(1);
        if(int_p>7){
            points=points+1;}
    }}
    Total_stats();
}
function INT_subtract(){
    var int_p =Number( document.getElementById('int_points').innerHTML);
    if(int_p<14){
        if(int_p>6){
        document.getElementById('int_points').innerHTML=Number(document.getElementById('int_points').innerHTML)-Number(1);
        if(int_p>8){
            points=points-1;}
    }}
    else{
        document.getElementById('int_points').innerHTML=Number(document.getElementById('int_points').innerHTML)-Number(1);
        points=points-2;
    }
    Total_stats();
}

function CHA_add(){
    var cha_p =Number( document.getElementById('cha_points').innerHTML);
    if(cha_p>12){
        if(cha_p>14){

        }
        else{
            if(points<max_points){
        document.getElementById('cha_points').innerHTML=Number(document.getElementById('cha_points').innerHTML)+Number(1);
        points=points+2;
    }}}
    else{
        if(points<max_points){
        document.getElementById('cha_points').innerHTML=Number(document.getElementById('cha_points').innerHTML)+Number(1);
        if(cha_p>7){
            points=points+1;}
    }}
    Total_stats();
}
function CHA_subtract(){
    var cha_p =Number( document.getElementById('cha_points').innerHTML);
    if(cha_p<14){
        if(cha_p>6){
        document.getElementById('cha_points').innerHTML=Number(document.getElementById('cha_points').innerHTML)-Number(1);
        if(cha_p>8){
            points=points-1;}
    }}
    else{
        document.getElementById('cha_points').innerHTML=Number(document.getElementById('cha_points').innerHTML)-Number(1);
        points=points-2;
    }
    Total_stats();
}
function countLowValueAttributes() {
    let count = 0;

    for (let attr of attributes) {
        let value = Number(document.getElementById(attr).innerHTML);
        if (value < 8) {
            count++;
        }
    }
    return count;
}
function hasMoreThanOneLowValue() {
    const lowValueCount = countLowValueAttributes();
    return lowValueCount > 1;
}

function a(){
    if (hasMoreThanOneLowValue()) {
        console.log("Więcej niż jeden atrybut ma wartość mniejszą niż 8.");
        document.getElementById('warning').style.visibility='visible';
        for(let attr of attributes){
            const element=document.getElementById(attr);
            element.style.borderBottom = 'red 0.1vw solid';
            element.style.color= 'red';
        }
    } else {
        console.log("Mniej niż dwa atrybuty mają wartość mniejszą niż 8.");
        document.getElementById('warning').style.visibility='hidden';
        for(let attr of attributes){
            for(let attr of attributes){
                const element=document.getElementById(attr);
                element.style.borderBottom = 'none';
                element.style.color= 'black';
            }
        }
    }
};