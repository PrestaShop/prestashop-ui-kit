export const alerts = () => `
  <div class="alert alert-info" role="alert">
      <p class="alert-text">This is a info alert with <a href="#">an example link</a>. Click me to delete</p>
  </div>

  <div class="alert alert-success" role="alert">
      <p class="alert-text">This is a success alert with <a href="#">an example link</a>. Click me to delete</p>
  </div>

  <div class="alert medium-alert alert-warning" role="alert">
      <p class="alert-text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendis varius mauris tellus, et dapibus velit posuere in. Maecenas quis ipsum tellus. Praesent in hendrerit nunc imperdiet in. Ut id feugiat erat, sed semper lorem. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendis varius mauris tellus, et dapibus velit posuere in. Maecenas quis ipsum tellus. Praesent in hendrerit nunc imperdiet in. Ut id feugiat erat, sed semper lorem.
      </p>
  </div>

  <div class="alert alert-danger" role="alert">
      <p class="alert-text">This alert has bullet points</p>
      <ul>
          <li>One thing</li>
          <li>Another thing</li>
      </ul>
  </div>

  <div class="alert expandable-alert alert-warning" role="alert">
      <p class="alert-text">Alert with very long text. Closed by default...</p>
      <div class="alert-more collapse" id="collapseDanger">
          <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius mauris tellus,
              et dapibus velit posuere in. Maecenas quis ipsum tellus. Praesent maximus tristique enim, in
              hendrerit nunc imperdiet in.
          </p>
          <p>
              Vivamus nulla lectus, bibendum vel sodales ut, gravida quis turpis. Nunc neque neque, congue
              quis libero sit amet, mollis vulputate justo. Sed pretium mauris sed libero maximus
              volutpat. Quisque ultrices velit nec aliquet tincidunt.
          </p>
      </div>
      <div class="read-more-container">
          <button type="button" class="read-more btn-link" data-toggle="collapse" data-target="#collapseDanger" aria-expanded="false" aria-controls="collapseDanger">
              Read more
          </button>
      </div>
  </div>

  <div class="alert alert-success toast" role="alert">
      <p class="alert-text">This is a success alert with<a href="#" class="alert-action">Configure</a></p>

      <button type="button" class="close" data-dismiss="alert" aria-label="Close">
          <span aria-hidden="true"><i class="material-icons">close</i></span>
      </button>
  </div>

  <div class="alert alert-danger toast" role="alert">
      <p class="alert-text">This is a danger alert with<a href="#" class="alert-action">Configure</a></p>

      <button type="button" class="close" data-dismiss="alert" aria-label="Close">
          <span aria-hidden="true"><i class="material-icons">close</i></span>
      </button>
  </div>

  <div class="alert alert-warning toast" role="alert">
      <p class="alert-text">This is a warning alert with<a href="#" class="alert-action">Configure</a></p>

      <button type="button" class="close" data-dismiss="alert" aria-label="Close">
          <span aria-hidden="true"><i class="material-icons">close</i></span>
      </button>
  </div>

  <div class="alert alert-info toast" role="alert">
      <p class="alert-text">This is an info alert with<a href="#" class="alert-action">Configure</a></p>

      <button type="button" class="close" data-dismiss="alert" aria-label="Close">
          <span aria-hidden="true"><i class="material-icons">close</i></span>
      </button>
  </div>
`;

export default {
  title: 'HTML/Alerts',
  component: alerts
};
