let data=[]
const anime= async  ()=>{
    let response=await fetch("https://api.jikan.moe/v4/anime")
    console.log(response);
    data=await response.json();
    console.log(data);
    const mapping=data.data.map((card)=>{
        return `
            <div class="card">
            <h1>${card.title}</h1>
            <img src=${card.images.jpg.image_url} alt="blaa" />
            </div>`;
    
    }).join(' ')
    return mapping;
}

const calling= async()=>{
document.getElementById("title").innerHTML= await anime();
}
const filteranime =()=>{
    const wanted=document.getElementById("search").value;
    console.log(wanted);
    const fill=data.data.filter((anime)=>{
        anime.title.toLowerCase().includes(wanted.toLowerCase());
    }
    );
    const showanime=fill.map((anime)=>{
        `
            <div class="card">
        <h1>${anime.title}</h1>
        <img src=${anime.images.jpg.image_url} alt="blaa" />
        </div>
        `;
}).join('');
document.getElementById("title").innerHTML=showanime;
}

     
calling();
 