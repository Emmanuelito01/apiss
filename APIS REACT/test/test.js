import * as chai from "chai";
const expect= chai.expect
import chaiHttp from "chai-http";
import app from '../index.js'
import faker from 'faker';


const c=chai.use(chaiHttp)

describe('GET /api/info',()=>{
    it('should GET all info',(done)=>{
        c.request(app).get('/api/info').end((err,res)=>{
            expect(err).to.be.null
            expect(res).to.have.status(200)
            expect(res.body).be.a('array')
            expect(res.body).not.have.lengthOf(0)
            done()
        })
    })
})

 describe('POST /api/info',()=>{
   it('should POST a new component',(done)=>{
    let test = {
        title: faker.lorem.paragraph(1),
        description: faker.lorem.paragraph(1),
        img: faker.image.sports(),
        leftColor: faker.internet.color(),
        rightColor: faker.internet.color(),
    };
   console.log(test)
  c.request(app)
        .post('/api/info')
        .send(test)
         .end((err,res)=>{
             expect(err).to.be.null
            expect(res).to.have.status(200)
            expect(res.body).be.a('object')
            expect(res.body).to.have.property('test')
        })
    done()           
   })
 })
 

// describe('GET /api/info/:id',()=>{
//     it('should GET all info por id',(done)=>{
//         chai.request(app)
//         .get('/api/info/1')
//         .end((err,res)=>{
//             expect(err).to.be.null
//             expect(res).to.have.status(200)
//             expect(res.body).be.a('array')
//             expect(res.body.enviar.id).to.equal(1)
//             done()
//         })
//     })
// })