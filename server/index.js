const express = require("express");
const app = express();
const cors = require("cors");
const pool = require('./db');

//middleware
app.use(cors());
app.use(express.json());

//ROUTES

//Create
app.post("/watchlist", async (req, res) => {
try {
  const { description } = req.body;
  const newMovie = await pool.query("INSERT INTO movie (description) VALUES($1) RETURNING *", [description])

  res.json(newMovie.rows[0])
} catch (err) {
  console.error(err.message)
}
})

// get all

app.get("/watchlist", async (req, res) => {
  try {
    const allMovies = await pool.query("SELECT * FROM movie");
    res.json(allMovies.rows)
  } catch (err) {
    console.error(err.message)
  }
})


//get one
app.get("/watchlist/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const movie = await pool.query(" SELECT * FROM movie WHERE movie_id = $1",[id]);


    res.json(movie.rows[0]);
    //console.log(movie);
  } catch (err) {
    console.error(err.message)
  }
})


//update

app.put("/watchlist/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const { description } = req.body;
    const updateMovie = await pool.query("UPDATE movie SET description = $1 WHERE movie_id = $2", [description, id]);

    res.json(" Movie Updated !")
    //console.log(updateMovie)
  } catch (err) {
    console.error(err.message)
  }
})



//delete

app.delete("/watchlist/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const deleteMovie = await pool.query("DELETE FROM movie WHERE movie_id = $1", [id])

    res.json(" Movie Deleted !")

  } catch (err) {
    console.error(err.message)
    
  }
})







app.listen(3000, () => {
  console.log("server has started on port 3000")
});