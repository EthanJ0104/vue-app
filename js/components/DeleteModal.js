app.component('DeleteModal', {
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

    emits: ['delete-movie'],

    methods: {
        deleteMovie() {
            this.$emit('delete-movie', this.movie)
        }
    },

    template: `
      <div class="modal fade" v-bind:id="'deleteModal' + instance" tabindex="-1" v-bind:aria-labelledby="'deleteModalLabel' + instance" aria-hidden="true">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h1 class="modal-title fs-5" v-bind:id="'deleteModalLabel' + instance">Delete Movie</h1>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
              Are you sure you want to delete this movie?
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-outline-secondary" data-bs-dismiss="modal">Cancel</button>
              <button type="button" class="btn btn-danger" data-bs-dismiss="modal" @click="deleteMovie">Delete</button>
            </div>
          </div>
        </div>
      </div>
    `
});