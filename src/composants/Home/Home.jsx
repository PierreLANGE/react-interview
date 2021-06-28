import React, { PureComponent } from 'react';

import Button from 'react-bootstrap/Button';

import Movie from '../Movie/Movie';
import { movies$ } from '../../movies';
import Pagination from '../Pagination';

class Home extends PureComponent { 
  constructor(props) {
    super(props);

    this.state = {
      hasError: false,
      movies: [],
      categories: [],
      categoryFilter: null,
      currentPage:0,
      currentCount: 0,
      oldMovie: null,
      oldMovieValue:null
    };

    this.handleDeleteCard = this.handleDeleteCard.bind(this);
    this.onCategorieFilter = this.onCategorieFilter.bind(this);
    this.onPageBack = this.onPageBack.bind(this);
    this.onPageNext = this.onPageNext.bind(this);
    this.onSelectPerPage = this.onSelectPerPage.bind(this);
    this.getMoviesFiltered = this.getMoviesFiltered.bind(this); 
    
  }

  componentWillMount = () => {

    const processDataAsycn = async () => {  
      return movies$;  
    };

    processDataAsycn().then(result => {
      console.log('result:', result);
      
      let categories = result.map(movie => movie.category);
      categories = Array.from(new Set(categories));
      
      this.setState({
        movies: result,
        currentCount:result.length,
        categories: categories
      });
      
    }, function(error) {
      this.setState({
        hasError: true,
      });
    });

  }

  componentDidMount = () => {
    console.log('Home mounted');
  }

  componentWillReceiveProps = (nextProps) => {
    console.log('Home will receive props', nextProps);
  }

  componentWillUpdate = (nextProps, nextState) => {
    console.log('Home will update', nextProps, nextState);
  }

  componentDidUpdate = () => {
    console.log('Home did update');
  }

  componentWillUnmount = () => {
    console.log('Home will unmount');
  }

  handleDeleteCard = (deletedMovie) => {

    const array = this.state.movies;
    
    let newArray  = array.filter(movie => movie.id !== deletedMovie.id);

    let categories = newArray.map(movie => movie.category);
    categories = Array.from(new Set(categories));

    this.setState({
      movies: newArray,
      categories: categories
    });
  };

  onPageBack = () => {
    this.setState({
      currentPage: Math.max(
        this.state.currentPage - 1,
        0
      )
    });
  };

  onPageNext = () => {
    this.setState({
      currentPage: Math.min(
        this.state.currentPage + 1,
        this.state.movies.length / this.state.currentPage
      )
    });
  };

  onCategorieFilter = (e) => {
    
    let categoryFilter = e.target.options[e.target.selectedIndex].value;

    if (categoryFilter === "Choisissez votre categorie"){
      categoryFilter = null;
    }

    this.setState({
      categoryFilter: categoryFilter
    });
  }

  onSelectPerPage = (e) => {
    
    let currentCount = e.target.options[e.target.selectedIndex].value;
    this.setState({
      currentCount: currentCount
    });

  }

  getMoviesFiltered = ()=>{
    let moviesFromCategoryFilter =
    this.state.categoryFilter !== null
      ? this.state.movies.filter(movie => movie.category === this.state.categoryFilter)
      : this.state.movies;

      const min = this.state.currentCount * this.state.currentPage;
      const max = this.state.currentCount * (this.state.currentPage + 1);

      moviesFromCategoryFilter = moviesFromCategoryFilter.slice(min, max);

      return moviesFromCategoryFilter;
  }

  handleDislike = (movieDisliked,value)=>{
    const array = this.state.movies;
    
    let newArray  = array.map(movie => {

      if (movie.id === movieDisliked.id) {
        movie.dislikes += value;
        return movie;
      } else {
        return movie;
      }
    });

    this.setState({
      movies: newArray
    });
  }

  handleLike = (movieLiked,value)=>{

    const array = this.state.movies;
    
    let newArray  = array.map(movie => {
      if (movie.id === movieLiked.id) {
        movie.likes += value;
        return movie;
      } else {
        return movie;
      }
    });

    this.setState({
      movies: newArray
    });
  }

  handleToggleDislike = (movie,type)=>{
    switch (type) {
      case 'like':
        if(this.state.oldMovie === movie){
          if(this.state.oldMovieValue === type){
            this.handleLike(movie,-1);
            this.setState({
              oldMovie:null,
              oldMovieValue:null
            });
          }else{
            this.handleDislike(movie,-1);
            this.handleLike(movie,1);
            this.setState({
              oldMovie:movie,
              oldMovieValue:type
            });
          }
        }else{
          this.handleLike(movie,1);
          this.setState({
            oldMovie:movie,
            oldMovieValue:type
          });
        }
        break;

      case 'dislike':
        if(this.state.oldMovie === movie){
          if(this.state.oldMovieValue === type){
            this.handleDislike(movie,-1);
            this.setState({
              oldMovie:null,
              oldMovieValue:null
            });
          }else{
            this.handleLike(movie,-1);
            this.handleDislike(movie,1);
            this.setState({
              oldMovie:movie,
              oldMovieValue:type
            });
          }
        }else{
          this.handleDislike(movie,1);
          this.setState({
            oldMovie:movie,
            oldMovieValue:type
          });
        }
          break;
    
      default:
        break;
    }
  }

  render () {
    if (this.state.hasError) {
      return <h1>Something went wrong.</h1>;
    }

    return (

      <div className="container" >
        <div className="row">
            <div className="HomeWrapper d-inline">
          {this.state.movies && this.getMoviesFiltered().map((movie,index) => {
            return (
                        
              <Movie
                key={index}
                index={index}
                movie={movie}
                handleDeleteCard={this.handleDeleteCard}
                handleToggleDislike={this.handleToggleDislike}
              />

                );
            })}
            </div>
            <Pagination
            categories={this.state.categories}
            onCategorieFilter={this.onCategorieFilter}
            onPageBack={this.onPageBack}
            onPageNext={this.onPageNext}
            onSelectPerPage={this.onSelectPerPage}
            />
        </div>
      </div>
    );
  }
}
export default Home;
