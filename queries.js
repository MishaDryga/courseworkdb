const Pool = require('pg').Pool
const pool = new Pool({
 host: 'ec2-52-212-157-46.eu-west-1.compute.amazonaws.com',
  database: 'ddh2n7ji47hi1v',
  user:'vuhmavqyeyypow',
  password: 'a5af3b202bd08919bf0f5e2e785d3a045755a1dad5b2627380813dbee366a838',
  port: 5432,
  ssl:{rejectUnauthorized:false},
})
const getArticles = (request, response) => {
    response.header("Access-Control-Allow-Origin", "*");
    pool.query('SELECT * FROM public.users ORDER BY id ASC', (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).json(results.rows)
  })
}

const getArticleById = (request, response) => {
  const id = parseInt(request.params.id)
    response.header("Access-Control-Allow-Origin", "*");
    pool.query('SELECT * FROM public.users WHERE id = $1', [id], (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).json(results.rows)
  })
}







module.exports = {
  getUsers,
  getUserById  
}