app.component('MovieCard', {
    data() {
        return {
            uid: Math.floor(Math.random() * 10e15),
        }
    },

    props: {
        movie: {
            type: Object,
            required: true,
        },

        instance: {
            type: Number,
            required: true,
        },
    },

    methods: {

    },

    template: `
      <div class="col">
        <div class="card text-bg-primary">
          <img :src="movie.img" class="card-img-top" alt="...">
          <div class="card-body">
            <h5 class="card-title">{{ movie.name }}</h5>
            <p class="card-text">Year: {{ movie.year }}</p>
            <p class="card-text">Genre: {{ movie.genre }}</p>
            <p class="card-text">Quantity: {{ movie.qty }}</p>
            <p class="d-inline-flex gap-1">
              <button class="btn btn-secondary" type="button" data-bs-toggle="collapse" v-bind:data-bs-target="'#collapse' + instance" aria-expanded="false" v-bind:aria-controls="'collapse' + instance" style="padding-bottom: 10px;">
                <b>. . .</b>
              </button>
            </p>
            <div class="collapse" v-bind:id="'collapse' + instance">
              <div class="card card-body">
                <button class="btn btn-outline-success" type="button" data-bs-toggle="modal" v-bind:data-bs-target="'#detailModal' + instance" title="Edit Movie" style="margin-bottom: 5px">Movie Details</button>
                <button class="btn btn-outline-success" type="button" data-bs-toggle="modal" v-bind:data-bs-target="'#editModal' + instance" title="Edit Movie" style="margin-bottom: 5px">Edit Movie</button>
                <a class="btn btn-outline-danger" data-bs-toggle="modal" v-bind:data-bs-target="'#deleteModal' + instance">Delete</a>
              </div>
            </div>
          </div>
        </div>
        <detail-modal :movie="movie" :instance="instance"></detail-modal>
        <edit-modal :movie="movie" :instance="instance"></edit-modal>
        <delete-modal :movie="movie" :instance="instance" @delete-movie="(emittedMovie) => {$emit('delete-movie', emittedMovie)}"></delete-modal>
      </div>
    `
});