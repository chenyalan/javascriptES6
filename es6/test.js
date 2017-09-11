/**
 * Created by 陈亚兰 on 2017/9/11.
 */
'use strict';
const sentences=[
    { subject:'JmavaScript',verb:'is',object:'great'},
    { subject:'Python',verb:'is',object:"small"}
];

function  say({subject,verb,object}) {
    console.log(`${subject} ${verb} ${object}`);
}

for(let s of sentences){
    say(s);
}