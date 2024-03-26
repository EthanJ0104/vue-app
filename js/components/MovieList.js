app.component('MovieList', {
    props: {
        movies: {
            type: Array,
            required: true,
        },
    },

    emits: ['delete-movie'],

    methods: {

    },

    template: `
      <div class="container">
        <div class="row row-cols-1 row-cols-md-4 g-4">
            <movie-card v-for="(movie, i) in movies" :key="movie.id" :movie="movie" :instance="i" @delete-movie="(emittedMovie) => {$emit('delete-movie', emittedMovie)}"></movie-card>
        </div>
      </div>
    `
});