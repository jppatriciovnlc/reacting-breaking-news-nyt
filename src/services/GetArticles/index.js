import api from '../nytApi';


const GetArticles = () => {

    
    let articles = []

    const apikey = process.env.REACT_APP_NYC_APY_KEY;  
    
    const date = new Date();     
    const endDate = `${date.getFullYear()}${(date.getMonth() + 1).toString().padStart(2, "0")}${date.getDate().toString().padStart(2, "0")}`;
    
    date.setMonth(date.getMonth() - 1)
    const startDate = `${date.getFullYear()}${(date.getMonth() + 1).toString().padStart(2, "0")}${date.getDate().toString().padStart(2, "0")}`;

    
    return(
        api.get(`/articlesearch.json?begin_date=${startDate}&end_date=${endDate}&page=10&sort=newest&api-key=${apikey}`)
        .then(response => {
            articles = response.data.response.docs;            
            return(articles);
        })
        .catch(err => {            
            return err;
        })
    )
}

export default GetArticles;