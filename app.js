//UI

const getacctitles = document.getElementsByClassName('acctitle');  //HTML collection
const getacccontents = document.querySelectorAll('.accordioncontent');  //nodelist (for each can use)

// console.log(getacctitles[0]);
// console.log(getacctitles[3]);

for(let x = 0;x < getacctitles.length; x++){
    // console.log(x);      // 0 to 3

    getacctitles[x].addEventListener('click',function(){

        // console.log(x);     //clicked element idx
        // console.log(getacctitles[x]);

        // console.log(e.target);
        // console.log(this);

        // e.target.classList.toggle('active');
        this.classList.toggle('active');

        const getcontent = this.nextElementSibling;
        // console.log(getcontent);
        // console.log(getcontent.scrollHeight+"px");

        if(getcontent.style.height){
            getcontent.style.height = null;   //beware can't set 0
        }else{
            getcontent.style.height = getcontent.scrollHeight+"px";
        }

    });


    if(getacctitles[x].classList.contains('active')){
        getacccontents[x].style.height = getacccontents[x].scrollHeight+"px";
    }

}

