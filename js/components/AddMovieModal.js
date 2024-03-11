app.component('AddMovieModal', {
    data() {
        return {
            newMovie: {
                id: Math.floor(Math.random() * 10e15),
                name: '',
                year: 2000,
                director: '',
                producer: '',
                genre: 'action',
                qty: 1,
                img: '',
            },
        }
    },

    props: {
        id: {
            type: String,
        },
    },

    emits: ['add-movie'],

    methods: {
        addMovie(e) {
            this.$emit('add-movie', this.newMovie)
            this.newMovie = {
                id: Math.floor(Math.random() * 10e15),
                name: '',
                year: 2000,
                director: '',
                producer: '',
                genre: 'action',
                qty: 1,
                img: '',
            }
        },
    },

    template: `
      <div class="modal fade" id="addMovieModal" tabindex="-1" role="dialog" aria-labelledby="modalTitle" aria-hidden="true">
        <div class="modal-dialog" role="document">
          <form @submit.prevent="addMovie">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title" id="modalTitle">Add Movie</h5>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div class="modal-body">
                <div class="mb-3">
                  <label for="name" class="form-label">Movie Name</label>
                  <input id="name" type="text" class="form-control" v-model="newMovie.name">
                </div>
                <div class="mb-3">
                  <label for="year" class="form-label">Year</label>
                  <input id="year" type="text" class="form-control" v-model="newMovie.year">
                </div>
                <div class="mb-3">
                  <label for="director" class="form-label">Director</label>
                  <input id="director" type="text" class="form-control" v-model="newMovie.director">
                </div>
                <div class="mb-3">
                  <label for="producer" class="form-label">Producer</label>
                  <input id="producer" type="text" class="form-control" v-model="newMovie.producer">
                </div>
                <div class="mb-3">
                  <label for="genre" class="form-label">Genre</label>
                  <select id="genre" class="form-select" v-model="newMovie.genre">
                    <option value="Action">Action</option>
                    <option value="Sci-Fi">Sci-Fi</option>
                    <option value="Horror">Horror</option>
                    <option value="Comedy">Comedy</option>
                    <option value="Romance">Romance</option>
                    <option value="Drama">Drama</option>
                  </select>
                </div>
                <div class="mb-3">
                  <label for="qty" class="form-label">Quantity</label>
                  <input id="qty" type="number" class="form-control" size="3" v-model="newMovie.qty">
                </div>
                <div class="mb-3">
                  <label for="img" class="form-label">Image URL</label>
                  <input id="img" type="text" class="form-control" v-model="newMovie.img">
                </div>
              </div>
              <div class="modal-footer">
                <button type="button" class="btn btn-danger" data-bs-dismiss="modal">Cancel</button>
                <button type="submit" class="btn btn-success" data-bs-dismiss="modal">Add</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    `
});