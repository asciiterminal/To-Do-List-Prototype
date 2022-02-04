//jshint esversion:6

exports.getDate = function(){
//No need to add () with getDate.
//In this file what we are doing is that we are creating our own custom
//module for the date function separately and easily rather than stuffing
//it inside of app.js which is not right and unprofessional.





const today = new Date();

const options = {

weekday:  "long",
day:   "numeric",
month: "long"

};


return today.toLocaleDateString("en-US", options);



};

exports.getDay = function(){



const today = new Date();

const options = {

weekday:  "long",
day:   "numeric",
month: "long"

};


return today.toLocaleDateString("en-US", options);



};
