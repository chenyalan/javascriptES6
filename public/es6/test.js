/**
 * Created by 陈亚兰 on 2017/9/11.
 */
'use strict';
const sentences=[
    { subject:'English',verb:'is',object:'good'},
    { subject:'Math',verb:'is',object:'difficult'}
];

function  say({subject,verb,object}) {
    console.log(`${subject} ${verb} ${object}`);
}

for(let s of sentences){
    say(s);
}