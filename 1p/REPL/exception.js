//jsc online

function argRequired(arg){
    if(arg===null)
	throw new Error('arg cannot be null or undefined')
}

print(argRequired());//error
print(argRequired(2));/ok
   
