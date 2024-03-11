app.component('EditModal', {
    props: {
        movie: {
            type: Object,
            required: true,
        },
        instance: {
            type: Number,
            required: true,
        }
    },

    template: `
      <div class="modal fade" v-bind:id="'editModal' + instance" tabindex="-1" role="dialog" aria-labelledby="modalTitle" aria-hidden="true">
        <div class="modal-dialog" role="document">
          <form @submit.prevent>
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title" id="modalTitle1">Edit: {{movie.name}}</h5>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div class="modal-body">
                <div class="mb-3">
                  <label v-bind:for="'name' + instance" class="form-label">Movie Name</label>
                  <input v-bind:id="'name' + instance" type="text" :value="movie.name" class="form-control" v-model="movie.name">
                </div>
                <div class="mb-3">
                  <label v-bind:for="'year' + instance" class="form-label">Year</label>
                  <input v-bind:id="'year' + instance" type="text" :value="movie.year" class="form-control" v-model="movie.year">
                </div>
                <div class="mb-3">
                  <label v-bind:for="'director' + instance" class="form-label">Director</label>
                  <input v-bind:id="'director' + instance" type="text" :value="movie.director" class="form-control" v-model="movie.director">
                </div>
                <div class="mb-3">
                  <label v-bind:for="'producer' + instance" class="form-label">Producer</label>
                  <input v-bind:id="'producer' + instance" type="text" :value="movie.producer" class="form-control" v-model="movie.producer">
                </div>
                <div class="mb-3">
                  <label v-bind:for="'genre' + instance" class="form-label">Genre</label>
                  <select v-bind:id="'genre' + instance" :value="movie.genre" class="form-select" v-model="movie.genre">
                    <option value="Action">Action</option>
                    <option value="sci-Fi">Sci-Fi</option>
                    <option value="Horror">Horror</option>
                    <option value="Comedy">Comedy</option>
                    <option value="Romance">Romance</option>
                    <option value="Drama">Drama</option>
                  </select>
                </div>
                <div class="mb-3">
                  <label v-bind:for="'qty' + instance" class="form-label">Quantity</label>
                  <input v-bind:id="'qty' + instance" type="number" :value="movie.qty" class="form-control" size="3" v-model="movie.qty">
                </div>
                <div class="mb-3">
                  <label v-bind:for="'img' + instance" class="form-label">Image URL</label>
                  <input v-bind:id="'img' + instance" type="text" :value="movie.img" class="form-control" v-model="movie.img">
                </div>
              </div>
              <div class="modal-footer">
                <button type="button" class="btn btn-danger" data-bs-dismiss="modal">Cancel</button>
                <button type="submit" class="btn btn-success" data-bs-dismiss="modal">Save</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    `
});