const quotes = 
[
    {
        quote:"<span>βAnd then there is the most dangerous risk of all β the risk of spending your life not doing what you want on the bet you can buy yourself the freedom to do it later.β</br>β Randy Komisar; π¨ββοΈ</span>"
    },

    {
        quote:"<span>βThe most beautiful in the world is, of course, the world itself.β π</span>"
    },



    {
        quote:"<span>Traveling is a brutality. It forces you to trust strangers and to lose sight of all that familiar comforts of home and friends. You are constantly off balance.π</span>"
    },


    {
        quote:"<span>Do not follow where the path may lead. Go instead where there is no path and leave a trailβπΊ </b>-Ralph Waldo Emerson</span>"
    }
]



export function loopThrought()
    {




        const getClass = document.querySelector('.quote')

        let indexCount = 0

        // var response = ""
    
       


        
        // indexCount++

        // if(indexCount >=response.length -1)
        // {
        //     indexCount = 0
        // }


        setInterval( () => { getClass.innerHTML = quotes[indexCount].quote
                         
                            indexCount = (indexCount+1)%4}, 6000

                    )
              
    }












//     for(const wrote of allquotes)
//     {
//         assignVariable+=wrote.quote

        
       
//     }

   
  

//    const displayText= getClass.textContent=assignVariable
    
//     indexCount++

//     if(indexCount > displayText )
//     {
//         indexCount = 0
//     }

//     else if(indexCount === displayText)
//     {
//         indexCount ==4
//     }