import sample1 from '../../../img/sample1.jpg';
import sample2 from '../../../img/sample2.jpg';
import sample3 from '../../../img/sample3.jpg';

export const images = () => `
  <div class="row">
      <div class="col col-sm-4">
          <img src="${sample1}" alt="..." class="img-thumbnail">
      </div>

      <div class="col col-sm-4">
          <figure class="figure">
              <img src="${sample2}" class="figure-img img-fluid" alt="A generic square placeholder image with rounded corners in a figure.">
              <figcaption class="figure-caption">A caption for the above image.</figcaption>
          </figure>
      </div>
      <div class="col col-sm-4">
          <figure class="figure">
              <img src="${sample3}" class="figure-img img-fluid rounded" alt="A generic square placeholder image with rounded corners in a figure.">
              <figcaption class="figure-caption">A caption for the above image.</figcaption>
          </figure>
      </div>
  </div>
`;

export default {
  title: 'HTML/Images',
  component: images
};
