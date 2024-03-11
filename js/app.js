const app = Vue.createApp({
    data: function() {
        return {
            movieList: [
                {id: 1, name: 'Furious 7', year: 2015, director: 'James Wan', producer: 'Universal', genre: 'Action', qty: 3, img: 'https://m.media-amazon.com/images/I/81ClciXon2L._AC_UF894,1000_QL80_.jpg'},
                {id: 2, name: 'Star Trek', year: 2009, director: 'JJ Abrams', producer: 'Paramount', genre: 'Sci-Fi', qty: 5, img: 'https://m.media-amazon.com/images/I/615ZaopZp8L._AC_UF894,1000_QL80_.jpg'},
                {id: 3, name: 'Ted', year: 2012, director: 'Seth MacFarlane', producer: 'Universal', genre: 'Comedy', qty: 6, img: 'https://m.media-amazon.com/images/M/MV5BMTQ1OTU0ODcxMV5BMl5BanBnXkFtZTcwOTMxNTUwOA@@._V1_.jpg'},
            ],
        }
    },

    methods: {
        addMovie(newMovie){
            this.movieList.push(newMovie);
        },

        deleteMovie(movie) {
            console.log("deleteMovie in app");
            this.movieList.splice(this.movieList.indexOf(movie), 1);
        },
    },

    computed: {

    },

    created: function () {
        if(localStorage.getItem('movieList')){
            this.movieList = JSON.parse(localStorage.getItem('movieList'));
        }
    },

    watch: {
        movieList: {
            // call this every time a value changes in shoppingList
            handler(newList){
                localStorage.setItem('movieList', JSON.stringify(this.movieList));
            },
            // watch all of the nested properties as well
            deep: true,
        }
    }
});