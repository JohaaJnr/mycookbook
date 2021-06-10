$(document).ready(function () {
    $.getJSON(
        'https://forkify-api.herokuapp.com/api/search?q=bbq',
        function (data) {
            let list = data.recipes;
            
            $.each(list, function (i) {
                $('#recipe').append(`
                <div class="w3-col s4 w3-mobile" style="padding: 5px">
                <div class="w3-card-4 w3-dark-grey">

                <div class="w3-container w3-center">
                  <p><h3 style="margin:0px; height:20px;">${list[i].title}</h3></p>
                  <img src="${list[i].image_url}" alt="image" style="width:100%; height:300px">
                  <h5>${list[i].publisher}</h5>
                
                  <button class="w3-button w3-green"><a onclick="getRecipe('${list[i].recipe_id}');">View Details</a></button>
                  
                </div>
                
                </div>
                </div>
                
                `);
                
            });
        }
      
    );
    $('#items').html(`

    <div class="w3-row-padding" id="recipe">
    </div>
    
    `); 
   
});

$('.form').on('submit', function(e){
    e.preventDefault();
    let qry = $('.txt').val();
    $.getJSON(
        'https://forkify-api.herokuapp.com/api/search?q='+qry,
        function(res){
          
            result = res.recipes;
            
           
            for(i=0; i<=10; i++)
            {
                $('#searchresult').append(`
                <hr>
                <div class="w3-row-padding">
                <div class="w3-col s6  w3-center" style="padding:10px">
                <img src="${result[i].image_url}" alt="image" style="width:100%; height:300px">
                </div> 
                <div class=""w3-col s6 w3-dark-grey w3-center>
                <h3>${result[i].title}</h3>
                <p>Publisher: <span>${result[i].publisher}</span></p>
                <p>Publisher URL : <span>${result[i].publisher_url}</span></p>
                <button class="w3-button w3-green "><a onclick="getRecipe('${result[i].recipe_id}');">View Details</a></button>
                
                </div>
                </div>
                `);
            }
        
            
       
        }
    );
    $('#items').html(`
    
    <div class="w3-container w3-center" id="searchresult">
            <h2>Showing Search Results for: ${qry} </h2>
    </div>
    
    `);
});

$('#pizza').click(function(){
    $.getJSON(
        'https://forkify-api.herokuapp.com/api/search?q=pizza',
        function(pizza){
            let pizzas = pizza.recipes;
            $.each(pizzas, function (i) {
                $('#recipe').append(`
                
                
                <div class="w3-col s4 w3-mobile" style="padding: 5px">
                <div class="w3-card-4 w3-dark-grey">

                <div class="w3-container w3-center">
                  <p><h3 style="margin:0px; height:20px;">${pizzas[i].title}</h3></p>
                  <img src="${pizzas[i].image_url}" alt="image" style="width:100%; height:300px">
                  <h5>${pizzas[i].publisher}</h5>
                
                  <button class="w3-button w3-green"><a onclick="getRecipe('${pizzas[i].recipe_id}');">View Details</a></button>
                  
                </div>
                
                </div>
                </div>
                
                `);
                
            });
        }
    );
    $('#items').html(`
    
    <div class="w3-row-padding " id="recipe">
    
    </div>
    
    `);
        
    
});


$('#pasta').click(function(){
    $.getJSON(
        'https://forkify-api.herokuapp.com/api/search?q=pasta',
        function(pasta){
            let pastas = pasta.recipes;
            $.each(pastas, function (i) {
                $('#recipe').append(`
                
                
                <div class="w3-col s4 w3-mobile" style="padding: 5px">
                <div class="w3-card-4 w3-dark-grey">

                <div class="w3-container w3-center">
                  <p><h3 style="margin:0px; height:20px;">${pastas[i].title}</h3></p>
                  <img src="${pastas[i].image_url}" alt="image" style="width:100%; height:300px">
                  <h5>${pastas[i].publisher}</h5>
                
                  <button class="w3-button w3-green"><a onclick="getRecipe('${pastas[i].recipe_id}');">View Details</a></button>
                  
                </div>
                
                </div>
                </div>
                
                `);
                
            });
        }
    );
    $('#items').html(`
    
    <div class="w3-row-padding " id="recipe">
    
    </div>
    
    `);
        
    
});

$('#burger').click(function(){
    $.getJSON(
        'https://forkify-api.herokuapp.com/api/search?q=hamburger',
        function(burger){
            let burgers = burger.recipes;
            $.each(burgers, function (i) {
                $('#recipe').append(`
                
                
                <div class="w3-col s4 w3-mobile" style="padding: 5px">
                <div class="w3-card-4 w3-dark-grey">

                <div class="w3-container w3-center">
                  <p><h3 style="margin:0px; height:20px;">${burgers[i].title}</h3></p>
                  <img src="${burgers[i].image_url}" alt="image" style="width:100%; height:300px">
                  <h5>${burgers[i].publisher}</h5>
                
                  <button class="w3-button w3-green"><a onclick="getRecipe('${burgers[i].recipe_id}');">View Details</a></button>
                  
                </div>
                
                </div>
                </div>
                
                `);
                
            });
        }
    );
    $('#items').html(`
    
    <div class="w3-row-padding " id="recipe">
    
    </div>
    
    `);
        
    
});

$('#fries').click(function(){
    $.getJSON(
        'https://forkify-api.herokuapp.com/api/search?q=fries',
        function(friess){
            let frieds = friess.recipes;
            $.each(frieds, function (i) {
                $('#recipe').append(`
                
                
                <div class="w3-col s4 w3-mobile" style="padding: 5px">
                <div class="w3-card-4 w3-dark-grey">

                <div class="w3-container w3-center">
                  <p><h3 style="margin:0px; height:20px;">${frieds[i].title}</h3></p>
                  <img src="${frieds[i].image_url}" alt="image" style="width:100%; height:300px">
                  <h5>${frieds[i].publisher}</h5>
                
                  <button class="w3-button w3-green"><a onclick="getRecipe('${frieds[i].recipe_id}');">View Details</a></button>
                  
                </div>
                
                </div>
                </div>
                
                `);
                
            });
        }
    );
    $('#items').html(`
    
    <div class="w3-row-padding "  id="recipe">
    
    </div>
    
    `);
        
    
});


$('#chicken').click(function(){
    $.getJSON(
        'https://forkify-api.herokuapp.com/api/search?q=chicken',
        function(chickens){
            let chicks = chickens.recipes;
            $.each(chicks, function (i) {
                $('#recipe').append(`
                
                
                <div class="w3-col s4 w3-mobile" style="padding: 5px">
                <div class="w3-card-4 w3-dark-grey">

                <div class="w3-container w3-center">
                  <p><h3 style="margin:0px; height:20px;">${chicks[i].title}</h3></p>
                  <img src="${chicks[i].image_url}" alt="image" style="width:100%; height:300px">
                  <h5>${chicks[i].publisher}</h5>
                
                  <button class="w3-button w3-green"><a onclick="getRecipe('${chicks[i].recipe_id}');">View Details</a></button>
                  
                </div>
                
                </div>
                </div>
                
                `);
                
            });
        }
    );
    $('#items').html(`
    
    <div class="w3-row-padding " id="recipe">
    
    </div>
    
    `);
        
    
});

$('#beef').click(function(){
    $.getJSON(
        'https://forkify-api.herokuapp.com/api/search?q=beef',
        function(beefs){
            let beefies = beefs.recipes;
            $.each(beefies, function (i) {
                $('#recipe').append(`
                
                
                <div class="w3-col s4 w3-mobile" style="padding: 5px">
                <div class="w3-card-4 w3-dark-grey">

                <div class="w3-container w3-center">
                  <p><h3 style="margin:0px; height:20px;">${beefies[i].title}</h3></p>
                  <img src="${beefies[i].image_url}" alt="image" style="width:100%; height:300px">
                  <h5>${beefies[i].publisher}</h5>
                
                  <button class="w3-button w3-green"><a onclick="getRecipe('${beefies[i].recipe_id}');">View Details</a></button>
                  
                </div>
                
                </div>
                </div>
                
                `);
                
            });
        }
    );
    $('#items').html(`
    
    <div class="w3-row-padding " id="recipe">
    
    </div>
    
    `);
        
    
});

$('#lamb').click(function(){
    $.getJSON(
        'https://forkify-api.herokuapp.com/api/search?q=lamb',
        function(lambs){
            let lambies = lambs.recipes;
            $.each(lambies, function (i) {
                $('#recipe').append(`
                
                
                <div class="w3-col s4 w3-mobile" style="padding: 5px">
                <div class="w3-card-4 w3-dark-grey">

                <div class="w3-container w3-center">
                  <p><h3 style="margin:0px; height:20px;">${lambies[i].title}</h3></p>
                  <img src="${lambies[i].image_url}" alt="image" style="width:100%; height:300px">
                  <h5>${lambies[i].publisher}</h5>
                
                  <button class="w3-button w3-green"><a onclick="getRecipe('${lambies[i].recipe_id}');">View Details</a></button>
                  
                </div>
                
                </div>
                </div>
                
                `);
                
            });
        }
    );
    $('#items').html(`
    
    <div class="w3-row-padding"  id="recipe">
    
    </div>
    
    `);
        
    
});

$('#duck').click(function(){
    $.getJSON(
        'https://forkify-api.herokuapp.com/api/search?q=duck',
        function(ducks){
            let duckies = ducks.recipes;
            $.each(duckies, function (i) {
                $('#recipe').append(`
                
                
                <div class="w3-col s4 w3-mobile" style="padding: 5px">
                <div class="w3-card-4 w3-dark-grey">

                <div class="w3-container w3-center">
                  <p><h3 style="margin:0px; height:20px;">${duckies[i].title}</h3></p>
                  <img src="${duckies[i].image_url}" alt="image" style="width:100%; height:300px">
                  <h5>${duckies[i].publisher}</h5>
                
                  <button class="w3-button w3-green"><a onclick="getRecipe('${duckies[i].recipe_id}');">View Details</a></button>
                  
                </div>
                
                </div>
                </div>
                
                `);
                
            });
        }
    );
    $('#items').html(`
    
    <div class="w3-row-padding " id="recipe">
    
    </div>
    
    `);
        
    
});

$('#pork').click(function(){
    $.getJSON(
        'https://forkify-api.herokuapp.com/api/search?q=pork',
        function(porks){
            let porkies = porks.recipes;
            $.each(porkies, function (i) {
                $('#recipe').append(`
                
                
                <div class="w3-col s4 w3-mobile" style="padding: 5px">
                <div class="w3-card-4 w3-dark-grey">

                <div class="w3-container w3-center">
                  <p><h3 style="margin:0px; height:20px;">${porkies[i].title}</h3></p>
                  <img src="${porkies[i].image_url}" alt="image" style="width:100%; height:300px">
                  <h5>${porkies[i].publisher}</h5>
                
                  <button class="w3-button w3-green"><a onclick="getRecipe('${porkies[i].recipe_id}');">View Details</a></button>
                  
                </div>
                
                </div>
                </div>
                
                `);
                
            });
        }
    );
    $('#items').html(`
    
    <div class="w3-row-padding " id="recipe">
    
    </div>
    
    `);
        
    
});

$('#steak').click(function(){
    $.getJSON(
        'https://forkify-api.herokuapp.com/api/search?q=steak',
        function(steaks){
            let steakies = steaks.recipes;
            $.each(steakies, function (i) {
                $('#recipe').append(`
                
                
                <div class="w3-col s4 w3-mobile" style="padding: 5px">
                <div class="w3-card-4 w3-dark-grey">

                <div class="w3-container w3-center">
                  <p><h3 style="margin:0px; height:20px;">${steakies[i].title}</h3></p>
                  <img src="${steakies[i].image_url}" alt="image" style="width:100%; height:300px">
                  <h5>${steakies[i].publisher}</h5>
                
                  <button class="w3-button w3-green"><a onclick="getRecipe('${steakies[i].recipe_id}');">View Details</a></button>
                  
                </div>
                
                </div>
                </div>
                
                `);
                
            });
        }
    );
    $('#items').html(`
    
    <div class="w3-row-padding " id="recipe">
    
    </div>
    
    `);
        
    
});

$('#bbq').click(function(){
    $.getJSON(
        'https://forkify-api.herokuapp.com/api/search?q=bbq',
        function(bbqs){
            let bbqies = bbqs.recipes;
            $.each(bbqies, function (i) {
                $('#recipe').append(`
                
                
                <div class="w3-col s4 w3-mobile" style="padding: 5px">
                <div class="w3-card-4 w3-dark-grey">

                <div class="w3-container w3-center">
                  <p><h3 style="margin:0px; height:20px;">${bbqies[i].title}</h3></p>
                  <img src="${bbqies[i].image_url}" alt="image" style="width:100%; height:300px">
                  <h5>${bbqies[i].publisher}</h5>
                
                  <button class="w3-button w3-green"><a onclick="getRecipe('${bbqies[i].recipe_id}');">View Details</a></button>
                  
                </div>
                
                </div>
                </div>
                
                `);
                
            });
        }
    );
    $('#items').html(`
    
    <div class="w3-row-padding " id="recipe">
    
    </div>
    
    `);
        
    
});

$('#kebab').click(function(){
    $.getJSON(
        'https://forkify-api.herokuapp.com/api/search?q=kebab',
        function(kebabs){
            let kebabies = kebabs.recipes;
            $.each(kebabies, function (i) {
                $('#recipe').append(`
                
                
                <div class="w3-col s4 w3-mobile" style="padding: 5px">
                <div class="w3-card-4 w3-dark-grey">

                <div class="w3-container w3-center">
                  <p><h3 style="margin:0px; height:20px;">${kebabies[i].title}</h3></p>
                  <img src="${kebabies[i].image_url}" alt="image" style="width:100%; height:300px">
                  <h5>${kebabies[i].publisher}</h5>
                
                  <button class="w3-button w3-green"><a onclick="getRecipe('${kebabies[i].recipe_id}');">View Details</a></button>
                  
                </div>
                
                </div>
                </div>
                
                `);
                
            });
        }
    );
    $('#items').html(`
    
    <div class="w3-row-padding " id="recipe">
    
    </div>
    
    `);
        
    
});

$('#ribs').click(function(){
    $.getJSON(
        'https://forkify-api.herokuapp.com/api/search?q=ribs',
        function(ribss){
            let ribsies = ribss.recipes;
            $.each(ribsies, function (i) {
                $('#recipe').append(`
                
                
                <div class="w3-col s4 w3-mobile" style="padding: 5px">
                <div class="w3-card-4 w3-dark-grey">

                <div class="w3-container w3-center">
                  <p><h3 style="margin:0px; height:20px;">${ribsies[i].title}</h3></p>
                  <img src="${ribsies[i].image_url}" alt="image" style="width:100%; height:300px">
                  <h5>${ribsies[i].publisher}</h5>
                
                  <button class="w3-button w3-green"><a onclick="getRecipe('${ribsies[i].recipe_id}');">View Details</a></button>
                  
                </div>
                
                </div>
                </div>
                
                `);
                
            });
        }
    );
    $('#items').html(`
    
    <div class="w3-row-padding " id="recipe">
    
    </div>
    
    `);
        
    
});

$('#lobster').click(function(){
    $.getJSON(
        'https://forkify-api.herokuapp.com/api/search?q=lobster',
        function(lobsters){
            let lobsteries = lobsters.recipes;
            $.each(lobsteries, function (i) {
                $('#recipe').append(`
                
                
                <div class="w3-col s4 w3-mobile" style="padding: 5px">
                <div class="w3-card-4 w3-dark-grey">

                <div class="w3-container w3-center">
                  <p><h3 style="margin:0px; height:20px;">${lobsteries[i].title}</h3></p>
                  <img src="${lobsteries[i].image_url}" alt="image" style="width:100%; height:300px">
                  <h5>${lobsteries[i].publisher}</h5>
                
                  <button class="w3-button w3-green"><a onclick="getRecipe('${lobsteries[i].recipe_id}');">View Details</a></button>
                  
                </div>
                
                </div>
                </div>
                
                `);
                
            });
        }
    );
    $('#items').html(`
    
    <div class="w3-row-padding " id="recipe">
    
    </div>
    
    `);
        
    
});

$('#sushi').click(function(){
    $.getJSON(
        'https://forkify-api.herokuapp.com/api/search?q=sushi',
        function(sushis){
            let sushiies = sushis.recipes;
            $.each(sushiies, function (i) {
                $('#recipe').append(`
                
                
                <div class="w3-col s4 w3-mobile" style="padding: 5px">
                <div class="w3-card-4 w3-dark-grey">

                <div class="w3-container w3-center">
                  <p><h3 style="margin:0px; height:20px;">${sushiies[i].title}</h3></p>
                  <img src="${sushiies[i].image_url}" alt="image" style="width:100%; height:300px">
                  <h5>${sushiies[i].publisher}</h5>
                
                  <button class="w3-button w3-green"><a onclick="getRecipe('${sushiies[i].recipe_id}');">View Details</a></button>
                  
                </div>
                
                </div>
                </div>
                
                `);
                
            });
        }
    );
    $('#items').html(`
    
    <div class="w3-row-padding " id="recipe">
    
    </div>
    
    `);
        
    
});

$('#crab').click(function(){
    $.getJSON(
        'https://forkify-api.herokuapp.com/api/search?q=crab',
        function(crabs){
            let crabies = crabs.recipes;
            $.each(crabies, function (i) {
                $('#recipe').append(`
                
                
                <div class="w3-col s4 w3-mobile" style="padding: 5px">
                <div class="w3-card-4 w3-dark-grey">

                <div class="w3-container w3-center">
                  <p><h3 style="margin:0px; height:20px;">${crabies[i].title}</h3></p>
                  <img src="${crabies[i].image_url}" alt="image" style="width:100%; height:300px">
                  <h5>${crabies[i].publisher}</h5>
                
                  <button class="w3-button w3-green"><a onclick="getRecipe('${crabies[i].recipe_id}');">View Details</a></button>
                  
                </div>
                
                </div>
                </div>
                
                `);
                
            });
        }
    );
    $('#items').html(`
    
    <div class="w3-row-padding " id="recipe">
    
    </div>
    
    `);
        
    
});

$('#pudding').click(function(){
    $.getJSON(
        'https://forkify-api.herokuapp.com/api/search?q=pudding',
        function(puddings){
            let puddingies = puddings.recipes;
            $.each(puddingies, function (i) {
                $('#recipe').append(`
                
                
                <div class="w3-col s4 w3-mobile" style="padding: 5px">
                <div class="w3-card-4 w3-dark-grey">

                <div class="w3-container w3-center">
                  <p><h3 style="margin:0px; height:20px;">${puddingies[i].title}</h3></p>
                  <img src="${puddingies[i].image_url}" alt="image" style="width:100%; height:300px">
                  <h5>${puddingies[i].publisher}</h5>
                
                  <button class="w3-button w3-green"><a onclick="getRecipe('${puddingies[i].recipe_id}');">View Details</a></button>
                  
                </div>
                
                </div>
                </div>
                
                `);
                
            });
        }
    );
    $('#items').html(`
    
    <div class="w3-row-padding " id="recipe">
    
    </div>
    
    `);
        
    
});

$('#cake').click(function(){
    $.getJSON(
        'https://forkify-api.herokuapp.com/api/search?q=cake',
        function(cakes){
            let cakeies = cakes.recipes;
            $.each(cakeies, function (i) {
                $('#recipe').append(`
                
                
                <div class="w3-col s4 w3-mobile" style="padding: 5px">
                <div class="w3-card-4 w3-dark-grey">

                <div class="w3-container w3-center">
                  <p><h3 style="margin:0px; height:20px;">${cakeies[i].title}</h3></p>
                  <img src="${cakeies[i].image_url}" alt="image" style="width:100%; height:300px">
                  <h5>${cakeies[i].publisher}</h5>
                
                  <button class="w3-button w3-green"><a onclick="getRecipe('${cakeies[i].recipe_id}');">View Details</a></button>
                  
                </div>
                
                </div>
                </div>
                
                `);
                
            });
        }
    );
    $('#items').html(`
    
    <div class="w3-row-padding " id="recipe">
    
    </div>
    
    `);
        
    
});

$('#chocolate').click(function(){
    $.getJSON(
        'https://forkify-api.herokuapp.com/api/search?q=chocolate',
        function(chocolates){
            let chocolateies = chocolates.recipes;
            $.each(chocolateies, function (i) {
                $('#recipe').append(`
                
                
                <div class="w3-col s4 w3-mobile" style="padding: 5px">
                <div class="w3-card-4 w3-dark-grey">

                <div class="w3-container w3-center">
                  <p><h3 style="margin:0px; height:20px;">${chocolateies[i].title}</h3></p>
                  <img src="${chocolateies[i].image_url}" alt="image" style="width:100%; height:300px">
                  <h5>${chocolateies[i].publisher}</h5>
                
                  <button class="w3-button w3-green"><a onclick="getRecipe('${chocolateies[i].recipe_id}');">View Details</a></button>
                  
                </div>
                
                </div>
                </div>
                
                `);
                
            });
        }
    );
    $('#items').html(`
    
    <div class="w3-row-padding " id="recipe">
    
    </div>
    
    `);
        
    
});

$('#icecream').click(function(){
    $.getJSON(
        'https://forkify-api.herokuapp.com/api/search?q=ice cream',
        function(icecreams){
            let icecreamies = icecreams.recipes;
            $.each(icecreamies, function (i) {
                $('#recipe').append(`
                
                
                <div class="w3-col s4 w3-mobile" style="padding: 5px">
                <div class="w3-card-4 w3-dark-grey">

                <div class="w3-container w3-center">
                  <p><h3 style="margin:0px; height:20px;">${icecreamies[i].title}</h3></p>
                  <img src="${icecreamies[i].image_url}" alt="image" style="width:100%; height:300px">
                  <h5>${icecreamies[i].publisher}</h5>
                
                  <button class="w3-button w3-green"><a onclick="getRecipe('${icecreamies[i].recipe_id}');">View Details</a></button>
                  
                </div>
                
                </div>
                </div>
                
                `);
                
            });
        }
    );
    $('#items').html(`
    
    <div class="w3-row-padding " id="recipe">
    
    </div>
    
    `);
        
    
});

$('#donuts').click(function(){
    $.getJSON(
        'https://forkify-api.herokuapp.com/api/search?q=donuts',
        function(donutss){
            let donutsies = donutss.recipes;
            $.each(donutsies, function (i) {
                $('#recipe').append(`
                
                
                <div class="w3-col s4 w3-mobile" style="padding: 5px">
                <div class="w3-card-4 w3-dark-grey">

                <div class="w3-container w3-center">
                  <p><h3 style="margin:0px; height:20px;">${donutsies[i].title}</h3></p>
                  <img src="${donutsies[i].image_url}" alt="image" style="width:100%; height:300px">
                  <h5>${donutsies[i].publisher}</h5>
                
                  <button class="w3-button w3-green"><a onclick="getRecipe('${donutsies[i].recipe_id}');">View Details</a></button>
                  
                </div>
                
                </div>
                </div>
                
                `);
                
            });
        }
    );
    $('#items').html(`
    
    <div class="w3-row-padding " id="recipe">
    
    </div>
    
    `);
        
    
});

$('#chips').click(function(){
    $.getJSON(
        'https://forkify-api.herokuapp.com/api/search?q=chips',
        function(chipss){
            let chipsies = chipss.recipes;
            $.each(chipsies, function (i) {
                $('#recipe').append(`
                
                
                <div class="w3-col s4 w3-mobile" style="padding: 5px">
                <div class="w3-card-4 w3-dark-grey">

                <div class="w3-container w3-center">
                  <p><h3 style="margin:0px; height:20px;">${chipsies[i].title}</h3></p>
                  <img src="${chipsies[i].image_url}" alt="image" style="width:100%; height:300px">
                  <h5>${chipsies[i].publisher}</h5>
                
                  <button class="w3-button w3-green"><a onclick="getRecipe('${chipsies[i].recipe_id}');">View Details</a></button>
                  
                </div>
                
                </div>
                </div>
                
                `);
                
            });
        }
    );
    $('#items').html(`
    
    <div class="w3-row-padding " id="recipe">
    
    </div>
    
    `);
        
    
});




function getRecipe(id){
    sessionStorage.setItem('recipeid', id);
    window.location = 'single.html';
    return false;
}

function showRecipe(){
    var id = sessionStorage.getItem('recipeid');

    $.getJSON(
       'https://forkify-api.herokuapp.com/api/get?rId='+id,
       function(data){
           let ingridient = data.recipe;
          
               $('#recipedetails').append(`
               
               <div class="w3-row ">
    <div class="w3-container ">
    
    <div class="w3-card w3-light-gray w3-mobile" style="padding: 10px 10px">
    <img src="${ingridient.image_url}" style="width: 100%; height: 30%">
    <div class="w3-container">
    <h4>${ingridient.title}</h4>
    <p>by - ${ingridient.publisher}</p>
    <hr>
    <h4>Ingridients:</h4>
    
    <table class="w3-table w3-bordered" >
           <tr>
           <td>${ingridient.ingredients}</td>
           </tr> 
    </table>
    <button class="w3-button w3-green"><a target="_blank" href="${ingridient.source_url}">View Full Recipe</a></button>
       <button class="w3-button w3-green"><a href="index.html">Back to Home</a></button>
       </div>
       </div>
       </div>
       </div>
               
               `);
            
       }     
    );
    }