require('../spec.helper')

describe("RSP",() =>{
  let rsp = new RSP({
})

it('returns Correct your input if no game rules',() =>{
expect(rsp.check('')).to.eql("Correct your input")
})
it('returns if player_input eql to paper',() =>{
  expect(rsp.check('paper')).to.eql("player win") 
})
it('returns if player_input eql to rock', () => {
  expect(rsp.check('rock')).to.eql('Tie')
})
it('return if player_input eql to scissors', () => {
  expect(rsp.check('scissors')).to.eql('pc win')
})


})






























// describe('PC_Choice', () => {
//   let pc_Choice = new PC_Choice()
  
//   it('returns Rock if Math random < 0.333', () => {
//   expect(pc_Choice).to.eql(Math.random)
// });
// it('returns scissors if  Math random Less than 0.666',() =>{
// expect(pc_Choic).to.eql("scissors")
//  })
// it('returns  paper if  Math random Less than 1.000',() =>{
//  expect(PC_Choic).to.eql("paper")
//  })
// })