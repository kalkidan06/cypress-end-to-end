class Product{

product(){
    let dt;
    cy.fixture("icraftshopdata").then(function(data){
        dt = data
        return dt
    })

}

}
//if ($el.text().includes(productName)){

//cy.get('table>tbody> tr >td')
//}

export default Product;