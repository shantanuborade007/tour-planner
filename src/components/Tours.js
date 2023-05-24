import Card from "./Card";
function Tours({tours ,removeTour}){
    return ( 
        <div className="container"> 
           <div>
            <h2 className="tittle"> Plan with Shantanu</h2>
           </div> 
           {/* /   pratyek tour chya value sathi ek card return hoil {...tours ni ki zala ki purn tours chi ek copy pass zali /cloning }  */}
           <div className="cards">
                {
                   tours.map((tours) =>{
                    return <Card  key={tours.id} {...tours} removeTour={removeTour} ></Card>
                   } ) 
                }
           </div>

        </div>  
    );

}

export default Tours;