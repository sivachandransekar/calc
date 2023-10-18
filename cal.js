const calc={
    Symbols:['+','-','*','/'],
    memory:[],
    screenMemory:"",
   
    key:function(num){
        document.querySelector('.screen').innerHTML +=num;
        this.screenMemory +='' +num;
        console.log('value of screenMomery:',this .screenMemory);
    },
   keySymbols:function(Symbol){
    document.querySelector('.screen').innerHTML +=Symbol;
    this.memory.push(this.screenMemory);
    this.memory.push(Symbol);
    this.screenMemory="";
    console.log('screenMemory now:',this.screenMemory);
    console.log('Memory:',this.memory);
   },


   clear:function(){
    this.memory=[];
    this.screenMemory='';
    document.querySelector('.screen').innerHTML='';
},



result:function(){
   this.memory.push(this.screenMemory);
   for(i=0;i<=this.memory.length;i++){
    if(this.memory[i]=== this.Symbols[0]){
        let res=Number(this.memory[i-1])+Number(this.memory[i+1]);
        document.querySelector('.screen').innerHTML =res;
        this.screenMemory=res;
        this.memory.push(res);
        console.log(this.memory);
    }
    else if(this.memory[i]=== this.Symbols[1]){
        let res=Number(this.memory[i-1])-Number(this.memory[i+1]);
        document.querySelector('.screen').innerHTML =res;
        this.screenMemory=res;
        this.memory.push(res);
        console.log(this.memory); 
   }
   else if(this.memory[i]=== this.Symbols[2]){
    let res=Number(this.memory[i-1]) * Number(this.memory[i+1]);
    document.querySelector('.screen').innerHTML =res;
    this.screenMemory=res;
    this.memory.push(res);
    console.log(this.memory);
}
else if(this.memory[i]=== this.Symbols[3]){
    let res=Number(this.memory[i-1]) / Number(this.memory[i+1]);
    document.querySelector('.screen').innerHTML =res;
    this.screenMemory=res;
    this.memory.push(res);
    console.log(this.memory);

}
   }

}
};