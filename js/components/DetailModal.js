app.component('DetailModal', {
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
        <div class="modal fade" v-bind:id="'detailModal' + instance" tabindex="-1" role="dialog" aria-labelledby="modalTitle" aria-hidden="true">
            <div class="modal-dialog" role="document">
                <form>
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="modalTitle1">{{movie.name}}</h5>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                            <div class="mb-3">
                                <p><b>Year: </b> {{movie.year}}</p>
                            </div>
                            <div class="mb-3">
                                <p><b>Director: </b> {{movie.director}}</p>
                            </div>
                            <div class="mb-3">
                                <p><b>Producer: </b> {{ movie.producer }}</p>
                            </div>
                            <div class="mb-3">
                                <p><b>Genre: </b> {{ movie.genre }}</p>
                            </div>
                            <div class="mb-3">
                              <p><b>Rating: </b> {{ movie.rating }}</p>
                            </div>
                            <div class="mb-3">
                                <p><b>Quantity: </b> {{ movie.qty }}</p>
                            </div>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-danger" data-bs-dismiss="modal">Exit</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    `
});