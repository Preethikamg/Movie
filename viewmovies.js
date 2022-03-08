import React,{Component} from 'react'
import axios from 'axios'
import './styles.css'

class ViewMovie extends Component{
  constructor(props){
    super(props)
    this.state={
        movieList:[]
    }
  }
  componentDidMount(){
    this.getMovies()
  }
  getMovies = () =>{
    axios.get('https://www.omdbapi.com/?apikey=33b27cf1&s=Guardians')
      .then(res =>
        this.setState({movieList:res.data.Search}))}
  render(){
    return(
      <div>
      
      <div className="cardlist__movies">
      <h1 className='title'>What to Watch</h1>

            {this.state.movieList.map(movie => (
                <div className="card" key={movie.Title}>
                    <img
                        className="movie__image"
                        src={movie.Poster}
                        alt="postal"
                    />
                    <div className="flex__card">
                        <p className="heading">{movie.Title}</p>
                        <p className="paragraph">{movie.Year}</p>
                        <br />
                    </div>
                </div>
            ))}
        </div>
      </div>
    )
  }
}

export default ViewMovie;