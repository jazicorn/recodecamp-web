import chai from 'chai';
import chaiHttp from 'chai-http';
import app from '../index';

export const devURL = 'http://localhost:8000'

// Assertion
chai.should();
chai.use(chaiHttp);

describe('Index APIs', () => {
     describe("Test GET route /", () => {
        it("It should return 'Hello World!'", (done) => {
            chai.request(devURL)
                .get("/")
                .end((err, response) => {
                    response.should.have.status(200);
                    response.body.should.be.a('object');
                    response.body.should.have.property('data');
                    response.body.should.have.property('data').eq('Hello World!');
                done();
                });
        });
    });
});
