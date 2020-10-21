export const tables = () => `
  <h4>Basic</h4>
  <table class="table">
      <thead>
      <tr>
          <th>#</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Username</th>
      </tr>
      </thead>
      <tbody>
      <tr>
          <th scope="row">1</th>
          <td>Mark</td>
          <td class="active">Otto</td>
          <td>@mdo</td>
      </tr>
      <tr>
          <th scope="row">2</th>
          <td>Jacob</td>
          <td>Thornton</td>
          <td>@fat</td>
      </tr>
      <tr>
          <th scope="row">3</th>
          <td>Larry</td>
          <td>the Bird</td>
          <td>@twitter</td>
      </tr>
      </tbody>
  </table>

  <h4>Striped</h4>
  <table class="table table-striped">
      <thead>
      <tr>
          <th>#</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Username</th>
      </tr>
      </thead>
      <tbody>
      <tr>
          <th scope="row">1</th>
          <td>Mark</td>
          <td class="active">Otto</td>
          <td>@mdo</td>
      </tr>
      <tr>
          <th scope="row">2</th>
          <td>Jacob</td>
          <td>Thornton</td>
          <td>@fat</td>
      </tr>
      <tr>
          <th scope="row">3</th>
          <td>Larry</td>
          <td>the Bird</td>
          <td>@twitter</td>
      </tr>
      </tbody>
  </table>

  <br>

  <h4>Bordered</h4>
  <table class="table table-bordered">
      <thead>
      <tr>
          <th>#</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Username</th>
      </tr>
      </thead>
      <tbody>
      <tr>
          <th scope="row">1</th>
          <td>Mark</td>
          <td class="active">Otto</td>
          <td>@mdo</td>
      </tr>
      <tr>
          <th scope="row">3</th>
          <td>Jacob</td>
          <td>Thornton</td>
          <td>@fat</td>
      </tr>
      <tr>
          <th scope="row">3</th>
          <td>Larry</td>
          <td>the Bird</td>
          <td>@twitter</td>
      </tr>
      </tbody>
  </table>

  <br>

  <h4>Hoverable</h4>

  <table class="table table-hover">
      <thead>
      <tr>
          <th>#</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Username</th>
      </tr>
      </thead>
      <tbody>
      <tr>
          <th scope="row">1</th>
          <td>Mark</td>
          <td class="active">Otto</td>
          <td>@mdo</td>
      </tr>
      <tr>
          <th scope="row">2</th>
          <td>Jacob</td>
          <td>Thornton</td>
          <td>@fat</td>
      </tr>
      <tr>
          <th scope="row">3</th>
          <td>Larry</td>
          <td>the Bird</td>
          <td>@twitter</td>
      </tr>
      </tbody>
  </table>

  <br>

  <h4>With Form</h4>
  <table class="table table-form">
      <thead>
      <tr>
          <th></th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Username</th>
          <th>Input text</th>
      </tr>
      </thead>
      <tbody>
      <tr>
          <td class="form-group">
              <div class="md-checkbox md-checkbox-inline">
                  <label>
                      <input type="checkbox" name="checkbox[]">
                      <i class="md-checkbox-control"></i>
                  </label>
              </div>
          </td>
          <td>Mark</td>
          <td class="active">Otto</td>
          <td>@mdo</td>
          <td><input type="text" class="form-control" name="input[]"></td>
      </tr>
      <tr>
          <td class="form-group">
              <div class="md-checkbox md-checkbox-inline">
                  <label>
                      <input type="checkbox" name="checkbox[]">
                      <i class="md-checkbox-control"></i>
                  </label>
              </div>
          </td>
          <td>Jacob</td>
          <td>Thornton</td>
          <td>@fat</td>
          <td><input type="text" class="form-control" name="input[]"></td>
      </tr>
      <tr>
          <td class="form-group">
              <div class="md-checkbox md-checkbox-inline">
                  <label>
                      <input type="checkbox" name="checkbox[]">
                      <i class="md-checkbox-control"></i>
                  </label>
              </div>
          </td>
          <td>Larry</td>
          <td>the Bird</td>
          <td>@twitter</td>
          <td><input type="text" class="form-control" name="input[]"></td>
      </tr>
      </tbody>
  </table>

  <br>

  <h4>With Filters</h4>
  <table class="table">
      <thead class="with-filters">
      <tr class="column-headers">
          <th></th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Username</th>
      </tr>
      <tr class="column-filters">
          <td></td>
          <th><input type="text" class="form-control" placeholder="Search first name" name="search_first_name" value=""></th>
          <th><input type="text" class="form-control" placeholder="Search last name" name="search_last_name" value=""></th>
          <th><input type="text" class="form-control" placeholder="Search username" name="search_user_name" value=""></th>
      </tr>
      </thead>
      <tbody>
      <tr>
          <td class="form-group">
              <div class="md-checkbox md-checkbox-inline">
                  <label>
                      <input type="checkbox" name="checkbox[]" checked>
                      <i class="md-checkbox-control"></i>
                  </label>
              </div>
          </td>
          <td>Mark</td>
          <td class="active">Otto</td>
          <td>@mdo</td>
      </tr>
      <tr>
          <td class="form-group">
              <div class="md-checkbox md-checkbox-inline">
                  <label>
                      <input type="checkbox" name="checkbox[]" checked disabled>
                      <i class="md-checkbox-control"></i>
                  </label>
              </div>
          </td>
          <td>Jacob</td>
          <td>Thornton</td>
          <td>@fat</td>
      </tr>
      <tr>
          <td class="form-group">
              <div class="md-checkbox md-checkbox-inline">
                  <label>
                      <input type="checkbox" name="checkbox[]">
                      <i class="md-checkbox-control"></i>
                  </label>
              </div>
          </td>
          <td>Larry</td>
          <td>the Bird</td>
          <td>@twitter</td>
      </tr>
      </tbody>
  </table>

  <br>

  <h4>Sortable</h4>
  <table class="table">
      <thead>
      <tr>
          <th scope="col">
              <div class="ps-sortable-column" data-sort-col-name="id" data-sort-is-current="true" data-sort-direction="desc">
                  <span role="columnheader">ID</span>
                  <span role="button" class="ps-sort" aria-label="Sort"></span>
              </div>
          </th>
          <th scope="col">
              <div class="ps-sortable-column">
                  <span role="columnheader">First Name</span>
                  <span role="button" class="ps-sort" aria-label="Sort"></span>
              </div>
          </th>
          <th scope="col">
              <div class="ps-sortable-column">
                  <span role="columnheader">Last Name</span>
                  <span role="button" class="ps-sort" aria-label="Sort"></span>
              </div>
          </th>
          <th scope="col">
              <div class="ps-sortable-column">
                  <span role="columnheader">Username</span>
                  <span role="button" class="ps-sort" aria-label="Sort"></span>
              </div>
          </th>
      </tr>
      </thead>
      <tbody>
      <tr>
          <td>1</td>
          <td>Mark</td>
          <td class="active">Otto</td>
          <td>@mdo</td>
      </tr>
      <tr>
          <td>2</td>
          <td>Jacob</td>
          <td>Thornton</td>
          <td>@fat</td>
      </tr>
      <tr>
          <td>3</td>
          <td>Larry</td>
          <td>the Bird</td>
          <td>@twitter</td>
      </tr>
      </tbody>
  </table>

  <br>

  <h4>Dark</h4>

  <table class="table table-dark">
      <thead>
      <tr>
          <th>#</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Username</th>
      </tr>
      </thead>
      <tbody>
      <tr>
          <th scope="row">1</th>
          <td>Mark</td>
          <td class="active">Otto</td>
          <td>@mdo</td>
      </tr>
      <tr>
          <th scope="row">2</th>
          <td>Jacob</td>
          <td>Thornton</td>
          <td>@fat</td>
      </tr>
      <tr>
          <th scope="row">3</th>
          <td>Larry</td>
          <td>the Bird</td>
          <td>@twitter</td>
      </tr>
      </tbody>
  </table>

  <br>

  <h4>Dark with head</h4>
  <table class="table table-dark">
      <thead class="thead-dark">
      <tr>
          <th>#</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Username</th>
      </tr>
      </thead>
      <tbody>
      <tr>
          <th scope="row">1</th>
          <td>Mark</td>
          <td class="active">Otto</td>
          <td>@mdo</td>
      </tr>
      <tr>
          <th scope="row">2</th>
          <td>Jacob</td>
          <td>Thornton</td>
          <td>@fat</td>
      </tr>
      <tr>
          <th scope="row">3</th>
          <td>Larry</td>
          <td>the Bird</td>
          <td>@twitter</td>
      </tr>
      </tbody>
  </table>

  <br>

  <h4>Dark striped</h4>

  <table class="table table-striped table-dark">
      <thead>
      <tr>
          <th>#</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Username</th>
      </tr>
      </thead>
      <tbody>
      <tr>
          <th scope="row">1</th>
          <td>Mark</td>
          <td class="active">Otto</td>
          <td>@mdo</td>
      </tr>
      <tr>
          <th scope="row">2</th>
          <td>Jacob</td>
          <td>Thornton</td>
          <td>@fat</td>
      </tr>
      <tr>
          <th scope="row">3</th>
          <td>Larry</td>
          <td>the Bird</td>
          <td>@twitter</td>
      </tr>
      </tbody>
  </table>

  <br>

  <h4>Dark bordered</h4>

  <table class="table table-bordered table-dark">
      <thead>
      <tr>
          <th>#</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Username</th>
      </tr>
      </thead>
      <tbody>
      <tr>
          <th scope="row">1</th>
          <td>Mark</td>
          <td class="active">Otto</td>
          <td>@mdo</td>
      </tr>
      <tr>
          <th scope="row">3</th>
          <td>Jacob</td>
          <td>Thornton</td>
          <td>@fat</td>
      </tr>
      <tr>
          <th scope="row">3</th>
          <td>Larry</td>
          <td>the Bird</td>
          <td>@twitter</td>
      </tr>
      </tbody>
  </table>

  <br>

  <h4>Dark hoverable</h4>

  <table class="table table-hover table-dark">
      <thead>
      <tr>
          <th>#</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Username</th>
      </tr>
      </thead>
      <tbody>
      <tr>
          <th scope="row">1</th>
          <td>Mark</td>
          <td class="active">Otto</td>
          <td>@mdo</td>
      </tr>
      <tr>
          <th scope="row">2</th>
          <td>Jacob</td>
          <td>Thornton</td>
          <td>@fat</td>
      </tr>
      <tr>
          <th scope="row">3</th>
          <td>Larry</td>
          <td>the Bird</td>
          <td>@twitter</td>
      </tr>
      </tbody>
  </table>

  <br>

  <h4>Bootstrap</h4>

  <table class="table table-hover">
      <thead>
      <tr>
          <th>#</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Username</th>
      </tr>
      </thead>
      <tbody>
      <tr class="table-active">
          <th scope="row">1</th>
          <td>Mark</td>
          <td>Otto</td>
          <td>@mdo</td>
      </tr>
      <tr class="table-secondary">
          <th scope="row">2</th>
          <td>Jacob</td>
          <td>Thornton</td>
          <td>@fat</td>
      </tr>
      <tr class="table-success">
          <th scope="row">3</th>
          <td>Larry</td>
          <td>the Bird</td>
          <td>@twitter</td>
      </tr>
      <tr class="table-danger">
          <th scope="row">3</th>
          <td>Maxime</td>
          <td>de Biloe</td>
          <td>@mbiloe</td>
      </tr>
      <tr class="table-warning">
          <th scope="row">3</th>
          <td>Thomas</td>
          <td>de Nabord</td>
          <td>@quezalcot</td>
      </tr>
      </tbody>
  </table>

  <br>

  <table class="table table-dark table-hover">
      <thead>
      <tr>
          <th>#</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Username</th>
      </tr>
      </thead>
      <tbody>
      <tr class="table-active">
          <th scope="row">1</th>
          <td>Mark</td>
          <td>Otto</td>
          <td>@mdo</td>
      </tr>
      <tr class="table-secondary">
          <th scope="row">2</th>
          <td>Jacob</td>
          <td>Thornton</td>
          <td>@fat</td>
      </tr>
      <tr class="table-success">
          <th scope="row">3</th>
          <td>Larry</td>
          <td>the Bird</td>
          <td>@twitter</td>
      </tr>
      <tr class="table-danger">
          <th scope="row">3</th>
          <td>Maxime</td>
          <td>de Biloe</td>
          <td>@mbiloe</td>
      </tr>
      <tr class="table-warning">
          <th scope="row">3</th>
          <td>Thomas</td>
          <td>de Nabord</td>
          <td>@quezalcot</td>
      </tr>
      </tbody>
  </table>
`;

export default {
  title: 'HTML/Tables',
  component: tables
};
