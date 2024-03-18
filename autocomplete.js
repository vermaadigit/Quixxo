let availableKeywords = [
    'Bhopal',
    'Indore',
    'Ujjain',
    'Gwalior',
    'Jabalpur',
    'Sagar',
    'Ratlam',
    'Dewas',
    'Satna',
    'Rewa',
    'Chhindwara',
    'Morena',
    'Bhind',
    'Guna',
    'Shivpuri',
    'Vidisha',
    'Mandsaur',
    'Damoh',
    'Khandwa',
    'Chhatarpur',
    'Burhanpur',
    'Neemuch',
    'Pithampur',
    'Hoshangabad',
    'Itarsi',
    'Sehore',
    'Betul',
    'Seoni',
    'Datia',
    'Nagda',
    'Harda',
    'Mhow',
    'Dabra',
    'Sarni',
    'Mandideep',
    'Khargone',
    'Biaora',
    'Narsinghgarh',
    'Sanawad',
    'Ashta',
    'Kothri',
];

const resultBox = document.querySelector(".result-box");
const inputBox = document.getElementById("input-box");

inputBox.onkeyup = function(){
    let result = [];
    let input = inputBox.value;
    if(input.length){
        result = availableKeywords.filter((keyword)=>{
           return keyword.toLowerCase().includes(input.toLowerCase());
        });
        console.log(result);
    }
    display(result);

    if(!result.length){
        resultBox.innerHTML = "";
    }
}

function display(result)
{
    const content = result.map((list)=>{
        return "<li onclick=selectInput(this)>" + list + "</li>";
    });

    resultBox.innerHTML = "<ul>" + content.join('') + "</ul>";
}

function selectInput(list){
    inputBox.value = list.innerHTML;
    resultBox.innerHTML = "";
}