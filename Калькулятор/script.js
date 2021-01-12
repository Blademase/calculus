let getOpperands=prompt();
let splits = getOpperands.split('');
// console.log(splits);
let n=getOpperands.length;
let first_opp = '';
let second_opp='';
let opp='';
let s=0;
for (i=0;i<n;++i)
{
    if (splits[i]=='*' || splits[i]=='/' || splits[i]=='-' || splits[i]=='+') 
    {opp=splits[i];break;}       
else {first_opp=first_opp+splits[i];s=s+1;}
}
for (i=s;i<n;++i){
    if (splits[i]=='*' || splits[i]=='/' || splits[i]=='-' || splits[i]=='+') 
    {}
    else {second_opp=second_opp+splits[i];}
}

if (opp=='-') {console.log(Number(first_opp) - Number(second_opp));}
if (opp=='+') {console.log(Number(first_opp) + Number(second_opp));}
if (opp=='/') {console.log(Number(first_opp) / Number(second_opp));}
if (opp=='*') {console.log(Number(first_opp) * Number(second_opp));}


// console.log(first_opp );
// console.log(second_opp);
// console.log(opp );
// console.log(s);
