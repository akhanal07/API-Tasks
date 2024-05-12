let btn = document.querySelector("button");

btn.addEventListener("click",async ()=>{
    let cat = await check();
    console.log(cat);

    let p = document.querySelector("#fact");
    p.innerText=cat;
})




let url = "https://catfact.ninja/fact";

async function check() {
    try {
        let res = await axios.get(url);
        
       return res.data.fact;


     
    } catch (error) {
        console.error(error);
        return "no fact found"
    }
    
}