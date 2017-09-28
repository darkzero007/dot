<template>
    <div class='row'>
        <h1>CRUD user</h1>
        <h4>Add New User</h4>
        <!-- Button trigger modal -->
        <button type="button" class="btn btn-primary" @click="showModal(false)">
          Create
        </button>
        <!-- Modal -->
        <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div class="modal-dialog" role="document">
            <div class="modal-content">
              <form action="#" @submit.prevent="manageUser()">
              <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel">Modal</h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div class="modal-body">
                    <div class="form-group">
                      <label for="exampleInputEmail1">Nama</label>
                      <input type="text" class="form-control" v-model="user.nama" name="nama" placeholder="masukkan nama">
                    </div>
                    <div class="form-group">
                      <label for="exampleInputEmail1">Alamat</label>
                      <input type="text" class="form-control" v-model="user.alamat" name="alamat" placeholder="masukkan alamat">
                    </div>
                    <div class="form-group">
                      <label for="exampleInputEmail1">No Telepon</label>
                      <input type="text" class="form-control" v-model="user.telepon" name="telepon" placeholder="masukkan no telepon">
                    </div>
              </div>
              <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                <button type="submit" class="btn btn-primary">Submit</button>
              </div>
              </form>
            </div>
          </div>
        </div>

        <h4>List User</h4>
        <ul class="list-group">
            <li v-if='list.length === 0'>Empty</li>
        </ul>
        <table class="table">
  <thead>
    <tr>
      <th>#</th>
      <th>Nama</th>
      <th>Alamat</th>
      <th>No Telepon</th>
      <th>Operasi</th>
    </tr>
  </thead>
  <tbody>
    <tr v-for="(user, index) in list">
      <th scope="row">{{ index + 1}}</th>
      <td>{{ user.nama }}</td>
      <td>{{ user.alamat }}</td>
      <td>{{ user.telepon }}</td>
      <td>
        <button @click="showModal(user.id)" class="btn btn-xs ">Edit</button>
        <button @click="deleteUser(user.id)" class="btn btn-danger btn-xs">Delete</button>
      </td>
    </tr>
  </tbody>
</table>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                list: [],
                user: {
                    id: '',
                    nama: '',
                    alamat:'',
                    telepon:''
                },
                edit: false
            };
        },

        created() {
            this.fetchUserList();
        },

        methods: {
            fetchUserList() {
                axios.get('api/user').then((res) => {
                    this.list = res.data;
                });
            },
            showModal(id){
              this.edit=id;
              if(this.edit){
                console.log('edit');
                console.log(this.edit);
                //get value
                this.getUserById(id);
                //then set value to form
                $('#exampleModal').modal('toggle');
              }
              else{
                console.log('insert');
                console.log(this.edit);
                this.user.nama = '';
                this.user.alamat = '';
                this.user.telepon = '';
                $('#exampleModal').modal('show');
              }
            },

            manageUser() {
              if(this.edit){
                axios.put('api/user/'+this.edit,this.user)
                    .then((res) => {
                        this.user.nama = '';
                        this.user.alamat = '';
                        this.user.telepon = '';
                        this.fetchUserList();
                        $('#exampleModal').modal('hide');
                    })
                    .catch((err) => console.error(err));
              }else{
                axios.post('api/user', this.user)
                  .then((res) => {
                    axios.post('http://dev.dot.co.id/smipoc/api/user', res.data)
                    console.log(res);
                        this.user.nama = '';
                        this.user.alamat = '';
                        this.user.telepon = '';
                        this.fetchUserList();
                        $('#exampleModal').modal('hide');
                    })
                    .catch((err) => console.error(err));
                }
              },

            deleteUser(id) {
              var result = confirm("Apakah anda yakin?");
              if (result) {
                axios.delete('api/user/' + id)
                    .then((res) => {
                        this.fetchUserList()
                    })
                    .catch((err) => console.error(err));
              }
            },
            getUserById(id) {
                axios.get('api/user/' + id)
                    .then((res) => {
                        this.user = res.data;
                    })
                    .catch((err) => console.error(err));
            },
        }
    }
</script>
</script>
