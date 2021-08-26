const quotes = 
[
    {
        quote:"<span>Lorem ipsum dolor sit amet consectetur adipisicing elit Distinctio explicabo, incidunt omnis atque, pariatur mollitia a quasi ex nam architecto iste alias asperiores  <br />-alias asperiores &#x1F641;</span>"
    },

    {
        quote:"<span>Lorem ipsum dolor sit amet consectetur adipisicing elit Distinctio explicabo, incidunt omnis atque, pariatur mollitia a quasi ex nam architecto iste alias asperiores  <br />-alias asperiores &#x1F64F</span>"
    },



    {
        quote:"<span>Lorem ipsum dolor sit amet consectetur adipisicing elit Distinctio explicabo, incidunt omnis atque, pariatur mollitia a quasi ex nam architecto iste alias asperiores  <br />-alias asperiores &#x1F680;</span>"
    },


    {
        quote:"<span>Lorem ipsum dolor sit amet consectetur adipisicing elit Distinctio explicabo, incidunt omnis atque, pariatur mollitia a quasi ex nam architecto iste alias asperiores  <br />-alias asperiores &#x1F681;</span>"
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
                         
                            indexCount = (indexCount+1)%4}, 4000

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