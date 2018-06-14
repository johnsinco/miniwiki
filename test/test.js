process.env.NODE_ENV = 'test';

//Require the dev-dependencies
let chai = require('chai');
let chaiHttp = require('chai-http');
let server = require('../app');
let should = chai.should();

chai.use(chaiHttp);
// test our article
describe('/GET Latest_plane_crash', () => {
  it('it should return the article', (done) => {
    chai.request(server)
    .get('/Latest_plane_crash')
    .end((err, res) => {
      res.should.have.status(200);
      res.should.be.html;
      done();
    });
  });
});
